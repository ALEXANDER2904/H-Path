let enviar = document.getElementById("button");

enviar.addEventListener("click", function () {

    let calificacion1 = parseInt(document.getElementById("calificacion1").value) || 0;
    let calificacion2 = parseInt(document.getElementById("calificacion2").value) || 0;
    let calificacion3 = parseInt(document.getElementById("calificacion3").value) || 0;
    let calificacion4 = parseInt(document.getElementById("calificacion4").value) || 0;
    let calificacion5 = parseInt(document.getElementById("calificacion5").value) || 0;


    let total = calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5;

    let porcentaje1 = (calificacion1 / total) * 100;
    let porcentaje2 = (calificacion2 / total) * 100;
    let porcentaje3 = (calificacion3 / total) * 100;
    let porcentaje4 = (calificacion4 / total) * 100;
    let porcentaje5 = (calificacion5 / total) * 100;

    mostrarPorcentaje("porcentaje1", "barra1", porcentaje1);
    mostrarPorcentaje("porcentaje2", "barra2", porcentaje2);
    mostrarPorcentaje("porcentaje3", "barra3", porcentaje3);
    mostrarPorcentaje("porcentaje4", "barra4", porcentaje4);
    mostrarPorcentaje("porcentaje5", "barra5", porcentaje5);
});

function mostrarPorcentaje(idPorcentaje, idBarra, porcentaje) {
    let elementoPorcentaje = document.getElementById(idPorcentaje);
    elementoPorcentaje.innerHTML = porcentaje.toFixed(1) + "%";

    let barra = document.getElementById(idBarra);

    barra.style.width = porcentaje + "%";
}