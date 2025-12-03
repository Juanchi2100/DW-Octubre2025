//Nivel 1.1 - Lista y forEach

const list = document.querySelectorAll(".ul__li");

function random(number){
    return Math.floor(Math.random() * number + 1);
}

function cambiarColor() {
    list.forEach(li => {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        li.style.backgroundColor = rndCol;
    })
}

cambiarColor();

//Nivel 1.2 - Agregar Emojis

const parrafo = document.querySelectorAll(".parrafo");

function agregarEmoji(){
    parrafo.forEach(p => p.innerHTML += "&#128512;")
}

agregarEmoji();

//Nivel 1.3 - Botones

const buttons = document.querySelectorAll(".button"); 

function cambiarBoton(){
    buttons.forEach((button, index) => {
        button.textContent = `button ${index + 1}`;
    });
}

cambiarBoton(); 

//Nivel 2.1 - Lista de Tareas

const tasks = document.querySelectorAll(".li__task");

tasks.forEach(li => li.addEventListener("click", () =>{
    if(li.style.textDecoration !== "line-through"){
        li.style.textDecoration = "line-through";
    }
    else{
        li.style.textDecoration = "none";
    }
}));

//Nivel 2.2 y 2.3 - Productos y eliminar

const products = document.querySelectorAll(".product-card");
const botonesEliminar = document.querySelectorAll(".boton__eliminar");

const priceComparacionHigh = 100;
const priceComparacionMedium = 50;

products.forEach(product => {
    const priceRaw = product.dataset.price;     //string - "data-price" en el HTML
    const price = parseFloat(priceRaw) || 0;    //convertir a número

    if (price > priceComparacionHigh){
        product.style.backgroundColor = "#e3a76eff";
    }
    else if(price > priceComparacionMedium){
        product.style.backgroundColor = "#eaec7eff"
    }
    else{
        product.style.backgroundColor = "#90e876ff"
    }
});

botonesEliminar.forEach(botonEliminar => botonEliminar.addEventListener("click", (e) =>{
    const card = e.target.closest(".product-card");
    if (card) card.style.display = "none";
}))