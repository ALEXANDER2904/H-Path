let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");
let imagen1 = document.getElementById("imagen1");
let imagen2 = document.getElementById("imagen2");
let imagen3 = document.getElementById("imagen3");

rightArrow.addEventListener("click", function () {
    if (imagen1.classList.contains("img-visible")) {
      imagen1.classList.remove("img-visible");
      imagen1.classList.add("img-hidden");
      imagen2.classList.remove("img-hidden2");
      imagen2.classList.add("img-visible2");
    } else if (imagen2.classList.contains("img-visible2")) {
      imagen2.classList.remove("img-visible2");
      imagen2.classList.add("img-hidden2-1");
      imagen3.classList.remove("img-hidden3");
      imagen3.classList.add("img-visible3");
    }
});

leftArrow.addEventListener("click",function(){
    if(imagen3.classList.contains("img-visible3")){
        imagen3.classList.remove("img-visible3");
        imagen3.classList.add("img-hidden3");
        imagen2.classList.remove("img-hidden2-1");
        imagen2.classList.add("img-visible2");
    }else if (imagen2.classList.contains("img-visible2")){
        imagen2.classList.remove("img-visible2");
        imagen2.classList.add("img-hidden2");
        imagen1.classList.remove("img-hidden");
        imagen1.classList.add("img-visible");
    }
})