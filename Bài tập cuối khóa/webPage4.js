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
let butt4 = document.querySelector("#butt4");
butt4.addEventListener("click", display4);
function display4() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 3) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
let butt5 = document.querySelector("#butt5");
butt5.addEventListener("click", display5);
function display5() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 4) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
let butt6 = document.querySelector("#butt6");
butt6.addEventListener("click", display6);
function display6() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 5) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
let butt7 = document.querySelector("#butt7");
butt7.addEventListener("click", display7);
function display7() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i ===6) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
let butt8 = document.querySelector("#butt8");
butt8.addEventListener("click", display8);
function display8() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 7) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
let butt9 = document.querySelector("#butt9");
butt9.addEventListener("click", display9);
function display9() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 8) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
let butt10 = document.querySelector("#butt10");
butt10.addEventListener("click", display10);
function display10() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 9) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
let butt11 = document.querySelector("#butt11");
butt11.addEventListener("click", display11);
function display11() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 10) {
      txtPage2[i].style.display = "block";
      another[i].className = "menu-choose";
    } else {
      txtPage2[i].style.display = "none";
      another[i].className = "menu-unChoose";
    }
  }
};
let butt12 = document.querySelector("#butt12");
butt12.addEventListener("click", display12);
function display12() {
  for (i = 0; i < txtPage2.length; i++) {
    if (i === 11) {
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
