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

const btnAdd = document.getElementById("buttonAñadir");
const container = document.getElementById("containerItems");
const counter = document.getElementById("divCounter");

let count = 0;

function rndNum(max){
    return Math.floor(Math.random() * max);
}

function randomColor() {
    return `rgb(${rndNum(255)}, ${rndNum(255)}, ${rndNum(255)})`;
}

function handleAddDiv() {
    count++;
    counter.textContent = count;

    const div = document.createElement("div");
    div.classList.add("div__square");
    div.style.backgroundColor = randomColor();

    container.appendChild(div);
}

btnAdd.addEventListener("click", handleAddDiv);


//Nivel 2.1
