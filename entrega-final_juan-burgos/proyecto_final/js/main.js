(function() {

/*--------------------------------------*\
 * main.js
 * Interacciones: 
 * - Menú Hamburguesa (Abrir/Cerrar/Navegar)
 * - Copiar Email al portapapeles (Icono y Texto)
 * - Carrusel de Proyectos (Scroll/Drag/Paginación)
 * - Lightbox para galería de imágenes
 * - Actualización automática del año en el footer
 * Datos:
 * - Elementos del DOM
 * - Atributos data-email
 * - Rutas de imágenes
 * Estructura: 
 * - Constantes y Variables
 * - Funciones de Lógica y UI
 * - Manejadores de Eventos (Handlers)
 * - Inicializadores
 *--------------------------------------*/  

// ==========================================
//    MENÚ HAMBURGUESA
// ==========================================

// Funciones
// Inicializa el menú hamburguesa

const iniciarHamburguesa = () => {
    //Variable para almacenar referencias al DOM
    const elementosMenu = obtenerElementosMenu();
    //Variable de seguridad para que no se rompa
    if (!elementosMenu){
        return;
    }
    configurarEventosMenu(elementosMenu);
}

// Obtiene y valida los elementos del DOM necesarios

const obtenerElementosMenu = () => {
    // Variable: Botón de abrir/cerrar
    const botonToggle = document.getElementById("navToggle");
    // Variable: Contenedor del menú
    const menuNavegacion = document.getElementById("navMenu");
    // Variable: Lista de enlaces dentro del menú
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

// Alterna el estado del menú (abierto/cerrado) y bloquea el scroll

const alternarMenu = (elementosMenu) => {
    // Acción: Toggle el class active CSS
    elementosMenu.menuNavegacion.classList.toggle("active");
    // Variable: Estado actual del menú
    const estarAbierto = elementosMenu.menuNavegacion.classList.contains("active");
    if (estarAbierto) {
        document.body.style.overflow = "hidden";
        elementosMenu.botonToggle.style.color = "white";
    } else {
        document.body.style.overflow = "auto";
        elementosMenu.botonToggle.style.color = "";
    }
};

// Fuerza el cierre del menú y restaura el scroll

const cerrarMenu = (elementosMenu) => {
    elementosMenu.menuNavegacion.classList.remove("active");
    document.body.style.overflow = "auto";
    elementosMenu.botonToggle.style.color = "";
};

// Eventos
// Configura los listeners de eventros para el menu

const configurarEventosMenu = (elementosMenu) => {
    //Click en el botón (Abrir/Cerrar)
    //Detiene la propagación y alterna el menú.
    elementosMenu.botonToggle.addEventListener("click", (evento) => {
        evento.stopPropagation(); 
        alternarMenu(elementosMenu);
    });
    
    //Click en los links
    //Cierra el menú automáticamente al navegar
    if (elementosMenu.linksMenu && elementosMenu.linksMenu.length > 0) {
        elementosMenu.linksMenu.forEach(link => {
            link.addEventListener("click", () => {
                cerrarMenu(elementosMenu);
            });
        });
    }

    //Click fuera del menu para cerrar
    //Detecta clicks fuera del menú para cerrarlo
    document.addEventListener("click", (evento) => {
        const estaAbierto = elementosMenu.menuNavegacion.classList.contains("active");
        const clickEnMenu = elementosMenu.menuNavegacion.contains(evento.target);
        const clickEnBoton = elementosMenu.botonToggle.contains(evento.target);

        if (estaAbierto && !clickEnMenu && !clickEnBoton) {
            cerrarMenu(elementosMenu);
        }
    });
};

// Evento DOMContentLoaded
// Inicia el sistema de menú cuando el HTML ha cargado.

document.addEventListener("DOMContentLoaded", () => {
    iniciarHamburguesa();
});

// ==========================================
// 2. COPIAR EMAIL AL CLIPBOARD (BOTÓN ICONO)
// ==========================================

// Variables
// Selección del botón de copiar email
const btnEmail = document.getElementById("btnCopyEmail");

// Funciones
// Handler que copia el email del atributo data al clipboard

function handlerCopyEmail() {
    //Variable: Obtención del correo desde el atributo
    const email = btnEmail.dataset.email;

    // Validación: evitar que se pulse repetidamente si ya está en estado "copiado"
    if (btnEmail.classList.contains("copiado")) return;

    // Copiar al portapapeles
    navigator.clipboard.writeText(email)
        .then(() => {
            // Exito. Agregamos la clase 
            btnEmail.classList.add("copiado");

            //Restaurar el icono original luego de 2.5s
            setTimeout(() => {
                btnEmail.classList.remove("copiado");
            }, 2500);
        })
        .catch(err => {console.error("Error al copiar: ", err)});
};

// Eventos
// EventListener para copiar el correo.
if (btnEmail) {
    btnEmail.addEventListener("click", handlerCopyEmail);
}

// ==========================================
// 3. CARRUSEL PROYECTOS (SLIDER)
// ==========================================

// Variables
// Contenedor principal del slider
const slider = document.getElementById('featuredSlider');
// Contenedor de los dots de navegación
const dotsContainer = document.getElementById('featuredDots');

// Lógica del Slider (Se ejecuta solo si existen los elementos)
if (slider && dotsContainer) {
    
    // Puntos para saber que imagen está activa
    // Variable: Lista de items del carrusel
    const slides = slider.querySelectorAll('.carousel__item');

    slides.forEach((_, index) => {
        // Variable: creación del elemento punto
        const dot = document.createElement('div');
        dot.classList.add('carousel__dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.carousel__dot');

    // Drag
    // Variables de estado para el arrastre
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;
    let animationID;

    // Eventos del mouse para el slider

    //Evento mousedown para iniciar arrastre
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        slider.classList.add('active');
        
        // Calculo de posición inicial
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;

        //Cancelación de cualquier animación pendiente anterior
        cancelAnimationFrame(animationID);
    });

    // Función local para detener el arrastre.
    const stopDragging = () => {
        isDown = false;
        slider.classList.remove('active'); 
        cancelAnimationFrame(animationID);
    };

    // Eventos para detener el arrastre (salir o soltar click).
    slider.addEventListener('mouseleave', stopDragging);
    slider.addEventListener('mouseup', stopDragging);

    // Evento Mousemove: Calcula el movimiento y hace scroll.
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        
        e.preventDefault();
        
        // Variable: Cálculo de movimiento
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; //Velocidad del scroll
        
        // Detectar si fue un click o un arrastre real
        if (Math.abs(x - startX) > 5) {
            isDragging = true;
        }

        animationID = requestAnimationFrame(() => {
            slider.scrollLeft = scrollLeft - walk;
        })
    });

    // Protección de enlaces para que no se arrastren
    // Variable: Links dentro del slider
    const links = slider.querySelectorAll('a');

    links.forEach(link => {
        // Evento click en links internos
        // Previene la navegación si el usuario estaba arrastrando
        link.addEventListener('click', (e) => {
            if (isDragging) {
                e.preventDefault(); // Bloquea el link
                e.stopPropagation();
            }
        });
    });

    // Evento dragstart
    // Previene comportamientos por defecto del navegador con imágenes
    slider.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });

    // Observer para la pantalla
    // Detecta qué slide está visible para actualizar los puntos. 
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

