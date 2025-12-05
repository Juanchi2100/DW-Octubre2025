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

const buttonSearch = document.querySelector(".form__submit");
const spritePokemon = document.querySelector(".div__img");
const inputIdPokemon = document.getElementById("pokeID");
const inputNamePokemon = document.getElementById("pokeName");

const pokeNombre = document.getElementById("pNombre");
const pokeId = document.getElementById("pId");
const pokeWeight = document.getElementById("pWeight");
const pokeHeight = document.getElementById("pHeight");


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
}

buttonSearch.addEventListener("click", handlerSearchPokemon);