const enlace = document.querySelector('li[href="#sobre-mi"]')
enlace.addEventListener('click', (event) => {
    // Prevenir que se siga el enlace
    event.preventDefault();
    
    // Seleccionar el elemento destino
    const destino = document.querySelector('#sobre-mi');
    
    // Desplazarse hacia el elemento destino
    destino.scrollIntoView({behavior: 'smooth'});
  });
const enlace2 = document.querySelector('li[href="contact"]')
enlace2.addEventListener('click', (event) => {
    // Prevenir que se siga el enlace
    event.preventDefault();
    
    // Seleccionar el elemento destino
    const destino = document.querySelector('#contact');
    
    // Desplazarse hacia el elemento destino
    destino.scrollIntoView({behavior: 'smooth'});
  });