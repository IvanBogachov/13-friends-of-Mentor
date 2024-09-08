import{A as l,S as d,N as u,K as p,M as f,a}from"./assets/vendor-DcuYoacM.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v=new l(".accordion-container",{duration:700,showMultiple:!0});v.open(0);const m=new d(".swiper",{loop:!0,slidesPerGroup:1,setWrapperSize:!0,modules:[u,p,f],simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:10},375:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:5,spaceBetween:20}},on:{init:function(){this.slides[this.activeIndex].querySelector(".swiper-slide-item").classList.add("active-slide")},slideChange:function(){this.slides.forEach(i=>{const r=i.querySelector(".swiper-slide-item");r&&r.classList.remove("active-slide")});let t=this.slides[this.activeIndex].querySelector(".swiper-slide-item");t&&t.classList.add("active-slide")}}});document.querySelector(".swiper-button-next-about").addEventListener("click",()=>{m.slideNext()});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".faq");t.querySelectorAll(".accordion-item").forEach(r=>{r.querySelector(".accordion-header").addEventListener("click",()=>{const e=r.querySelector(".accordion-content"),s=e.style.display==="block";t.querySelectorAll(".accordion-content").forEach(c=>c.style.display="none"),s||(e.style.display="block")})})});const w=document.querySelector(".covers"),n=document.querySelectorAll(".covers-item"),y={root:null,rootMargin:"0px",threshold:.6},h=(t,i)=>{t.forEach(r=>{r.isIntersecting?n.forEach(o=>{o.classList.add("active")}):n.forEach(o=>{o.classList.remove("active")})})},b=new IntersectionObserver(h,y);b.observe(w);a.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";const g=document.querySelector(".reviews-list"),S=async()=>{try{const t=await a.get("");if(t.data.length===0)return;L(t.data)}catch(t){console.log(t)}},L=t=>{const i=t.map(({author:r,avatar_url:o,review:e})=>`<li class="reviews-item swiper-slide">
  <img class="reviews-img" src="${o}" alt="${r}" />
  <div class="reviews-wrapper">
  <h3 class="reviews-name">${r}</h3>
  <p class="reviews-text">${e}</p>
  </div>
</li>`).join("");g.insertAdjacentHTML("beforeend",i)};S();
//# sourceMappingURL=index.js.map
