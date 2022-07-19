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