(function (global) {
  'use strict';
  const util = global.LordCode.util;
  const checks = global.LordCode.checks;
  const state = global.LordCode.state;
  const h = util.escapeHtml;

  function codeBlock(code, language) {
    return `<pre class="code-block"><code class="language-${h(String(language || '').toLowerCase())}">${h(code || '')}</code></pre>`;
  }
  function getDraft(record) {
    if (!record) return undefined;
    if (Object.prototype.hasOwnProperty.call(record, 'draftAnswer')) return record.draftAnswer;
    if (Object.prototype.hasOwnProperty.call(record, 'value')) return record.value;
    return undefined;
  }
  function renderChoices(exercise, record, locked) {
    const selected = getDraft(record);
    return `<fieldset class="choice-list" ${locked ? 'disabled' : ''}><legend class="sr-only">Selecione uma alternativa</legend>${(exercise.options || []).map(option => `
      <label class="choice-option ${String(selected) === option.id ? 'is-selected' : ''} ${locked && record.correct && String(selected) === option.id ? 'is-answer-correct' : ''}">
        <input type="radio" name="${h(exercise.id)}" value="${h(option.id)}" ${String(selected) === option.id ? 'checked' : ''} ${locked ? 'disabled' : ''}>
        <span class="choice-letter" aria-hidden="true">${h(option.id.toUpperCase())}</span><span>${h(option.text)}</span></label>`).join('')}</fieldset>`;
  }
  function renderOrdering(exercise, record, locked) {
    const items = exercise.items || [];
    let orderIds;
    if (locked && Array.isArray(record.value)) orderIds = record.value.slice();
    else orderIds = record && Array.isArray(record.draftOrder) ? record.draftOrder.slice() : checks.seededOrder(items, exercise.id).map(item => item.id);
    const ids = new Set(items.map(item => item.id));
    if (orderIds.length !== items.length || orderIds.some(id => !ids.has(id)) || new Set(orderIds).size !== items.length) orderIds = checks.seededOrder(items, exercise.id).map(item => item.id);
    const map = new Map(items.map(item => [item.id, item]));
    return `<p class="field-hint">Organize os trechos usando os controles de subir e descer.</p>
      <ol class="ordering-list" data-ordering-list="${h(exercise.id)}">${orderIds.map((id, index) => {
        const item = map.get(id);
        return `<li class="ordering-item" data-item-id="${h(id)}"><code>${h(item.text)}</code><div class="ordering-controls"><button type="button" class="icon-btn" data-action="move-order" data-direction="up" data-exercise-id="${h(exercise.id)}" aria-label="Mover trecho ${index + 1} para cima" ${index === 0 || locked ? 'disabled' : ''}><span>Subir</span></button><button type="button" class="icon-btn" data-action="move-order" data-direction="down" data-exercise-id="${h(exercise.id)}" aria-label="Mover trecho ${index + 1} para baixo" ${index === orderIds.length - 1 || locked ? 'disabled' : ''}><span>Descer</span></button></div></li>`;
      }).join('')}</ol>`;
  }
  function renderPractical(exercise, record, locked) {
    const draft = getDraft(record);
    const value = typeof draft === 'string' ? draft : '';
    const preview = exercise.preview;
    const previewMarkup = preview ? `<div class="preview-panel"><div class="preview-heading"><span>Pré-visualização</span><span>Scripts desativados</span></div><iframe sandbox="" title="Pré-visualização do resultado do exercício" data-preview="${h(exercise.id)}" data-preview-kind="${h(preview)}"></iframe></div>` : '';
    return `<ul class="criteria-list">${(exercise.requirements || []).map(item => `<li><span aria-hidden="true">□</span>${h(item.label)}</li>`).join('')}</ul>
      <label class="field-label" for="answer-${h(exercise.id)}">Seu código</label>
      <textarea id="answer-${h(exercise.id)}" class="code-input practical-input" data-answer-input="${h(exercise.id)}" rows="7" spellcheck="false" autocapitalize="off" autocomplete="off" placeholder="Digite seu código aqui..." ${locked ? 'disabled' : ''}>${h(value)}</textarea>${previewMarkup}`;
  }
  function renderInputExercise(exercise, record, locked) {
    const draft = getDraft(record);
    const value = typeof draft === 'string' ? draft : '';
    return `${exercise.code ? codeBlock(exercise.code, '') : ''}
      <label class="field-label" for="answer-${h(exercise.id)}">Sua resposta</label>
      <input id="answer-${h(exercise.id)}" class="text-answer" type="text" data-answer-input="${h(exercise.id)}" value="${h(value)}" autocomplete="off" spellcheck="false" placeholder="Digite sua resposta..." ${locked ? 'disabled' : ''}>`;
  }
  function renderFeedback(record) {
    if (!record || !record.submitted) return '<p class="exercise-feedback" aria-live="polite" data-feedback hidden></p>';
    const correct = record.correct === true;
    const message = record.feedback || (correct ? 'Resposta correta.' : 'Resposta registrada. Confira a solução esperada.');
    return `<p class="exercise-feedback ${correct ? 'is-correct' : 'is-incorrect'}" aria-live="polite" data-feedback tabindex="-1"><strong>${correct ? 'Resposta correta!' : 'Resposta incorreta.'}</strong> ${h(message)}</p>`;
  }
  function renderSolution(exercise, record) {
    if (!record || !record.submitted || record.correct) return '';
    const solution = checks.solutionOf(exercise);
    const isCode = ['ordering', 'practical'].includes(exercise.type);
    return `<div class="solution-box"><h4>Resposta esperada</h4>${isCode ? codeBlock(solution, '') : `<p>${h(solution)}</p>`}<p>${h(exercise.explanation || 'Use esta resposta para revisar o conceito antes de continuar.')}</p></div>`;
  }
  function renderExercise(exercise, courseId, lessonId) {
    const record = state.getAnswer(courseId, exercise.id);
    const locked = !!(record && record.submitted);
    const typeLabels = {
      'multiple-choice': 'Múltipla escolha', 'code-reading': 'Leitura de código', 'predict-output': 'Previsão de resultado',
      'fill-code': 'Completar código', 'ordering': 'Ordenação', 'practical': 'Tarefa prática'
    };
    let body = '';
    if (exercise.type === 'multiple-choice' || exercise.type === 'code-reading') body = renderChoices(exercise, record, locked);
    else if (exercise.type === 'predict-output' || exercise.type === 'fill-code') body = renderInputExercise(exercise, record, locked);
    else if (exercise.type === 'ordering') body = renderOrdering(exercise, record, locked);
    else if (exercise.type === 'practical') body = renderPractical(exercise, record, locked);
    else body = '<p>Este tipo de exercício ainda não está disponível.</p>';
    return `<article class="exercise-card ${locked ? (record.correct ? 'is-submitted-correct' : 'is-submitted-incorrect') : ''}" id="exercise-${h(exercise.id)}" data-exercise-card="${h(exercise.id)}">
      <div class="exercise-card-heading"><span class="exercise-type">${h(typeLabels[exercise.type] || 'Exercício')}</span></div>
      <h3>${h(exercise.title || 'Desafio')}</h3>
      <p class="exercise-prompt">${h(exercise.prompt || '')}</p>
      ${exercise.code && ['multiple-choice','code-reading'].includes(exercise.type) ? codeBlock(exercise.code, '') : ''}
      ${body}
      ${locked ? '' : `<div class="exercise-actions"><button type="button" class="primary-btn small-btn" data-action="submit-exercise" data-course-id="${h(courseId)}" data-lesson-id="${h(lessonId)}" data-exercise-id="${h(exercise.id)}">Enviar resposta</button></div>`}
      
    </article>`;
  }

  global.LordCode = global.LordCode || {};
  global.LordCode.exercises = { renderExercise };
})(window);
