//Nivel 1 - Interacción básica con el DOM y BOM

const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const moveButton = document.getElementById("move");
const resizeButton = document.getElementById("resize");
const locationButton = document.getElementById("location");

let myWindow = null; 

openButton.addEventListener("click", () => {
    if (!myWindow || myWindow.closed){
        myWindow = window.open("", "", "width=400,height=400");
    }
});

closeButton.addEventListener("click", () => {
    if (myWindow && !myWindow.closed) {
        myWindow.close();
    }
});

moveButton.addEventListener("click", () => {
    if (myWindow && !myWindow.closed) {
        myWindow.moveTo(200, 200);
    }
});

resizeButton.addEventListener("click", () => {
    if (myWindow && !myWindow.closed) {
        myWindow.resizeTo(600, 600);
    }
});

locationButton.addEventListener("click", () => {
    if (myWindow && !myWindow.closed) {
        myWindow.location = "https://google.com";
    }
});

//Nivel 2 - Interacción básica con el DOM y BOM

const shuffleButton = document.getElementById("shuffle");

function rndNum(number){
    return Math.floor(Math.random() * number + 1);
} 

function randomizer(){
    const divsNums = document.querySelectorAll(".div");

    divsNums.forEach(divsNum => {
        divsNum.textContent = rndNum(100);
    });
}

shuffleButton.addEventListener("click", randomizer);

//Nivel 3 - Formulario interactivo y selección múltiple

const resultadoButton = document.getElementById("resultado");
let input1 = "";
let input2 = "";
let operacion = "";
let resultado = "";

function calculate(){
    if(input1 ==="" || input2 ==="") return;
    if(input1 !=="" && input2 !=="")
}