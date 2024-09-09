const menu = document.querySelector(".burger-modal-window");
const closeButton = document.querySelector(".modal-window-btn");
const burgerButton = document.querySelector(".icon-burger-btn");
const menuEl = document.querySelector(".modal-container");
const modalWindowMenu = document.querySelector(".mobile-menu");
const btn = document.querySelector(".btn");


const menuItem = () => {
  menuEl.classList.toggle("is-activation")  
  
  const openMenu = btn.getAttribute('aria-expanded') === "true" || false;
  const links = menuEl.querySelectorAll("a[href*='#']");
    if(!openMenu) {
      links.forEach(link => {
      link.addEventListener("click", menuItem)
    })
    return;
  }
  
  for (let link of links) {
    link.addEventListener("click", event => {
      event.preventDefault();
      const bloclId = link.getAttribute("href")
      document.querySelector("" + bloclId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }
}

const openingAndClosingTheModalWindow = () => {
  const openMenu = burgerButton.getAttribute("aria-expanded") === "true" || false;
  const links = document.querySelectorAll('a[href*="#"]')
  
    menu.classList.toggle("is-open")
    if(!openMenu) {
      links.forEach(link => {
      link.addEventListener("click", openingAndClosingTheModalWindow);
    })
    return;
    }

  
  for (let link of links) {
    link.addEventListener("click", event => {
      event.preventDefault();
      const bloclId = link.getAttribute("href")
      document.querySelector("" + bloclId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }
}

btn.addEventListener("click", menuItem);
burgerButton.addEventListener("click", openingAndClosingTheModalWindow);
closeButton.addEventListener("click", openingAndClosingTheModalWindow);
