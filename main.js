const $button = window.document.querySelector("button");
const $input = window.document.querySelector("input");
const $média = window.document.querySelector("#média");
const $Registros = window.document.querySelector("#Registros")

let total = 0;
let qtdNotas = 0;
let média = 0;

function handleClick(event) {
    event.preventDefault();
    const nota = Number($input.value);
    
    if (nota >= 0 && nota <= 10 && nota !== '') {
        total = total + nota;
        qtdNotas = qtdNotas + 1;

        média= total / qtdNotas;
        $média.textContent = média.toFixed(1);

        $Registros.insertAdjacentHTML("beforeend", `<li>${nota}</li>`);
    }
}

$button.addEventListener("click", handleClick);