const menu = document.querySelector(".burger-modal-window");
const closeButton = document.querySelector(".modal-window-btn");
const burgerButton = document.querySelector(".icon-burger-btn");
const menuEl = document.querySelector(".modal-container");
const modalWindowMenu = document.querySelector(".mobile-menu");
const btn = document.querySelector(".btn");
const elem = document.querySelector("main");
const links = document.querySelectorAll('a[href*="#"]');

const menuItem = () => {
  menuEl.classList.toggle("is-activation")
  
  elem.addEventListener("click", () => {
    menuEl.classList.remove("is-activation")
  })
  
  menuEl.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuEl.classList.remove("is-activation")
    })
  })

  links.forEach(link => {
    link.addEventListener('click', (event) => {
    event.preventDefault()
    
    const blockId = link.getAttribute('href').substring(1)
    
    document.getElementById(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
  })
}

const openingAndClosingTheModalWindow = () => {
  menu.classList.toggle("is-open")
  
  
  menu.querySelectorAll(".mobile-menu-link").forEach((linkEl) => {
    linkEl.addEventListener("click", () => {
      menu.classList.remove("is-open")
    })
  })

  menu.querySelectorAll(".mobile-order-link").forEach((linkEl) => {
    linkEl.addEventListener("click", () => {
      menu.classList.remove("is-open")
    })
  })
}

btn.addEventListener("click", menuItem);
burgerButton.addEventListener("click", openingAndClosingTheModalWindow);
closeButton.addEventListener("click", openingAndClosingTheModalWindow);
