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

//Nivel 3 - Calculadora

const resultadoButton = document.getElementById("igual");
const resultado = document.getElementById("resultado");

function calcular(){
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const operacionInput = document.getElementById("operacion");

    let valueInput1 = parseFloat(input1.value);
    let valueInput2 = parseFloat(input2.value);
    let operacion = operacionInput.value;

    if (isNaN(valueInput1) || isNaN(valueInput2)){
        return "Ingresa valores válidos";
    }
    let resp;
    
    switch(operacion){
        case "+":
            resp = valueInput1 + valueInput2;
            break;
        case "-":
            resp = valueInput1 - valueInput2;
            break;
        case "*":
            resp = valueInput1 * valueInput2;
            break;
        case "/":
            resp = valueInput1 / valueInput2;
            break;
        default:
            resp = "Operación no válida";
    }
    return resp;                                  //??????????
}

resultadoButton.addEventListener("click",() => {
    resultado.textContent = calcular();
});

