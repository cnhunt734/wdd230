
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

const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const windSpeed = document.querySelector('#windspeed');

const baseUrl= "https://api.openweathermap.org/data/2.5/weather";

const cityName = "Rangely";
const stateCode = "CO";
const countryCode = "US";
const appid = "8af6001c6baede227c9b9e34f19bac44";
const units = "imperial";

const url = `${baseUrl}?q=${cityName},${stateCode},${countryCode}&appid=${appid}&units=${units}`

fetch(url)
.then(response => response.json())
.then(data => {
    const temperature = Math.round(data.main.temp);
    currentTemp.textContent = temperature;

    const speed = data.wind.speed;
    windSpeed.textContent = speed;

    const baseImageUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    

    //set source to url above
    weatherIcon.setAttribute('src', baseImageUrl);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
});