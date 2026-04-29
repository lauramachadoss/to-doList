const inputTarefa = document.getElementById("inputTarefa");
const inputData = document.getElementById("inputData");
const inputHora = document.getElementById("inputHora");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

botaoAdicionar.addEventListener("click", function () {
    const texto = inputTarefa.value;
    const data = inputData.value;
    const hora = inputHora.value;

    if (texto === "") {
        alert("Por favor, insira uma tarefa!");
        return;
    }
    const tarefa = document.createElement("div");
    tarefa.classList.add("tarefa");

    let dataHora = "Sem data";
    if (data !== "" && hora !== "") {
        dataHora = `${data} - ${hora}`;
    }

    tarefa.innerHTML = `
        <input type="checkbox">

        <div class="info-tarefa">
            <p>${texto}</p>
            <span>${data} - ${hora}</span>
        </div>

        <button class="botao-remover" type="button">X</button>
    `;

    listaTarefas.appendChild(tarefa);

    const botaoRemover = tarefa.querySelector(".botao-remover");

    botaoRemover.addEventListener("click", function () {
        tarefa.remove();
    });
})