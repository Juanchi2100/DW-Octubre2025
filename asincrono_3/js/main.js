
//POKEAPI - POKEDEX

async function obtenerPokemon(nombreOId) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + nombreOId;

    try {
        const respuesta = await fetch(url);

        if (respuesta.ok) {
            const datos = await respuesta.json();
            return datos;
        }

    } catch (error) {
        console.error("Error al obtener Pokémon:", error);
        return null;
    }
}

const buttonPokeSearch = document.querySelector(".form__submit");
const inputIdPokemon = document.getElementById("pokeID");
const inputNamePokemon = document.getElementById("pokeName");

const pokeNombre = document.getElementById("pNombre");
const pokeId = document.getElementById("pId");
const pokeWeight = document.getElementById("pWeight");
const pokeHeight = document.getElementById("pHeight");
const spritePokemon = document.querySelector(".div__img");
const spriteShinyPokemon = document.querySelector("#imgSpriteShiny");


async function handlerSearchPokemon() {
    const id = inputIdPokemon.value.trim();      // el trim() solo le quita cualquier espacio innecesario que se haya agregado al input.
    const name = inputNamePokemon.value.trim(); 

    if (!id && !name) {
        console.log("Ingrese un Pokemon");
        return;
    }

    const datos = await obtenerPokemon(name || id);

    if (!datos) {
        console.log("No se encontró el Pokemon");
        return;
    }

    const sectionResult = document.querySelector(".section__div--result");
    sectionResult.style.display = "block";

    pokeNombre.textContent = `Nombre: ${datos.name}`;
    pokeId.textContent = `ID: ${datos.id}`;
    pokeWeight.textContent = `Weight: ${datos.weight}`;
    pokeHeight.textContent = `Height: ${datos.height}`;
    spritePokemon.src = datos.sprites.front_default;
    spriteShinyPokemon.src = datos.sprites.front_shiny;
}

buttonPokeSearch.addEventListener("click", handlerSearchPokemon);


//Dungeons and Dragons

async function obtenerRaza(nombreRaza) {
    const url = "https://www.dnd5eapi.co/api/2014/races/" + nombreRaza;

    try{
        const respuesta = await fetch(url);

        if (respuesta.ok){
            const datos = await respuesta.json();
            return datos;
        }
    } catch (error){
        console.error("Error al obtener la clase:", error);
        return null;
    }
}

const buttonSearchRace = document.getElementById("buttonSearchRace");
const inputRaceName = document.getElementById("razaDD");

const raceAlignment = document.getElementById("pAlignment");
const raceSize = document.getElementById("pSize");
const raceSpeed = document.getElementById("pSpeed");
const raceLanguages = document.getElementById("pLanguages");
const raceLangDesc = document.getElementById("pLangDesc");

async function handlerSearchRace(){
    const race = inputRaceName.value.trim().toLowerCase(); 
    console.log("Raza enviada:", race);

    if(!race){
        console.log("Ingrese una raza");
        return;
    }

    const datos = await obtenerRaza(race);

    if(!datos){
        console.log("No se encontró la raza");
        return;
    }

    const sectionResult = document.getElementById("resultadosDD");
    sectionResult.style.display = "block";

    raceAlignment.textContent = `Descripción: ${datos.alignment}`;
    raceSize.textContent = `Tamaño: ${datos.size}`;
    raceSpeed.textContent = `Velocidad: ${datos.speed}`;
    raceLanguages.textContent = `Lenguajes: ${datos.languages.map(l => l.name).join(", ")}`;
    raceLangDesc.textContent = `Descripción de Lenguajes: ${datos.language_desc}`;
}

buttonSearchRace.addEventListener("click", handlerSearchRace);

// ----------- FAKESTORE API -----------

const buttonSearchStore = document.getElementById("buttonSearchProduct");
const inputCategories = document.getElementById("categories-select");

const pTitulo = document.getElementById("pTitle");
const pPrecio = document.getElementById("pPrice");
const pDesc = document.getElementById("pDescription");
const pCategory = document.getElementById("pCategory");
const imgProduct = document.getElementById("imgProductImg");

async function obtenerCategoria(nombreCategoria) {
    const url = "https://fakestoreapi.com/products/category/" + nombreCategoria; 

    try{
        const respuesta = await fetch (url);

        if(respuesta.ok){
            const datos = await respuesta.json();
            console.log(datos);
            return datos; 
        }
    } catch (error){
        console.log("Error al obtener la categoría; ", error);
        return null; 
    }
} 

async function handlerSearchStore() {
    const categoria = inputCategories.value.trim().toLowerCase();
    console.log("Categoría enviada:", categoria);
    
    if(!categoria){
        console.log("Por favor seleccione una categoría");
        return; 
    }

    const datos = await obtenerCategoria(categoria);

    if(!datos || datos.length === 0){
        console.log("No hay productos en esta categoría");
        return;
    }

    const sectionResult = document.getElementById("resultadosStore");
    sectionResult.style.display = "block";
    
    datos.forEach(dato =>{
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <h3>${dato.title}</h3>
            <p><strong>$${dato.price}</strong></p>
            <p>Categoría: ${dato.category}</p>
            <p>${dato.description}</p>
            <img src="${dato.image}" alt="Imagen de ${dato.title}" class="product-card--img">
        `;
        sectionResult.appendChild(card);
    });
}

buttonSearchStore.addEventListener("click", handlerSearchStore);