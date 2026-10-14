(function (global) {
  'use strict';
  const rawCourses = Array.isArray(global.LORDCODE_COURSES) ? global.LORDCODE_COURSES : [];
  const courses = new Map();
  const lessons = new Map();
  const locations = new Map();
  const orderedByCourse = new Map();
  const allLessons = [];
  const courseIds = new Set();
  const lessonIds = new Set();
  const exerciseIds = new Set();
  const issues = [];

  for (const course of rawCourses) {
    if (!course || !course.id || courseIds.has(course.id)) {
      issues.push(`Identificador de curso ausente ou duplicado: ${course && course.id ? course.id : '(vazio)'}`);
      continue;
    }
    courseIds.add(course.id);
    courses.set(course.id, course);
    const flat = [];
    for (const module of (Array.isArray(course.modules) ? course.modules : [])) {
      if (!module || !module.id || !Array.isArray(module.lessons)) {
        issues.push(`Módulo inválido em ${course.id}`);
        continue;
      }
      for (const lesson of module.lessons) {
        if (!lesson || !lesson.id || lessonIds.has(lesson.id)) {
          issues.push(`Identificador de aula ausente ou duplicado: ${lesson && lesson.id ? lesson.id : '(vazio)'}`);
          continue;
        }
        lessonIds.add(lesson.id);
        lessons.set(lesson.id, lesson);
        locations.set(lesson.id, { course, module, lesson });
        flat.push(lesson);
        allLessons.push(lesson);
        for (const exercise of (Array.isArray(lesson.exercises) ? lesson.exercises : [])) {
          if (!exercise || !exercise.id || exerciseIds.has(exercise.id)) {
            issues.push(`Identificador de exercício ausente ou duplicado: ${exercise && exercise.id ? exercise.id : '(vazio)'}`);
          } else exerciseIds.add(exercise.id);
        }
      }
    }
    orderedByCourse.set(course.id, flat);
  }

  function getCourse(id) { return courses.get(id) || null; }
  function getLesson(id) { return lessons.get(id) || null; }
  function getLocation(lessonId) { return locations.get(lessonId) || null; }
  function getCourseLessons(courseId) { return (orderedByCourse.get(courseId) || []).slice(); }
  function getAllLessons() { return allLessons.slice(); }
  function getCourseStats(courseId, state) {
    const data = getCourse(courseId);
    const list = getCourseLessons(courseId);
    if (!data) return { total: 0, completed: 0, percent: 0, modules: 0 };
    const completed = list.filter(lesson => state && state.isCompleted(courseId, lesson.id)).length;
    const percent = list.length && completed === list.length ? 100 : (list.length ? Math.min(99, Math.round(completed / list.length * 100)) : 0);
    return { total: list.length, completed, percent, modules: data.modules.length };
  }
  function getNextLesson(courseId, state, fromLessonId = null) {
    const list = getCourseLessons(courseId);
    if (!list.length) return null;
    const start = fromLessonId ? list.findIndex(item => item.id === fromLessonId) + 1 : 0;
    const ordered = start > 0 ? list.slice(start).concat(list.slice(0, start)) : list;
    return ordered.find(lesson => state.lessonStatus(courseId, lesson.id) === 'available' || state.lessonStatus(courseId, lesson.id) === 'in-progress') || null;
  }
  function getAdjacentLesson(courseId, lessonId) {
    const list = getCourseLessons(courseId);
    const index = list.findIndex(item => item.id === lessonId);
    return { previous: index > 0 ? list[index - 1] : null, next: index >= 0 && index < list.length - 1 ? list[index + 1] : null };
  }
  global.LordCode = global.LordCode || {};
  global.LordCode.curriculum = { rawCourses, getCourse, getLesson, getLocation, getCourseLessons, getAllLessons, getCourseStats, getNextLesson, getAdjacentLesson, issues, counts: { courses: courses.size, lessons: allLessons.length, exercises: exerciseIds.size } };
})(window);
