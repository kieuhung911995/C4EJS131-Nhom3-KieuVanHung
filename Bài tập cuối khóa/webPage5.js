let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
};


let doanVan = document.getElementsByClassName('display');
let nut1 = document.getElementById('nut1');
let thayClass=document.getElementsByClassName('items5');
nut1.addEventListener('click', display1);
function display1 () {
  for (i = 0; i < doanVan.length; i++) {
    if ( i === 0 ) {
      doanVan[i].style.display = "block";
      thayClass[i].className= "items5-1";
    }
    else { 
        doanVan[i].style.display = "none";
        thayClass[i].className= "items5";
  }
}    
};
function loadFunc(){
    display1();
}
