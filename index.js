import{i as d,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(r){const s="https://pixabay.com/api/",o="32552782-0d4c86680018457e820f20492";r.includes(" ")&&(r=r.replace(/\s+/g,"+"));const i=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function h(r){return r.map(({webformatURL:s,largeImageURL:o,tags:i,likes:e,views:t,comments:l,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${s}"
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
              <p class="amount">${l}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${u}</p>
            </div>
          </div>
        </li>`).join("")}const c=document.querySelector(".js-search"),n=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";c.addEventListener("submit",m);function m(r){r.preventDefault(),n.innerHTML="",a.style.display="block";const s=r.target.elements.search.value;if(!y(s)){a.style.display="none";return}p(s).then(o=>{a.style.display="none",o.hits.length?(n.innerHTML=h(o.hits),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()):d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.reset()}).catch(o=>{a.style.display="none",console.log(o)})}function y(r){return r.trim()===""?(alert("Кажется, вы забыли указать, какое фото вы хотите найти :)"),!1):(console.log("Input корректный"),!0)}
//# sourceMappingURL=index.js.map
