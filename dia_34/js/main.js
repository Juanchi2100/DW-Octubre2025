//Nivel 1 LIGHTBOX

const imgs = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const backdrop = document.getElementById("lightbox-backdrop");
const closeBtn = document.getElementById("lightbox-close");

backdrop.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

imgs.forEach(img => {
    img.addEventListener("click", (e) => {
        lightboxImg.src = e.target.src;
        lightboxImg.alt = e.target.alt;
        lightbox.classList.add("active");
    });
});

[backdrop, closeBtn].forEach(element => {
    element.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape" && lightbox.classList.contains("active")) {
        lightbox.classList.remove("active");
    }
});