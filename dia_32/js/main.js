//Nivel 1.1 - Alternar Light / Dark

const parrafo = document.getElementById("parrafo");
const botonAlternarColor = document.getElementById("botonAlternar");

function toggleStyleColor(background, text){
    parrafo.style.backgroundColor = background;
    parrafo.style.color = text;
    botonAlternar.style.backgroundColor = background;
    botonAlternar.style.color = text;
}

function handlerToggleColor(){
    if(parrafo.style.backgroundColor !== "black"){
        toggleStyleColor("black", "white"); 
    }
    else{
        toggleStyleColor("white", "black");
    }
}

botonAlternarColor.addEventListener("click", handlerToggleColor);

//Nivel 1.2 - Alternar Tamaños

const parrafoTamaño = document.getElementById("parrafoTamaño");
const botonAlternarTamaño = document.getElementById("botonTamaño");

function toggleStyleTamaño(width){
    parrafoTamaño.style.width = width;
}

function handlerToggleTamaño(){
    if(parrafoTamaño.style.width !== "80vw"){
        toggleStyleTamaño("80vw");
    }
    else{
        toggleStyleTamaño("20vw");
    }
}

botonAlternarTamaño.addEventListener("click", handlerToggleTamaño);

//Nivel 2.1

const divAnimado = document.getElementById("divAnimado");
const botonAnimar = document.getElementById("botonAnimar");

function toggleAnimation(animation){
    divAnimado.animationName = animation; 
}

function handlerToggleAnimation(){
    if(divAnimado.style.animationName === "scale"){
        divAnimado.style.animationName = "rotate"
    }
    else{
        divAnimado.style.animationName = "scale"
    }
}

botonAnimar.addEventListener("click", handlerToggleAnimation);

//Nivel 2.2 - Diplay None - Block

const divDisplay = document.getElementById("divDisplay");
const botonDisplay = document.getElementById("buttonDisplay");

function toggleDisplay(display){
    divDisplay.display = display;
}

function handlerToggleDisplay(){
    if(divDisplay.style.display !== "none"){
        divDisplay.style.display = "none"
    }
    else{
        divDisplay.style.display = "block"
    }
}

botonDisplay.addEventListener("click", handlerToggleDisplay);

//Nivel 2.3 - Transparencia

const divTransparencia = document.getElementById("divTransparencia");
const botonTransparencia = document.getElementById("buttonTransparencia");

function toggleTransparencia(transparencia){
    divTransparencia.style.color = transparencia;
}

function handlerToggleTransparencia(){
    if(divTransparencia.style.color !== "rgba(255, 255, 255, 0)"){
        divTransparencia.style.color = "rgba(255, 255, 255, 0)"
    }
    else{
        divTransparencia.style.color = "rgb(255, 255, 255)"
    }
}

botonTransparencia.addEventListener("click", handlerToggleTransparencia);

//Nivel 3.1 y 3.2 - Celdas

const gridCells = document.querySelectorAll(".grid");
const botonColor = document.getElementById("botonAleatorio");

function rndNum(number){
    return Math.floor(Math.random() * number);
} 

let celdaAnterior = null;

function handlerToggleAleatorio(){
    if(celdaAnterior){
        celdaAnterior.style.backgroundColor = "white";
    }

    const rndCol = `rgb(${rndNum(255)}, ${rndNum(255)}, ${rndNum(255)})`;
    const indexRandom = rndNum(gridCells.length);
    const celdaRandom = gridCells[indexRandom];

    celdaRandom.style.backgroundColor = rndCol; 
    celdaAnterior = celdaRandom; 
}

botonColor.addEventListener("click", handlerToggleAleatorio);

//Nivel 3.3 - Desplazamiento

