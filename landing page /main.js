let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  menu.classList.toggle('active');
  search.classList.remove('active');
}

//hide menu and search box on scroll
window.onscroll = () => {
  menu.classList.remove('active');
  search.classList.remove('active');
}

//header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

//swipper
var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
   autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  });

var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

//swiper ends

//to pause swipper when you click on it 
/*
const divElement = document.getElementby 




  const imageContainer = document.getElementById("1st-img");
  imageContainer.addEventListener("click", function() {
    const newImage1 = document.createElement("img");
    newImage1.src = "img/unused/inner3.JPG";
    newImage1.alt = "Image 2";
    imageContainer.appendChild(newImage1);
  }
  );*/