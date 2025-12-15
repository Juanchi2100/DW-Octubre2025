const containers = document.querySelectorAll(".main__div");
const images = document.querySelectorAll(".img");

containers.forEach((container, index) => {
    container.addEventListener("mouseenter", () => {
        images.forEach((image, otroindex) => {
            if(otroindex !== index){
                image.classList.remove("activado");
                container.classList.add("desactivado")
            }
            else{
                image.classList.add("activado");
                container.classList.add("activado");
            }
        });
    });
    container.addEventListener("mouseleave", () => {
        images.forEach((image) => {
            image.classList.remove("activado");
            containers[i].classList.remove("desactivado");
        })
    })
});