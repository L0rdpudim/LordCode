(function () {
  'use strict';
  function start() {
    if (window.LordCode && window.LordCode.app) window.LordCode.app.init();
    else console.error('Lord Code não foi inicializado: confira a ordem dos scripts em index.html.');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
