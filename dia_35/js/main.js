new Splide( '.splide' ).mount();

// Slide Personal

let slideIndex = 1;
showSlides(SlideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length)
}