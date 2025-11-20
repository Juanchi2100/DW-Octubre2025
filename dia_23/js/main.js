//todo debe estar escrito en Camel Case

//ejercicio 1.1
const sectionP1 = document.querySelector("#ej1_1");
sectionP1.textContent = "Hola, este es mi primer párrafo que añado automáticamente con JavaScript.";

//ejercicio 1.2
const sectionP2 = document.querySelector("#ej1_2");
sectionP2.style.color = "blue"

//ejercicio 1.3
const sectionP3 = document.querySelector("#ej1_3");
const btnRed = document.querySelector("#btn-red");
const btnBlue = document.querySelector("#btn-blue");

btnRed.addEventListener('click', () => {
    sectionP3.style.color = "red";
});
btnBlue.addEventListener('click', () => {
    sectionP3.style.color = "blue";
});

//ejercicio 2.1
let edad = 25; 
let pais = "España";
const nombre = "Juan";

function saludar(){
    console.log("Hola " + nombre + ", tienes " + edad + " años y vives actualmente en " + pais);
}

saludar();

//ejercicio 3.1
const btnAlert = document.querySelector("#ej3");

btnAlert.addEventListener("click", () => {
    alert("ALEEEEERRRTAAAAA jiji mentira todo bien");
});