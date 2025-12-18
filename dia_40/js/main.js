//SLIDER

let currentIndex = 0;
const slides = document.querySelectorAll('.slider__slide');
const dots = document.querySelectorAll('.slider__dot');
let slideInterval = null;

// Mostrar slide según índice (solo opacity y z-index)
function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('slider__slide--active'));
    dots.forEach(dot => dot.classList.remove('slider__dot--active'));

    slides[currentIndex].classList.add('slider__slide--active');
    dots[currentIndex].classList.add('slider__dot--active');
}

// Avanzar slide
function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

// Retroceder slide
function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Reiniciar autoplay
function resetAutoplay() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Inicializar autoplay
slideInterval = setInterval(nextSlide, 5000);

// Controles
document.querySelector('.slider__control--next').addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
});

document.querySelector('.slider__control--prev').addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
});

// Dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
        resetAutoplay();
    });
});

// Mostrar slide inicial
showSlide(currentIndex);

/* =========================
    FADE-IN AL SCROLL
    (IntersectionObserver)
========================= */
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

/* =========================
    MICROINTERACCIONES
========================= */
const interactiveElements = document.querySelectorAll(
    '.intro_title, .galeriatitle, .contacttitle, .introlink, .galerialink, .contact_link'
);

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transition = 'all 0.3s ease';
        el.style.transform = 'scale(1.03)';
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
    });
});