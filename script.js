'use strict';

//TABS
const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');


const changeClass = el => {
  for( let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove('active');
  }
  el.classList.add('active');
};

tabs.addEventListener('click', e => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target); 
  for(let i = 0; i < content.length; i++) {
    content[i].classList.remove('active');
    if(content[i].dataset.content === currTab) {
      content[i].classList.add('active');
    }
  }
});

// second inside
const tabsIn = document.getElementById('tabs-second');
const contentIn = document.querySelectorAll('.tab__content');

const toggleClass = el =>{
  for(let i = 0; i < tabsIn.children.length; i++) {
    tabsIn.children[i].classList.remove('active');
  }
  el.classList.add('active');
};

tabsIn.addEventListener('click', e => {
  const activeClick = e.target.dataset.btn;
  console.log(activeClick);
  toggleClass(e.target);
  for(let i = 0; i < contentIn.length; i++) {
    contentIn[i].classList.remove('active');
    if(contentIn[i].dataset.content === activeClick) {
      contentIn[i].classList.add('active');
    }
  }
});


// Modal window
const btnOpen = document.getElementById('btn-open');
const modal = document.getElementById('wrapper-modal');

const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', () => {
  modal.classList.add('active');
});

const closeModal = () => {
  modal.classList.remove('active');
};

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

//slider
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
  console.log(n);
  for(let slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDot = n => {
  console.log(n);
  for(let dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
};
dots.forEach((item, indexDot) => {
   item.addEventListener('click', () =>{
    index = indexDot;
    prepareCurrentSlide(index);
   });
});

const prepareCurrentSlide = ind => {
  activeSlide(index);
  activeDot(index);
};

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index); 
  } else {
    index++;
    prepareCurrentSlide(index); 
  }  
};

setInterval(nextSlide, 2000);

const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);  
  } else {
    index--;
    prepareCurrentSlide(index); 
  }  
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
      