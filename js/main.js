const menu = document.querySelector(".nav-menu")
const OpenMenu = document.querySelector(".open-menu")
const CloseMenu = document.querySelector(".close-menu")

function toggleMenu(){
    menu.classList.toggle("menu-opened");
}
OpenMenu.addEventListener("click", toggleMenu);
CloseMenu.addEventListener("click", toggleMenu);
