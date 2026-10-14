'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const store = new Map();
const localStorage = {
  getItem(key) { return store.has(key) ? store.get(key) : null; },
  setItem(key, value) { store.set(key, String(value)); },
  removeItem(key) { store.delete(key); }
};
function loadInto(context, relative) {
  vm.runInContext(fs.readFileSync(path.join(root, relative), 'utf8'), context, { filename: relative });
}
function createContext(storage = localStorage) {
  const context = { window: { localStorage: storage }, console, setTimeout, clearTimeout, Date };
  vm.createContext(context);
  for (const file of fs.readdirSync(path.join(root, 'data')).filter(name => name.endsWith('.js'))) loadInto(context, `data/${file}`);
  for (const file of ['js/util.js', 'js/curriculum.js', 'js/checks.js', 'js/state.js']) loadInto(context, file);
  return context;
}
const assert = (condition, message) => { if (!condition) throw new Error(message); };
function correctValue(exercise) {
  if (['multiple-choice', 'code-reading'].includes(exercise.type)) return exercise.answer;
  if (['predict-output', 'fill-code'].includes(exercise.type)) return exercise.accepted[0];
  if (exercise.type === 'ordering') return exercise.answerOrder.slice();
  return exercise.solution;
}
function wrongValue(exercise) {
  if (['multiple-choice', 'code-reading'].includes(exercise.type)) return exercise.options.find(option => option.id !== exercise.answer).id;
  if (['predict-output', 'fill-code'].includes(exercise.type)) return '__resposta_incorreta__';
  if (exercise.type === 'ordering') return exercise.answerOrder.slice().reverse();
  return '// resposta incorreta';
}
function submit(LC, lesson, exercise, correct) {
  const value = correct ? correctValue(exercise) : wrongValue(exercise);
  const result = LC.checks.evaluate(exercise, value);
  assert(result.correct === correct, `${exercise.id}: valor de teste ${correct ? 'correto' : 'incorreto'} não foi interpretado como esperado.`);
  return LC.state.recordAnswer('html', lesson.id, exercise, value, result);
}

const context = createContext();
const LC = context.window.LordCode;
const lessons = LC.curriculum.getCourseLessons('html');
const first = lessons[0];
const second = lessons[1];
assert(LC.curriculum.counts.courses === 4 && LC.curriculum.counts.lessons === 40 && LC.curriculum.counts.exercises === 200, 'O currículo deve ter 4 trilhas, 40 aulas e 200 exercícios.');
assert(LC.curriculum.getAllLessons().every(lesson => lesson.exercises.length >= 5), 'Cada aula deve ter pelo menos cinco exercícios.');
assert(LC.state.lessonStatus('html', first.id) === 'available', 'A primeira aula deve estar disponível.');
assert(LC.state.lessonStatus('html', second.id) === 'locked', 'A segunda aula deve iniciar bloqueada.');
assert(LC.state.startLesson('html', first.id), 'A primeira aula deve poder ser iniciada.');
assert(LC.state.getLessonScore('html', first).requiredCorrect === 3, 'O mínimo de acertos deve ser três em cinco.');

// Zero acertos não deve concluir nem desbloquear a aula seguinte.
first.exercises.forEach(exercise => submit(LC, first, exercise, false));
let score = LC.state.getLessonScore('html', first);
assert(score.complete && score.answered === 5 && score.correct === 0 && score.percent === 0 && !score.passed, 'Uma tentativa com 0% deve ser finalizada, mas reprovada.');
assert(!LC.state.canComplete('html', first), 'Uma tentativa com 0% não pode avançar.');
const rejected = LC.state.completeLesson('html', first);
assert(!rejected.ok && rejected.reason === 'score', 'O estado deve recusar conclusão com menos de 60%.');
assert(!LC.state.isCompleted('html', first.id), 'A aula com 0% não pode constar como concluída.');
assert(LC.state.lessonStatus('html', second.id) === 'locked', 'A segunda aula permanece bloqueada após 0%.');

// Repetir limpa somente a tentativa desta aula.
const xpBeforeRetry = LC.state.getTotalStats().xp;
assert(LC.state.resetLessonAttempt('html', first), 'Deve ser possível reiniciar a tentativa falhada.');
assert(first.exercises.every(exercise => LC.state.getAnswer('html', exercise.id) === null), 'Refazer deve limpar as respostas anteriores da aula.');
assert(LC.state.getTotalStats().xp === xpBeforeRetry, 'Reiniciar a tentativa não altera XP.');

