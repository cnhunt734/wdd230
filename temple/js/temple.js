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
//footer year
document.querySelector(".year").textContent = new Date().getFullYear();
//json
const requestURL = 'data.json';
const cards = document.querySelector('.temple-div');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    const temples = data['temples'];
    temples.forEach(displayTemples);
  });

  function displayTemples(temple) {
    let card = document.createElement('article');
    let h2 = document.createElement('h2');
    let address1 = document.createElement('p');
    let address2 = document.createElement('p');
    let phone = document.createElement('p');
    let services = document.createElement('p');
    let picture = document.createElement('img');
    let panelgroup = document.createElement('a');
    let likebtn = document.createElement('span');

  
    h2.textContent = `${temple.name}`;
    address1.textContent = `Address: ${temple.address}, `;
    address2.textContent = `${temple.city}, ${temple.state} ${temple.zip}`;
    phone.textContent = `Phone: ${temple.phone}`;
    services.textContent = `Services: ${temple.services}`;

    picture.setAttribute('src', temple.picture);
    picture.setAttribute('alt', `Picture of ${temple.name} temple`);
    picture.setAttribute('loading', 'lazy');
    picture.setAttribute('class', 'temple-img');

    h2.setAttribute('class', 'temple-h2');

    phone.setAttribute('class', 'temple-phone');

    address1.setAttribute('class', 'temple-address1');
    address2.setAttribute('class', 'temple-address2');

    services.setAttribute('class', 'temple-services');
  
    panelgroup.setAttribute('class', 'panel-group_btn');
    panelgroup.setAttribute('href', '#');

    likebtn.setAttribute('id', temple.btnid);
    likebtn.setAttribute('class', 'like-btn');

    card.appendChild(panelgroup);
    panelgroup.appendChild(likebtn);
    card.appendChild(picture) ;
    card.appendChild(h2);
    card.appendChild(address1);
    card.appendChild(address2);
    card.appendChild(phone);
    card.appendChild(services);

    document.querySelector('div.temple-div').appendChild(card);
  }

  //like button.
  const likebutton = document.querySelector(".like-btn");
  const storagebutton = document.querySelector(".panel-group_btn span");
  likebutton.addEventListener('click', () => {
    likebutton.classList.toggle('clicked')    
}, false);
  
  
  
  storagebutton.addEventListener('click', ()=> {
                         let btnStorage = $(this).attr("id");
  
                          if($(this).hasClass("clicked")) {
                              localStorage.setItem(btnStorage, 'true');
                          } else {
                              localStorage.removeItem(btnStorage, 'true');
                          }
  
                      });
  
  
                      storagebutton.each(function() {
                        let mainlocalStorage = $( this ).attr( "id" );
  
                        if(localStorage.getItem(mainlocalStorage) == 'true') {
                          $(this).addClass("clicked");
                      } else {
                          $(this).removeClass("clicked");
                      }
  
  
  
                      });
  