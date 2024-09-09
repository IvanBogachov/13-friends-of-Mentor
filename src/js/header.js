const menu = document.querySelector(".burger-modal-window");
const closeButton = document.querySelector(".modal-window-btn");
const burgerButton = document.querySelector(".icon-burger-btn");
const menuEl = document.querySelector(".modal-container");
const modalWindowMenu = document.querySelector(".mobile-menu");
const btn = document.querySelector(".btn");

const smoothScrollingPage = () => {
  const links = document.querySelectorAll('a[href*="#"]')

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

const menuItem = () => {
  menuEl.classList.toggle("is-activation")
  
  menuEl.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuEl.classList.remove("is-activation")
    })
  })

  smoothScrollingPage();
}

const openingAndClosingTheModalWindow = () => {
  menu.classList.toggle("is-open")
  
  menu.querySelectorAll(".mobile-menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open")
    })
  })

  menu.querySelectorAll(".mobile-order-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open")
    })
  })

  smoothScrollingPage();
}

btn.addEventListener("click", menuItem);
burgerButton.addEventListener("click", openingAndClosingTheModalWindow);
closeButton.addEventListener("click", openingAndClosingTheModalWindow);
