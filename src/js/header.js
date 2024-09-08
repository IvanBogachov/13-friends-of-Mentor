const menu = document.querySelector(".burger-modal-window");
const btnMenu = document.querySelector(".modal-window-btn");
const iconBtn = document.querySelector(".icon-burger-btn");
const menuEl = document.querySelector(".hidden-menu");
const btn = document.querySelector(".btn");

const fiilEl = () => {
    menuEl.classList.toggle("is-activation")
}

const el = () => {
    menu.classList.toggle("is-open")
}

btn.addEventListener("click", fiilEl);
iconBtn.addEventListener("click", el);
btnMenu.addEventListener("click", el);
