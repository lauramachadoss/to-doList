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
})