const tabsButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".contenido");

function hiddenAndShow(iCurrent) {
    tabsButton.forEach((btn, i) => {
        const isActive = i === iCurrent;

        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive)
        contents[i].classList.toggle("visible", isActive);
    });
}

tabsButton.forEach((btn, iCurrent) => {
    btn.addEventListener("click", () => {
        hiddenAndShow(iCurrent);
    });
})  