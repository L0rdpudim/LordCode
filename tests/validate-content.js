'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const errors = [];
const warnings = [];
const types = new Set(['multiple-choice', 'code-reading', 'predict-output', 'fill-code', 'ordering', 'practical']);
const ids = { courses: new Set(), modules: new Set(), lessons: new Set(), exercises: new Set() };
const context = { window: {}, console };
vm.createContext(context);
for (const file of fs.readdirSync(path.join(root, 'data')).filter(name => name.endsWith('.js'))) {
  try { vm.runInContext(fs.readFileSync(path.join(root, 'data', file), 'utf8'), context, { filename: file }); }
  catch (error) { errors.push(`${file}: erro de sintaxe: ${error.message}`); }
}
const courses = context.window.LORDCODE_COURSES || [];
function requireValue(condition, message) { if (!condition) errors.push(message); }
function compileC(code, label) {
  if (!code || !code.includes('#include') || !code.includes('int main')) return;
  const temp = path.join(require('node:os').tmpdir(), `lordcode-${process.pid}.c`);
  fs.writeFileSync(temp, code);
  const result = spawnSync('gcc', ['-std=c11', '-Wall', '-Wextra', '-fsyntax-only', temp], { encoding: 'utf8' });
  fs.rmSync(temp, { force: true });
  if (result.error && result.error.code === 'ENOENT') { warnings.push('gcc indisponível; exemplos de C não foram compilados.'); return; }
  if (result.status !== 0) errors.push(`${label}: compilação de verificação falhou: ${(result.stderr || '').trim().slice(0, 500)}`);
}

