var hero = document.querySelector('.hero');
var slider = document.querySelector('.main-slider');

var tl = new TimelineMax();

tl.fromTo(hero, 1.3, {width: "10%"}, {width: "100%"})
tl.fromTo(slider,1, {width: "0%"}, {width:"100%"})
//tl.fromTo(hero, 1, {width: "100%"}, {width: "95%"})


// sponzorova cast stranky
 

function scrolldown(){
  var backSponsor = document.querySelector('.back-div');
  var backgroundPosition = backSponsor.getBoundingClientRect().top;
  var screenPosition = window.innerHeight ;


  if (backgroundPosition > screenPosition) {
     var scroll = new TimelineMax();
     scroll.fromTo(backSponsor, 1, {height: "0%"}, {height:"60vh"}) 
  }
}

window.addEventListener('scroll', scrolldown);


//slider obrazkov
//  slider funkcia 

 // n = number/ cislo ktore zadam v html 
var headline = document.getElementById('headline');
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
// pre bodky ukazujuce obrazok v poradi
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;   

  var slides = document.getElementsByClassName("slide");
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

