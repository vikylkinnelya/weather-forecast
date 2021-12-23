(()=>{"use strict";const e=async e=>{const t=`https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=03d6788b090850555c7924df3b5462b4`,n=await fetch(`${t}`);if(!n.ok)throw new Error(`Could not find forecast for ${e}, reseived ${n.status}`);const a=await n.json();return document.querySelector(".city-name").innerHTML=` at ${a.city.name}&nbsp`,a},t=()=>{const e=document.querySelector(".forecast-list"),t=document.createElement("div");t.classList.add("list-wrapper"),e.appendChild(t);for(let e=1;e<=6;e++){let n=document.createElement("div");n.classList.add(`forecast-${e}`,"forecast-day"),t.appendChild(n)}},n=()=>{const e=document.querySelector(".list-wrapper");null!=e&&e.parentNode.removeChild(e)},a=(e,t)=>{const n=document.createElement("div"),a=document.createElement("span");n.classList.add(`${e}-temp-${t}`);const o=document.querySelector(`.min-max-wrapper-${t}`);a.innerText="°C";const c=document.createElement("span");return c.innerText="...",o.appendChild(n),o.appendChild(a),"min"===e&&o.appendChild(c),document.querySelector(`.${e}-temp-${t}`)},o=e=>{const{dt:t,main:n}=e;let o=(e=>{const t=new Date(1e3*e).getDate(),n=(new Date).getDate();return t==n?1:t==n+1?2:t==n+2?3:t==n+3?4:t==n+4?5:6})(t),c=new Date(1e3*t).getHours();c<10&&(c="0"+c);const d=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),i=Math.floor(n.temp-273,15);((e,t)=>{const n=document.querySelector(`.forecast-${t}`),a=new Date(1e3*e),o=a.getFullYear(),c=a.getMonth()+1,d=[a.getDate(),c,o].join("."),r=document.createElement("div");r.classList.add(`forecast-day-date-${t}`,"forecast-day-date"),r.innerHTML=`<h3>${d}</h3>`,document.querySelector(`.forecast-day-date-${t}`)||n.appendChild(r)})(t,o),((e,t)=>{const n=document.querySelector(`.forecast-${t}`),o=document.createElement("div");o.classList.add(`min-max-wrapper-${t}`,"min-max-wrapper"),document.querySelector(`.min-max-wrapper-${t}`)||n.appendChild(o);const c=document.querySelector(`.min-temp-${t}`)||a("min",t),d=document.querySelector(`.max-temp-${t}`)||a("max",t);c.innerText=Math.min(c.innerText,e),d.innerText=Math.max(d.innerText,e)})(i,o);const l=document.querySelector(`.forecast-${o}`);d.classList.add("hours-temp-info",`hti-d${o}-h${c}`),l.appendChild(d),r.classList.add("day-time"),r.innerText=c+":00",d.appendChild(r),s.classList.add("time-temp"),s.innerText=i+"°C",d.appendChild(s)};window.addEventListener("DOMContentLoaded",(()=>{const a=document.getElementById("form"),c=document.getElementById("city-input");a.addEventListener("change",(a=>{a.preventDefault(),n(),t();const d=c.value;e(d).then((e=>e.list.forEach(((e,t)=>o(e))))).catch((e=>console.log(e)))})),a.addEventListener("submit",(a=>{a.preventDefault(),n(),t();const d=c.value;e(d).then((e=>e.list.forEach(((e,t)=>o(e))))).catch((e=>console.log(e)))}))})),window.onload=void fetch("cities.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((e=>e.json())).then((e=>{const t=document.querySelector("#data-list-cities");e.forEach((e=>{const n=document.createElement("option");n.value=e.name,t.appendChild(n)}))}))})();
//# sourceMappingURL=bundle.js.map