(function (global) {
  'use strict';
  const LC = global.LordCode;
  const { curriculum, state, util, checks, exercises } = LC;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  let activeHeroExample = 0;
  let heroTimer = null;
  const lessonStartedAt = new Map();
  const prefersReducedMotion = global.matchMedia ? global.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const heroExamples = [
    { language: 'HTML', theme: 'code-html', caption: 'Estrutura para a web', code: '<!DOCTYPE html>\n<html lang="pt-BR">\n  <body>\n    <h1>Olá, mundo!</h1>\n  </body>\n</html>' },
    { language: 'CSS', theme: 'code-css', caption: 'Estilo e apresentação', code: 'body {\n  background: #0b1020;\n  color: #f8fafc;\n  font-family: Inter, sans-serif;\n}' },
    { language: 'JavaScript', theme: 'code-javascript', caption: 'Lógica e interatividade', code: 'const saudacao = "Olá, mundo!";\nconsole.log(saudacao);' },
    { language: 'C', theme: 'code-c', caption: 'Fundamentos da programação', code: '#include <stdio.h>\n\nint main(void) {\n  printf("Olá, mundo!\\n");\n  return 0;\n}' }
  ];

  function toast(message, kind = 'info') {
    const region = $('#toastRegion');
    if (!region) return;
    const item = document.createElement('div');
    item.className = `toast toast-${kind}`;
    item.setAttribute('role', kind === 'error' ? 'alert' : 'status');
    item.textContent = message;
    region.appendChild(item);
    global.setTimeout(() => {
      item.classList.add('is-leaving');
      global.setTimeout(() => item.remove(), 220);
    }, 4200);
  }

  function renderHeroExample(index) {
    const item = heroExamples[index % heroExamples.length];
    const code = $('#codeExample');
    if (!code) return;
    code.textContent = item.code;
    code.className = item.theme;
    $('#codeLanguage').textContent = item.language;
    $('#codeLanguage').className = `code-language ${item.theme}`;
    $('#codeCaption').textContent = item.caption;
    $('#codeIndicator').textContent = `${String(index + 1).padStart(2, '0')} / ${String(heroExamples.length).padStart(2, '0')}`;
  }
  function startHeroRotation() {
    if (heroTimer) global.clearInterval(heroTimer);
    renderHeroExample(activeHeroExample);
    if (prefersReducedMotion.matches) return;
    heroTimer = global.setInterval(() => {
      if (document.hidden) return;
      activeHeroExample = (activeHeroExample + 1) % heroExamples.length;
      renderHeroExample(activeHeroExample);
    }, 3800);
  }

  function statusText(status) {
    return ({ 'locked': 'Bloqueada', 'available': 'Disponível', 'in-progress': 'Em andamento', 'completed': 'Concluída' })[status] || 'Disponível';
  }
  function formatDuration(seconds) {
    const safe = Math.max(0, Math.floor(Number(seconds) || 0));
    const hours = Math.floor(safe / 3600);
    const minutes = Math.floor((safe % 3600) / 60);
    const remaining = safe % 60;
    return hours > 0
      ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remaining).padStart(2, '0')}`
      : `${String(minutes).padStart(2, '0')}:${String(remaining).padStart(2, '0')}`;
  }
  function courseCardStatusText(courseId) { return state.getCourseCardStatus(courseId); }
  function renderHomeStats() {
    const stats = state.getTotalStats();
    $('#homeProgressLabel').textContent = `${stats.percent}% concluído`;
    $('#homeProgressDetail').textContent = `${stats.completed} de ${stats.total} aulas concluídas`;
    $('#homeProgressBar').setAttribute('aria-valuenow', String(stats.percent));
    $('#homeProgressFill').style.width = `${stats.percent}%`;
    $('#homeXp').textContent = String(stats.xp);
    $('#homeStreak').textContent = String(stats.streak);
    $('#totalLessonsStat').textContent = String(curriculum.counts.lessons);
  }
  function renderCourseCards() {
    const grid = $('#coursesGrid');
    if (!grid) return;
    grid.innerHTML = curriculum.rawCourses.map(course => {
      const stats = curriculum.getCourseStats(course.id, state);
      const cardStatus = courseCardStatusText(course.id);
      const statusClass = cardStatus === 'Concluída' ? 'is-complete' : ['Em andamento', 'Em revisão'].includes(cardStatus) ? 'is-in-progress' : 'is-new';
      const verb = cardStatus === 'Não iniciada' ? 'Iniciar curso' : cardStatus === 'Concluída' ? 'Revisar trilha' : 'Continuar curso';
      return `<article class="course-card ${statusClass}" style="--course-color:${util.escapeHtml(course.color)}">
        <div class="course-card-top"><span class="course-icon" aria-hidden="true">${util.escapeHtml(course.title === 'HTML' ? '</>' : course.title === 'CSS' ? '#' : course.title === 'JavaScript' ? 'JS' : 'C')}</span><span class="course-level">${util.escapeHtml(course.level)}</span></div>
        <h3>${util.escapeHtml(course.title)}</h3><p class="course-description">${util.escapeHtml(course.description)}</p>
        <div class="course-meta"><span>${course.modules.length} módulos</span><span>${stats.total} aulas</span></div>
        <div class="course-progress"><div class="progress-top"><span>Progresso</span><strong>${stats.percent}%</strong></div><div class="progress-bar" role="progressbar" aria-label="Progresso de ${util.escapeHtml(course.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${stats.percent}"><span style="width:${stats.percent}%"></span></div></div>
        <div class="course-card-bottom"><span class="course-status"><span class="status-dot status-${cardStatus === 'Concluída' ? 'complete' : cardStatus === 'Em andamento' ? 'active' : 'new'}"></span>${cardStatus}</span><button class="secondary-btn card-action" type="button" data-open-course="${util.escapeHtml(course.id)}">${verb}</button></div>
      </article>`;
    }).join('');
    renderHomeStats();
  }

  function renderAchievementsSummary() {
    const achievements = state.getAchievementList();
    const unlocked = achievements.filter(item => item.unlocked);
    const displayed = unlocked.slice(-3).reverse();
    if (!displayed.length) return '<p class="muted-note">Conclua aulas e resolva exercícios para desbloquear suas primeiras conquistas.</p>';
    return `<div class="achievement-chips">${displayed.map(item => `<span class="achievement-chip" title="${util.escapeHtml(item.description)}">✦ ${util.escapeHtml(item.title)}</span>`).join('')}</div>`;
  }
  function renderCourseDashboard(courseId) {
    const course = curriculum.getCourse(courseId);
    if (!course) return;
    document.body.classList.remove('lesson-preparation-mode');
    $('#mainSite').hidden = true;
    $('#courseSite').hidden = false;
    $('#coursePage').hidden = false;
    $('#lessonPage').hidden = true;
    const stats = curriculum.getCourseStats(courseId, state);
    const nextLesson = curriculum.getNextLesson(courseId, state);
    const nextChallengeModule = course.modules.find(module => module.lessons.every(lesson => state.isCompleted(courseId, lesson.id)) && !state.isChallengeCompleted(courseId, module.id));
    const allDone = stats.total > 0 && stats.completed === stats.total;
    const total = state.getTotalStats();
    const courseLessons = curriculum.getCourseLessons(courseId);
    const globalIndex = new Map(courseLessons.map((lesson, index) => [lesson.id, index + 1]));
    const courseMark = course.title === 'HTML' ? '&lt;/&gt;' : course.title === 'CSS' ? '#' : course.title === 'JavaScript' ? 'JS' : 'C';

    $('#courseDashboard').innerHTML = `<header class="course-dashboard-header simple-course-header" style="--course-color:${util.escapeHtml(course.color)}">
      <div class="course-mark" aria-hidden="true">${courseMark}</div>
      <div class="course-heading-copy"><p class="eyebrow">SUA TRILHA</p><h2 id="courseTitle">${util.escapeHtml(course.title)}</h2></div>
      <span class="dashboard-xp simple-xp">${total.xp} XP</span>
    </header>
    <section class="dashboard-progress simple-dashboard-progress" aria-label="Progresso da trilha">
      <div class="dashboard-progress-row"><div><h3>${allDone ? 'Trilha concluída!' : 'Continue avançando'}</h3><p>${stats.completed} de ${stats.total} aulas</p></div><strong>${stats.percent}%</strong></div>
      <div class="progress-bar large" role="progressbar" aria-label="Progresso de ${util.escapeHtml(course.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${stats.percent}"><span style="width:${stats.percent}%"></span></div>
      ${nextLesson ? `<button class="primary-btn continue-btn" type="button" data-open-lesson="${util.escapeHtml(nextLesson.id)}">${stats.completed ? 'Continuar' : 'Começar'}</button>` : nextChallengeModule ? `<button class="primary-btn continue-btn" type="button" data-open-challenge="${util.escapeHtml(courseId)}|${util.escapeHtml(nextChallengeModule.id)}">Fazer desafio do módulo</button>` : '<p class="course-complete-message">Você completou esta trilha. Parabéns!</p>'}
    </section>
    <div class="path-heading simple-path-heading"><h3>Trilha de aulas</h3><button type="button" class="text-btn" data-action="show-achievements">Conquistas</button></div>
    <div class="learning-path simple-learning-path" style="--course-color:${util.escapeHtml(course.color)}"><svg class="path-connectors" aria-hidden="true" focusable="false"></svg>${course.modules.map((module, moduleIndex) => {
      const doneInModule = module.lessons.filter(lesson => state.isCompleted(courseId, lesson.id)).length;
      return `<section class="path-module simple-path-module ${module.lessons.every(lesson => state.isCompleted(courseId, lesson.id)) ? 'is-module-completed' : ''}">
        <div class="module-heading simple-module-heading"><span class="module-index">${String(moduleIndex + 1).padStart(2, '0')}</span><h3>${util.escapeHtml(module.title)}</h3><span class="module-count">${doneInModule}/${module.lessons.length}</span></div>
        <div class="path-nodes">${module.lessons.map(lesson => {
          const status = state.isCompleted(courseId, lesson.id) ? 'completed' : state.lessonStatus(courseId, lesson.id);
          const nodeSymbol = status === 'completed' ? '✓' : status === 'locked' ? '🔒' : status === 'in-progress' ? '▶' : '★';
          const statusLabel = status === 'completed' ? 'Concluída' : status === 'locked' ? 'Bloqueada' : status === 'in-progress' ? 'Continuar' : 'Começar';
          const offset = globalIndex.get(lesson.id) % 3;
          const labelSide = offset === 1 ? 'left' : 'right';
          return `<article class="path-node-item is-${status}" data-offset="${offset}" data-label-side="${labelSide}">
            <button type="button" class="path-node" data-open-lesson="${util.escapeHtml(lesson.id)}" aria-label="Aula ${globalIndex.get(lesson.id)}: ${util.escapeHtml(lesson.title)} — ${statusLabel}" ${status === 'locked' ? 'disabled aria-disabled="true"' : ''}><span aria-hidden="true">${nodeSymbol}</span></button>
            <div class="path-node-caption"><span class="path-node-number">AULA ${String(globalIndex.get(lesson.id)).padStart(2, '0')}</span><span class="path-node-title">${util.escapeHtml(lesson.title)}</span></div>
          </article>`;
        }).join('')}</div>
        ${(() => { const moduleDone = module.lessons.every(lesson => state.isCompleted(courseId, lesson.id)); const challengeDone = state.isChallengeCompleted(courseId, module.id); const challengeLocked = !moduleDone; const challengeSymbol = challengeDone ? '✓' : challengeLocked ? '⌑' : '⌘'; return `<div class="module-challenge-branch ${challengeDone ? 'is-completed' : challengeLocked ? 'is-locked' : 'is-available'}"><span class="challenge-branch-line" aria-hidden="true"></span><article class="path-node-item challenge-node-item ${challengeDone ? 'is-completed' : challengeLocked ? 'is-locked' : 'is-available'}"><button type="button" class="path-node challenge-node" data-open-challenge="${util.escapeHtml(courseId)}|${util.escapeHtml(module.id)}" aria-label="Desafio prático do módulo ${util.escapeHtml(module.title)}" ${challengeLocked ? 'disabled aria-disabled="true"' : ''}><span aria-hidden="true">${challengeSymbol}</span></button><span class="path-node-number">DESAFIO DO MÓDULO</span><span class="path-node-title">${challengeDone ? 'Desafio concluído · +25 XP' : 'Desafio prático de código'}</span></article></div>`; })()}
      </section>`;
    }).join('')}</div>`;
    drawLearningPathConnections();
    global.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
  }

  function drawLearningPathConnections() {
    const path = $('.simple-learning-path');
    if (!path) return;
    const svg = $('.path-connectors', path);
    if (!svg) return;
    const bounds = path.getBoundingClientRect();
    const width = Math.max(1, path.clientWidth);
    const height = Math.max(1, path.scrollHeight);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', String(width));
    svg.setAttribute('height', String(height));
    svg.replaceChildren();
    const ns = 'http://www.w3.org/2000/svg';

    // A single visual language for every connection: smooth Bezier curves,
    // including the final lesson-to-challenge branch in each module.
    $$('.simple-path-module', path).forEach(module => {
      const nodes = $$('.path-node', module);
      nodes.slice(0, -1).forEach((node, index) => {
        const next = nodes[index + 1];
        const a = node.getBoundingClientRect();
        const b = next.getBoundingClientRect();
        const x1 = a.left + a.width / 2 - bounds.left;
        const y1 = a.top + a.height / 2 - bounds.top;
        const x2 = b.left + b.width / 2 - bounds.left;
        const y2 = b.top + b.height / 2 - bounds.top;
        const dy = Math.max(0, y2 - y1);
        const curve = Math.max(22, dy * 0.42);
        const segment = document.createElementNS(ns, 'path');
        segment.setAttribute('d', `M ${x1} ${y1} C ${x1} ${y1 + curve}, ${x2} ${y2 - curve}, ${x2} ${y2}`);
        const previousItem = node.closest('.path-node-item');
        const nextItem = next.closest('.path-node-item');
        const isComplete = (previousItem && previousItem.classList.contains('is-completed')) ||
          (previousItem && previousItem.classList.contains('challenge-node-item') && previousItem.classList.contains('is-completed'));
        const reachesChallenge = nextItem && nextItem.classList.contains('challenge-node-item');
        segment.setAttribute('class', `path-segment${isComplete ? ' is-complete' : ''}${reachesChallenge ? ' reaches-challenge' : ''}`);
        svg.appendChild(segment);
      });
    });
  }

  function renderChallengePage(courseId, moduleId) {
    const course = curriculum.getCourse(courseId);
    const module = course?.modules.find(item => item.id === moduleId);
    if (!course || !module) { toast('Desafio não encontrado.', 'error'); navigate('#cursos'); return; }
    if (!module.lessons.every(lesson => state.isCompleted(courseId, lesson.id))) { toast('Conclua as aulas do módulo primeiro.', 'warning'); navigate(`#curso/${courseId}`); return; }
    $('#mainSite').hidden = true; $('#courseSite').hidden = false; $('#coursePage').hidden = true; $('#lessonPage').hidden = false;
    const done = state.isChallengeCompleted(courseId, moduleId);
    const language = courseId === 'html' ? 'HTML' : courseId === 'css' ? 'CSS' : courseId === 'javascript' ? 'JavaScript' : 'C';
    const starter = courseId === 'html' ? `<h1>Olá, mundo!</h1>\n<p>Minha primeira página.` : courseId === 'css' ? `h1 {\n  color: azul;\n}` : courseId === 'javascript' ? `const mensagem = "Olá, mundo!";` : `#include <stdio.h>\n\nint main(void) {\n  // escreva a saída e finalize a função\n}`;
    document.body.classList.remove('lesson-preparation-mode');
    $('#lessonContainer').innerHTML = `<div class="game-lesson module-final-challenge" style="--course-color:${util.escapeHtml(course.color)}"><div class="game-topbar"><button type="button" class="back-btn" data-action="back-to-course" data-course-id="${util.escapeHtml(courseId)}">Voltar à trilha</button><span class="lesson-type-label">DESAFIO FINAL DO MÓDULO</span></div><header class="game-lesson-heading"><span class="challenge-trophy" aria-hidden="true">🏆</span><h2>Desafio prático: ${util.escapeHtml(module.title)}</h2><p>Corrija o trecho incompleto de ${language}. Complete a estrutura e valide seu código para ganhar 25 XP. A verificação é feita sem executar código arbitrário.</p></header><section class="challenge-editor-card"><label for="moduleChallengeCode">Seu código</label><textarea id="moduleChallengeCode" class="module-challenge-editor" spellcheck="false" autocapitalize="off" autocomplete="off">${util.escapeHtml(starter)}</textarea><p class="challenge-editor-hint">Complete o desafio usando a sintaxe da linguagem estudada.</p><div id="moduleChallengeFeedback" class="challenge-feedback" aria-live="polite"></div><div class="result-actions">${done ? '<span class="challenge-complete-label">✓ Desafio já concluído · bônus resgatado</span>' : `<button type="button" class="primary-btn" data-action="submit-module-challenge" data-course-id="${util.escapeHtml(courseId)}" data-module-id="${util.escapeHtml(moduleId)}">Validar código · +25 XP</button>`}<button type="button" class="text-btn" data-action="back-to-course" data-course-id="${util.escapeHtml(courseId)}">Voltar à trilha</button></div></section></div>`;
    global.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
  }
  function validateModuleChallenge(courseId, code) {
    const text = String(code || '').trim();
    if (!text) return false;
    if (courseId === 'html') return /<h1\b[^>]*>[^<]+<\/h1>/i.test(text) && /<p\b[^>]*>[^<]+<\/p>/i.test(text);
    if (courseId === 'css') return /[\w.#-]+\s*\{[^}]*color\s*:\s*#[0-9a-f]{3,8}[^}]*\}/i.test(text);
    if (courseId === 'javascript') return /(?:const|let)\s+\w+\s*=/.test(text) && /console\.log\s*\(/.test(text);
    return /#include\s*<stdio\.h>/.test(text) && /int\s+main\s*\(\s*void\s*\)/.test(text) && /printf\s*\(/.test(text) && /return\s+0\s*;/.test(text);
  }

  function renderAnswerBanner(course, module, lesson, exercise, record, score) {
    const correct = record && record.correct === true;
    const headline = correct ? 'Muito bem! Resposta correta.' : 'Não foi dessa vez.';
    const description = correct
      ? 'Você acertou esta questão. Continue para a próxima.'
      : 'Confira uma dica ou siga para a próxima questão.';
    const hint = record.feedback || exercise.hint || 'Releia o exemplo da aula e identifique qual conceito o enunciado está pedindo.';
    const nextLabel = score.complete ? 'Ver resultado' : 'Próxima pergunta';
    const subject = `Relato de erro — Lord Code — ${course.title}`;
    const body = [
      'Gostaria de relatar um possível erro em um exercício do Lord Code.',
      `Curso: ${course.title}`,
      `Módulo: ${module.title}`,
      `Aula: ${lesson.title} (${lesson.id})`,
      `Exercício: ${exercise.title || exercise.id} (${exercise.id})`,
      `Enunciado: ${exercise.prompt || ''}`,
      `Minha resposta foi avaliada como: ${correct ? 'correta' : 'incorreta'}.`
    ].join('\n');
    const reportHref = `mailto:contato@lordcode.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return `<aside id="answerFeedbackBanner" class="answer-feedback-banner ${correct ? 'is-correct' : 'is-incorrect'}" role="${correct ? 'status' : 'alert'}" aria-live="assertive" aria-atomic="true" tabindex="-1">
      <div class="answer-banner-inner">
        <div class="answer-banner-copy">
          <span class="answer-banner-symbol" aria-hidden="true">${correct ? '✓' : '✕'}</span>
          <div class="answer-banner-message"><h3>${headline}</h3><p>${util.escapeHtml(description)}</p>
            ${correct ? '' : `<p class="answer-banner-hint" id="answerBannerHint" hidden><strong>Dica:</strong> ${util.escapeHtml(hint)}</p>`}
          </div>
        </div>
        <div class="answer-banner-actions">
          ${correct ? '' : '<button type="button" class="answer-banner-secondary" data-action="show-hint" aria-controls="answerBannerHint" aria-expanded="false">Ver dica</button>'}
          <a class="answer-banner-report" href="${util.escapeHtml(reportHref)}">Relatar erro</a>
          <button type="button" class="answer-banner-next" data-action="next-exercise" data-lesson-id="${util.escapeHtml(lesson.id)}">${nextLabel}</button>
        </div>
      </div>
    </aside>`;
  }

  function renderLessonPage(lessonId, requestedStage = null, selectedExerciseId = null) {
    const location = curriculum.getLocation(lessonId);
    if (!location) { toast('Esta aula não foi encontrada.', 'error'); navigate('#cursos'); return; }
    const { course, module, lesson } = location;
    const status = state.lessonStatus(course.id, lesson.id);
    if (status === 'locked') {
      toast('Conclua a etapa anterior para continuar.', 'warning');
      navigate(`#curso/${course.id}`);
      return;
    }
    state.startLesson(course.id, lesson.id);
    $('#mainSite').hidden = true;
    $('#courseSite').hidden = false;
    $('#coursePage').hidden = true;
    $('#lessonPage').hidden = false;

    const allExercises = lesson.exercises || [];
    let score = state.getLessonScore(course.id, lesson);
    const reviewWasActive = state.isReviewing(course.id, lesson.id);
    // Só inicia o cronômetro quando ainda há questões a responder. Isso evita que
    // abrir uma aula já finalizada sobrescreva seu tempo com poucos segundos.
    if (!score.complete && !lessonStartedAt.has(lesson.id)) lessonStartedAt.set(lesson.id, Date.now());
    if (score.complete) {
      const startedAt = lessonStartedAt.get(lesson.id);
      if (startedAt) {
        state.recordLessonTime(course.id, lesson.id, Math.max(1, Math.round((Date.now() - startedAt) / 1000)));
        lessonStartedAt.delete(lesson.id);
      }
      // A porcentagem exibida e salva como marca principal é sempre a maior.
      state.recordLessonBestScore(course.id, lesson.id, score.percent);
      if (score.passed) state.completeLesson(course.id, lesson);
    }
    const bestPercent = state.getLessonBestScore(course.id, lesson.id);
    const bestTime = state.getLessonBestTime(course.id, lesson.id);
    const reviewing = reviewWasActive;
    const adjacent = curriculum.getAdjacentLesson(course.id, lesson.id);
    let stage = requestedStage || (score.complete ? 'result' : (score.answered === 0 ? 'intro' : 'exercise'));
    if (stage === 'exercise' && score.complete) stage = 'result';
    if (stage === 'feedback' && (!selectedExerciseId || !(state.getAnswer(course.id, selectedExerciseId) || {}).submitted)) stage = score.complete ? 'result' : 'exercise';

    const exerciseIndex = stage === 'feedback'
      ? Math.max(0, allExercises.findIndex(exercise => exercise.id === selectedExerciseId))
      : Math.max(0, allExercises.findIndex(exercise => !(state.getAnswer(course.id, exercise.id) || {}).submitted));
    const currentExercise = allExercises[exerciseIndex] || null;
    const lessonProgress = score.total ? Math.round(Math.min(score.answered, score.total) / score.total * 100) : 0;
    const kindLabel = lesson.kind === 'project' ? 'PROJETO' : lesson.kind === 'practice' ? 'PRÁTICA' : 'AULA';
    const topLabel = stage === 'intro' ? `${kindLabel} · PREPARAÇÃO` : stage === 'result' ? '' : 'DESAFIOS';
    const introContent = lesson.content.map(paragraph => `<p class="theory-paragraph">${util.renderInline(paragraph)}</p>`).join('');
    const lessonHistory = `<aside class="lesson-history-strip" aria-label="Seu histórico desta aula">${bestPercent !== null ? `<span><small>Melhor resultado</small><strong>${bestPercent}%</strong></span>` : ''}${bestTime > 0 ? `<span><small>Melhor tempo</small><strong>⏱ ${formatDuration(bestTime)}</strong></span>` : ''}</aside>`;
    const exampleDetails = `<section class="lesson-example-panel"><div class="lesson-prep-subheading"><div><span class="lesson-prep-kicker">EXEMPLO PRÁTICO</span><h3>Veja como fica no código</h3></div><button type="button" class="text-btn lesson-copy-example" data-action="copy-example" data-lesson-id="${util.escapeHtml(lesson.id)}">Copiar</button></div><pre class="code-block"><code>${util.escapeHtml(lesson.example.code)}</code></pre><ul class="example-details-list">${lesson.example.explanation.map(item => `<li>${util.escapeHtml(item)}</li>`).join('')}</ul></section>`;
    const objectiveMarkup = `<section class="lesson-prep-notes"><div class="lesson-objectives"><h3>O que você vai aprender</h3><ul>${lesson.objectives.map(item => `<li>${util.escapeHtml(item)}</li>`).join('')}</ul></div><div class="lesson-common-mistake"><span aria-hidden="true">!</span><div><h3>Fique atento</h3><p>${util.escapeHtml(lesson.commonMistake)}</p></div></div></section>`;
    const introMarkup = `<section class="lesson-intro-card">${lessonHistory}<div class="lesson-intro-copy">${introContent}</div>${exampleDetails}${objectiveMarkup}<button type="button" class="primary-btn lesson-main-action" data-action="start-exercises" data-lesson-id="${util.escapeHtml(lesson.id)}">Começar desafios</button></section>`;
    const exerciseMarkup = currentExercise ? `<section class="exercise-step"><div class="question-progress-label"><span>Pergunta ${exerciseIndex + 1} de ${score.total}</span></div><div class="question-progress-track" role="progressbar" aria-label="Perguntas respondidas" aria-valuemin="0" aria-valuemax="${score.total}" aria-valuenow="${score.answered}"><span style="width:${lessonProgress}%"></span></div>${exercises.renderExercise(currentExercise, course.id, lesson.id)}</section>` : '';

    const requiredPercent = score.total ? Math.round(score.requiredCorrect / score.total * 100) : 60;
    const displayedBestPercent = bestPercent === null ? score.percent : bestPercent;
    const qualified = displayedBestPercent >= requiredPercent;
    const lowerThanBest = score.percent < displayedBestPercent;
    const resultMessage = qualified
      ? (reviewing && lowerThanBest ? 'Sua melhor marca continua salva!' : reviewing ? 'Revisão aprovada!' : 'Aula concluída!')
      : 'A aula ainda não foi aprovada. Revise o conteúdo e tente novamente.';
    const resultEyebrow = qualified
      ? (reviewing && lowerThanBest ? 'MELHOR MARCA PRESERVADA' : reviewing ? 'REVISÃO APROVADA' : 'META ALCANÇADA')
      : (reviewing ? 'NOVA TENTATIVA' : 'TENTE DE NOVO');
    const resultDetail = lowerThanBest
      ? `Nesta tentativa: ${score.percent}% · ${score.correct} de ${score.total} acertos`
      : `${score.correct} de ${score.total} acertos nesta tentativa`;
    const resultTimeMarkup = bestTime > 0
      ? `<p class="lesson-result-time">⏱ Melhor tempo: <strong>${formatDuration(bestTime)}</strong></p>`
      : '';
    const nextIsOpen = adjacent.next && state.lessonStatus(course.id, adjacent.next.id) !== 'locked';
    const resultActions = reviewing
      ? `<div class="result-actions"><button type="button" class="primary-btn lesson-main-action" data-action="redo-lesson" data-course-id="${util.escapeHtml(course.id)}" data-lesson-id="${util.escapeHtml(lesson.id)}">Refazer a aula</button><button type="button" class="text-btn" data-action="back-to-course" data-course-id="${util.escapeHtml(course.id)}">Voltar à trilha</button></div>`
      : !qualified
        ? `<div class="result-actions"><button type="button" class="primary-btn lesson-main-action" data-action="retry-lesson" data-course-id="${util.escapeHtml(course.id)}" data-lesson-id="${util.escapeHtml(lesson.id)}">Tentar novamente</button><button type="button" class="text-btn" data-action="back-to-course" data-course-id="${util.escapeHtml(course.id)}">Voltar à trilha</button></div>`
        : `<div class="result-actions">${nextIsOpen ? `<button type="button" class="primary-btn lesson-main-action" data-open-lesson="${util.escapeHtml(adjacent.next.id)}">Próxima aula</button>` : '<p class="course-complete-message">Você concluiu todas as aulas desta trilha!</p>'}<button type="button" class="secondary-btn lesson-main-action" data-action="redo-lesson" data-course-id="${util.escapeHtml(course.id)}" data-lesson-id="${util.escapeHtml(lesson.id)}">Refazer aula</button><button type="button" class="text-btn" data-action="back-to-course" data-course-id="${util.escapeHtml(course.id)}">Voltar à trilha</button></div>`;
    const resultMarkup = `<section class="lesson-result ${qualified ? 'is-complete' : ''}"><div class="result-emblem" aria-hidden="true">${qualified ? '✓' : '×'}</div><p class="eyebrow">${resultEyebrow}</p><h3>${resultMessage}</h3><strong class="result-percent">${displayedBestPercent}%</strong><p class="result-best-label">${lowerThanBest ? 'Seu melhor resultado' : 'Sua melhor marca'}</p><p class="result-detail">${resultDetail}</p><div class="result-progress-track" role="progressbar" aria-label="Melhor porcentagem de acertos" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${displayedBestPercent}"><span style="width:${displayedBestPercent}%"></span></div>${resultTimeMarkup}${resultActions}</section>`;

    const answerRecord = stage === 'feedback' && currentExercise ? state.getAnswer(course.id, currentExercise.id) : null;
    const answerBannerMarkup = stage === 'feedback' && currentExercise && answerRecord ? renderAnswerBanner(course, module, lesson, currentExercise, answerRecord, score) : '';

    document.body.classList.toggle('lesson-preparation-mode', stage === 'intro');
    $('#lessonContainer').innerHTML = `<div class="game-lesson${stage === 'intro' ? ' is-preparation' : ''}" style="--course-color:${util.escapeHtml(course.color)}">
      <div class="game-topbar"><button type="button" class="back-btn game-back-btn" id="backCourse">Voltar à trilha</button><div class="game-top-copy"><span>${util.escapeHtml(course.title)} · ${util.escapeHtml(module.title)}</span></div></div>
      <header class="game-lesson-heading">${topLabel ? `<span class="lesson-type-label">${topLabel}</span>` : ''}<h2 id="lessonTitle">${util.escapeHtml(lesson.title)}</h2>${stage === 'intro' ? `<p>${util.escapeHtml(lesson.description)}</p>` : ''}</header>
      ${stage === 'intro' ? introMarkup : stage === 'result' ? resultMarkup : `${exerciseMarkup}${answerBannerMarkup}`}
    </div>`;
    if (currentExercise && currentExercise.type === 'practical') updatePreviewFor($(`[data-exercise-card="${CSS.escape(currentExercise.id)}"]`));
    if (stage === 'feedback') focusExercise(selectedExerciseId);
    global.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
  }

  function navigate(hash) {
    if (!hash.startsWith('#')) hash = `#${hash}`;
    if (global.location.hash === hash) route();
    else global.location.hash = hash;
  }
  function setActiveNav(section) {
    $$('.nav-link').forEach(link => {
      const isActive = link.dataset.section === section;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }
  function closeMobileMenu() {
    const button = $('#menuToggle');
    if (!button) return;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Abrir menu de navegação');
    $('.header')?.classList.remove('menu-open');
  }
  function route() {
    const hash = decodeURIComponent(global.location.hash || '#inicio');
    if (hash.startsWith('#aula/')) {
      document.body.classList.add('learning-mode');
      renderLessonPage(hash.slice('#aula/'.length));
      setActiveNav('');
      closeMobileMenu();
      renderHomeStats();
      return;
    }
    if (hash.startsWith('#desafio/')) {
      document.body.classList.add('learning-mode');
      const parts = hash.slice('#desafio/'.length).split('/');
      renderChallengePage(parts[0], parts[1]); setActiveNav(''); closeMobileMenu(); renderHomeStats(); return;
    }
    if (hash.startsWith('#curso/')) {
      document.body.classList.add('learning-mode');
      const courseId = hash.slice('#curso/'.length);
      if (!curriculum.getCourse(courseId)) { toast('Este curso não existe.', 'error'); navigate('#cursos'); return; }
      state.setActiveCourse(courseId);
      renderCourseDashboard(courseId);
      setActiveNav('');
      closeMobileMenu();
      renderHomeStats();
      return;
    }
    document.body.classList.remove('learning-mode', 'lesson-preparation-mode');
    $('#courseSite').hidden = true;
    $('#mainSite').hidden = false;
    const section = ['#inicio', '#cursos', '#sobre'].includes(hash) ? hash.slice(1) : 'inicio';
    setActiveNav(section);
    closeMobileMenu();
    renderCourseCards();
    const target = document.getElementById(section);
    if (target && hash !== '#inicio') target.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    else global.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
  }

  function getExerciseInput(exerciseId) {
    const card = $(`[data-exercise-card="${CSS.escape(exerciseId)}"]`);
    if (!card) return undefined;
    const list = $('[data-ordering-list]', card);
    if (list) return $$('.ordering-item', list).map(item => item.dataset.itemId);
    const textarea = $(`[data-answer-input="${CSS.escape(exerciseId)}"]`, card);
    if (textarea) return textarea.value;
    const selected = $('input[type="radio"]:checked', card);
    if (selected) return selected.value;
    return undefined;
  }
  function updatePreviewFor(card) {
    const textarea = $('.practical-input', card);
    const iframe = $('[data-preview]', card);
    if (!textarea || !iframe) return;
    const kind = iframe.dataset.previewKind;
    let content = textarea.value;
    if (kind === 'css') content = `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;padding:16px;color:#182030}.sample-card{padding:16px;border:1px solid #cbd5e1;border-radius:10px;margin-top:12px} ${content}</style></head><body><h2>Prévia do cartão</h2><article class="sample-card"><h3>Exemplo de componente</h3><p>Este texto permite visualizar os estilos definidos.</p><a href="#preview">Link de exemplo</a></article></body></html>`;
    iframe.srcdoc = content;
  }
  function focusExercise(exerciseId) {
    const feedback = $('#answerFeedbackBanner') || $(`#exercise-${CSS.escape(exerciseId)} [data-feedback]`);
    if (feedback) {
      feedback.setAttribute('tabindex', '-1');
      feedback.focus({ preventScroll: true });
    }
  }
  function submitExercise(button) {
    const courseId = button.dataset.courseId;
    const lessonId = button.dataset.lessonId;
    const exerciseId = button.dataset.exerciseId;
    const location = curriculum.getLocation(lessonId);
    if (!location || location.course.id !== courseId) return;
    const lesson = location.lesson;
    const exercise = lesson.exercises.find(item => item.id === exerciseId);
    if (!exercise) return;
    const existing = state.getAnswer(courseId, exerciseId);
    if (existing && existing.submitted) return;
    const value = getExerciseInput(exerciseId);
    if (value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) {
      toast('Responda à atividade antes de enviar.', 'warning');
      const card = $(`[data-exercise-card="${CSS.escape(exerciseId)}"]`);
      $('input:not([disabled]), textarea:not([disabled]), button[data-action="move-order"]:not([disabled])', card)?.focus();
      return;
    }
    const result = checks.evaluate(exercise, value);
    const feedback = result.correct ? (result.explanation || 'Resposta correta!') : (result.hint || 'Resposta registrada. Confira a resposta esperada.');
    const record = state.recordAnswer(courseId, lessonId, exercise, value, { ...result, explanation: feedback, hint: feedback });
    if (record.already) return;
    const score = state.getLessonScore(courseId, lesson);
    renderLessonPage(lessonId, 'feedback', exerciseId);
    renderHomeStats();
    renderCourseCards();
  }
  function completeLessonFromButton(button) {
    const courseId = button.dataset.courseId;
    const lessonId = button.dataset.lessonId;
    const location = curriculum.getLocation(lessonId);
    if (!location || location.course.id !== courseId) return;
    const lesson = location.lesson;
    if (!state.canComplete(courseId, lesson)) {
      const score = state.getLessonScore(courseId, lesson);
      toast(score.complete ? 'A aula ainda não foi aprovada. Continue praticando.' : 'Responda todas as perguntas antes de concluir a aula.', 'warning');
      return;
    }
    const result = state.completeLesson(courseId, lesson);
    if (!result.ok) { toast('A aula ainda não foi aprovada. Continue praticando.', 'warning'); return; }
    renderLessonPage(lessonId, 'result');
    renderHomeStats();
    renderCourseCards();
    toast(result.already ? 'Esta aula já estava concluída; seu progresso foi mantido.' : `Aula concluída! +${result.reward} XP.`, 'success');
  }
  function showAchievements() {
    const list = state.getAchievementList();
    const content = list.map(item => `<li class="achievement-row ${item.unlocked ? 'is-unlocked' : 'is-locked'}"><span class="achievement-symbol" aria-hidden="true">${item.unlocked ? '✦' : '◇'}</span><div><strong>${util.escapeHtml(item.title)}</strong><p>${util.escapeHtml(item.description)}</p></div><span class="achievement-date">${item.unlocked ? util.escapeHtml(item.date || 'Conquistada') : 'Bloqueada'}</span></li>`).join('');
    const dialog = document.createElement('dialog');
    dialog.className = 'achievements-dialog';
    dialog.innerHTML = `<form method="dialog"><div class="dialog-header"><div><p class="eyebrow">SUA EVOLUÇÃO</p><h2>Conquistas</h2><p>As conquistas são liberadas com base nas atividades registradas.</p></div><button class="icon-btn dialog-close" value="close" aria-label="Fechar conquistas">✕</button></div><ul class="achievement-list">${content}</ul></form>`;
    document.body.appendChild(dialog);
    dialog.addEventListener('close', () => dialog.remove(), { once: true });
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.showModal();
  }

  function handleClick(event) {
    const target = event.target.closest('button, a');
    if (!target) return;
    if (target.matches('#menuToggle')) {
      const open = target.getAttribute('aria-expanded') !== 'true';
      target.setAttribute('aria-expanded', String(open));
      target.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
      $('.header').classList.toggle('menu-open', open);
      return;
    }
    if (target.matches('#accountBtn')) { event.preventDefault(); toast('A área de conta ainda está em desenvolvimento. Seu progresso continua salvo neste navegador.'); return; }
    if (target.matches('#startBtn')) { navigate('#cursos'); return; }
    if (target.matches('#backCourses')) { navigate('#cursos'); return; }
    if (target.matches('#backCourse')) { navigate(`#curso/${state.raw.activeCourse || 'html'}`); return; }
    if (target.hasAttribute('data-open-course')) { navigate(`#curso/${target.dataset.openCourse}`); return; }
    if (target.hasAttribute('data-open-lesson')) { navigate(`#aula/${target.dataset.openLesson}`); return; }
    if (target.hasAttribute('data-open-challenge')) { const [courseId, moduleId] = target.dataset.openChallenge.split('|'); navigate(`#desafio/${courseId}/${moduleId}`); return; }
    if (target.dataset.action === 'submit-module-challenge') {
      const code = $('#moduleChallengeCode')?.value || ''; const feedback = $('#moduleChallengeFeedback');
      if (!validateModuleChallenge(target.dataset.courseId, code)) { if (feedback) { feedback.className = 'challenge-feedback is-error'; feedback.textContent = 'Ainda não está certo. Confira a estrutura do código e tente novamente.'; } return; }
      const result = state.completeChallenge(target.dataset.courseId, target.dataset.moduleId);
      if (result.ok) { if (feedback) { feedback.className = 'challenge-feedback is-success'; feedback.textContent = result.already ? 'Desafio já concluído.' : `Código validado! +${result.reward} XP`; } toast(result.already ? 'Este bônus já foi resgatado.' : `Desafio concluído: +${result.reward} XP`, 'success'); renderChallengePage(target.dataset.courseId, target.dataset.moduleId); }
      return;
    }
    if (target.matches('#resetProgressBtn')) {
      const dialog = $('#resetDialog');
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else if (global.confirm('Apagar todo o progresso salvo neste navegador?')) { state.reset(); route(); toast('O progresso local foi reiniciado.', 'success'); }
      return;
    }
    if (target.matches('#confirmResetBtn')) {
      event.preventDefault();
      state.reset();
      $('#resetDialog').close();
      navigate('#cursos');
      toast('O progresso local foi reiniciado.', 'success');
      return;
    }
    if (target.dataset.action === 'start-exercises') { renderLessonPage(target.dataset.lessonId, 'exercise'); return; }
    if (target.dataset.action === 'next-exercise') { renderLessonPage(target.dataset.lessonId, 'exercise'); return; }
    if (target.dataset.action === 'show-result') { renderLessonPage(target.dataset.lessonId, 'result'); return; }
    if (target.dataset.action === 'show-hint') {
      const hint = $('#answerBannerHint');
      if (hint) {
        const reveal = hint.hidden;
        hint.hidden = !reveal;
        target.setAttribute('aria-expanded', String(reveal));
        target.textContent = reveal ? 'Ocultar dica' : 'Ver dica';
      }
      return;
    }
    if (target.dataset.action === 'submit-exercise') { submitExercise(target); return; }
    if (target.dataset.action === 'complete-lesson') { completeLessonFromButton(target); return; }
    if (target.dataset.action === 'retry-lesson' || target.dataset.action === 'redo-lesson') {
      const location = curriculum.getLocation(target.dataset.lessonId);
      const courseId = target.dataset.courseId;
      if (!location || location.course.id !== courseId) return;
      if (state.resetLessonAttempt(courseId, location.lesson)) renderLessonPage(location.lesson.id, 'intro');
      return;
    }
    if (target.dataset.action === 'back-to-course') { navigate(`#curso/${target.dataset.courseId}`); return; }
    if (target.dataset.action === 'reveal-solution') {
      const id = target.dataset.exerciseId;
      const courseId = state.raw.activeCourse;
      if (state.revealSolution(courseId, id)) {
        const location = curriculum.getLocation(global.location.hash.startsWith('#aula/') ? global.location.hash.slice(6) : '');
        if (location) renderLessonPage(location.lesson.id);
        $(`#exercise-${CSS.escape(id)} .solution-box`)?.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth', block: 'center' });
      }
      return;
    }
    if (target.dataset.action === 'move-order') {
      const card = target.closest('[data-exercise-card]');
      const list = $('[data-ordering-list]', card);
      const item = target.closest('.ordering-item');
      if (!list || !item) return;
      if (target.dataset.direction === 'up' && item.previousElementSibling) list.insertBefore(item, item.previousElementSibling);
      else if (target.dataset.direction === 'down' && item.nextElementSibling) list.insertBefore(item.nextElementSibling, item);
      const ids = $$('.ordering-item', list).map(node => node.dataset.itemId);
      state.saveDraftOrder(state.raw.activeCourse, list.dataset.orderingList, ids);
      $$('.ordering-item', list).forEach((node, index, array) => {
        const up = $('[data-direction="up"]', node);
        const down = $('[data-direction="down"]', node);
        up.disabled = index === 0; down.disabled = index === array.length - 1;
        up.setAttribute('aria-label', `Mover trecho ${index + 1} para cima`);
        down.setAttribute('aria-label', `Mover trecho ${index + 1} para baixo`);
      });
      return;
    }
    if (target.dataset.action === 'copy-example') {
      const lesson = curriculum.getLesson(target.dataset.lessonId);
      if (!lesson) return;
      util.copyText(lesson.example.code).then(ok => toast(ok ? 'Código copiado.' : 'Não foi possível copiar automaticamente. Selecione o código e copie manualmente.', ok ? 'success' : 'warning'));
      return;
    }
    if (target.dataset.action === 'show-achievements') { showAchievements(); return; }
  }
  function handleChange(event) {
    const input = event.target;
    const exerciseId = input.dataset.answerInput || (input.matches('input[type="radio"]') ? input.name : null);
    if (!exerciseId) return;
    const card = input.closest('[data-exercise-card]');
    if (!card || input.disabled) return;
    if ((state.getAnswer(state.raw.activeCourse, exerciseId) || {}).submitted) return;
    let value;
    if (input.matches('input[type="radio"]')) {
      const selected = $('input[type="radio"]:checked', card);
      value = selected ? selected.value : '';
      $$('.choice-option', card).forEach(label => label.classList.toggle('is-selected', $('input', label).checked));
    } else value = input.value;
    state.saveDraftAnswer(state.raw.activeCourse, exerciseId, value);
    if (input.classList.contains('practical-input')) updatePreviewFor(card);
  }
  function handleInput(event) {
    const input = event.target;
    const exerciseId = input.dataset.answerInput;
    if (!exerciseId || input.disabled || (state.getAnswer(state.raw.activeCourse, exerciseId) || {}).submitted) return;
    state.saveDraftAnswer(state.raw.activeCourse, exerciseId, input.value);
    if (input.classList.contains('practical-input')) updatePreviewFor(input.closest('[data-exercise-card]'));
  }
  function bindNavigationObserver() {
    if (!('IntersectionObserver' in global)) return;
    const sections = $$('.page-section');
    if (!sections.length) return;
    const observer = new IntersectionObserver(entries => {
      const mostVisible = entries.filter(item => item.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!mostVisible || $('#mainSite').hidden) return;
      setActiveNav(mostVisible.target.id);
    }, { threshold: [0.25, 0.45, 0.65] });
    sections.forEach(section => observer.observe(section));
  }
  function init() {
    if (!curriculum.rawCourses.length) { toast('Os currículos não foram carregados. Confira os arquivos da pasta data/.', 'error'); return; }
    if (curriculum.issues.length) console.error('Problemas no currículo:', curriculum.issues);
    $('#homeLink')?.addEventListener('click', event => { event.preventDefault(); navigate('#inicio'); });
    document.addEventListener('click', handleClick);
    document.addEventListener('change', handleChange);
    document.addEventListener('input', handleInput);
    global.addEventListener('hashchange', route);
    global.addEventListener('resize', () => drawLearningPathConnections(), { passive: true });
    global.addEventListener('lordcode:storage-warning', () => toast('Não foi possível salvar o progresso neste navegador. Libere espaço ou confira as permissões de armazenamento.', 'warning'));
    document.addEventListener('visibilitychange', () => { if (!document.hidden && !prefersReducedMotion.matches) renderHeroExample(activeHeroExample); });
    $('#resetDialog')?.addEventListener('click', event => { if (event.target === $('#resetDialog')) $('#resetDialog').close(); });
    renderCourseCards();
    startHeroRotation();
    bindNavigationObserver();
    if (state.storageWarning) toast('O armazenamento local não pôde ser lido. O site está funcionando sem recuperar esse progresso.', 'warning');
    route();
  }

  LC.app = { init, route, toast, renderCourseDashboard, renderLessonPage, renderCourseCards };
})(window);
