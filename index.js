import{A as M,S as g,N as L,K as y,M as C,a as p,i as q}from"./assets/vendor-CEuKR2f-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const m=document.querySelector(".burger-modal-window"),O=document.querySelector(".modal-window-btn"),z=document.querySelector(".icon-burger-btn"),f=document.querySelector(".modal-container");document.querySelector(".mobile-menu");const j=document.querySelector(".btn"),$=document.querySelector("main"),F=document.querySelectorAll('a[href*="#"]'),H=()=>{f.classList.toggle("is-activation"),$.addEventListener("click",()=>{f.classList.remove("is-activation")}),f.querySelectorAll(".menu-link").forEach(e=>{e.addEventListener("click",()=>{f.classList.remove("is-activation")})}),F.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault();const o=e.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})})})},I=()=>{m.classList.toggle("is-open"),m.querySelectorAll(".mobile-menu-link").forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("is-open")})}),m.querySelectorAll(".mobile-order-link").forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("is-open")})})};j.addEventListener("click",H);z.addEventListener("click",I);O.addEventListener("click",I);const R=new M(".accordion-container",{duration:700,showMultiple:!0});R.open(0);const T=new g(".swiper-about",{loop:!0,speed:750,modules:[L,y,C],grabCursor:!0,simulateTouch:!0,keyboard:{enabled:!0},slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{init:function(){this.slides[this.activeIndex].querySelector(".swiper-slide-item-about").classList.add("active-slide")},slideChange:function(){this.slides.forEach(s=>{const o=s.querySelector(".swiper-slide-item-about");o&&o.classList.remove("active-slide")});let e=this.slides[this.activeIndex].querySelector(".swiper-slide-item-about");e&&e.classList.add("active-slide")}}});document.querySelector(".swiper-button-next-about").addEventListener("click",()=>{T.slideNext()});new g(".swiper",{slidesPerView:"auto",spaceBetween:0,centerInsufficientSlides:!0,centeredSlides:!1,centeredSlidesBounds:!1,watchSlidesVisibility:!0,modules:[L,y],navigation:{nextEl:".project-swiper-button-next",prevEl:".project-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:1,spaceBetween:25},1440:{slidesPerView:1,spaceBetween:35}}});new M(".faq-accordion-container",{duration:350,showMultiple:!0,onOpen:N});function N(e){const s=e.getBoundingClientRect(),o=Math.max(document.documentElement.clientHeight,window.innerHeight);s.bottom>o&&window.scrollTo({top:s.top+window.scrollY-(o-s.height)/2,behavior:"smooth"})}const D=document.querySelector(".covers"),S=document.querySelectorAll(".covers-item"),K={root:null,rootMargin:"0px",threshold:0},Y=(e,s)=>{e.forEach(o=>{o.isIntersecting?S.forEach(r=>{r.classList.add("active")}):S.forEach(r=>{r.classList.remove("active")})})},Z=new IntersectionObserver(Y,K);Z.observe(D);p.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";const k=document.querySelector(".reviews-list"),U=async()=>{try{const e=await p.get("");if(e.data.length===0)return;W(e.data)}catch{G(),q.error({message:"Reviews not found",position:"topRight",messageSize:20})}},_=`<li class="reviews-err" id="reviews-err">
          <p class="reviews-err-text">Not found</p>
        </li>`,W=e=>{const s=e.map(({author:o,avatar_url:r,review:i})=>`<li class="reviews-item swiper-slide">
  <img class="reviews-img" loading="lazy" src="${r}" alt="${o}" />
  <h3 class="reviews-name">${o}</h3>
  <p class="reviews-text">${i}</p>
