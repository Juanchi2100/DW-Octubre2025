const container = document.querySelector(".section__div");

document.querySelectorAll("button[data-page]").forEach(button => {
    button.addEventListener("click", async () => {
        const page = button.dataset.page;
        container.classList.add("fade-in");
        try {
            const respuesta = await fetch(page);
            if(!respuesta.ok) throw new Error("Network response was not OK " + page);
            const data = await respuesta.text();
            setTimeout(() => {
                container.innerHTML = data;
                container.classList.remove("fade-in");
            }, 500);
        } catch (error) {
            console.error("Error fetching page: ", error);
        }
    });
});

// Nivel 2 - Api Weather

const buttonSearchCity = document.querySelector(".form__submit");
const inputCity = document.getElementById("cityName");

const ciudad = document.getElementById("pCiudad");
const sunrise = document.getElementById("pSunrise");
const sunset = document.getElementById("pSunset");
const temperatura = document.getElementById("pTemp");
const humedad = document.getElementById("pHumedad");

const apiKey = "5f84568c25a1f0480d639100c80b8e51";

async function obtenerCoordenadas(nombreCiudad) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${nombreCiudad}&limit=1&appid=${apiKey}`
    
    try {
        const resp = await fetch(url);
        if(resp.ok) {
            const data = await resp.json();
            return data[0]; //objeto con la latitud y longitud de la ciudad.
        } 
    } catch (error){
        console.log("Error al obtener la Ciudad:", error);
        return null; 
    }
}

async function obtenerClima(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const resp = await fetch(url);
    return await resp.json();
}

async function handlerObtenerClima() {
    const nombreCiudad = inputCity.value.trim();
    if(!nombreCiudad) {
        console.log("Ingrese una ciudad");
    }

    const coordenadas = await obtenerCoordenadas(nombreCiudad);
    if (!coordenadas) return;

    const clima = await obtenerClima(coordenadas.lat, coordenadas.lon);

    const sectionResult = document.querySelector(".section__div--result");
    sectionResult.style.display = "block";

    ciudad.textContent = `Ciudad: ${coordenadas.name}`;
    temperatura.textContent = `Temperatura: ${clima.main.temp}°C`;
    humedad.textContent = `Humedad: ${clima.main.humidity}%`;
    sunrise.textContent = `Sunrise: ${new Date(clima.sys.sunrise * 1000).toLocaleTimeString()}`;
    sunset.textContent = `Sunset: ${new Date(clima.sys.sunset * 1000).toLocaleTimeString()}`;
}

buttonSearchCity.addEventListener("click", handlerObtenerClima);