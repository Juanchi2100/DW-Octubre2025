//ejercicio 1.1 IF
let a = 3;
let result = "Menor a 0";

if (a > 0){
    result = "Mayor a 0";
}

console.log(result);

//ejercicio 1.2 ELSE
const mayorEdad = 25; 

if(mayorEdad >= 18) {
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

//ejercicio 1.3 ELSE IF
let x = 35; 

if(x > 50){
    console.log("Es mayor a 50");
} else if (x < 5){
    console.log("Es menor a 5");
} else {
    console.log("Está entre 5 y 50");
}

//ejercicio 2.1 SWITCH
const mascota = "perro";

switch(mascota) {
    case "perro":
        console.log("Tengo un perro");
        break;
    case "gato":
        console.log("Tengo un gato");
        break;
    case "loro":
        console.log("Tengo un loro");
        break;
    default:
        console.log("No tengo mascota");
        break;
}

//ejercicio 2.2 FOR
let str = "";

for(let i = 0; i < 9; i++) {
    str = str + i;
}
console.log(str);

//ejercicio 2.3 WHILE
let n = 0;

while (n < 3) {
    n++; 
}
console.log(n);

//ejercicio 3.1 DO...WHILE
let response = ""; 
let y = 0; 

do {
    y = y + 1; 
    response = response + y; 
} while (y < 5);

console.log(response); 

//ejercicio 3.2 FOR EACH
const array1 = ["a", "b", "c"]; 

array1.forEach((element) => console.log(element)); 