/* Cuando trabajamos con objetos, debo tener en cuenta
que un objeto se construye teniendo en cuenta una clase */
let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil {
    constructor(marca, modelo, precio, anyo, kilometros, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros = kilometros;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("XTZ ", "125", 7000000, "2017 ·", " 10.400 km ·", " Pitalito-Huila", "images/xtz.jpg");
let auto2 = new Automovil("XTZ", "250", 25000000, "2022 ·", " 7.700 km ·", " Pitalito-Huila", "images/mini-xtz250-2020-1.JPG");
let auto3 = new Automovil("RX", "115", 1000000, "2015 ·", " 36.420 km ·", " Pitalito-Huila", "images/rx.jpg");
let auto4 = new Automovil("DT", "125", 15000000, "2000 ·", " 9.300 km ·", " Pitalito-Huila", "images/dt.jpg");
/* 

/* Función  para cargar el vehículo*/
cargarVehiculo(auto1);
cargarVehiculo(auto2);
cargarVehiculo(auto3);
cargarVehiculo(auto4);

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("inputBusqueda").value;
    if (event.key == "Enter") {
        boxProductos.innerHTML = "";
        let inputUser = busqueda.toLowerCase();
        if (inputUser == "xtz") {
            cargarVehiculo(auto1);
            cargarVehiculo(auto2);
        }  
        else if (inputUser == "rx") {
            cargarVehiculo(auto3);
        } 
        else if (inputUser == "dt") {
          cargarVehiculo(auto4);
      } 
    }     
});
/* Función  con parámetro*/
function cargarVehiculo(auto) {
    let boxProductos = document.getElementById("boxProductos");

    /* Caja para el producto */
    let boxProducto = document.createElement("div");
    boxProductos.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");

    /* Caja para la imagen */
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-auto");

    /* Caja para la información */
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class", "marca");
    
    /* Precio */
    let precio = document.createElement("label");
    boxInfo.appendChild(precio);
    let txtNodePrecio = document.createTextNode("$" + Intl.NumberFormat("de-DE").format(auto.precio));
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class", "precio");

    /* año */
    let anyo = document.createElement("label");
    boxInfo.appendChild(anyo);
    let txtNodeAnyo = document.createTextNode(auto.anyo + " · ");
    anyo.appendChild(txtNodeAnyo);
    anyo.setAttribute("class", "info-anyo");

    /* Kilometros */
    let kilometros = document.createElement("label");
    boxInfo.appendChild(kilometros);
    let kilometrosStr = Intl.NumberFormat("de-DE").format(auto.kilometros);
    let txtNodeKilometros = document.createTextNode(kilometrosStr + " km" + " · ");

    kilometros.appendChild(txtNodeKilometros);
    kilometros.setAttribute("class", "info-kilometros");

    /* Ciudad  */
    let ciudad = document.createElement("label");
    boxInfo.appendChild(ciudad);
    let txtNodeCiudad = document.createTextNode(auto.ciudad);
    ciudad.appendChild(txtNodeCiudad);
    ciudad.setAttribute("class", "info-ciudad");

    /* ícono corazón */
    let boxCorazon = document.createElement("div");
    boxImg.appendChild(boxCorazon);
    let iconoCorazon = document.createElement("i");
    boxCorazon.appendChild(iconoCorazon);
    boxCorazon.setAttribute("class", "box-corazon");
    iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

    /* Línea divisora */
    let lineaDiv = document.createElement("div");
    boxProducto.appendChild(lineaDiv);
    lineaDiv.setAttribute("class", "linea-div");
}

/* FILTROS */
cargarFiltro();

function cargarFiltro() {
    
    mainContent.appendChild(boxFiltro);
    boxFiltro.setAttribute("class", "box-filtro");
}

/* Toggle */
let boxToggle = document.getElementById("boxToggle");
let buttonToggle = document.getElementById("buttonToggle");

boxToggle.addEventListener("click", () =>{
    if (boxToggle.classList.contains("box-toggle-off")) {
    boxToggle.classList.add("box-toggle-on");
    boxToggle.classList.remove("box-toggle-off");
    buttonToggle.classList.add("button-toggle-on");
    buttonToggle.classList.remove("button-toggle-off");
    }
    else{
        boxToggle.classList.remove("box-toggle-on");
        boxToggle.classList.add("box-toggle-off");
        buttonToggle.classList.remove("button-toggle-on");
        buttonToggle.classList.add("button-toggle-off");
    }
});
