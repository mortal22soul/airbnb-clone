(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function d(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=d(s);fetch(s.href,t)}})();let l=[],p=document.getElementById("root");for(let e=0;e<12;e++)l.push(`/images/home (${e+1}).jpeg`);let f=["Rome, Italy","Sydney, Australia","London, England","Porto, Portugal","Bagan, Myanmar","Paris, France","Amsterdam, Holland","Lucerne, Switzerland","Florence, Italy","Istanbul, Turkey","Dubai, UAE","Copenhagen, Denmark","Kyoto, Japan","Salzburg, Austria"],n=[];for(let e=0;e<12;e++)n.push(Math.floor(Math.random()*15)+35);for(let e=0;e<12;e++)p.innerHTML+=`<div class="card m-auto">
      <img
      src="${l[e]}"
      alt=""
      class="box-border object-cover rounded-xl w-[322px] h-[306px] bg-cover" />
      <div class="pt-2 flex flex-col">
      <div class="flex justify-between">
      <span class="font-semibold">${f[e]}</span>
      <span>&starf; ${n[e]/10}</span>
      </div>
      <span class="font-thin">${n[e]*150} kilometers away</span>
      <span class="font-thin">7-12 October</span>
      <span class="font-thin"
      ><span class="font-semibold">₹${n[e]},000</span> night</span
      >
      </div>
      </div>`;let u=document.getElementById("icons"),c=[],m=["Rooms","Tropical","Lakefront","Islands","OMG!","Iconic&nbsp;cities","Beachfront","Amazing&nbsp;views","Bed&nbsp;&&nbsp;breakfasts","Countryside","Design","Tiny&nbsp;homes","Castles","Trending","Treehouses","Amazing&nbsp&nbsp;pools","New","Cabins","Earth&nbsp;homes","Farms","Camper&nbsp;vans","National&nbsp;parks","Arctic","Surfing","Caves","Camping","A-frames","Golfing","Mansions","Historical&nbsp;homes","Vineyards","Hanoks","Luxe","Skiing","Cycladic&nbsp;homes","Top&nbsp;of&nbsp;the&nbsp;world","Chef's&nbsp;kitchens","Play","Windmills","Casas&nbsp;particulares","Containers","Shepherd's&nbsp;huts","Barns","Ryokans","Desert","Domes","Towers","Yurts","Ski-in/out","Houseboats","Off-the-grid","Adapted","Boats","Grand&nbsp;pianos","Creative&nbsp;spaces","Riads","Trulli","Beach","Lake"];for(let e=0;e<24;e++)c.push(`/images/icon (${e+1}).jpg`);for(let e=0;e<24;e++)u.innerHTML+=`<li
      class="grid flex-shrink-0 grid-cols-1 space-y-1 justify-items-center">
      <div><img src="${c[e]}" alt="" class="w-6" /></div>
      <div class="text-xs font-bold">${m[e]}</div>
      </li>`;var o=document.getElementById("main");function g(){o.classList.contains("dark")?o.classList.remove("dark"):o.classList.add("dark")}let b=document.getElementById("dark-toggle");b.addEventListener("click",g);
