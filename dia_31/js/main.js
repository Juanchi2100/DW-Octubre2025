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

//Nivel 3.1 - Lista Dinámica

const lista = document.getElementById("lista-personas");

const personas = [
    {nombre: "Ana", edad: 32},
    {nombre: "Juan", edad: 25},
    {nombre: "Andrea", edad: 28},
    {nombre: "Claudia", edad: 23}
];

personas.forEach(persona => {
    const li = document.createElement("li");
    li.textContent = persona.nombre + " - " + persona.edad + " años."
    lista.appendChild(li);
});

//Nivel 3.2 - Galería de Imágenes

const galeria = document.getElementById("galeria");

const imagenes = [
    "https://images.hdqwalls.com/download/one-piece-5k-ne-360x640.jpg",
    "https://cdn.alsgp0.fds.api.mi-img.com/middle.community.micommunitybr.bkt/6bde57afd4d3efaf6afdc9bbfcd462a1",
    "https://images3.alphacoders.com/132/thumb-1920-1326111.jpeg",
    "https://images5.alphacoders.com/133/thumb-1920-1335737.jpeg",
    "https://images7.alphacoders.com/133/thumb-1920-1331473.png"
];

imagenes.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Imagen de galería";
    img.style.width = "250px";
    img.style.aspectRatio = "1 / 1";
    img.style.objectFit = "cover";
    img.style.margin = "25px"
    galeria.appendChild(img);
})

//Nivel 3.3 - Tabla Dinámica

const tbody = document.getElementById("tabla-body");

const datos = [
    {nombre: "Ana", email: "ana.a@gmail.com", rol: "CEO"},
    {nombre: "Juan", email: "juan.b@gmail.com", rol: "CFO"},
    {nombre: "Andrea", email: "andrea.m@gmail.com", rol: "Jefa Administrativa"},
    {nombre: "Claudia", email: "claudia.p@gmail.com", rol: "Jefa de Marketing"}
];

datos.forEach(dato => {
    const thNombre = document.createElement("th");
    const tdEmail = document.createElement("td");
    const tdRol = document.createElement("td");
    const tr = document.createElement("tr");

    thNombre.textContent = dato.nombre
    tdEmail.textContent = dato.email
    tdRol.textContent = dato.rol

    tbody.appendChild(tr);
    tr.appendChild(thNombre);
    tr.appendChild(tdEmail);
    tr.appendChild(tdRol);
});