const tabsButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".contenido");

function hiddenAndShow(iCurrent) {
    tabsButton.forEach((btn, i) => {
        btn.classList.toggle("visible", i === iCurrent);
        btn.classList.toggle("active", i === iCurrent);
        contents[i].classList.toggle("visible", i === iCurrent);
    });
}

tabsButton.forEach((btn, iCurrent) => {
    btn.addEventListener("click", () => {
        hiddenAndShow(iCurrent);
    });
})  