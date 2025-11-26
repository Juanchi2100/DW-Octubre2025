//Nivel 1 - Operaciones básicas con arrays
const arrayMascotas = ["Maya", "Max", "Chili", "Rex", "Zeus", "Lola", "Nacho", "Luna", "Pipo", "Roco"];

console.log(arrayMascotas[3]); //Rex
console.log(arrayMascotas[6]); //Nacho

console.log(arrayMascotas.length); //10

arrayMascotas.unshift("Oso");
console.log(arrayMascotas);

arrayMascotas.push("Paco");
console.log(arrayMascotas);

arrayMascotas.splice(5, 2); //Se deberían eliminar Zeus & Lola
console.log(arrayMascotas);

//Nivel 2 - Busquedas, transformaciones y recorridos
console.log(arrayMascotas.indexOf("Luna")); //6

arrayMascotas.reverse();
console.log(arrayMascotas);

let str = arrayMascotas.join(", ");
console.log(str);

const nuevoArray = str.split(" ");
console.log(nuevoArray);   

nuevoArray.forEach((cadaNombre, i) =>{
    console.log(cadaNombre + " " + i)
});

nuevoArray.forEach((cadaElemento) =>{
    console.log("Nombre de Mascota: " + cadaElemento)
});

//Nivel 3 - Métodos de Orden Superior y Deconstrucción
console.log(arrayMascotas.some(buscarNombre => buscarNombre.includes("L"))); //Buscando todos los nombres a ver si alguno tiene la letra L
console.log(arrayMascotas.find(buscarNombre => buscarNombre.includes("L"))); //Debe tirar el primer nombre con L que encuentre, en este caso, Luna.