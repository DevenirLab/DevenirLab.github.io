const menuBtn = document.querySelector(".main-nav-toggle");
const inner_menu = document.getElementById("inner-menu");
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu(e) {
    e.preventDefault();
    if (!showMenu) {
        menuBtn.classList.add("active-menu");
        inner_menu.classList.add("show");
        showMenu = true;
    } else {
        menuBtn.classList.remove("active-menu");   
        inner_menu.classList.remove("show");   
        showMenu = false;
    }
}