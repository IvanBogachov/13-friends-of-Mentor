import{A as g,S as w,N as m,K as v,M as S,a as h}from"./assets/vendor-DcuYoacM.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const L=new g(".accordion-container",{duration:700,showMultiple:!0});L.open(0);const q=new w(".swiper-about",{loop:!0,speed:1e3,slidesPerGroup:1,autoHeight:!0,setWrapperSize:!0,modules:[m,v,S],simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},slidesPerView:1,spaceBetween:10,breakpoints:{320:{slidesPerView:2,spaceBetween:10},375:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:5,spaceBetween:20}},on:{init:function(){this.slides[this.activeIndex].querySelector(".swiper-slide-item-about").classList.add("active-slide")},slideChange:function(){this.slides.forEach(s=>{const i=s.querySelector(".swiper-slide-item-about");i&&i.classList.remove("active-slide")});let t=this.slides[this.activeIndex].querySelector(".swiper-slide-item-about");t&&t.classList.add("active-slide")}}});document.querySelector(".swiper-button-next-about").addEventListener("click",()=>{q.slideNext()});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".faq");t.querySelectorAll(".accordion-item").forEach(i=>{i.querySelector(".accordion-header").addEventListener("click",()=>{const e=i.querySelector(".accordion-content"),o=e.style.display==="block";t.querySelectorAll(".accordion-content").forEach(c=>c.style.display="none"),o||(e.style.display="block")})})});const E=document.querySelector(".covers"),f=document.querySelectorAll(".covers-item"),P={root:null,rootMargin:"0px",threshold:0},A=(t,s)=>{t.forEach(i=>{i.isIntersecting?f.forEach(r=>{r.classList.add("active")}):f.forEach(r=>{r.classList.remove("active")})})},O=new IntersectionObserver(A,P);O.observe(E);h.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";const V=document.querySelector(".reviews-list");document.querySelector(".s-button-next");document.querySelector(".s-button-prev");const x=async()=>{try{const t=await h.get("");if(t.data.length===0)return;B(t.data)}catch(t){console.log(t)}},B=t=>{const s=t.map(({author:i,avatar_url:r,review:e})=>`<li class="reviews-item swiper-slide">
  <img class="reviews-img" src="${r}" alt="${i}" />
  <h3 class="reviews-name">${i}</h3>
  <p class="reviews-text">${e}</p>
</li>`).join("");V.insertAdjacentHTML("beforeend",s)};new w(".swiper",{direction:"horizontal",slidesPerView:"auto",modules:[m,v],navigation:{nextEl:".s-button-next",prevEl:".s-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:2,spaceBetween:16}}});x();let I=document.querySelectorAll(".section-animation");function u(){let t=window.innerHeight;I.forEach(s=>{s.getBoundingClientRect().top<t-100&&s.classList.add("visible")})}window.addEventListener("scroll",u);window.addEventListener("resize",u);document.addEventListener("DOMContentLoaded",u);document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(s){s.preventDefault();const i=document.querySelector(this.getAttribute("href"));if(i){let p=function(n){d===null&&(d=n);const a=n-d,l=y(a,e,o,c);window.scrollTo(0,l),a<c&&requestAnimationFrame(p)},y=function(n,a,l,b){return n/=b/2,n<1?l/2*n*n+a:(n--,-l/2*(n*(n-2)-1)+a)};const r=i.getBoundingClientRect().top+window.pageYOffset,e=window.pageYOffset,o=r-e,c=500;let d=null;requestAnimationFrame(p)}})});
//# sourceMappingURL=index.js.map
