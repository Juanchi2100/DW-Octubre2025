
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