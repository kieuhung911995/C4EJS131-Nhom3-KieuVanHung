//slide show page 1
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
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};
//slide text page 2
let txtPage2 = document.querySelectorAll(".menuTab-page2");
let another = document.querySelectorAll(".menu-unChoose");
let butt1 = document.querySelector("#butt1");
butt1.addEventListener("click", display1);
function display1() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 0) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
let butt2 = document.querySelector("#butt2");
butt2.addEventListener("click", display2);
function display2() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 1) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
let butt3 = document.querySelector("#butt3");
butt3.addEventListener("click", display3);
function display3() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 2) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
//load page thi ve menu1
function loadFunc() {
  display1();
};
