
var current = 0;

showSlides();

function showSlides(){
  var slides = document.querySelectorAll("#slides > img");
  for(let i =0; i<slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[current].style.display = "block";
  current++;
  if(current == slides.length)
    current = 0;
  setTimeout(showSlides,3000);
}
