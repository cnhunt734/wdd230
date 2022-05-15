document.querySelector("#lastmod").textContent = document.lastModified;
document.getElementById("year").innerHTML = new Date().getFullYear();

let months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];      
let now = new Date();     
document.getElementById("spanDate").innerHTML = days[now.getDay()] + ",   " + now.getDate() + "   " + months[now.getMonth()] + "   " + now.getFullYear();

const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.nav')

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 1080) mainnav.classList.remove('responsive')};