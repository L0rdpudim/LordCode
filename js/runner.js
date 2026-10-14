(function (global) {
  'use strict';
  const registry = new Map();
  function canRun(language) { return registry.has(language); }
  function get(language) { return registry.get(language) || null; }
  function register(language, runner) {
    if (!language || !runner || typeof runner.run !== 'function') throw new TypeError('Executor inválido.');
    registry.set(language, runner);
  }
  // O código do estudante, quando executado por esta integração, roda em um Worker
  // isolado e temporário. A aplicação principal nunca usa eval/new Function.
  const workerSource = `
    const sendResult = self.postMessage.bind(self);
    self.fetch = undefined; self.XMLHttpRequest = undefined; self.WebSocket = undefined;
    self.EventSource = undefined; self.importScripts = undefined; self.indexedDB = undefined;
    self.onmessage = function(event) {
      const payload = event.data || {};
      try {
        const name = payload.test && payload.test.functionName;
        if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(String(name || ''))) throw new Error('Nome de função de teste inválido.');
        const factory = new Function(String(payload.code || '') + '\\n;return typeof ' + name + ' === "function" ? ' + name + ' : null;');
        const fn = factory();
        if (typeof fn !== 'function') throw new Error('Declare a função pedida no exercício.');
        const result = fn.apply(undefined, Array.isArray(payload.test.args) ? payload.test.args : []);
        sendResult({ ok: true, result: result });
      } catch (error) {
        sendResult({ ok: false, error: String(error && error.message || error).slice(0, 500) });
      }
    };
  `;
  function isolatedRunnerRun(code, test, options = {}) {
    return new Promise(resolve => {
      const timeout = Math.min(Math.max(Number(options.timeout) || 3000, 100), 3000);
      if (typeof Worker === 'undefined' || typeof Blob === 'undefined' || !global.URL || !URL.createObjectURL) {
        resolve({ ok: false, error: 'Este navegador não oferece suporte ao executor isolado.' });
        return;
      }
      let url;
      let worker;
      let settled = false;
      const finish = result => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        if (worker) worker.terminate();
        if (url) URL.revokeObjectURL(url);
        resolve(result);
      };
      const timer = setTimeout(() => finish({ ok: false, error: 'O tempo máximo de execução foi excedido.' }), timeout);
      try {
        url = URL.createObjectURL(new Blob([workerSource], { type: 'text/javascript' }));
        worker = new Worker(url);
        worker.onmessage = event => {
          const result = event.data || {};
          const expected = JSON.stringify(test.expected);
          const actual = JSON.stringify(result.result);
          finish(result.ok ? { ok: true, result: result.result, passed: actual === expected, expected: test.expected } : result);
        };
        worker.onerror = () => finish({ ok: false, error: 'Não foi possível executar o trecho no Worker.' });
        worker.postMessage({ code: String(code || ''), test });
      } catch (error) {
        finish({ ok: false, error: String(error && error.message || error) });
      }
    });
  }
  register('javascript', { run: isolatedRunnerRun });
  // C deliberadamente não possui executor nesta versão: suas tarefas são interpretativas.
  global.LordCode = global.LordCode || {};
  global.LordCode.runner = { register, get, canRun, workerSource };
})(window);
