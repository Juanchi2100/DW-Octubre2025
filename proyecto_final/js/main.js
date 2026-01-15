
// --- INDEX ---
// Menú Hamburguesa
const iniciarHamburguesa = () => {
    const elementosMenu = obtenerElementosMenu();
    if (!elementosMenu){
        return;
    }
    configurarEventosMenu(elementosMenu);
}
//obtención de elementos
const obtenerElementosMenu = () => {
    const botonToggle = document.getElementById("navToggle");
    const menuNavegacion = document.getElementById("navMenu");
    const linksMenu = document.querySelectorAll(".li__a");

    if(!botonToggle || !menuNavegacion) {
        return null;
    }
    return {
        botonToggle,
        menuNavegacion,
        linksMenu
    };
};

//acciones
const alternarMenu = (elementosMenu) => {
    //Se agrega el class active
    elementosMenu.menuNavegacion.classList.toggle("active");
    //protección para 
    const estarAbierto = elementosMenu.menuNavegacion.classList.contains("active");
    if (estarAbierto) {
        document.body.style.overflow = "hidden";
        elementosMenu.botonToggle.style.color = "white";
    } else {
        document.body.style.overflow = "auto";
        elementosMenu.botonToggle.style.color = "";
    }
};

const cerrarMenu = (elementosMenu) => {
    elementosMenu.menuNavegacion.classList.remove("active");
    document.body.style.overflow = "auto";
    elementosMenu.botonToggle.style.color = "";
};

//eventos
const configurarEventosMenu = (elementosMenu) => {
    //Click en el botón (Abrir/Cerrar)
    elementosMenu.botonToggle.addEventListener("click", (evento) => {
        evento.stopPropagation(); 
        alternarMenu(elementosMenu);
    });
    
    //Click en los links (Cerrar al navegar)
    if (elementosMenu.linksMenu && elementosMenu.linksMenu.length > 0) {
        elementosMenu.linksMenu.forEach(link => {
            link.addEventListener("click", () => {
                cerrarMenu(elementosMenu);
            });
        });
    }

    //Click fuera del menu para cerrar
    document.addEventListener("click", (evento) => {
        const estaAbierto = elementosMenu.menuNavegacion.classList.contains("active");
        const clickEnMenu = elementosMenu.menuNavegacion.contains(evento.target);
        const clickEnBoton = elementosMenu.botonToggle.contains(evento.target);

        if (estaAbierto && !clickEnMenu && !clickEnBoton) {
            cerrarMenu(elementosMenu);
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    iniciarHamburguesa();
});

//Copiar email al clipboard desde el icono
const btnEmail = document.getElementById("btnCopyEmail");

function handlerCopyEmail() {
    //Obtención el correo del atributo data-email
    const email = btnEmail.dataset.email;

    // Validación
    if (!email) return;

    // Evitar que se pulse repetidamente si ya está en estado "copiado"
    if (btnEmail.classList.contains("copiado")) return;

    // Copiar al portapapeles
    navigator.clipboard.writeText(email)
        .then(() => {
            // Exito. Agregamos la clase.
            btnEmail.classList.add("copiado");

            //Restaurar el icono original luego de 2.5s
            setTimeout(() => {
                btnEmail.classList.remove("copiado");
            }, 2500);
        })
        .catch(err => {console.error("Error al copiar: ", err)});
};

//EventListener para copiar el correo.
if (btnEmail) {
    btnEmail.addEventListener("click", handlerCopyEmail);
}


//Carrusel Proyectos Destacados
const slider = document.getElementById('featuredSlider');
const dotsContainer = document.getElementById('featuredDots');

if (slider && dotsContainer) {
    
    // --- Puntos para saber que imagen está activa ---
    const slides = slider.querySelectorAll('.carousel__item');
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel__dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.carousel__dot');

    // --- Drag ---
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false; 

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        slider.classList.add('active');
        
        // Posición inicial
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    const stopDragging = () => {
        isDown = false;
        slider.classList.remove('active'); 
    };

    slider.addEventListener('mouseleave', stopDragging);
    slider.addEventListener('mouseup', stopDragging);

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        
        e.preventDefault();
        
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        
        if (Math.abs(x - startX) > 5) {
            isDragging = true;
        }

        slider.scrollLeft = scrollLeft - walk;
    });

    // --- SI HAY DRAG NO ARRASTRAR LINK ---
    const links = slider.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (isDragging) {
                e.preventDefault(); // Bloquea el link
                e.stopPropagation();
            }
        });
    });

    slider.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });

    // --- ACTUALIZAR DOTS AL HACER SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(slides).indexOf(entry.target);
                
                // Actualizar clases de los dots
                dots.forEach(d => d.classList.remove('active'));
                if (dots[index]) dots[index].classList.add('active');
            }
        });
    }, {
        root: slider,
        threshold: 0.5
    });

    slides.forEach(slide => observer.observe(slide));
}

