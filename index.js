// ===== INICIO: Referencias del layout principal =====
const indexFrame = document.getElementById('indexFrame');
const sliderFrame = document.getElementById('sliderFrame');
const sectionFrames = Array.from(document.querySelectorAll('.i-frame'));
// ===== FIN: Referencias del layout principal =====

// ===== INICIO: Esto es de la animacion =====
function setupStackingCards() {
  if (!sectionFrames.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  sectionFrames.forEach((frame, index) => {
    frame.style.zIndex = String(index + 1);
  });

  if (reduceMotion) {
    sectionFrames.forEach((frame) => {
      frame.style.setProperty('--stack-progress', '0');
    });
    return;
  }

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  let rafId = 0;

  function updateStackProgress() {
    rafId = 0;
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    sectionFrames.forEach((frame) => {
      const frameTop = frame.offsetTop;
      const rawProgress = (scrollY - frameTop) / viewportHeight;
      const progress = clamp(rawProgress, 0, 1);
      frame.style.setProperty('--stack-progress', progress.toFixed(3));
    });
  }

  function onScrollOrResize() {
    if (rafId) return;
    rafId = window.requestAnimationFrame(updateStackProgress);
  }

  updateStackProgress();
  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize);
}
// ===== FIN: Esto es de la animacion =====

// ===== INICIO: Helpers de mensajeria entre iframes =====
function sendToSlider(message) {
  if (!sliderFrame || !sliderFrame.contentWindow) return;
  sliderFrame.contentWindow.postMessage(message, '*');
}

function sendToIndex(message) {
  if (!indexFrame || !indexFrame.contentWindow) return;
  indexFrame.contentWindow.postMessage(message, '*');
}
// ===== FIN: Helpers de mensajeria entre iframes =====

// ===== INICIO: Sincronizacion de eventos entre Index y Slider =====
window.addEventListener('message', (event) => {
  const message = event.data;
  if (!message || typeof message.type !== 'string') return;

  if (message.type === 'hpath:selectProject' && Number.isInteger(message.index)) {
    sendToSlider({ type: 'hpath:goToProject', index: message.index });
    sendToIndex({ type: 'hpath:setActiveProject', index: message.index });
    sliderFrame.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (message.type === 'hpath:projectChanged' && Number.isInteger(message.index)) {
    sendToIndex({ type: 'hpath:setActiveProject', index: message.index });
  }
});
// ===== FIN: Sincronizacion de eventos entre Index y Slider =====

// ===== INICIO: Estado inicial al cargar iframes =====
if (sliderFrame) {
  sliderFrame.addEventListener('load', () => {
    sendToSlider({ type: 'hpath:goToProject', index: 0 });
  });
}
if (indexFrame) {
  indexFrame.addEventListener('load', () => {
    sendToIndex({ type: 'hpath:setActiveProject', index: 0 });
  });
}
// ===== FIN: Estado inicial al cargar iframes =====

// ===== INICIO: Boot del comportamiento visual =====
setupStackingCards();
// ===== FIN: Boot del comportamiento visual =====