// Exatamente três acertos em cinco (60%) devem liberar a etapa seguinte.
first.exercises.forEach((exercise, index) => submit(LC, first, exercise, index < 3));
score = LC.state.getLessonScore('html', first);
assert(score.correct === 3 && score.percent === 60 && score.complete && score.passed, 'Três acertos em cinco devem atingir 60% e aprovar.');
assert(LC.state.canComplete('html', first), 'A aula pode ser concluída com 60%.');
const completion = LC.state.completeLesson('html', first);
assert(completion.ok && completion.reward === 20, 'A conclusão aprovada concede o XP da aula.');
assert(LC.state.isCompleted('html', first.id), 'A aprovação deve marcar a aula como concluída.');
assert(LC.state.lessonStatus('html', second.id) === 'available', 'A aprovação deve liberar a próxima aula.');
const xpAfterPass = LC.state.getTotalStats().xp;
const repeated = LC.state.completeLesson('html', first);
assert(repeated.ok && repeated.already, 'Concluir de novo não repete a recompensa da aula.');
assert(LC.state.getTotalStats().xp === xpAfterPass, 'A conclusão repetida não duplica XP.');

// Uma aula concluída também pode ser refeita; uma revisão falhada mantém a aprovação histórica.
assert(LC.state.resetLessonAttempt('html', first), 'Uma aula concluída também deve poder ser refeita.');
assert(LC.state.isReviewing('html', first.id), 'A nova tentativa deve ser identificada como revisão.');
assert(LC.state.lessonStatus('html', first.id) === 'completed', 'A trilha deve preservar o estado Concluída durante uma nova tentativa.');
assert(LC.state.isCompleted('html', first.id), 'A revisão não apaga a aprovação anterior da trilha.');
first.exercises.forEach((exercise, index) => submit(LC, first, exercise, index < 3));
score = LC.state.getLessonScore('html', first);
assert(score.percent === 60 && score.passed, 'A nova tentativa deve calcular novamente o aproveitamento.');
const reviewCompletion = LC.state.completeLesson('html', first);
assert(reviewCompletion.ok && reviewCompletion.already, 'Uma revisão aprovada não concede XP de conclusão novamente.');
assert(!LC.state.isReviewing('html', first.id), 'A revisão aprovada deve encerrar seu estado de revisão.');
assert(LC.state.getTotalStats().xp === xpAfterPass, 'Acertos repetidos não podem duplicar XP.');

// Uma revisão em andamento deve sobreviver a recarga sem invalidar a conclusão anterior.
assert(LC.state.resetLessonAttempt('html', first), 'A aula concluída deve iniciar outra revisão.');
submit(LC, first, first.exercises[0], false);
const restoredReview = createContext().window.LordCode;
assert(restoredReview.state.isCompleted('html', first.id), 'A aprovação histórica deve permanecer após recarga durante revisão.');
assert(restoredReview.state.isReviewing('html', first.id), 'O estado de revisão deve persistir após recarga.');
assert(restoredReview.state.getLessonScore('html', first).percent === 0, 'O percentual da revisão deve refletir somente a tentativa atual.');

// Progresso e resposta única permanecem salvos.
const recordBeforeMutation = restoredReview.state.getAnswer('html', first.exercises[0].id);
assert(recordBeforeMutation.submitted && !recordBeforeMutation.correct, 'A resposta errada deve estar registrada.');
assert(restoredReview.state.saveDraftAnswer('html', first.exercises[0].id, first.exercises[0].answer) === false, 'Uma resposta enviada não pode ser alterada.');
assert(restoredReview.state.getAnswer('html', first.exercises[0].id).value === recordBeforeMutation.value, 'O valor enviado deve continuar imutável.');
const saved = JSON.parse(store.get('lordcode:v1'));
assert(saved.version === 3, 'Os dados devem usar o formato de armazenamento versão 3.');

