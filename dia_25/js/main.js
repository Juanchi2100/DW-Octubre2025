//Objetos y propiedades
const alumno = {
    nombre : "Juan",
    apellido : "Burgos",
    edad : "25",
    curso : "Diseño Web"
}

console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.curso);

//deconstrucción del objeto
const { nombre, apellido, edad, curso } = alumno; 

console.log(alumno);

//nombre completo
console.log(nombre, apellido);

//Nivel 2: 
const alumnoClon = {...alumno};

console.log(alumnoClon);

//juntar arrays
const frutas = ["manzana", "pera"];
const verduras = ["zanahoria", "apio"];
const granos = ["arroz", "maíz"];

const alimentos = [...frutas, ...verduras, ...granos];

console.log(alimentos);

//rest
function sumar(...numeros){
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3, 4, 5)); // debería sumar -- 15


//extraer parte de un array
const {nombre: n, apellido: a, ...restoAlumno} = alumno; 
console.log(n, a); 
console.log(restoAlumno); 

//Nivel 3: Manipulación del DOM (básico)

const parrafo = document.querySelector("#mainP");
parrafo.textContent = "Contenido de Párrafo Generado en JavaScript";

const ul = document.querySelector("#mainUl");
ul.innerHTML = "<li>Hola Juan!</li>";

const li = document.createElement("li");
li.textContent = "Hola Gustavo!";
li.setAttribute("id", "Gustavo");
li.setAttribute("arial-label", "buena gente")
ul.append(li);
li.addEventListener("click")

