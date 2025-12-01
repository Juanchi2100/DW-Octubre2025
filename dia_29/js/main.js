//Nivel 1.1 - Creación de los números pares

function npares(){
    for(let i=1; i <=100; i++){ //recorre todos los números del 1 al 100
        if(i % 2 === 0){        // % divide y revisa si hay sobrante en el resultado. Si hay sobrante en la división entre 2, el numero tendrá que ser impar
            console.log(i);     // imprime todos los números pares
        }   
    }
}

npares(); 

// Nivel 1.2 - crear un cuadrado de 5x5

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


console.log("----------");

//nivel 1.3 - crear un cuadrado de 5x5 con el centro vacío

function cuadradoVacio(){
    for(let fila = 0; fila < 5; fila++){
        let linea = "";
        for(let col = 0; col < 5; col++){
            if(fila === 0 || fila === 4){
                linea += "* ";
            }
            else if(col === 0 || col === 4){
                linea += "* ";
            }
            else{
                linea += " ";
            }
        }
        console.log(linea);
    }
}

cuadradoVacio();