let slider = document.getElementById("slider");
let arrowLeft = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");
let contSlider = 1;

arrowRight.addEventListener("click", function() {
    if (contSlider < 3 && contSlider >= 1) {
        switch(contSlider) {
            case 1:
                slider.classList.add("slider-view-2");
                slider.classList.remove("slider-view-1");
                slider.classList.remove("slider-view-3");
                break;
            case 2:
                slider.classList.add("slider-view-3");
                slider.classList.remove("slider-view-1");
                slider.classList.remove("slider-view-2");
                break;
        }
        contSlider++;
    }
});
arrowLeft.addEventListener("click", function() {
    if (contSlider <= 3 && contSlider > 1) {
        switch(contSlider) {
            case 2:
                slider.classList.add("slider-view-1");
                slider.classList.remove("slider-view-2");
                slider.classList.remove("slider-view-3");
                break;
            case 3:
                slider.classList.add("slider-view-2");
                slider.classList.remove("slider-view-1");
                slider.classList.remove("slider-view-3");
                break;
        }
        contSlider--;
    }
});
