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