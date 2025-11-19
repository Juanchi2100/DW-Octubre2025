//todo debe estar escrito en Camel Case

//ejercicio 1.1
const sectionP1 = document.querySelector("#section__p");
sectionP1.textContent = "Hola, este es mi primer párrafo que añado automáticamente con JavaScript.";

//ejercicio 1.2
const sectionP2 = document.querySelector("#section__p--black");
sectionP2.style.color = "blue"

//ejercicio 1.3
const ej1_3 = document.querySelector(#ej1_3);
const changeRed = document.querySelector(#changeRed);
const changeBlue = document.querySelector(#changeBlue);

changeRed.addEventListener("click", () => {
    ej1_3.style.color = "red"; 
}); 