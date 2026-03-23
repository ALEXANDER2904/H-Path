import { ListaComponentes } from '../../data/componentesData.js';

const components = ListaComponentes;
const indiceGrid = document.getElementById('indiceGrid');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const filasPorPagina = 6;

let paginaActual = 0;
let totalPaginas = 1;

function renderProjects() {

  components.forEach((component, index) => {
    const fila = document.createElement('div');
    fila.className = 'indice-fila';

    const elemento = document.createElement('button');
    elemento.className = 'indice-item';
    elemento.type = 'button';
    elemento.textContent = component.label;
    elemento.addEventListener('click', () => {
      setActive(index, true);
    });
    fila.appendChild(elemento);

    const numero = document.createElement('p');
    numero.className = 'indice-numero';
    numero.textContent = component.numero;
    fila.appendChild(numero);

    indiceGrid.appendChild(fila);
  });

  totalPaginas = Math.max(1, Math.ceil(components.length / filasPorPagina));
  updateSliderUI();
}

function updateSliderUI() {
  indiceGrid.style.transform = `translateX(-${paginaActual * 100}%)`;
  btnPrev.disabled = paginaActual === 0;
  btnNext.disabled = paginaActual === totalPaginas - 1;
}

btnPrev.addEventListener('click', () => {
  if (paginaActual === 0) return;
  paginaActual -= 1;
  updateSliderUI();
});

btnNext.addEventListener('click', () => {
  if (paginaActual >= totalPaginas - 1) return;
  paginaActual += 1;
  updateSliderUI();
});

function setActive(index, notifyParent) {
  if (notifyParent) {
    window.parent.postMessage({ type: 'hpath:selectProject', index: index }, '*');
  }
}

renderProjects();