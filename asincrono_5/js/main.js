const containers = document.querySelectorAll(".main__div");

function activado(e){
    e.target.querySelector(".img").classList.add("activado");
    containers.forEach((cont) => cont.classList.add("desactivado"));
    e.target.classList.remove("desactivado");
}

function desactivado(e){
    e.target.querySelector(".img").classList.remove("activado");
    e.target.forEach((cont) => cont.classList.remove("desactivado"));
}

containers.forEach((container) => {
    container.addEventListener("mouseenter", activado);
    container.addEventListener("mouseleave", desactivado);
});

//FALTA
    //QUE CUANDO MOUSELEAVE --> TODOS REGRESEN A ACTIVO
    //QUE SEA RESPONSIVE