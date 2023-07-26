let rating = document.querySelector('.rating'),
    ratingItem = document.querySelectorAll('.rating-item');

rating.addEventListener('click', (e) => {
  let target = e.target;
  if(target.classList.contains('rating-item')){
    removeClass(ratingItem, 'active')
    target.classList.add('active');
  }
})

function removeClass(elements, className) {
  for (let i = 0; i < elements.length; i++) {
     elements[i].classList.remove(className);
  }
}