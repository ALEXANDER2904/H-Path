const indexFrame = document.getElementById('indexFrame');
const sliderFrame = document.getElementById('sliderFrame');

function sendToSlider(message) {
  if (!sliderFrame || !sliderFrame.contentWindow) return;
  sliderFrame.contentWindow.postMessage(message, '*');
}

function sendToIndex(message) {
  if (!indexFrame || !indexFrame.contentWindow) return;
  indexFrame.contentWindow.postMessage(message, '*');
}

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
