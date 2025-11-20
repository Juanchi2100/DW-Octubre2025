const textarea = document.querySelector("#textarea");
const btnEnviar = document.querySelector("#btnEnviar");
const pProof = document.querySelector("#pProof");

if (btnEnviar) {
    btnEnviar.addEventListener('click', () => {
        pProof.textContent = textarea.value;
    });
}

//ejercicio 3
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btnCalcular = document.querySelector("#btnCalcular");
const pRespuesta = document.querySelector("#pRespuesta");

if (btnCalcular) {
    btnCalcular.addEventListener('click', () => {
        pRespuesta.textContent = parseInt(input1.value) + parseInt(input2.value);
    });
}
