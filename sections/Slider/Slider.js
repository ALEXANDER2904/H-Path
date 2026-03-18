import { ListaComponentes } from '../../data/componentesData.js';

const components = ListaComponentes;

const track   = document.getElementById('sliderTrack');
const dots    = document.getElementById('sliderDots');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
let current = 0;

components.forEach((comp, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `
    <h2>${comp.label}</h2>
    <iframe src="${comp.src}" loading="lazy"></iframe>
    `;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.title = comp.label;
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
});

function goTo(index) {
    if (!components.length) return;
    const safeIndex = Math.max(0, Math.min(index, components.length - 1));
    current = safeIndex;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.querySelectorAll('button').forEach((d, i) =>
    d.classList.toggle('active', i === current)
    );
    btnPrev.disabled = current === 0;
    btnNext.disabled = current === components.length - 1;

    window.parent.postMessage({ type: 'hpath:projectChanged', index: current }, '*');
}

btnPrev.addEventListener('click', () => goTo(current - 1));
btnNext.addEventListener('click', () => goTo(current + 1));

window.addEventListener('message', (event) => {
    const message = event.data;
    if (!message || message.type !== 'hpath:goToProject') return;
    if (!Number.isInteger(message.index)) return;
    goTo(message.index);
});

goTo(0);