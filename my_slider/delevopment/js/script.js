"use strict";

const btnPrev = document.querySelector('.btn__prev');
const btnNext = document.querySelector('.btn__next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;


const activeSLide = (numberSlide) => {
    slides.forEach(slide => {
        slide.classList.remove('slide__active');
    });

    slides[numberSlide].classList.add('slide__active');
}

const activeDot = (numberDot) => {
    dots.forEach(dot => {
        dot.classList.remove('dot__active');
    });

    dots[numberDot].classList.add('dot__active');
}


const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        activeSLide(index);
        activeDot(index);
    } else {
        index++;
        activeSLide(index);
        activeDot(index);
    }
}

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
        activeSLide(index);
        activeDot(index);

    } else {
        index--;
        activeSLide(index);
        activeDot(index);
    }
}


dots.forEach((dot, indexdot) => {
    dot.addEventListener('click', function (e) {
        index = indexdot;
        activeSLide(index);
        activeDot(index);
    })
})


btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);