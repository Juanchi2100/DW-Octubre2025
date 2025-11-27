//Nivel 2 - Random
const btns = document.querySelectorAll(".button");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function bgChange(e){
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol; 
    console.log(e); //este console.log no es estrictamente necesario, solo va a imprimir todos los datos del evento "click". Si se quita no pasa nada. 
}

btns.forEach(btn => btn.addEventListener("click", bgChange));

//nivel 2 - Divs
const btn = document.querySelector("#button");

function bgChangeDivs(e){
    const divs = document.querySelectorAll(".section__div");

    divs.forEach(div =>{
        const rndCol_div = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        div.style.backgroundColor = rndCol_div;
    });
}

btn.addEventListener("click", bgChangeDivs);