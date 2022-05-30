const button = document.querySelector('#addbtn');
button.addEventListener('click', () => {
    const a = parseInt(document.querySelector('#a').value);
    const b = parseInt(document.querySelector('#b').value);
    console.log(result);

    document.querySelector('#result').textContent = a + b;
});

const temperature = document.querySelector('#temp').textContent;
const windspeed = parseFloat(document.querySelector('#windspeed').textContent);
document.querySelector('#windchill').textContent = temperature + windspeed;