</li>`).join("");k.insertAdjacentHTML("beforeend",s)},G=()=>{k.insertAdjacentHTML("beforeend",_)};new g(".reviews-swiper",{direction:"horizontal",slidesPerView:"auto",modules:[L,y],navigation:{nextEl:".s-button-next",prevEl:".s-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});U();const l={closeModalBtn:document.querySelector(".btnCloseModal"),modal:document.querySelector(".modal"),titleModal:document.querySelector(".modal-title"),textModal:document.querySelector(".modal-text")};function b(){l.modal.classList.remove("is-open"),J()}function J(){l.closeModalBtn.removeEventListener("click",A),window.removeEventListener("click",x),window.removeEventListener("keydown",B)}function A(){b()}function x(e){e.target===l.modal&&b()}function B(e){e.key==="Escape"&&b()}function Q(){l.closeModalBtn.addEventListener("click",A),window.addEventListener("click",x),window.addEventListener("keydown",B)}function X({title:e,message:s}){l.titleModal.innerHTML=e,l.textModal.innerHTML=s,l.modal.classList.add("is-open"),Q()}p.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function ee(e){return(await p.post("/requests",e)).data}const t={formFooter:document.querySelector(".js-form-footer"),sendBtnFooter:document.querySelector(".js-btn-footer"),emailInput:document.querySelector(".js-email-input"),emailMessage:document.querySelector(".js-email-message")};let d=!1;function te(){const e=/^(?!\s*$)\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,s=t.emailInput.value.trim();e.test(s)?(t.emailInput.classList.remove("invalid"),t.emailInput.classList.add("valid"),t.emailMessage.textContent="Success!",t.emailMessage.classList.remove("error"),t.emailMessage.classList.add("success"),d=!0):s===""?(t.emailInput.classList.remove("valid"),t.emailInput.classList.remove("invalid"),t.emailMessage.classList.remove("success"),t.emailMessage.classList.remove("error"),d=!1):(t.emailInput.classList.remove("valid"),t.emailInput.classList.add("invalid"),t.emailMessage.textContent="Invalid email, try again",t.emailMessage.classList.remove("success"),t.emailMessage.classList.add("error"),d=!1)}function se(){const e=/^(?!\s*$)\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,s=t.emailInput.value.trim();e.test(s)?(t.emailInput.classList.remove("invalid"),t.emailInput.classList.add("valid"),t.emailMessage.textContent="Success!",t.emailMessage.classList.remove("error"),t.emailMessage.classList.add("success"),d=!0):s===""?(t.emailInput.classList.remove("valid"),t.emailInput.classList.remove("invalid"),t.emailMessage.classList.remove("success"),t.emailMessage.classList.remove("error"),d=!1):d&&(t.emailInput.classList.remove("valid"),t.emailInput.classList.add("invalid"),t.emailMessage.textContent="Invalid email, try again",t.emailMessage.classList.remove("success"),t.emailMessage.classList.add("error"))}t.emailInput.addEventListener("blur",te);t.emailInput.addEventListener("input",se);t.formFooter.addEventListener("submit",async function(e){e.preventDefault();const s=new FormData(t.formFooter),o=s.get("email"),r=s.get("comment");try{const i=await ee({email:o,comment:r});if(!i)throw new Error("Server error");t.formFooter.reset(),t.emailInput.classList.remove("valid","invalid"),t.emailMessage.textContent="",t.formFooter.reset(),X(i)}catch(i){q.show({title:":(",message:`Error: ${i.message}. Please check your input and try again.`})}});window.addEventListener("scroll",function(){var e=document.querySelector(".top");window.scrollY>1e3?e.style.display="flex":e.style.display="none"});document.querySelector(".top").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});let ie=document.querySelectorAll(".section-animation");function h(){let e=window.innerHeight;ie.forEach(s=>{s.getBoundingClientRect().top<e-100&&s.classList.add("visible")})}window.addEventListener("scroll",h);window.addEventListener("resize",h);document.addEventListener("DOMContentLoaded",h);document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(s){s.preventDefault();const o=document.querySelector(this.getAttribute("href"));if(o){let E=function(a){w===null&&(w=a);const u=a-w,v=P(u,i,n,c);window.scrollTo(0,v),u<c&&requestAnimationFrame(E)},P=function(a,u,v,V){return a/=V/2,a<1?v/2*a*a+u:(a--,-v/2*(a*(a-2)-1)+u)};const r=o.getBoundingClientRect().top+window.pageYOffset,i=window.pageYOffset,n=r-i,c=500;let w=null;requestAnimationFrame(E)}})});const oe=document.querySelectorAll(".lazy"),ne=e=>{e.src=e.dataset.src,e.classList.add("loaded")},re=new IntersectionObserver((e,s)=>{e.forEach(o=>{o.isIntersecting&&(ne(o.target),s.unobserve(o.target))})});oe.forEach(e=>{re.observe(e)});
//# sourceMappingURL=index.js.map
