const menu = document.querySelector(".burger-modal-window");
const closeButton = document.querySelector(".modal-window-btn");
const burgerButton = document.querySelector(".icon-burger-btn");
const menuEl = document.querySelector(".modal-container");
const body = document.body;
const btn = document.querySelector(".btn");
const elem = document.querySelector("main");
const links = document.querySelectorAll('a[href*="#"]');

const disableScroll = () => {
  body.classList.add("disable-scroll")
}

const enableScroll = () => {
  body.classList.remove("disable-scroll")
}

const menuItem = () => {
  menuEl.classList.toggle("is-activation")
  elem.addEventListener("click", () => {
    menuEl.classList.remove("is-activation")
  })
  menuEl.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuEl.classList.remove("is-activation")
  })
  document.querySelector(".order-link").addEventListener("click", () => {
  menuEl.classList.remove("is-activation")
    })
  })
}

const openingAndClosingTheModalWindow = () => {
  menu.classList.toggle("is-open")
  enableScroll()
  menu.querySelectorAll(".mobile-menu-link").forEach((linkEl) => {
    linkEl.addEventListener("click", () => {
      enableScroll()
      menu.classList.remove("is-open")
    })
  })
  menu.querySelectorAll(".mobile-order-link").forEach((linkEl) => {
    linkEl.addEventListener("click", () => {
      enableScroll()
      menu.classList.remove("is-open")
    })
  })
}

btn.addEventListener("click", menuItem);
burgerButton.addEventListener("click", openingAndClosingTheModalWindow);
closeButton.addEventListener("click", openingAndClosingTheModalWindow);
burgerButton.addEventListener("click", disableScroll);
