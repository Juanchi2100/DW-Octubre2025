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