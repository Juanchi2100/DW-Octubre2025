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
    console.log(divAnimado)
    if(divAnimado.style.animationName === "scale"){
        divAnimado.style.animationName = "rotate"
    }
    else{
        divAnimado.style.animationName = "scale"
    }
}

botonAnimar.addEventListener("click", handlerToggleAnimation);