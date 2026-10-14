(function (global) {
  'use strict';
  const STORAGE_KEY = 'lordcode:v1';
  const VERSION = 3;
  const PASS_PERCENT = 60;
  const curriculum = global.LordCode.curriculum;
  const util = global.LordCode.util;
  let storageWarning = false;

  function emptyState() {
    const courses = {};
    for (const course of curriculum.rawCourses) courses[course.id] = { started: [], completed: [], reviewing: [], rewardedAnswers: [], answers: {}, lessonTimes: {}, lessonBestScores: {}, challenges: [] };
    return { version: VERSION, activeCourse: null, courses, attempts: 0, xp: 0, achievements: {}, activity: [], prefs: {} };
  }
  function isRecord(value) { return !!value && typeof value === 'object' && !Array.isArray(value); }
  function validIdArray(value, allowed) {
    if (!Array.isArray(value)) return [];
    return [...new Set(value.filter(id => typeof id === 'string' && allowed.has(id)))];
  }
  function sanitize(raw) {
    const clean = emptyState();
    if (!isRecord(raw) || ![1, 2, VERSION].includes(raw.version)) return clean;
    const sourceVersion = raw.version;
    clean.activeCourse = typeof raw.activeCourse === 'string' && curriculum.getCourse(raw.activeCourse) ? raw.activeCourse : null;
    clean.attempts = Number.isFinite(raw.attempts) && raw.attempts >= 0 ? Math.floor(raw.attempts) : 0;
    clean.xp = Number.isFinite(raw.xp) && raw.xp >= 0 ? Math.floor(raw.xp) : 0;
    for (const course of curriculum.rawCourses) {
      const courseRaw = isRecord(raw.courses) && isRecord(raw.courses[course.id]) ? raw.courses[course.id] : {};
      const lessons = curriculum.getCourseLessons(course.id);
      const lessonIds = new Set(lessons.map(lesson => lesson.id));
      const exercisesById = new Map(lessons.flatMap(lesson => (lesson.exercises || []).map(exercise => [exercise.id, exercise])));
      const exerciseIds = new Set(exercisesById.keys());
      const answers = {};
      const legacyRewardedAnswers = new Set();
      if (isRecord(courseRaw.answers)) {
        for (const [exerciseId, record] of Object.entries(courseRaw.answers)) {
          if (!exerciseIds.has(exerciseId) || !isRecord(record)) continue;
          const safe = {
            attempts: Number.isFinite(record.attempts) && record.attempts >= 0 ? Math.floor(record.attempts) : 0,
            submitted: false,
            correct: false,
            lastCorrect: false,
            solutionRevealed: false
          };
          if (sourceVersion === 1) {
            // Migração do modelo antigo: respostas que já eram corretas ficam bloqueadas;
            // respostas erradas voltam como rascunhos para começarem a usar a regra de envio único.
            const legacyValue = record.correct === true && 'firstCorrectValue' in record && isSafeValue(record.firstCorrectValue)
              ? record.firstCorrectValue
              : ('draftAnswer' in record && isSafeValue(record.draftAnswer) ? record.draftAnswer : (isSafeValue(record.value) ? record.value : undefined));
            if (legacyValue !== undefined) {
              if (record.correct === true) {
                safe.value = legacyValue;
                safe.draftAnswer = legacyValue;
                safe.submitted = true;
              } else {
                safe.draftAnswer = legacyValue;
              }
            }
          } else {
            if ('value' in record && isSafeValue(record.value)) safe.value = record.value;
            if ('draftAnswer' in record && isSafeValue(record.draftAnswer)) safe.draftAnswer = record.draftAnswer;
            safe.submitted = record.submitted === true && Object.prototype.hasOwnProperty.call(safe, 'value');
            if (Array.isArray(record.draftOrder)) safe.draftOrder = record.draftOrder.filter(id => typeof id === 'string').slice(0, 100);
          }
          const exercise = exercisesById.get(exerciseId);
          const evaluate = global.LordCode && global.LordCode.checks && global.LordCode.checks.evaluate;
          if (exercise && evaluate && safe.submitted) {
            const result = evaluate(exercise, safe.value);
            safe.lastCorrect = !!result.correct;
            safe.correct = !!result.correct;
            safe.feedback = (result.correct ? result.explanation : result.hint || 'Resposta registrada.') || '';
            if (sourceVersion < VERSION && result.correct) legacyRewardedAnswers.add(exerciseId);
          }
          if (typeof record.feedback === 'string' && (sourceVersion === VERSION || !safe.submitted)) safe.feedback = record.feedback.slice(0, 500);
          if (typeof record.firstCorrectAt === 'string') safe.firstCorrectAt = record.firstCorrectAt.slice(0, 20);
          if (safe.submitted) {
            safe.attempts = Math.max(1, safe.attempts);
          } else {
            safe.correct = false;
            safe.lastCorrect = false;
          }
          answers[exerciseId] = safe;
        }
      }
      const completedCandidates = validIdArray(courseRaw.completed, lessonIds);
      const candidateSet = new Set(completedCandidates);
      const reviewingCandidates = new Set(validIdArray(courseRaw.reviewing, lessonIds));
      const sequential = [];
      const invalidCompleted = new Set();
      const migratedReviewing = new Set();
      let sequenceOpen = true;
      for (const lesson of lessons) {
        if (!candidateSet.has(lesson.id)) {
          sequenceOpen = false;
          continue;
        }
        if (!sequenceOpen) {
          invalidCompleted.add(lesson.id);
          continue;
        }
        // Preserva uma aprovação válida da versão anterior (2/2 corretas),
        // mas pede as três novas questões na próxima visita.
        if (sourceVersion < VERSION) {
          const legacyExercises = (lesson.exercises || []).slice(0, 2);
          const legacyAnswers = legacyExercises.map(exercise => answers[exercise.id]);
          const legacyComplete = legacyExercises.length === 2 && legacyAnswers.every(answer => !!(answer && answer.submitted === true));
          const legacyCorrect = legacyAnswers.filter(answer => !!(answer && answer.submitted && answer.correct)).length;
          if (legacyComplete && legacyCorrect >= Math.ceil(legacyExercises.length * PASS_PERCENT / 100)) {
            sequential.push(lesson.id);
            migratedReviewing.add(lesson.id);
            continue;
          }
        }
        // Uma revisão em andamento não apaga uma aprovação conquistada anteriormente.
        if (reviewingCandidates.has(lesson.id)) {
          sequential.push(lesson.id);
          continue;
        }
        const lessonExercises = lesson.exercises || [];
        const lessonAnswers = lessonExercises.map(exercise => answers[exercise.id]);
        const allSubmitted = lessonAnswers.length > 0 && lessonAnswers.every(answer => !!(answer && answer.submitted === true));
        const correctCount = lessonAnswers.filter(answer => !!(answer && answer.submitted && answer.correct)).length;
        const hasPassingScore = allSubmitted && correctCount >= Math.ceil(lessonExercises.length * PASS_PERCENT / 100);
        if (!hasPassingScore) {
          invalidCompleted.add(lesson.id);
          sequenceOpen = false;
          continue;
        }
        sequential.push(lesson.id);
      }
      // Apaga tentativas antigas de aulas que haviam sido marcadas como concluídas sem atingir a meta atual.
      for (const lessonId of invalidCompleted) {
        const lesson = curriculum.getLesson(lessonId);
        for (const exercise of (lesson && lesson.exercises) || []) delete answers[exercise.id];
      }
      const rewardedAnswers = sourceVersion >= VERSION
        ? validIdArray(courseRaw.rewardedAnswers, exerciseIds)
        : [...legacyRewardedAnswers];
      const moduleIds = new Set(course.modules.map(module => module.id));
      const lessonTimes = {};
      if (isRecord(courseRaw.lessonTimes)) for (const [id, seconds] of Object.entries(courseRaw.lessonTimes)) if (lessonIds.has(id) && Number.isFinite(seconds) && seconds > 0) lessonTimes[id] = Math.min(86400, Math.floor(seconds));
      const lessonBestScores = {};
      if (isRecord(courseRaw.lessonBestScores)) {
        for (const [id, score] of Object.entries(courseRaw.lessonBestScores)) {
          if (lessonIds.has(id) && Number.isFinite(score) && score >= 0 && score <= 100) lessonBestScores[id] = Math.floor(score);
        }
      }
      // Compatibilidade com progresso já salvo: recupera a marca das aulas concluídas
      // que ainda não estavam em revisão. Para tentativas antigas em andamento, a marca
      // anterior não pode ser reconstruída caso nunca tenha sido salva.
      for (const lesson of lessons) {
        if (Object.prototype.hasOwnProperty.call(lessonBestScores, lesson.id) || !sequential.includes(lesson.id) || reviewingCandidates.has(lesson.id) || migratedReviewing.has(lesson.id)) continue;
        const lessonExercises = lesson.exercises || [];
        const lessonAnswers = lessonExercises.map(exercise => answers[exercise.id]);
        if (!lessonExercises.length || !lessonAnswers.every(answer => !!(answer && answer.submitted))) continue;
        const correctCount = lessonAnswers.filter(answer => answer.correct).length;
        lessonBestScores[lesson.id] = Math.round(correctCount / lessonExercises.length * 100);
      }
      const challenges = validIdArray(courseRaw.challenges, moduleIds).filter(moduleId => { const module = course.modules.find(item => item.id === moduleId); return module && module.lessons.every(lesson => sequential.includes(lesson.id)); });
      const validReviewing = [...new Set([...reviewingCandidates, ...migratedReviewing])].filter(lessonId => sequential.includes(lessonId));
      clean.courses[course.id] = {
        started: validIdArray(courseRaw.started, lessonIds),
        completed: sequential,
        reviewing: validReviewing,
        rewardedAnswers,
        answers, lessonTimes, lessonBestScores, challenges
      };
    }
    if (isRecord(raw.achievements)) {
      for (const [id, data] of Object.entries(raw.achievements)) {
        if (!/^[a-z0-9-]{1,100}$/i.test(id) || !isRecord(data)) continue;
        clean.achievements[id] = { date: typeof data.date === 'string' ? data.date.slice(0, 10) : util.localDateKey() };
      }
    }
    clean.activity = Array.isArray(raw.activity)
      ? [...new Set(raw.activity.filter(date => typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)))].sort().slice(-400)
      : [];
    for (const course of curriculum.rawCourses) {
      const lessons = curriculum.getCourseLessons(course.id);
      if (!lessons.every(lesson => clean.courses[course.id].completed.includes(lesson.id))) delete clean.achievements[`course-${course.id}`];
      for (const module of course.modules) {
        if (!module.lessons.every(lesson => clean.courses[course.id].completed.includes(lesson.id))) delete clean.achievements[`module-${module.id}`];
      }
    }
    if (!curriculum.getAllLessons().some(lesson => clean.courses[curriculum.getLocation(lesson.id).course.id].completed.includes(lesson.id))) delete clean.achievements['first-lesson'];
    clean.prefs = isRecord(raw.prefs) ? { reducedMotion: raw.prefs.reducedMotion === true } : {};
    return clean;
  }
  function isSafeValue(value, depth = 0) {
    if (depth > 4) return false;
    if (value === null || ['string', 'number', 'boolean'].includes(typeof value)) return typeof value !== 'string' || value.length <= 10000;
    if (Array.isArray(value)) return value.length <= 100 && value.every(item => isSafeValue(item, depth + 1));
    return false;
  }
  let data = emptyState();
  try {
    const saved = global.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      data = sanitize(parsed);
      if (parsed.version !== VERSION) {
        try { global.localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
        catch (_) { storageWarning = true; }
      }
    }
  } catch (_) {
    storageWarning = true;
    data = emptyState();
  }

  function save() {
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (_) {
      if (!storageWarning) {
        storageWarning = true;
        try { global.dispatchEvent(new CustomEvent('lordcode:storage-warning')); } catch (_) { /* ambiente sem CustomEvent */ }
      }
      return false;
    }
  }
  function courseState(courseId) {
    if (!data.courses[courseId]) data.courses[courseId] = { started: [], completed: [], reviewing: [], rewardedAnswers: [], answers: {}, lessonTimes: {}, lessonBestScores: {}, challenges: [] };
    if (!Array.isArray(data.courses[courseId].reviewing)) data.courses[courseId].reviewing = [];
    if (!Array.isArray(data.courses[courseId].rewardedAnswers)) data.courses[courseId].rewardedAnswers = [];
    return data.courses[courseId];
  }
  function recordActivity() {
    const today = util.localDateKey();
    if (!data.activity.includes(today)) data.activity.push(today);
    data.activity = [...new Set(data.activity)].sort().slice(-400);
  }
  function currentStreak() {
    if (!data.activity.length) return 0;
    const dates = new Set(data.activity);
    const today = util.localDateKey();
    const yesterdayDate = new Date(); yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    let cursor = dates.has(today) ? new Date() : (dates.has(util.localDateKey(yesterdayDate)) ? yesterdayDate : null);
    if (!cursor) return 0;
    let streak = 0;
    while (dates.has(util.localDateKey(cursor))) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }
  function award(id) {
    if (data.achievements[id]) return false;
    data.achievements[id] = { date: util.localDateKey() };
    return true;
  }
  function checkMilestones() {
    const completedCount = curriculum.getAllLessons().filter(lesson => isCompleted(curriculum.getLocation(lesson.id).course.id, lesson.id)).length;
    if (completedCount >= 1) award('first-lesson');
    if (currentStreak() >= 3) award('streak-3');
    if (currentStreak() >= 7) award('streak-7');
    if (data.xp >= 100) award('xp-100');
    for (const course of curriculum.rawCourses) {
      const lessons = curriculum.getCourseLessons(course.id);
      for (const module of course.modules) {
        if (module.lessons.length && module.lessons.every(lesson => isCompleted(course.id, lesson.id))) award(`module-${module.id}`);
      }
      if (lessons.length && lessons.every(lesson => isCompleted(course.id, lesson.id))) award(`course-${course.id}`);
    }
  }
  function isCompleted(courseId, lessonId) { return courseState(courseId).completed.includes(lessonId); }
  function isReviewing(courseId, lessonId) { return courseState(courseId).reviewing.includes(lessonId); }
  function lessonStatus(courseId, lessonId) {
    const list = curriculum.getCourseLessons(courseId);
    const index = list.findIndex(lesson => lesson.id === lessonId);
    if (index < 0) return 'locked';
    const cs = courseState(courseId);
    if (index > 0 && !cs.completed.includes(list[index - 1].id)) return 'locked';
    const course = curriculum.getCourse(courseId);
    if (course) {
      const currentLocation = curriculum.getLocation(lessonId);
      const moduleIndex = course.modules.findIndex(module => module.id === currentLocation?.module.id);
      if (!cs.completed.includes(lessonId) && moduleIndex > 0 && currentLocation?.module.lessons[0]?.id === lessonId) {
        const previousModule = course.modules[moduleIndex - 1];
        if (!previousModule.lessons.every(lesson => cs.completed.includes(lesson.id)) || !cs.challenges.includes(previousModule.id)) return 'locked';
      }
    }
    // A revisão é mantida internamente, mas não altera o estado visual de uma aula já concluída.
    if (cs.completed.includes(lessonId)) return 'completed';
    if (cs.reviewing.includes(lessonId)) return 'reviewing';
    if (cs.started.includes(lessonId)) return 'in-progress';
    return 'available';
  }
  function startLesson(courseId, lessonId) {
    if (lessonStatus(courseId, lessonId) === 'locked') return false;
    const cs = courseState(courseId);
    if (!cs.started.includes(lessonId)) cs.started.push(lessonId);
    if (cs.completed.includes(lessonId) && !cs.reviewing.includes(lessonId)) cs.reviewing.push(lessonId);
    data.activeCourse = courseId;
    recordActivity();
    save();
    return true;
  }
  function getAnswer(courseId, exerciseId) { return courseState(courseId).answers[exerciseId] || null; }
  function saveDraftAnswer(courseId, exerciseId, value) {
    if (!isSafeValue(value)) return false;
    const cs = courseState(courseId);
    if (cs.answers[exerciseId]?.submitted) return false;
    cs.answers[exerciseId] = cs.answers[exerciseId] || { attempts: 0, submitted: false, correct: false, lastCorrect: false, solutionRevealed: false };
    cs.answers[exerciseId].draftAnswer = value;
    save();
    return true;
  }
  function saveDraftOrder(courseId, exerciseId, order) {
    if (!Array.isArray(order) || order.length > 100 || !order.every(id => typeof id === 'string')) return false;
    const cs = courseState(courseId);
    if (cs.answers[exerciseId]?.submitted) return false;
    cs.answers[exerciseId] = cs.answers[exerciseId] || { attempts: 0, submitted: false, correct: false, lastCorrect: false, solutionRevealed: false };
    cs.answers[exerciseId].draftOrder = order.slice();
    save();
    return true;
  }
  function recordAnswer(courseId, lessonId, exercise, value, result) {
    const cs = courseState(courseId);
    const existing = cs.answers[exercise.id];
    if (existing && existing.submitted) return { ...existing, already: true };
    if (!isSafeValue(value)) return { ok: false, reason: 'invalid-value' };
    const record = existing || { attempts: 0, submitted: false, correct: false, lastCorrect: false, solutionRevealed: false };
    record.attempts = Math.max(0, Math.floor(record.attempts || 0)) + 1;
    record.submitted = true;
    record.lastCorrect = !!result.correct;
    record.correct = !!result.correct;
    record.feedback = (result.correct ? result.explanation : result.hint) || '';
    record.value = value;
    record.draftAnswer = value;
    record.submittedAt = new Date().toISOString();
    data.attempts++;
    recordActivity();
    if (result.correct && !cs.rewardedAnswers.includes(exercise.id)) {
      cs.rewardedAnswers.push(exercise.id);
      data.xp += 5;
      award(`exercise-${exercise.type}`);
    }
    cs.answers[exercise.id] = record;
    checkMilestones();
    save();
    return record;
  }
  function revealSolution(courseId, exerciseId) {
    const record = getAnswer(courseId, exerciseId);
    if (!record || !record.submitted || record.correct) return false;
    record.solutionRevealed = true;
    save();
    return true;
  }
  function getLessonScore(courseId, lesson) {
    const exercises = lesson.exercises || [];
    const answers = exercises.map(exercise => getAnswer(courseId, exercise.id));
    const answered = answers.filter(answer => answer && answer.submitted).length;
    const correct = answers.filter(answer => answer && answer.submitted && answer.correct).length;
    const total = exercises.length;
    const percent = total ? Math.round(correct / total * 100) : 0;
    const requiredCorrect = Math.ceil(total * PASS_PERCENT / 100);
    return { answered, correct, total, percent, requiredCorrect, complete: total > 0 && total === answered, passed: total > 0 && answered === total && correct >= requiredCorrect };
  }
  function canComplete(courseId, lesson) {
    const score = getLessonScore(courseId, lesson);
    return score.complete && score.passed;
  }
  function resetLessonAttempt(courseId, lesson) {
    if (!lesson || lessonStatus(courseId, lesson.id) === 'locked') return false;
    const cs = courseState(courseId);
    for (const exercise of (lesson.exercises || [])) delete cs.answers[exercise.id];
    if (!cs.started.includes(lesson.id)) cs.started.push(lesson.id);
    if (cs.completed.includes(lesson.id) && !cs.reviewing.includes(lesson.id)) cs.reviewing.push(lesson.id);
    recordActivity();
    save();
    return true;
  }
  function completeLesson(courseId, lesson) {
    if (lessonStatus(courseId, lesson.id) === 'locked') return { ok: false, reason: 'locked' };
    const score = getLessonScore(courseId, lesson);
    if (!score.complete) return { ok: false, reason: 'incomplete' };
    if (!score.passed) return { ok: false, reason: 'score', score };
    recordLessonBestScore(courseId, lesson.id, score.percent);
    const cs = courseState(courseId);
    const wasReviewing = cs.reviewing.includes(lesson.id);
    cs.reviewing = cs.reviewing.filter(id => id !== lesson.id);
    if (cs.completed.includes(lesson.id)) {
      if (wasReviewing) save();
      return { ok: true, already: true };
    }
    cs.completed.push(lesson.id);
    const reward = lesson.kind === 'project' ? 50 : lesson.kind === 'practice' ? 30 : 20;
    data.xp += reward;
    recordActivity();
    checkMilestones();
    save();
    return { ok: true, reward };
  }
  function getLessonTime(courseId, lessonId) { return Number(courseState(courseId).lessonTimes?.[lessonId] || 0); }
  function getLessonBestTime(courseId, lessonId) { return getLessonTime(courseId, lessonId); }
  function recordLessonTime(courseId, lessonId, seconds) {
    if (!Number.isFinite(seconds) || seconds <= 0) return false;
    const cs = courseState(courseId);
    if (!cs.lessonTimes || typeof cs.lessonTimes !== 'object') cs.lessonTimes = {};
    // Guarda apenas a melhor marca: a menor duração concluída é sempre preservada.
    const safeSeconds = Math.min(86400, Math.max(1, Math.floor(seconds)));
    const previous = Number(cs.lessonTimes[lessonId]) || 0;
    if (!previous || safeSeconds < previous) {
      cs.lessonTimes[lessonId] = safeSeconds;
      save();
    }
    return true;
  }
  function getLessonBestScore(courseId, lessonId) {
    const value = courseState(courseId).lessonBestScores?.[lessonId];
    return Number.isFinite(value) && value >= 0 && value <= 100 ? Math.floor(value) : null;
  }
  function recordLessonBestScore(courseId, lessonId, percent) {
    if (!curriculum.getLesson(lessonId) || !Number.isFinite(percent)) return false;
    const cs = courseState(courseId);
    if (!cs.lessonBestScores || typeof cs.lessonBestScores !== 'object') cs.lessonBestScores = {};
    const safePercent = Math.max(0, Math.min(100, Math.round(percent)));
    const current = getLessonBestScore(courseId, lessonId);
    if (current === null || safePercent > current) {
      cs.lessonBestScores[lessonId] = safePercent;
      save();
    }
    return getLessonBestScore(courseId, lessonId);
  }
  function isChallengeCompleted(courseId, moduleId) { return courseState(courseId).challenges.includes(moduleId); }
  function completeChallenge(courseId, moduleId) {
    const course = curriculum.getCourse(courseId);
    const module = course?.modules.find(item => item.id === moduleId);
    if (!module || !module.lessons.every(lesson => isCompleted(courseId, lesson.id))) return { ok: false, reason: 'module-incomplete' };
    const cs = courseState(courseId);
    if (cs.challenges.includes(moduleId)) return { ok: true, already: true, reward: 0 };
    cs.challenges.push(moduleId); data.xp += 25; recordActivity(); checkMilestones(); save();
    return { ok: true, reward: 25 };
  }

  function getTotalStats() {
    const lessons = curriculum.getAllLessons();
    const completed = lessons.filter(lesson => {
      const location = curriculum.getLocation(lesson.id);
      return isCompleted(location.course.id, lesson.id);
    }).length;
    const percent = lessons.length && completed === lessons.length ? 100 : (lessons.length ? Math.min(99, Math.round(completed / lessons.length * 100)) : 0);
    return { total: lessons.length, completed, percent, xp: data.xp, streak: currentStreak(), attempts: data.attempts };
  }
  function getCourseCardStatus(courseId) {
    const stats = curriculum.getCourseStats(courseId, api);
    if (stats.total && stats.completed === stats.total) return 'Concluída';
    if (stats.completed || courseState(courseId).started.length) return 'Em andamento';
    return 'Não iniciada';
  }
  function reset() {
    data = emptyState();
    storageWarning = false;
    save();
  }
  function setActiveCourse(courseId) {
    data.activeCourse = curriculum.getCourse(courseId) ? courseId : null;
    save();
  }
  function hasAchievement(id) { return !!data.achievements[id]; }
  function getAchievementList() {
    const fixed = [
      ['first-lesson','Primeiros passos','Conclua sua primeira aula.'],
      ['exercise-multiple-choice','Escolha consciente','Acerte uma questão de múltipla escolha.'],
      ['exercise-code-reading','Leitor de código','Interprete um trecho de código.'],
      ['exercise-predict-output','Prevendo resultados','Preveja um resultado corretamente.'],
      ['exercise-fill-code','Peça que faltava','Complete um trecho de código.'],
      ['exercise-ordering','Tudo no lugar','Organize as instruções na ordem correta.'],
      ['exercise-practical','Mão na massa','Conclua uma tarefa prática.'],
      ['streak-3','Constância','Estude em três dias consecutivos.'],
      ['streak-7','Uma semana de prática','Estude em sete dias consecutivos.'],
      ['xp-100','100 XP','Acumule 100 pontos de experiência.']
    ];
    for (const course of curriculum.rawCourses) {
      fixed.push([`course-${course.id}`,`Trilha concluída: ${course.title}`,`Conclua todas as aulas de ${course.title}.`]);
      for (const module of course.modules) fixed.push([`module-${module.id}`,`Módulo completo: ${module.title}`,`Conclua todas as aulas do módulo ${module.title}.`]);
    }
    return fixed.map(([id,title,description]) => ({ id, title, description, unlocked: hasAchievement(id), date: data.achievements[id]?.date || null }));
  }
  const api = {
    key: STORAGE_KEY,
    get raw() { return data; },
    get storageWarning() { return storageWarning; },
    save, reset, setActiveCourse, startLesson, lessonStatus, isCompleted, getAnswer,
    saveDraftAnswer, saveDraftOrder, recordAnswer, revealSolution, canComplete, completeLesson, resetLessonAttempt, isReviewing,
    getTotalStats, getCourseCardStatus, currentStreak, getAchievementList, hasAchievement, getLessonScore, getLessonTime, getLessonBestTime, recordLessonTime, getLessonBestScore, recordLessonBestScore, isChallengeCompleted, completeChallenge
  };
  global.LordCode = global.LordCode || {};
  global.LordCode.state = api;
})(window);
