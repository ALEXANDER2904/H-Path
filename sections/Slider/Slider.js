
const components = [
    { label: "Amazon",           src: "../components/clones/amazon/amazon.html" },
    { label: "Disney",           src: "../components/clones/disney/disney.html" },
    { label: "Game of Thrones",  src: "../components/clones/got/got.html" },
    { label: "MercadoLibre",     src: "../components/clones/mercadolibre/mercadolibre.html" },
    { label: "Netflix",          src: "../components/clones/netflix/netflix.html" },
    { label: "Background",       src: "../components/css-conceptos/background/background.html" },
    { label: "Bordes",           src: "../components/css-conceptos/bordes/bordes.html" },
    { label: "Cuadros",          src: "../components/css-conceptos/cuadros/cuadros.html" },
    { label: "Flexbox",          src: "../components/css-conceptos/flexbox/flexbox.html" },
    { label: "Grid",             src: "../components/css-conceptos/grid/grid.html" },
    { label: "Grid Calendario",  src: "../components/css-conceptos/grid-calendario/grid-calendario.html" },
    { label: "Media Query",      src: "../components/css-conceptos/media-query/media-query.html" },
    { label: "Posición",         src: "../components/css-conceptos/posicion/posicion.html" },
    { label: "Shadow",           src: "../components/css-conceptos/shadow/shadow.html" },
    { label: "Sombra",           src: "../components/css-conceptos/sombra/sombra.html" },
    { label: "Baño",             src: "../components/ejercicios/bano/bano.html" },
    { label: "Ejemplo",          src: "../components/ejercicios/ejemplo/ejemplo.html" },
    { label: "Index 2",          src: "../components/ejercicios/index2/index2.html" },
    { label: "Inglés",           src: "../components/ejercicios/ingles/ingles.html" },
    { label: "Maquetación",      src: "../components/maquetacion/maquetacion/maquetacion.html" },
    { label: "Maquetación 2",    src: "../components/maquetacion/maquetacion2/maquetacion2.html" },
    { label: "Maquetación Luis", src: "../components/maquetacion/maquetacionluis/maquetacionluis.html" },
    { label: "Barra",            src: "../components/ui/barra/barra.html" },
    { label: "Calendario",       src: "../components/ui/calendario/calendario.html" },
    { label: "Carrito",          src: "../components/ui/carrito/carrito.html" },
    { label: "Catálogo",         src: "../components/ui/catalogo/catalogo.html" },
    { label: "Formulario",       src: "../components/ui/formulario/formulario.html" },
    { label: "Gráfica",          src: "../components/ui/grafica/grafica.html" },
    { label: "Icono",            src: "../components/ui/icono/icono.html" },
    { label: "Iconos",           src: "../components/ui/iconos/iconos.html" },
    { label: "Iconos 2",         src: "../components/ui/iconos2/iconos2.html" },
    { label: "Menú Sub-items",   src: "../components/ui/menu-subitems/menu-subitems.html" },
    { label: "Menú SENA",        src: "../components/ui/menusena/menusena.html" },
    { label: "Slide",            src: "../components/ui/slide/slide.html" },
    { label: "Slide Luis",       src: "../components/ui/slideluis/slideluis.html" },
    { label: "Tabla",            src: "../components/ui/tabla/tabla.html" },
];

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
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.querySelectorAll('button').forEach((d, i) =>
    d.classList.toggle('active', i === current)
    );
    btnPrev.disabled = current === 0;
    btnNext.disabled = current === components.length - 1;
}

btnPrev.addEventListener('click', () => goTo(current - 1));
btnNext.addEventListener('click', () => goTo(current + 1));

goTo(0);