const bodylock = document.querySelector('body');
const burgerBtn = document.querySelector('.burger');
const menuMobile = document.querySelector('.header__menu');
const navLinks= document.querySelectorAll('.menu a');
const overlayHeader = document.querySelector('.header');

burgerBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
    burgerBtn.classList.toggle('active');
    bodylock.classList.toggle('lock');
    overlayHeader.classList.toggle('overlay');
});

navLinks.forEach(function(item) {
    item.addEventListener('click', function() {
        menuMobile.classList.remove('menu--open');
        burgerBtn.classList.remove('active');
        bodylock.classList.remove('lock');
        overlayHeader.classList.remove('overlay');
    })
})



