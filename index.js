import{i as d,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r){return r.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${u}</p>
            </div>
          </div>
        </li>`).join("")}const n=document.querySelector(".js-search"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";n.addEventListener("submit",f);function f(r){r.preventDefault(),c.innerHTML="",l.style.display="block";const o=r.target.elements.search.value;m(o).then(s=>{l.style.display="none",s.hits.length||d.error({title:"❌",message:"Sorry, there are no images matching your search query. Please, try again!"}),c.innerHTML=p(s.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),n.reset()}).catch(s=>{l.style.display="none",console.log(s)})}function m(r){const o="https://pixabay.com/api/",s="32552782-0d4c86680018457e820f20492";r.includes(" ")&&r.replace(/\s+/g,"+");const i=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}
//# sourceMappingURL=index.js.map
