document.querySelector(".lastmod").textContent = document.lastModified;
document.querySelector(".year").textContent = new Date().getFullYear();

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let now = new Date();
document.querySelector(".span-date").textContent = days[now.getDay()] + ",   " + now.getDate() + "   " + months[now.getMonth()] + "   " + now.getFullYear();


let lastVisitDate;
const now1 = Date.now();

if (window.localStorage.getItem('last-visit-date')) {
    lastVisitDate = window.localStorage.getItem('last-visit-date')
} else {
    lastVisitDate = now1;
}

window.localStorage.setItem('last-visit-date', now1);

const secondsSinceLastVisit = Math.floor((now1 - lastVisitDate) / 1000);
const daysSinceLastVisit = Math.floor(secondsSinceLastVisit / (60 * 60 * 24));

document.querySelector('#days-ago').textContent = daysSinceLastVisit;



const requestURL = 'data.json';
const cards = document.querySelector('.grid');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    const businesses = data['businesses'];
    businesses.forEach(displayBusinesses);
  });

  function displayBusinesses(business) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let logo = document.createElement('img');
  
    h2.textContent = `${business.name}`;
    address.textContent = `Address: ${business.address}, ${business.city}, ${business.state} ${business.zip}`;
    phone.textContent = `Phone: ${business.phone}`;
    website.textContent = `Website: ${business.website}`;

    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo for ${business.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('class', 'dir-img');

    h2.setAttribute('class', 'dir-h2')

    phone.setAttribute('class', 'dir-phone')

    address.setAttribute('class', 'dir-address')

    website.setAttribute('href', '#')
    website.setAttribute('class', 'dir-a')
  
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    document.querySelector('article.grid').appendChild(card);
  }

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector("article");
  
  
  gridbutton.addEventListener("click", () => {
      display.classList.add("grid");
      display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", () => {
      display.classList.add("list");
      display.classList.remove("grid");
  });

  const menubutton = document.querySelector('.menu');
  const mainnav = document.querySelector('.nav')
  
  menubutton.addEventListener('click', () => {
      mainnav.classList.toggle('responsive')
  }, false);
  
  window.onresize = () => {
      if (window.innerWidth > 1080) mainnav.classList.remove('responsive')
  };