requireValue(courses.length === 4, `Esperadas 4 trilhas; encontradas ${courses.length}.`);
const checkContext = { window: { LordCode: {} }, navigator: {}, document: {}, console };
vm.createContext(checkContext);
vm.runInContext(fs.readFileSync(path.join(root, 'js/util.js'), 'utf8'), checkContext, { filename: 'js/util.js' });
vm.runInContext(fs.readFileSync(path.join(root, 'js/checks.js'), 'utf8'), checkContext, { filename: 'js/checks.js' });
const checks = checkContext.window.LordCode.checks;
let lessonCount = 0;
let exerciseCount = 0;
for (const course of courses) {
  requireValue(course && typeof course.id === 'string' && course.id, 'Curso com id ausente.');
  if (!course) continue;
  requireValue(!ids.courses.has(course.id), `ID de curso duplicado: ${course.id}`); ids.courses.add(course.id);
  requireValue(['html', 'css', 'javascript', 'c'].includes(course.id), `Curso não esperado: ${course.id}`);
  requireValue(course.modules.length >= 3 && course.modules.length <= 6, `${course.id}: quantidade de módulos fora de 3–6.`);
  const lessons = [];
  for (const module of course.modules || []) {
    requireValue(module.id && !ids.modules.has(module.id), `${course.id}: id de módulo ausente ou duplicado (${module.id}).`);
    ids.modules.add(module.id);
    for (const lesson of module.lessons || []) lessons.push({ lesson, module });
  }
  requireValue(lessons.length >= 9 && lessons.length <= 13, `${course.id}: esperadas 9–13 aulas, encontradas ${lessons.length}.`);
  requireValue(lessons.length > 0 && lessons[lessons.length - 1].lesson.kind === 'project', `${course.id}: a última aula deve ser um projeto.`);
  requireValue(lessons.filter(item => item.lesson.kind === 'project').length >= 2, `${course.id}: devem existir pelo menos 2 aulas do tipo projeto.`);
  for (const { lesson, module } of lessons) {
    lessonCount++;
    requireValue(lesson.id && !ids.lessons.has(lesson.id), `${course.id}: id de aula ausente ou duplicado (${lesson.id}).`);
    ids.lessons.add(lesson.id);
    requireValue(lesson.title && lesson.description && Array.isArray(lesson.objectives) && lesson.objectives.length, `${lesson.id}: metadados ou objetivos ausentes.`);
    requireValue(Array.isArray(lesson.content) && lesson.content.length, `${lesson.id}: conteúdo teórico ausente.`);
    requireValue(lesson.example && lesson.example.code, `${lesson.id}: exemplo de código ausente.`);
    requireValue(Array.isArray(lesson.exercises) && lesson.exercises.length >= 5 && lesson.exercises.length <= 7, `${lesson.id}: esperados pelo menos 5 exercícios.`);
    const seenTypes = new Set();
    for (const exercise of lesson.exercises || []) {
      exerciseCount++;
      requireValue(exercise.id && !ids.exercises.has(exercise.id), `${lesson.id}: id de exercício ausente ou duplicado (${exercise.id}).`);
      ids.exercises.add(exercise.id);
      requireValue(types.has(exercise.type), `${exercise.id}: tipo de exercício inválido (${exercise.type}).`);
      seenTypes.add(exercise.type);
      requireValue(typeof exercise.prompt === 'string' && exercise.prompt.length > 8, `${exercise.id}: enunciado curto ou ausente.`);
      if (['multiple-choice', 'code-reading'].includes(exercise.type)) {
        requireValue(Array.isArray(exercise.options) && exercise.options.length >= 2, `${exercise.id}: faltam alternativas.`);
        requireValue(exercise.options.some(option => option.id === exercise.answer), `${exercise.id}: resposta correta não consta nas alternativas.`);
      } else if (['predict-output', 'fill-code'].includes(exercise.type)) {
        requireValue(typeof exercise.answer === 'string' && exercise.answer.length > 0, `${exercise.id}: resposta de texto ausente.`);
        requireValue(Array.isArray(exercise.accepted) && exercise.accepted.some(item => String(item) === exercise.answer), `${exercise.id}: resposta não consta da lista de aceites.`);
      } else if (exercise.type === 'ordering') {
        const itemIds = (exercise.items || []).map(item => item.id);
        requireValue(itemIds.length >= 3 && new Set(itemIds).size === itemIds.length, `${exercise.id}: itens de ordenação insuficientes ou duplicados.`);
        requireValue(Array.isArray(exercise.answerOrder) && exercise.answerOrder.length === itemIds.length && itemIds.every(id => exercise.answerOrder.includes(id)), `${exercise.id}: sequência de resposta inválida.`);
      } else if (exercise.type === 'practical') {
        requireValue(Array.isArray(exercise.requirements) && exercise.requirements.length >= 2, `${exercise.id}: tarefa prática sem critérios suficientes.`);
        requireValue(typeof exercise.solution === 'string' && exercise.solution.length > 5, `${exercise.id}: solução de referência ausente.`);
      }
      if (checks) {
        let answer;
        if (['multiple-choice', 'code-reading'].includes(exercise.type)) answer = exercise.answer;
        else if (['predict-output', 'fill-code'].includes(exercise.type)) answer = exercise.accepted[0];
        else if (exercise.type === 'ordering') answer = exercise.answerOrder;
        else answer = exercise.solution;
        const result = checks.evaluate(exercise, answer);
        requireValue(result.correct === true, `${exercise.id}: a solução cadastrada não passa pela correção. ${result.hint || ''}`);
      }
      if (exercise.type === 'practical' && course.id === 'c') compileC(exercise.solution, exercise.id);
    }
    requireValue(seenTypes.has('multiple-choice'), `${lesson.id}: falta múltipla escolha.`);
  }
  const typeCount = new Set(lessons.flatMap(({ lesson }) => lesson.exercises.map(exercise => exercise.type)));
  requireValue(typeCount.size === 6, `${course.id}: nem todos os seis tipos de exercício estão representados.`);
}

const expected = { courses: 4, lessons: 40, exercises: 200 };
requireValue(lessonCount === expected.lessons, `Esperadas ${expected.lessons} aulas; encontradas ${lessonCount}.`);
requireValue(exerciseCount === expected.exercises, `Esperados ${expected.exercises} exercícios; encontrados ${exerciseCount}.`);
for (const file of ['index.html','style.css','script.js','js/util.js','js/curriculum.js','js/checks.js','js/runner.js','js/state.js','js/exercises.js','js/app.js','README.md','docs/CONTENT-SCHEMA.md']) {
  requireValue(fs.existsSync(path.join(root, file)), `Arquivo essencial ausente: ${file}`);
}
const index = fs.readFileSync(path.join(root,'index.html'),'utf8');
requireValue(!/Java\b/.test(index), 'O HTML contém uma referência a Java fora da lista de cursos (JavaScript é permitido).');
requireValue(index.includes('data/html.js') && index.includes('js/app.js'), 'O HTML não carrega os currículos e a aplicação.');
if (errors.length) {
  console.error(`\nValidação falhou (${errors.length} erro(s)):`);
  errors.forEach(item => console.error(` - ${item}`));
  process.exitCode = 1;
} else {
  console.log(`Validação de conteúdo concluída: ${courses.length} trilhas, ${lessonCount} aulas e ${exerciseCount} exercícios.`);
}
for (const warning of [...new Set(warnings)]) console.warn(`Aviso: ${warning}`);
