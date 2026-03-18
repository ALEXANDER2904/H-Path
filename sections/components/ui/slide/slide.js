let imagen1 = document.getElementById("imagen1");
let imagen2 = document.getElementById("imagen2");
let imagen3 = document.getElementById("imagen3");
let leftarrow = document.getElementById("leftarrow");
let rightarrow = document.getElementById("rightarrow");

rightarrow.addEventListener("click", function(){
    if (imagen1.classList.contains("imagen1")){
        imagen1.classList.remove("imagen1");
        imagen1.classList.add("imagen1h");
        imagen2.classList.remove("imagen2h");
        imagen2.classList.add("imagen2");
    }else if (imagen2.classList.contains("imagen2")){
        imagen2.classList.remove("imagen2");
        imagen2.classList.add("imagen2h");
        imagen3.classList.remove("imagen3h");
        imagen3.classList.add("imagen3");
        }
});

leftarrow.addEventListener("click", function(){
    if (imagen3.classList.contains("imagen3")){
        imagen3.classList.remove("imagen3");
        imagen3.classList.add("imagen3h");
        imagen2.classList.remove("imagen2h");
        imagen2.classList.add("imagen2");
    }else if (imagen2.classList.contains("imagen2")){
        imagen2.classList.remove("imagen2");
        imagen2.classList.add("imagen2h");
        imagen1.classList.remove("imagen1h");
        imagen1.classList.add("imagen1");
        }
});

