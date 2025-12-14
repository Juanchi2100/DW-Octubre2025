//Acordeón
const bloque = document.querySelectorAll(".bloque");
const h2 = document.querySelectorAll(".h2");

h2.forEach((cadaH2, i) =>{
    h2[i].addEventListener("click", () => {
        bloque.forEach((cadaBloque, i) => {
            bloque[i].classList.remove("activo");
        });
        bloque[i].classList.add("activo");
    })
});

//Pestañas

const btn = document.querySelectorAll(".button");
const sub = document.querySelectorAll(".sub--contenido");

btn.forEach((cadaBtn, i) => {
    cadaBtn.addEventListener("click", () => {
        sub.forEach((cadaSub, i) => {
            cadaSub.classList.remove("activo");
            btn[i].classList.remove("activo");
        });
        sub[i].classList.add("activo");
        cadaBtn.classList.add("activo");
    });
});

//Lightbox

const imgList = document.querySelectorAll(".img");
const lightbox = document.querySelector(".lightbox");
const grande = document.querySelector(".grande");
const closeBtn = document.querySelector(".close");

const imgListHandler = (index) => {
    lightbox.classList.add("isActive");
    grande.src = imgList[index].src;
}

    //Abrir el Lightbox
imgList.forEach((img, index) => {
    img.addEventListener("pointerdown", () => {
        imgListHandler(index);
    });
});

    //Cerrar Lightbox
function closeHandler(){
    lightbox.classList.remove("isActive");
}

    //Funcion para cerrar el Lightbox con ESC
function escAction(e){
    if (e.key === "Escape" && lightbox.classList.contains("isActive")) {
        closeHandler();
    }
}

closeBtn.addEventListener("pointerdown", closeHandler);
document.addEventListener("keydown", escAction);