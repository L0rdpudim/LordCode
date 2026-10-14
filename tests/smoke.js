(function () {
  'use strict';
  const output = document.getElementById('result');
  const frame = document.getElementById('appFrame');
  const failures = [];
  const successes = [];
  const log = (ok, message) => (ok ? successes : failures).push(`${ok ? 'PASS' : 'FAIL'} — ${message}`);
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  async function until(condition, label, timeout = 6000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      try { if (condition()) return; } catch (_) { /* a UI ainda pode estar montando */ }
      await wait(40);
    }
    throw new Error(`Tempo excedido: ${label}`);
  }
  function app() { return frame.contentWindow; }
  function click(selector) {
    const node = app().document.querySelector(selector);
    if (!node) throw new Error(`Elemento ausente: ${selector}`);
    node.click();
    return node;
  }
  function correctValue(exercise) {
    return ['multiple-choice', 'code-reading'].includes(exercise.type) ? exercise.answer
      : ['predict-output', 'fill-code'].includes(exercise.type) ? exercise.accepted[0]
        : exercise.type === 'ordering' ? exercise.answerOrder[0]
          : exercise.solution;
  }
  function selectValue(exercise, correct) {
    if (['multiple-choice', 'code-reading'].includes(exercise.type)) {
      const value = correct ? exercise.answer : exercise.options.find(option => option.id !== exercise.answer).id;
      const radio = app().document.querySelector(`input[name="${exercise.id}"][value="${value}"]`);
      if (!radio) throw new Error(`Alternativa ${value} não encontrada em ${exercise.id}.`);
      radio.checked = true;
      radio.dispatchEvent(new app().Event('change', { bubbles: true }));
    } else if (['predict-output', 'fill-code'].includes(exercise.type)) {
      const input = app().document.querySelector(`[data-answer-input="${exercise.id}"]`);
      input.value = correct ? exercise.accepted[0] : '__errado__';
      input.dispatchEvent(new app().Event('input', { bubbles: true }));
    } else if (exercise.type === 'ordering') {
      // Os exercícios usados nesta fumaça são de múltipla escolha.
      throw new Error('A fumaça esperava uma questão de múltipla escolha.');
    } else {
      const input = app().document.querySelector(`[data-answer-input="${exercise.id}"]`);
      input.value = correct ? exercise.solution : '// errado';
      input.dispatchEvent(new app().Event('input', { bubbles: true }));
    }
  }
  async function submit(exercise, correct) {
    selectValue(exercise, correct);
    click(`[data-action="submit-exercise"][data-exercise-id="${exercise.id}"]`);
    await until(() => (app().LordCode.state.getAnswer('html', exercise.id) || {}).submitted, `envio ${exercise.id}`);
  }
  async function answerAttempt(lesson, correctForIndex) {
    click('[data-action="start-exercises"]');
    for (let index = 0; index < lesson.exercises.length; index++) {
      const exercise = lesson.exercises[index];
      await until(() => app().document.querySelector(`[data-exercise-card="${exercise.id}"]`), `pergunta ${index + 1}`);
      log(app().document.querySelectorAll('.exercise-card').length === 1, `só a pergunta ${index + 1} aparece na tela`);
      const expectedCorrect = !!correctForIndex(index);
      await submit(exercise, expectedCorrect);
      const banner = app().document.querySelector('#answerFeedbackBanner');
      log(!!banner, `feedback inferior exibido após a questão ${index + 1}`);
      log(banner.classList.contains(expectedCorrect ? 'is-correct' : 'is-incorrect'), `feedback usa o estado visual ${expectedCorrect ? 'correto' : 'incorreto'}`);
      log(!!banner.querySelector('.answer-banner-report[href^="mailto:"]'), 'relato de erro abre e-mail com contexto do exercício');
      if (expectedCorrect) {
        log(!banner.querySelector('[data-action="show-hint"]'), 'resposta correta não mostra opção de dica');
        log(banner.querySelectorAll('button').length === 1, 'resposta correta mostra apenas avançar, além de relatar erro');
      } else {
        const hintButton = banner.querySelector('[data-action="show-hint"]');
        log(!!hintButton, 'resposta incorreta oferece uma dica');
        if (hintButton) {
          hintButton.click();
          log(!banner.querySelector('#answerBannerHint').hidden, 'a dica aparece ao clicar');
        }
      }
      const card = app().document.querySelector(`[data-exercise-card="${exercise.id}"]`);
      log(!!card.querySelector('input:disabled, textarea:disabled') || !!card.querySelector('fieldset[disabled]'), `resposta ${index + 1} fica bloqueada após o envio`);
      if (index < lesson.exercises.length - 1 || app().document.querySelector('[data-action="next-exercise"]')) {
        click('[data-action="next-exercise"]');
      }
    }
    await until(() => app().document.querySelector('.result-percent'), 'resultado final');
  }
  async function run() {
    try {
      localStorage.removeItem('lordcode:v1');
      frame.src = '../index.html#inicio';
      await new Promise(resolve => frame.addEventListener('load', resolve, { once: true }));
      await until(() => !!app().LordCode && !!app().LordCode.curriculum, 'inicialização da aplicação');
      let LC = app().LordCode;
      log(LC.curriculum.counts.courses === 4, 'quatro cursos carregados');
      log(LC.curriculum.counts.lessons === 40, '40 aulas carregadas');
      log(LC.curriculum.counts.exercises === 200, '200 exercícios carregados');
      log(LC.curriculum.getAllLessons().every(lesson => lesson.exercises.length >= 5), 'todas as aulas têm pelo menos cinco exercícios');
      log(!Array.from(app().document.querySelectorAll('.course-card h3')).some(node => node.textContent.trim() === 'Java'), 'o catálogo não apresenta um curso Java inexistente');
      const typeSelectors = {
        'multiple-choice': 'input[type="radio"]',
        'code-reading': 'input[type="radio"]',
        'predict-output': 'input[type="text"]',
        'fill-code': 'input[type="text"]',
        'ordering': '.ordering-list',
        'practical': 'textarea[data-answer-input]'
      };
      const seenTypes = new Set();
      for (const course of LC.curriculum.rawCourses) {
        for (const module of course.modules) {
          for (const lesson of module.lessons) {
            for (const exercise of lesson.exercises) {
              if (seenTypes.has(exercise.type)) continue;
              const scratch = app().document.createElement('div');
              scratch.innerHTML = LC.exercises.renderExercise(exercise, course.id, lesson.id);
              log(!!scratch.querySelector(typeSelectors[exercise.type]), `o formato ${exercise.type} é renderizado`);
              seenTypes.add(exercise.type);
            }
          }
        }
      }

      app().location.hash = '#curso/html';
      await until(() => app().document.querySelectorAll('.path-node[data-open-lesson]').length === 10, 'trilha HTML renderizada');
      log(app().document.querySelectorAll('.simple-path-module').length === 4, 'trilha visual agrupada por módulos');
      const lessons = LC.curriculum.getCourseLessons('html');
      const first = lessons[0];
      const second = lessons[1];
      log(first.exercises.length === 5, 'primeira aula tem cinco questões');
      log(click(`.path-node[data-open-lesson="${second.id}"]`).disabled, 'a segunda aula inicia bloqueada');
      app().location.hash = `#aula/${second.id}`;
      await wait(120);
      log(app().document.getElementById('lessonPage').hidden, 'navegação direta não abre aula bloqueada');

      app().location.hash = `#aula/${first.id}`;
      await until(() => app().document.querySelector('[data-action="start-exercises"]'), 'introdução da primeira aula');
      log(app().document.querySelectorAll('.exercise-card').length === 0, 'a introdução não mostra as questões de uma só vez');
      log(!app().document.querySelector('.lesson-intro-card details'), 'a preparação da aula não exige expandir acordeões');
      log(!!app().document.querySelector('.lesson-example-panel') && !!app().document.querySelector('.lesson-prep-notes'), 'exemplo e objetivos ficam visíveis na preparação');
      await answerAttempt(first, () => false);
      log(app().document.querySelector('.result-percent').textContent.trim() === '0%', 'resultado de 0% é mostrado corretamente');
      log(!LC.state.isCompleted('html', first.id), '0% não marca a aula como concluída');
      log(LC.state.lessonStatus('html', second.id) === 'locked', '0% não libera a próxima aula');
      log(!!app().document.querySelector('[data-action="retry-lesson"]'), 'a tentativa reprovada oferece refazer');
      log(!app().document.body.textContent.includes('Resposta enviada e bloqueada. Não é possível alterá-la.'), 'mensagem técnica sobre bloqueio foi removida');
      log(!app().document.querySelector('.result-review'), 'resumo da aula não aparece no resultado final');
      log(app().document.querySelectorAll('.path-node').length === 14, 'dez aulas e quatro desafios aparecem na trilha HTML');
      log(app().document.querySelectorAll('.path-segment').length === 10, 'as aulas e os desafios de cada módulo são conectados por curvas contínuas');

      click('[data-action="retry-lesson"]');
      await until(() => app().document.querySelector('[data-action="start-exercises"]'), 'início da nova tentativa');
      log(first.exercises.every(exercise => LC.state.getAnswer('html', exercise.id) === null), 'refazer limpa as respostas da tentativa anterior');
      await answerAttempt(first, index => index < 3);
      log(app().document.querySelector('.result-percent').textContent.trim() === '60%', 'três acertos em cinco dão 60%');
      log(LC.state.isCompleted('html', first.id), '60% conclui automaticamente a aula');
      log(LC.state.lessonStatus('html', second.id) === 'available', '60% libera a próxima aula');
      const xpAfterPass = LC.state.getTotalStats().xp;

      click('[data-action="redo-lesson"]');
      await until(() => app().document.querySelector('[data-action="start-exercises"]'), 'refazer uma aula aprovada');
      log(LC.state.isReviewing('html', first.id), 'refazer uma aula concluída inicia modo revisão');
      log(LC.state.isCompleted('html', first.id), 'a revisão mantém a conclusão anterior');
      log(first.exercises.every(exercise => LC.state.getAnswer('html', exercise.id) === null), 'respostas da revisão começam limpas');
      await answerAttempt(first, index => index < 3);
      log(app().document.querySelector('.result-percent').textContent.trim() === '60%', 'revisão calcula a nova porcentagem');
      log(!LC.state.isReviewing('html', first.id), 'uma revisão aprovada é encerrada');
      log(LC.state.getTotalStats().xp === xpAfterPass, 'revisar sem novos acertos não duplica XP');

      // Uma nova revisão com 0% não pode parecer uma aula aprovada na trilha,
      // mas a aprovação histórica continua liberando as próximas etapas.
      click('[data-action="redo-lesson"]');
      await until(() => app().document.querySelector('[data-action="start-exercises"]'), 'segunda revisão da aula');
      await answerAttempt(first, () => false);
      log(app().document.querySelector('.result-percent').textContent.trim() === '60%', 'uma revisão pior mantém a melhor marca de 60% como resultado principal');
      log(app().document.querySelector('.result-detail').textContent.includes('Nesta tentativa: 0%'), 'o resultado também informa o percentual da tentativa atual');
      log(!app().document.querySelector('.result-detail').textContent.includes('mínimo'), 'o resultado não exibe o texto de acertos mínimos');
      log(LC.state.getLessonBestScore('html', first.id) === 60, 'uma revisão com 0% não substitui a melhor porcentagem salva');
      log(LC.state.isCompleted('html', first.id) && LC.state.isReviewing('html', first.id), 'a revisão falha sem apagar a aprovação histórica');
      app().location.hash = '#curso/html';
      await until(() => app().document.querySelector(`.path-node-item.is-completed .path-node[data-open-lesson="${first.id}"]`), 'a trilha preserva o visual de aula concluída durante a revisão');
      log(!!app().document.querySelector(`.path-node-item.is-completed .path-node[data-open-lesson="${first.id}"]`) && app().document.querySelector(`.path-node-item.is-completed .path-node[data-open-lesson="${first.id}"] span`).textContent === '✓', 'aula refeita mantém a cor e o símbolo de conclusão');
      log(!app().document.querySelector(`.path-node[data-open-lesson="${second.id}"]`).disabled, 'o desbloqueio histórico é preservado ao revisar');
      app().location.reload();
      await new Promise(resolve => frame.addEventListener('load', resolve, { once: true }));
      await until(() => app().LordCode && app().LordCode.state.isCompleted('html', first.id), 'progresso recuperado após recarga');
      LC = app().LordCode;
      log(LC.state.getTotalStats().xp === xpAfterPass, 'XP persiste após recarga');

      app().location.hash = '#cursos';
      await until(() => app().document.getElementById('resetProgressBtn'), 'controle de reinício');
      click('#resetProgressBtn');
      await until(() => app().document.getElementById('resetDialog').open, 'diálogo de reinício aberto');
      click('#confirmResetBtn');
      await until(() => !app().LordCode.state.isCompleted('html', first.id), 'progresso reiniciado');
      log(app().LordCode.state.getTotalStats().xp === 0, 'reinício confirmado limpa XP e progresso');
    } catch (error) {
      failures.push(`FAIL — ${error.message}`);
    } finally {
      try { localStorage.removeItem('lordcode:v1'); } catch (_) { /* nada */ }
      output.className = failures.length ? 'fail' : 'pass';
      output.textContent = [...successes, ...failures, '', `${successes.length} verificações aprovadas; ${failures.length} falha(s).`].join('\n');
    }
  }
  run();
})();
