import { ListaComponentes } from '../../data/componentesData.js';

const components = ListaComponentes
const track = document.getElementById('indiceTrack');
let activeIndex = 0;

function renderProjects() {
  if (!track) return;

  components.forEach((component, index) => {
    const button = document.createElement('button');
    button.className = 'indice-item';
    button.type = 'button';
    button.textContent = component.label;
    button.addEventListener('click', () => {
      setActive(index, true);
    });
    track.appendChild(button);
  });

  setActive(0, false);
}

if (track) {
  track.addEventListener('wheel', (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    track.scrollBy({ left: event.deltaY, behavior: 'auto' });
  }, { passive: false });
}

function setActive(index, notifyParent) {
  if (!components.length || !track) return;

  const safeIndex = Math.max(0, Math.min(index, components.length - 1));
  activeIndex = safeIndex;

  const buttons = track.querySelectorAll('.indice-item');
  buttons.forEach((button, itemIndex) => {
    button.classList.toggle('active', itemIndex === activeIndex);
  });

  if (notifyParent) {
    const activeButton = buttons[activeIndex];
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    window.parent.postMessage({ type: 'hpath:selectProject', index: activeIndex }, '*');
  }
}

window.addEventListener('message', (event) => {
  const message = event.data;
  if (!message || message.type !== 'hpath:setActiveProject') return;
  if (!Number.isInteger(message.index)) return;
  setActive(message.index, false);
});

renderProjects();
