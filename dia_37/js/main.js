

let squares = document.getElementById("square1");
let iris = document.getElementById("iris");
let eyeball = document.getElementById("eyeball");

document.addEventListener("mousemove", e => {
    let posX = e.clientX - window.innerWidth / 2;
    let posY = e.clientY - window.innerHeight / 2;

    squares.style.transform = "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
    iris.style.transform = "translate(" + posX * 0.06 + "%, " + posY * 0.06 + "%)";
    eyeball.style.transform = "translate(" + posX * 0.08 + "%, " + posY * 0.08 + "%)";
})

//https://dixonandmoe.com/rellax/

var rellax = new Rellax('.rellax', {
    horizontal: true
});