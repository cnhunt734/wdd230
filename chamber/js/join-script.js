let now1 = Date.now();
document.querySelector('#datetime').value = now1;

document.querySelector(".lastmod").textContent = document.lastModified;
document.querySelector(".year").textContent = new Date().getFullYear();

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let now = new Date();
document.querySelector(".span-date").textContent = days[now.getDay()] + ",   " + now.getDate() + "   " + months[now.getMonth()] + "   " + now.getFullYear();

const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.nav')

menubutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

window.onresize = () => {
    if (window.innerWidth > 1080) mainnav.classList.remove('responsive')
};

let lastVisitDate;
const now2 = Date.now();

if (window.localStorage.getItem('last-visit-date')) {
    lastVisitDate = window.localStorage.getItem('last-visit-date')
} else {
    lastVisitDate = now2;
}

window.localStorage.setItem('last-visit-date', now2);

const secondsSinceLastVisit = Math.floor((now2 - lastVisitDate) / 1000);
const daysSinceLastVisit = Math.floor(secondsSinceLastVisit / (60 * 60 * 24));

document.querySelector('#days-ago').textContent = daysSinceLastVisit;