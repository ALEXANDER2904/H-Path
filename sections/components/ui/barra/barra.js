function llenarBarra() {
    var porcentaje = document.getElementById('porcentaje').value;
    porcentaje = Math.min(Math.max(porcentaje, 0), 5); // Asegurarse de que el valor esté entre 0 y 5
  
    var rellenoBarra = document.getElementById('relleno-barra');
    rellenoBarra.style.width = (porcentaje / 5) * 100 + '%'; // Ajustar el ancho en base al porcentaje respecto a 5
  }
  
  