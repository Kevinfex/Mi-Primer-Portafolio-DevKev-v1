function darkMode(){const o=document.querySelectorAll(".button__dark-mode"),e=document.querySelectorAll(".fa-moon");console.log(o),console.log(e),o.forEach(o=>o.addEventListener("click",()=>{document.body.classList.toggle("dark-mode"),e.forEach(o=>{o.classList.contains("fa-moon")?(o.classList.remove("fa-moon"),o.classList.add("fa-sun")):(o.classList.remove("fa-sun"),o.classList.add("fa-moon"))})}))}document.addEventListener("DOMContentLoaded",(function(){darkMode()}));