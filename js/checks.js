(function (global) {
  'use strict';
  const util = global.LordCode.util;
  function normalize(value) {
    return util.normalizeWhitespace(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  function sameText(a, b) { return normalize(a) === normalize(b); }
  function seededOrder(items, seed) { return util.seededOrder(items, seed); }
  function criteriaOf(exercise) {
    if (exercise.type === 'practical') return (exercise.requirements || []).map(item => item.label);
    if (exercise.type === 'ordering') return ['Organize todos os trechos na ordem correta.'];
    return ['Envie uma resposta que corresponda à solução esperada.'];
  }
  function solutionOf(exercise) {
    if (exercise.type === 'ordering') return exercise.solution || (exercise.items || []).map(item => item.text).join('\n');
    if (exercise.type === 'multiple-choice' || exercise.type === 'code-reading') {
      const answer = (exercise.options || []).find(item => item.id === exercise.answer);
      return answer ? answer.text : String(exercise.solution || '');
    }
    if (exercise.type === 'predict-output' || exercise.type === 'fill-code') return String(exercise.solution ?? exercise.answer ?? '');
    return String(exercise.solution || '');
  }
  function evaluate(exercise, value) {
    let correct = false;
    let hint = 'Revise o conteúdo da aula, confira o enunciado e tente novamente.';
    if (exercise.type === 'multiple-choice' || exercise.type === 'code-reading') {
      correct = String(value ?? '') === String(exercise.answer);
    } else if (exercise.type === 'predict-output' || exercise.type === 'fill-code') {
      const accepted = Array.isArray(exercise.accepted) ? exercise.accepted : [exercise.answer];
      correct = accepted.some(item => sameText(value, item));
      if (exercise.type === 'fill-code') hint = 'Pense em qual palavra, atributo ou operador completa a sintaxe sem alterar o restante do trecho.';
      else hint = 'Revise os valores e a ordem em que o trecho é interpretado.';
    } else if (exercise.type === 'ordering') {
      const expected = exercise.answerOrder || [];
      correct = Array.isArray(value) && value.length === expected.length && value.every((item, index) => item === expected[index]);
      hint = 'Confira a estrutura externa primeiro e depois organize os elementos que precisam ficar dentro dela.';
    } else if (exercise.type === 'practical') {
      const text = String(value ?? '').toLowerCase();
      const missing = [];
      for (const requirement of (exercise.requirements || [])) {
        let pass = true;
        if (requirement.contains) pass = text.includes(String(requirement.contains).toLowerCase());
        if (requirement.anyOf) pass = requirement.anyOf.some(token => text.includes(String(token).toLowerCase()));
        if (!pass) missing.push(requirement.label);
      }
      correct = missing.length === 0 && (exercise.requirements || []).length > 0;
      if (missing.length) hint = `Ainda falta atender a estes critérios: ${missing.join('; ')}.`;
    }
    return {
      correct,
      explanation: correct ? (exercise.explanation || 'Resposta correta.') : '',
      hint: correct ? '' : hint,
      solution: solutionOf(exercise)
    };
  }
  global.LordCode = global.LordCode || {};
  global.LordCode.checks = { normalize, sameText, seededOrder, criteriaOf, solutionOf, evaluate };
})(window);
