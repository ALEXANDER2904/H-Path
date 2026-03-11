// Agrega esto en una etiqueta <script> en tu HTML o en un archivo .js separado
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const menuDropdown = document.querySelector(".menu-dropdown");

    menuBtn.addEventListener("click", function() {
        menuDropdown.classList.toggle("active");
    });
});
