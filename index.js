import{A as a,S as l,N as d,K as u,M as p,a as n}from"./assets/vendor-DcuYoacM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const f=new a(".accordion-container",{duration:700,showMultiple:!0});f.open(0);const w=new l(".swiper",{loop:!0,slidesPerGroup:1,setWrapperSize:!0,modules:[d,u,p],simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:10},375:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:5,spaceBetween:20}},on:{init:function(){this.slides[this.activeIndex].querySelector(".swiper-slide-item").classList.add("active-slide")},slideChange:function(){this.slides.forEach(r=>{const i=r.querySelector(".swiper-slide-item");i&&i.classList.remove("active-slide")});let t=this.slides[this.activeIndex].querySelector(".swiper-slide-item");t&&t.classList.add("active-slide")}}});document.querySelector(".swiper-button-next-about").addEventListener("click",()=>{w.slideNext()});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".faq");t.querySelectorAll(".accordion-item").forEach(i=>{i.querySelector(".accordion-header").addEventListener("click",()=>{const e=i.querySelector(".accordion-content"),s=e.style.display==="block";t.querySelectorAll(".accordion-content").forEach(c=>c.style.display="none"),s||(e.style.display="block")})})});n.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";const m=document.querySelector(".reviews-list"),y=async()=>{try{const t=await n.get("");if(t.data.length===0)return;v(t.data)}catch(t){console.log(t)}},v=t=>{const r=t.map(({author:i,avatar_url:o,review:e})=>`<li class="reviews-item swiper-slide">
  <img class="reviews-img" src="${o}" alt="${i}" />
  <div class="reviews-wrapper">
  <h3 class="reviews-name">${i}</h3>
  <p class="reviews-text">${e}</p>
  </div>
</li>`).join("");m.insertAdjacentHTML("beforeend",r)};y();
//# sourceMappingURL=index.js.map
