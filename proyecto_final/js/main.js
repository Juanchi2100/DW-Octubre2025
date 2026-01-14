
// --- INDEX ---
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
    
    // --- 1. GENERACIÓN DE DOTS ---
    const slides = slider.querySelectorAll('.carousel__item');
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel__dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.carousel__dot');

    // --- 2. LOGICA DE ARRASTRE (DRAG) SIN LAG ---
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false; // Bandera para diferenciar click de drag

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false; // Aún no hemos movido, así que no es drag
        slider.classList.add('active'); // Cambia cursor y apaga scroll-snap
        
        // Guardamos posición inicial
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    const stopDragging = () => {
        isDown = false;
        slider.classList.remove('active'); // Reactiva scroll-snap y smooth scroll
        
        // Aquí ocurre la magia: al soltar, CSS Scroll Snap "imanta" 
        // la imagen más cercana automáticamente. No necesitamos JS para eso.
    };

    slider.addEventListener('mouseleave', stopDragging);
    slider.addEventListener('mouseup', stopDragging);

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Si no hay click, no hacemos nada
        
        e.preventDefault();
        
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        
        // Si nos movimos más de 5 pixeles, lo consideramos un arrastre
        if (Math.abs(x - startX) > 5) {
            isDragging = true;
        }

        slider.scrollLeft = scrollLeft - walk;
    });

    // --- 3. EVITAR ABRIR LINK SI SE ARRASTRÓ ---
    // Esto es vital: si el usuario arrastró, no queremos que vaya a la página del proyecto
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

    // --- 4. ACTUALIZAR DOTS AL HACER SCROLL (INTERSECTION OBSERVER) ---
    // Esto funciona tanto si arrastras como si usas flechas o touch
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Encontrar el índice de la diapositiva actual
                const index = Array.from(slides).indexOf(entry.target);
                
                // Actualizar clases de los dots
                dots.forEach(d => d.classList.remove('active'));
                if (dots[index]) dots[index].classList.add('active');
            }
        });
    }, {
        root: slider,
        threshold: 0.5 // Se activa cuando el 50% de la imagen es visible
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

    // Event Listener (Seguro porque ya verificamos que emailContainer existe)
    emailContainer.addEventListener("click", handlerCopiarEmail);
}


// --- LEGAL ---
const yearSpan = document.getElementById("year");
//Intenta cambiar el texto sólo si el elemento existe en la página
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}