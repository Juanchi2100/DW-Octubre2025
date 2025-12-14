const containers = document.querySelectorAll(".main__div");
const images = document.querySelectorAll(".img");

containers.forEach((container, i) => {
    container.addEventListener("hover", () => {
        images.forEach((image, i) => {
            image.classList.remove("activado");
        })
        images.classList.add("activado");
        container.classList.add("")
    });
})


//pseudocódigo

//Quiero recorrer toda la lista de containers y agregarle un eventlistener a cada container
// al container que esté hovered, se le mantiene su class, mientras que al resto .desactivado
// display la img de fondo de ese container. 