(function (global) {
  'use strict';
  const escapeMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => escapeMap[ch]);
  }
  function renderInline(value) {
    let safe = escapeHtml(value);
    safe = safe.replace(/`([^`]+)`/g, '<code>$1</code>');
    safe = safe.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return safe;
  }
  function normalizeWhitespace(value) {
    return String(value ?? '').trim().replace(/\s+/g, ' ');
  }
  async function copyText(value) {
    const text = String(value ?? '');
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (_) { /* tenta a alternativa compatível */ }
    let field;
    try {
      field = document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      return document.execCommand('copy');
    } catch (_) {
      return false;
    } finally {
      if (field && field.parentNode) field.parentNode.removeChild(field);
    }
  }
  function seededOrder(items, seed) {
    const out = items.slice();
    let value = 2166136261;
    for (const char of String(seed)) value = Math.imul(value ^ char.charCodeAt(0), 16777619) >>> 0;
    for (let i = out.length - 1; i > 0; i--) {
      value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
      const j = value % (i + 1);
      [out[i], out[j]] = [out[j], out[i]];
    }
    if (out.length > 1 && out.every((item, index) => item.id === items[index].id)) out.push(out.shift());
    return out;
  }
  function localDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  global.LordCode = global.LordCode || {};
  global.LordCode.util = { escapeHtml, renderInline, normalizeWhitespace, copyText, seededOrder, localDateKey };
})(window);
