let menuh = document.getElementById("icono-hamburguer");
let menu1 = document.getElementById("menu1");

menuh.addEventListener("click", function() {
    if (menu1.classList.contains("menu-visible")) {
        menu1.classList.remove("menu-visible");
        menu1.classList.add("menu-hidden");
    } else {
        menu1.classList.add("menu-visible");
        menu1.classList.remove("menu-hidden");
    }
});