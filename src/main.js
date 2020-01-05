import $ from "jquery"

$(document).ready(function(){
    $('.contatcs-btn').on('click', function(event){
      event.preventDefault();
      $('.contatcs').fadeIn();
    });
    $('.contatcs-close').on('click', function(event){
      $('.contatcs').fadeOut();
    })
});

// Slider
var images = document.querySelectorAll('.slider img');
var i = 0;

function nextSlide () {
  setTimeout(slide, 3000);
}
function slide() {
  images[i].style.display = 'none';
  i++;
  if (i >= images.length) {
    i = 0;
  }
  images[i].style.display = 'block';
  nextSlide ();
}
nextSlide ();

// tabs
var digital_btn = document.querySelectorAll('.digital_btn');
var film_btn = document.querySelectorAll('.film_btn');

var digital = document.querySelector('.digital');
var film = document.querySelector('.film');

digital_btn.forEach(btn => {
  btn.onclick = () => {
    film.style.display = 'none';
    digital.style.display = 'flex';
  }
});
film_btn.forEach(btn => {
  btn.onclick = () => {
    film.style.display = 'flex';
    digital.style.display = 'none';
  };
});
