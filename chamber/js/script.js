document.querySelector("#lastmod").textContent = document.lastModified;
document.getElementById("year").innerHTML = new Date().getFullYear();

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let now = new Date();
document.getElementById("spanDate").innerHTML = days[now.getDay()] + ",   " + now.getDate() + "   " + months[now.getMonth()] + "   " + now.getFullYear();

const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.nav')

menubutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

window.onresize = () => {
    if (window.innerWidth > 1080) mainnav.classList.remove('responsive')
};

let date = new Date();

date.getDay();

if (date.getDay() == 1 || date.getDay() == 2) {
    document.querySelector('#banner').style.display = "block";
}

const temperature = parseFloat(document.querySelector('#temp').textContent);
const windspeed = parseFloat(document.querySelector('#windspeed').textContent);
if (temperature <= 50 && windspeed > 3) {
    document.querySelector('#windchill').textContent = Math.round(35.74 + (.6215 * temperature) - (35.75 * Math.pow(windspeed, .16)) +
        (.4275 * temperature * Math.pow(windspeed, .16)), 0) + '°F'
}