const containers = document.querySelectorAll(".main__div");

function activado(e){
    e.target.querySelector(".img").classList.add("active");
    containers.forEach((container) => container.classList.add("desactivado"));
    e.target.classList.remove("desactivado");
}

function desactivado(e){
    e.target.querySelector(".img").classList.remove("active");
    containers.forEach((container) => container.classList.remove("desactivado"));
}

containers.forEach((container) => {
    container.addEventListener("mouseenter", activado);
    container.addEventListener("mouseleave", desactivado);
});