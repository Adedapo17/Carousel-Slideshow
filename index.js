let sliderContainer = document.querySelector('.carousel-list'),
    prev = document.querySelector('#left'),
    next = document.querySelector('#right'),
    slideItems = document.querySelectorAll('.carousel_images'),
    current = 0;

prev.addEventListener("mouseover", function(){
    prev.style.display="block";
    next.style.display="block";
});

next.addEventListener("mouseover", function(){
    prev.style.display="block";
    next.style.display="block";
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.querySelectorAll(".carousel_images");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
  