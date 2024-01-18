(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function d(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=d(s);fetch(s.href,t)}})();let l=[],f=document.getElementById("root");for(let e=0;e<12;e++)l.push(`/assets/home (${e+1}).jpeg`);let u=["Rome, Italy","Sydney, Australia","London, England","Porto, Portugal","Bagan, Myanmar","Paris, France","Amsterdam, Holland","Lucerne, Switzerland","Florence, Italy","Istanbul, Turkey","Dubai, UAE","Copenhagen, Denmark","Kyoto, Japan","Salzburg, Austria"],r=[];for(let e=0;e<12;e++)r.push(Math.floor(Math.random()*15)+35);for(let e=0;e<12;e++)f.innerHTML+=`<div class="card m-auto">
      <img
      src="${l[e]}"
      alt=""
      class="box-border object-cover rounded-xl w-[322px] h-[306px] bg-cover" />
      <div class="pt-2 flex flex-col">
      <div class="flex justify-between">
      <span class="font-semibold">${u[e]}</span>
      <span>&starf; ${r[e]/10}</span>
      </div>
      <span class="font-thin">${r[e]*150} kilometers away</span>
      <span class="font-thin">7-12 October</span>
      <span class="font-thin"
      ><span class="font-semibold">₹${r[e]},000</span> night</span
      >
      </div>
      </div>`;let m=document.getElementById("icons"),c=[],p=["Rooms","Tropical","Lakefront","Islands","OMG!","Iconic cities","Beachfront","Amazing views","Bed & breakfasts","Countryside","Design","Tiny homes","Castles","Trending","Treehouses","Amazing pools","New","Cabins","Earth homes","Farms","Camper vans","National parks","Arctic","Surfing","Caves","Camping","A-frames","Golfing","Mansions","Historical homes","Vineyards","Hanoks","Luxe","Skiing","Cycladic homes","Top of the world","Chef's kitchens","Play","Windmills","Casas particulares","Containers","Shepherd's huts","Barns","Ryokans","Desert","Domes","Towers","Yurts","Ski-in/out","Houseboats","Off-the-grid","Adapted","Boats","Grand pianos","Creative spaces","Riads","Trulli","Beach","Lake"];for(let e=0;e<24;e++)c.push(`/assets/icon (${e+1}).jpg`);for(let e=0;e<24;e++)m.innerHTML+=`<li
      class="grid flex-shrink-0 grid-cols-1 space-y-1 justify-items-center">
      <div><img src="${c[e]}" alt="" class="w-6" /></div>
      <div class="text-xs font-bold">${p[e]}</div>
      </li>`;var o=document.getElementById("main");function g(){o.classList.contains("dark")?o.classList.remove("dark"):o.classList.add("dark")}let h=document.getElementById("dark-toggle");h.addEventListener("click",g);
