//Nivel 1.1

const btnScaleDiv = document.getElementById("button1.1");
const divScaleDiv = document.getElementById("div1.1");

function handlerToggleAnimation(){
    divScaleDiv.classList.add("div__div--animacion");
}

btnScaleDiv.addEventListener("click", handlerToggleAnimation);

//Nivel 1.2

const btnChangeColor = document.getElementById("button1.2");
const pOriginal = document.getElementById("divParrafo");

function handlerToggleChangeColor(){
    pOriginal.classList.remove("div__p--red");
    pOriginal.classList.add("div__p--blue");
}

btnChangeColor.addEventListener("click", handlerToggleChangeColor);

//Nivel 1.3

const btnChangeWidth = document.getElementById("button1.3");
const divChangeWidth = document.getElementById("div1.3");

function handlerToggleChangeWidth(){
    divChangeWidth.classList.toggle("div__div--rectangle");
}

btnChangeWidth.addEventListener("click", handlerToggleChangeWidth);

//Nivel 1.4

const btnAñadirDiv = document.getElementById("button1.4");
const divCounter = document.getElementById("divCounter");
const divMain = document.getElementById("mainDiv");
const divContainer = document.getElementById("divContainer");

function rndNum(number){
    return Math.floor(Math.random() * number);
} 

let count = 0;

function countIncrease(){
    count ++;
    return count; 
}

function handlerToggleAddDiv(){

    const currentNum = countIncrease();

    const rndCol = `rgb(${rndNum(255)}, ${rndNum(255)}, ${rndNum(255)})`;    

    const divColor = document.createElement("div");
    divColor.classList.add("div__div--square");
    divColor.style.backgroundColor = rndCol;

    divContainer.appendChild(divColor);

    divCounter.classList.add("div__counter--active");
    divCounter.textContent = currentNum;
}

btnAñadirDiv.addEventListener("click", handlerToggleAddDiv);

//Nivel 2.1
