const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModal = document.querySelectorAll('[data-modal]');
const header = document.querySelector('.header');
// const bodylock = document.querySelector('body'); Переменная в menu.js

modalButtons.forEach((item) => {
  item.addEventListener('click', function() {
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);  

    modal.classList.remove('auth--hidden'); 
    header.classList.add('header--overlay');   
    bodylock.classList.add('lock');    
    modal.querySelector('.auth__window').addEventListener('click', function(e) {
      e.stopPropagation();
    })
  })
});

modalClosebuttons.forEach((item) => {
  item.addEventListener('click', function() {
    const modal = this.closest('[data-modal]');
    modal.classList.add('auth--hidden');
    header.classList.remove('header--overlay'); 
    bodylock.classList.remove('lock');
  })
});

allModal.forEach((item) => {
  item.addEventListener('click', function() {
    this.classList.add('auth--hidden'); 
    header.classList.remove('header--overlay'); 
    bodylock.classList.remove('lock');
  })
});