// --- CONTACTO ---
//Copiar email al clipboard
const emailSpan = document.getElementById("emailCopy");
const emailContainer = document.getElementById("emailCopyContainer");

// Revisar si los elementos existen en la página
if (emailContainer && emailSpan) {

    function handlerCopiarEmail() {
        // Guardar el correo inicial
        const email = emailSpan.innerText;

        // Validación de clicks
        if (email === "¡Copiado!") return;

        // Copiar al clipboard
        navigator.clipboard.writeText(email)
            .then(() => {
                // Feedback visual
                emailSpan.innerText = "¡Copiado!";
                emailSpan.classList.add("copiado");

                // Restaurar correo inicial
                setTimeout(() => {
                    emailSpan.innerText = email;
                    emailSpan.classList.remove("copiado");
                }, 2500);
            })
            .catch(err => {
                console.error("Error al copiar: ", err);
            });
    }

    // Event Listener
    emailContainer.addEventListener("click", handlerCopiarEmail);
}

// ----- LIGHTBOX -----

//funcion principal
const iniciarLightbox = () => {
    const elementosInterfaz = obtenerElementosInterfaz();
    if (!elementosInterfaz){
        return;
    }
    configurarEventosLightbox(elementosInterfaz);
}

//obtención de elementos
const obtenerElementosInterfaz = () => {
    const contenedorPrincipal = document.getElementById("lightbox");
    const imagenGrande = document.getElementById("lightboxImg");
    const botonCerrar = document.getElementById("lightboxCierre");
    const listaImagenes = document.querySelectorAll(".content__img, .section__div--images img, .picture__img--proyecto");

    //Si falta algún elemento
    if(!contenedorPrincipal || !imagenGrande || !botonCerrar) {
        return null;
    }
    return{
        contenedorPrincipal, imagenGrande, botonCerrar, listaImagenes
    };
};

//acciones
const abrirGaleria = (elementosInterfaz, rutaImagen) => {
    elementosInterfaz.imagenGrande.src = rutaImagen;
    elementosInterfaz.contenedorPrincipal.classList.add("active");
    document.body.style.overflow = "hidden";
};

const cerrarGaleria = (elementosInterfaz) => {
    elementosInterfaz.contenedorPrincipal.classList.remove("active");
    document.body.style.overflow = "auto";
    //Tiempo para que se note la transición
    setTimeout(() => {
        if(elementosInterfaz.imagenGrande){
            elementosInterfaz.imagenGrande.src = "";
        }
    }, 300);
};

//configuración de eventos
const configurarEventosLightbox = (elementosInterfaz) => {
    //handlers
    const handlerClickImagen = (e) => {
        const imagenClickeada = e.target;
        const rutaImagen = imagenClickeada.currentSrc || imagenClickeada.src;

        if (rutaImagen) {
            abrirGaleria(elementosInterfaz, rutaImagen);
        }
    };

    const handlerClickCerrar = (e) => {
        e.preventDefault();
        cerrarGaleria(elementosInterfaz);
    };

    const handlerClickFuera = (e) => {
        if (e.target === elementosInterfaz.contenedorPrincipal) {
            cerrarGaleria(elementosInterfaz);
        }
    };

    const handlerEsc = (e) => {
        const estaActivo = elementosInterfaz.contenedorPrincipal.classList.contains("active");
        if (e.key === "Escape" && estaActivo) {
            cerrarGaleria(elementosInterfaz);
        }
    };

    //asignación de listeners
    //imagenes
    if (elementosInterfaz.listaImagenes.length > 0) {
        elementosInterfaz.listaImagenes.forEach(imagen => {
            imagen.addEventListener("click", handlerClickImagen);
        });
    }
    //boton cerrar
    elementosInterfaz.botonCerrar.addEventListener("click", handlerClickCerrar);
    //fondo
    elementosInterfaz.contenedorPrincipal.addEventListener("click", handlerClickFuera);
    //esc
    document.addEventListener("keydown", handlerEsc);
}

document.addEventListener("DOMContentLoaded", () => {
    iniciarLightbox();
});

// --- LEGAL ---
const yearSpan = document.getElementById("year");
//Intenta cambiar el texto sólo si el elemento existe en la página
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}