// ==========================================
// 4. SECCIÓN CONTACTO (TEXTO)
// ==========================================

// Variables
// Elemento de texto con el email
const emailSpan = document.getElementById("emailCopy");
// Contenedor padre clickeable
const emailContainer = document.getElementById("emailCopyContainer");

// Revisar si los elementos existen en la página
if (emailContainer && emailSpan) {

    //Funciones

    //Copia el texto del email visible al clipboard
    function handlerCopiarEmail() {
        // Variable: guardar el correo inicial
        const email = emailSpan.innerText;

        // Validación de clicks (no copiar si ya muestra el mensaje de copiado)
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

// ==========================================
// 5. LIGHTBOX
// ==========================================

// Funciones

//Iniciar Lightbox
const iniciarLightbox = () => {
    // Variable: referencias al DOM
    const elementosInterfaz = obtenerElementosInterfaz();

    if (!elementosInterfaz){
        return;
    }

    configurarEventosLightbox(elementosInterfaz);
}

//obtención de elementos
const obtenerElementosInterfaz = () => {
    // Variable: div padre
    const contenedorPrincipal = document.getElementById("lightbox");
    // Variable: Imagen para usar
    const imagenGrande = document.getElementById("lightboxImg");
    // Variable: Botón cerrar
    const botonCerrar = document.getElementById("lightboxCierre");
    // Variable: selección de todas las imágenes ampliables
    const listaImagenes = document.querySelectorAll(".content__img, .section__div--images img, .picture__img--proyecto");

    //Si falta algún elemento
    if(!contenedorPrincipal || !imagenGrande || !botonCerrar) {
        return null;
    }
    return{
        contenedorPrincipal, imagenGrande, botonCerrar, listaImagenes
    };
};

// Muestra el lightbox con la imagen seleccionada
const abrirGaleria = (elementosInterfaz, rutaImagen) => {
    elementosInterfaz.imagenGrande.src = rutaImagen;
    elementosInterfaz.contenedorPrincipal.classList.add("active");
    // Bloqueo de scroll
    document.body.style.overflow = "hidden";
};

// Cierra el lightbox y limpia el src de la imagen
const cerrarGaleria = (elementosInterfaz) => {
    elementosInterfaz.contenedorPrincipal.classList.remove("active");
    //Restaura el scroll
    document.body.style.overflow = "auto";
    //Tiempo para que se note la transición
    setTimeout(() => {
        if(elementosInterfaz.imagenGrande){
            elementosInterfaz.imagenGrande.src = "";
        }
    }, 300);
};

// Configuración de eventos
const configurarEventosLightbox = (elementosInterfaz) => {
    // Handlers
    // Handler para click en imagen
    const handlerClickImagen = (e) => {
        const imagenClickeada = e.target;
        const rutaImagen = imagenClickeada.currentSrc || imagenClickeada.src;

        if (rutaImagen) {
            abrirGaleria(elementosInterfaz, rutaImagen);
        }
    };

    // Handler para cerrar haciendo click en botón cerrar.
    const handlerClickCerrar = (e) => {
        e.preventDefault();
        cerrarGaleria(elementosInterfaz);
    };

    // Handler para cerrar haciendo click afuera
    const handlerClickFuera = (e) => {
        if (e.target === elementosInterfaz.contenedorPrincipal) {
            cerrarGaleria(elementosInterfaz);
        }
    };

    // Handler para cerrrar haciendo pulsando la tecla esc
    const handlerEsc = (e) => {
        const estaActivo = elementosInterfaz.contenedorPrincipal.classList.contains("active");
        if (e.key === "Escape" && estaActivo) {
            cerrarGaleria(elementosInterfaz);
        }
    };

    // Asignación de listeners
    // Clicks en imágenes
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

// Evento para iniciar el Lightbox
document.addEventListener("DOMContentLoaded", () => {
    iniciarLightbox();
});

// ==========================================
// 6. LEGAL (FOOTER)
// ==========================================

// Variables
// Span donde va el año
const yearSpan = document.getElementById("year");
//Intenta cambiar el texto sólo si el elemento existe en la página
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}

})();