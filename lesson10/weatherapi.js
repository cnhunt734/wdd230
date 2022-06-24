const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const baseUrl= "https://api.openweathermap.org/data/2.5/weather";

const cityName = "Fairbanks";
const stateCode = "AK";
const countryCode = "US";
const appid = "8af6001c6baede227c9b9e34f19bac44";
const units = "imperial";

const url = `${baseUrl}?q=${cityName},${stateCode},${countryCode}&appid=${appid}&units=${units}`

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temperature = Math.round(data.main.temp);
    currentTemp.textContent = temperature;

    const baseImageUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    //set source to url above
    weatherIcon.setAttribute('src', baseImageUrl);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
});