// Testa migração: um curso antigo com uma aula marcada como concluída e 0% deve ser corrigido.
const oldAnswers = {};
for (const exercise of first.exercises) {
  const value = wrongValue(exercise);
  oldAnswers[exercise.id] = { attempts: 1, submitted: true, correct: false, lastCorrect: false, value, draftAnswer: value, feedback: 'Incorreto.' };
}
store.set('lordcode:v1', JSON.stringify({ version: 2, activeCourse: 'html', courses: { html: { started: [first.id], completed: [first.id], reviewing: [], answers: oldAnswers } }, attempts: 5, xp: 12, achievements: { 'first-lesson': { date: '2026-10-01' } }, activity: [], prefs: {} }));
const migrated = createContext().window.LordCode;
assert(!migrated.state.isCompleted('html', first.id), 'Migração deve remover conclusão antiga com 0%.');
assert(first.exercises.every(exercise => migrated.state.getAnswer('html', exercise.id) === null), 'Migração deve limpar as respostas da aula antiga inválida para permitir refazê-la.');
assert(migrated.state.lessonStatus('html', second.id) === 'locked', 'Migração deve manter a aula seguinte bloqueada até aprovação.');
assert(migrated.state.getTotalStats().xp === 12, 'Migração deve preservar o XP existente.');
assert(!migrated.state.hasAchievement('first-lesson'), 'Migração deve remover a conquista de conclusão inválida.');

// Uma conclusão antiga genuína (100% nas duas questões da versão anterior) é preservada
// para não apagar progresso legítimo, mas aparece como revisão até as cinco questões atuais.
const validLegacyAnswers = {};
first.exercises.slice(0, 2).forEach(exercise => {
  const value = correctValue(exercise);
  validLegacyAnswers[exercise.id] = { attempts: 1, submitted: true, correct: true, lastCorrect: true, value, draftAnswer: value, feedback: 'Correto.' };
});
store.set('lordcode:v1', JSON.stringify({ version: 2, activeCourse: 'html', courses: { html: { started: [first.id], completed: [first.id], reviewing: [], answers: validLegacyAnswers } }, attempts: 2, xp: 10, achievements: { 'first-lesson': { date: '2026-10-01' } }, activity: [], prefs: {} }));
const validMigrated = createContext().window.LordCode;
assert(validMigrated.state.isCompleted('html', first.id), 'Migração preserva uma conclusão legítima da versão anterior.');
assert(validMigrated.state.isReviewing('html', first.id), 'A aula migrada exige revisão dos novos exercícios.');
assert(validMigrated.state.lessonStatus('html', first.id) === 'completed', 'A trilha mantém o aspecto concluído durante a revisão migrada.');
assert(validMigrated.state.getLessonScore('html', first).percent === 40, 'A revisão calcula a pontuação atual com todas as cinco questões.');

migrated.state.reset();
assert(!migrated.state.isCompleted('html', first.id) && migrated.state.getTotalStats().xp === 0, 'Reiniciar deve limpar o progresso e XP.');

// Histórico isolado: a maior porcentagem e o menor tempo são preservados.
const historyValues = new Map();
const historyStorage = {
  getItem(key) { return historyValues.has(key) ? historyValues.get(key) : null; },
  setItem(key, value) { historyValues.set(key, String(value)); },
  removeItem(key) { historyValues.delete(key); }
};
const historyLC = createContext(historyStorage).window.LordCode;
assert(historyLC.state.recordLessonBestScore('html', first.id, 80) === 80, 'A primeira marca deve ser registrada.');
assert(historyLC.state.recordLessonBestScore('html', first.id, 20) === 80, 'Uma revisão mais baixa não pode substituir a melhor porcentagem.');
assert(historyLC.state.recordLessonBestScore('html', first.id, 100) === 100, 'Uma porcentagem maior deve atualizar a marca principal.');
assert(historyLC.state.recordLessonTime('html', first.id, 75), 'O primeiro tempo deve ser salvo.');
assert(historyLC.state.recordLessonTime('html', first.id, 240), 'A tentativa mais lenta não deve quebrar o registro.');
assert(historyLC.state.getLessonBestTime('html', first.id) === 75, 'Uma tentativa mais lenta não deve substituir o melhor tempo.');
assert(historyLC.state.recordLessonTime('html', first.id, 60), 'Uma tentativa mais rápida deve ser registrada.');
const restoredHistory = createContext(historyStorage).window.LordCode;
assert(restoredHistory.state.getLessonBestScore('html', first.id) === 100, 'A melhor porcentagem deve persistir após recarregar o estado.');
assert(restoredHistory.state.getLessonBestTime('html', first.id) === 60, 'O melhor tempo deve persistir após recarregar o estado.');
console.log('Testes de estado concluídos: mínimo 60%, repetição e revisão, melhor porcentagem persistente, melhor tempo persistente, resposta única, XP sem duplicação, persistência e migração de progresso antigo.');
