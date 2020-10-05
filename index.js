//mobile menu
const navbarBurger = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

console.log(navbarBurger, navbarMenu);

navbarBurger.addEventListener('click', (e)=> {
  e.preventDefault();
  navbarMenu.classList.toggle('is-active');
})