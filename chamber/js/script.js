
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