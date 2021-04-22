(()=>{var n={"./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/e=>{e.exports=function(){var e=document.querySelectorAll(".counter-block-input")[0],t=document.querySelectorAll(".counter-block-input")[1],n=document.getElementById("select"),r=document.getElementById("total"),o=0,s=0,c=0;r.textContent=0,e.addEventListener("input",function(){o=+this.value,c=2e3*(s+o),""==t.value||""==e.value?r.textContent=0:r.textContent=c}),t.addEventListener("input",function(){s=+this.value,c=2e3*(s+o),""==e.value||""==t.value?r.textContent=0:r.textContent=c}),n.addEventListener("change",function(){""==t.value||""==e.value?r.textContent=0:r.textContent=c*this.options[this.selectedIndex].value})}},"./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/e=>{e.exports=function(){var s=document.querySelector(".main-form"),n=s.getElementsByTagName("input"),r=document.createElement("div");r.classList.add("status"),s.addEventListener("submit",function(e){e.preventDefault(),s.appendChild(r),new Promise(function(e,t){var n=new XMLHttpRequest;n.open("POST","server.php"),n.setRequestHeader("Content-Type","application/json; charset=utf-8");var r=new FormData(s),o={};r.forEach(function(e,t){o[t]=e});r=JSON.stringify(o);n.send(r),n.onload=function(){4===n.readyState||200==n.status?e("Спасибо! Скоро мы с Вами свяжемся!"):t("Что-то пошло не так!")}}).then(function(e){return r.innerHTML=e}).catch(function(e){return r.innerHTML=e}).finally(function(){return console.log("Запрос обработан")});for(var t=0;t<n.length;t++)n[t].value=""})}},"./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/e=>{e.exports=function(){var e=document.querySelector(".more"),t=document.querySelector(".overlay"),n=document.querySelector(".popup-close"),r=document.querySelectorAll(".description-btn");e.addEventListener("click",s);for(var o=0;o<r.length;o++)r[o].addEventListener("click",s);function s(){t.style.display="block",this.classList.add=".more-splash",document.body.style.overflow="hidden"}n.addEventListener("click",function(){t.style.display="none",e.classList.remove=".more-splash",document.body.style.overflow=""})}},"./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/e=>{e.exports=function(){var n=1,t=document.querySelectorAll(".slider-item"),e=document.querySelector(".prev"),r=document.querySelector(".next"),o=document.querySelector(".slider-dots"),s=document.querySelectorAll(".dot");function c(e){e>t.length&&(n=1),e<1&&(n=t.length),t.forEach(function(e){return e.style.display="none"}),s.forEach(function(e){return e.classList.remove("dot-active")}),t[n-1].style.display="block",s[n-1].classList.add("dot-active")}function a(e){c(n+=e)}c(n),e.addEventListener("click",function(){a(-1)}),r.addEventListener("click",function(){a(1)}),o.addEventListener("click",function(e){for(var t=0;t<s.length+1;t++)e.target.classList.contains("dot")&&e.target==s[t-1]&&c(n=t)})}},"./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/e=>{e.exports=function(){var o=document.querySelectorAll(".info-header-tab"),e=document.querySelector(".info-header"),s=document.querySelectorAll(".info-tabcontent");function c(e){for(var t=e;t<s.length;t++)s[t].classList.remove("show"),s[t].classList.add("hide")}c(1),e.addEventListener("click",function(e){var t,n=e.target;if(n&&n.classList.contains("info-header-tab"))for(var r=0;r<o.length;r++)if(n==o[r]){c(0),s[t=r].classList.contains("hide")&&(s[t].classList.remove("hide"),s[t].classList.add("show"));break}})}},"./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/e=>{e.exports=function(){var e,n,r,o,s,c;e="timer",n="2021-04-30",r=(e=document.getElementById(e)).querySelector(".hours"),o=e.querySelector(".minutes"),s=e.querySelector(".seconds"),c=setInterval(function(){var e=function(e){var t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60),e=Math.floor(t/1e3/60/60);return{total:t,hours:e=t<=0?r=n=0:e,minutes:r,seconds:n}}(n);function t(e){return e<10?"0"+e:e}r.textContent=t(e.hours),o.textContent=t(e.minutes),s.textContent=t(e.seconds),e.total<=0&&clearInterval(c)},1e3)}}},r={};function c(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e](t,t.exports,c),t.exports}
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
window.addEventListener("DOMContentLoaded",function(){"use strict";var e=c(/*! ./parts/tabs.js */"./src/parts/tabs.js"),t=c(/*! ./parts/timer.js */"./src/parts/timer.js"),n=c(/*! ./parts/modal.js */"./src/parts/modal.js"),r=c(/*! ./parts/form.js */"./src/parts/form.js"),o=c(/*! ./parts/slider.js */"./src/parts/slider.js"),s=c(/*! ./parts/calc.js */"./src/parts/calc.js");e(),t(),n(),r(),o(),s()})})();