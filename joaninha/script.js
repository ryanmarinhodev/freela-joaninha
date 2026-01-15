const PHONE = '5583999369990';
const HEART = String.fromCodePoint(0x1f90e);

function waLink(message) {
  const url = new URL(`https://api.whatsapp.com/send`);
  url.searchParams.set('phone', PHONE);
  url.searchParams.set('text', message);
  return url.toString();
}

function setLink(id, message) {
  const el = document.getElementById(id);
  if (!el) return;

  el.href = waLink(message);
  el.target = '_blank';
  el.rel = 'noopener noreferrer';
}

function setExternalLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;

  el.href = url;
  el.target = '_blank';
  el.rel = 'noopener noreferrer';
}

setLink('btn-comprar', `Vim pela Joaninha e gostaria de comprar uma peça que vi no instagram ${HEART}`);

setLink('btn-agendar', `Gostaria de agendar um encontro para ver as peças disponíveis da Joaninha ${HEART}`);

setLink('btn-desapegar', `Olá! Quero desapegar das minhas chiques. Como faço? ${HEART}`);

setExternalLink('btn-saldo', 'http://sistema.4brick.com.br/common/251/cliente/login');

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
