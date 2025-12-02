//Nivel 1.1 - Creación de los números pares

function npares(inicio, fin){
    for(let i=inicio; i <=fin; i++){ //recorre todos los números del 1 al 100
        if(i % 2 === 0){        // % divide y revisa si hay sobrante en el resultado. Si hay sobrante en la división entre 2, el numero tendrá que ser impar
            console.log(i);     // imprime todos los números pares
        }   
    }
}

npares(98,100); 

// Nivel 1.2 - crear un cuadrado de 5x5

console.log("|-------Nivel 1.2-------|");

function cuadradoLleno(){
    for(let fila = 0; fila < 5; fila++){
        let linea = "";
        for(let col = 0; col < 5; col++){
            linea += "* ";
        }
        console.log(linea);
    }
}

cuadradoLleno();

//nivel 1.3 - crear un cuadrado de 5x5 con el centro vacío

console.log("|-------Nivel 1.3-------|");

function cuadradoVacio(){
    for(let fila = 0; fila < 5; fila++){
        let linea = "";
        for(let col = 0; col < 5; col++){
            if(fila === 0 || fila === 4 || col === 0 || col === 4){ 
                linea += "* ";
            }
            else{
                linea += "  ";                      //el espacio en blanco en el centro, osea, todo lo que no está declarado arriba. Doble espacio para que se alineara bien.
            }
        }
        console.log(linea);
    }
}

cuadradoVacio();

//Nivel 2.2 - Saludar

console.log("|-------Nivel 2.2-------|");
console.log("Es el aviso que aparece al cargar la pagina!");

function saludar(nombre){
    alert("Hola " + nombre);
}

function procesarEntradaUsuario(){
    const nombre = prompt("Cuál es tu nombre?");
    saludar(nombre);
}

procesarEntradaUsuario(); 

//Nivel 3.1 - setTimeout
console.log("|-------Nivel 3.1-------|");


function mensaje(){
    setTimeout(() => {
        console.log("Mensaje retrasado por 3 segundos.");
    }, "3000");
}

mensaje();

//Nivel 3.2 - setInterval
console.log("|-------Nivel 3.2-------|");

function hora(){
    setInterval(() => {
        let now = new Date;
        console.log(now.toUTCString())
    }, 1000)
}

hora();

//Nivel 3.3 - Contador
console.log("|-------Nivel 3.3-------|");

function contador(){
    let interval; 
    let count = 0; 
    interval = setInterval(() => {
        if(count < 10){
            count++;
            console.log(count);
        }
        else{
            clearInterval(interval)
        }
    }, 1000)
}

contador();