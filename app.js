const slides = document.querySelectorAll('.slider-inner');
const prevv = document.querySelector('#prev');
const nextt = document.querySelector('#next');
let auto = true;
let intervalTime = 3000;
let slideInterval;

function nextSlide() {
    // get active class commennt
    active = document.querySelector('.active');
    // remove active class
    active.classList.remove('active');

    // check for next slide
    if (active.nextElementSibling) {
        // add active to next sibling
        active.nextElementSibling.classList.add('active');
    } else {
        // add active to start
        slides[0].classList.add('active');
    }
    setTimeout(() => active.classList.remove('active'));
}


function prevSlide() {
    // get active class commennt
    active = document.querySelector('.active');
    // remove active class
    active.classList.remove('active');

    // check for previous slide
    if (active.previousElementSibling) {
        // add previous to active sibling
        active.previousElementSibling.classList.add('active');
    } else {
        // add active to start
        slides[slides.length - 1].classList.add('active');
    }
    setTimeout(() => active.classList.remove('active'));
}
// butten eventsssssss
nextt.addEventListener("click", function () {
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            nextSlide()
        }, intervalTime);
    }
    nextSlide();
});
prevv.addEventListener("click", function () {
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            nextSlide()
        }, intervalTime);
    }
    prevSlide();
});

