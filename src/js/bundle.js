(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("div"),a=document.createElement("span");n.classList.add(`${e}-temp-${t}`);const d=document.querySelector(`.min-max-wrapper-${t}`);a.innerText="°C";const o=document.createElement("span");return o.innerText="...",d.appendChild(n),d.appendChild(a),"min"===e&&d.appendChild(o),document.querySelector(`.${e}-temp-${t}`)},t=t=>{const{dt:n,main:a}=t;let d=(e=>{const t=new Date(1e3*e).getDate(),n=(new Date).getDate();return t==n?1:t==n+1?2:t==n+2?3:t==n+3?4:t==n+4?5:6})(n),o=new Date(1e3*n).getHours();o<10&&(o="0"+o);const c=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),s=Math.floor(a.temp-273,15);((e,t)=>{const n=document.querySelector(`.forecast-${t}`),a=new Date(1e3*e),d=a.getFullYear(),o=a.getMonth()+1,c=[a.getDate(),o,d].join("."),r=document.createElement("div");r.classList.add(`forecast-day-date-${t}`,"forecast-day-date"),r.innerHTML=`<h3>${c}</h3>`,document.querySelector(`.forecast-day-date-${t}`)||n.appendChild(r)})(n,d),((t,n)=>{const a=document.querySelector(`.forecast-${n}`),d=document.createElement("div");d.classList.add(`min-max-wrapper-${n}`,"min-max-wrapper"),document.querySelector(`.min-max-wrapper-${n}`)||a.appendChild(d);const o=document.querySelector(`.min-temp-${n}`)||e("min",n),c=document.querySelector(`.max-temp-${n}`)||e("max",n);o.innerText=Math.min(o.innerText,t),c.innerText=Math.max(c.innerText,t)})(s,d);const m=document.querySelector(`.forecast-${d}`);c.classList.add("hours-temp-info",`hti-d${d}-h${o}`),m.appendChild(c),r.classList.add("day-time"),r.innerText=o+":00",c.appendChild(r),i.classList.add("time-temp"),i.innerText=s+"°C",c.appendChild(i)};window.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("form"),n=document.getElementById("city-input");e.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=document.querySelector(".list-wrapper");null!=e&&e.parentNode.removeChild(e)})(),(()=>{const e=document.querySelector(".forecast-list"),t=document.createElement("div");t.classList.add("list-wrapper"),e.appendChild(t);for(let e=1;e<=6;e++){let n=document.createElement("div");n.classList.add(`forecast-${e}`,"forecast-day"),t.appendChild(n)}})();(async e=>{const t=`https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=03d6788b090850555c7924df3b5462b4`,n=await fetch(`${t}`);if(!n.ok)throw new Error(`Could not find forecast for ${e}, reseived ${n.status}`);const a=await n.json();return document.querySelector(".city-name").innerHTML=` at ${a.city.name}&nbsp`,a})(n.value).then((e=>e.list.forEach(((e,n)=>t(e))))).catch((e=>console.log(e)))}))})),window.onload=void fetch("../../cities.json").then((e=>e.json())).then((e=>{const t=document.querySelector("#data-list-cities");e.forEach((e=>{const n=document.createElement("option");n.value=e.name,t.appendChild(n)}))}))})();
//# sourceMappingURL=bundle.js.map