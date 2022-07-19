//Hamburger Menu
const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.nav')
const hamX = document.querySelector('#x')

menubutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')    
}, false);

window.onresize = () => {
    if (window.innerWidth > 600) mainnav.classList.remove('responsive')
};
//Weather API
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('.weather-desc');
const Humidity = document.querySelector('#humidity');

const baseUrl= "https://api.openweathermap.org/data/2.5/onecall?";

const lat = "33.4152";
const long = "-111.8315";
const appid = "8af6001c6baede227c9b9e34f19bac44";
const units = "imperial";

const url = `${baseUrl}lat=${lat}&lon=${long}&appid=${appid}&units=${units}`

fetch(url)
.then(response => response.json())
.then(data => {
    const temperature = Math.round(data.current.temp);
    currentTemp.textContent =   temperature;

    const humidity = data.current.humidity;
    Humidity.textContent = humidity;

    const baseImageUrl = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    const desc = data.current.weather[0].description;

    weatherIcon.setAttribute('src', baseImageUrl);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
});
//footer year
document.querySelector(".year").textContent = new Date().getFullYear();
//Last Modified
document.querySelector(".lastmod").textContent = document.lastModified;