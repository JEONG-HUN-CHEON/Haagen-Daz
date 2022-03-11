"use strict";

//banner slide

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("banner");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




//content slide
let mainText = document.querySelector(".content_text");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log("scrollY",value);
    
    if(value<156){
        mainText.style.animation = 'disappear 2s ease-out forwards';
    }
});

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log("scrollY",value);
    
    if(value>1340){
        mainText.style.animation = 'disappear 2s ease-out forwards';
    }else{
        mainText.style.animation = 'slide 2s ease-out';
    }
});