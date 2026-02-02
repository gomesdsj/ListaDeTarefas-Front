let listaDeTarefas = [];

function salvarTarefa() {
    let resposta = document.getElementById("respostaTarefa").value;
    if (resposta.trim() !== "") {
        listaDeTarefas.push(resposta);
        document.getElementById("respostaTarefa").value = "";
        exibirTarefas();
        
        // Fechar o modal
        const abaOculta = document.querySelector('.AbaOculta');
        if (abaOculta) {
            abaOculta.style.display = 'none';
        }
    }
};

function exibirTarefas() {
    let listaTarefasEnviadas = document.getElementById("listaTarefasEnviadas");
    let html = "";
    listaDeTarefas.forEach((elemento, index) => {
        html += `<div class='TarefaEnviada' data-id='${index + 1}'>`;
        html += `<span>${elemento}</span>`;
        html += `<div class='botoes-acao'>`;
        html += `<button class='btn-editar' data-id='${index + 1}'>Editar</button>`;
        html += `<button class='btn-deletar' data-id='${index + 1}'>Deletar</button>`;
        html += `</div>`;
        html += `</div>`;
    });
    listaTarefasEnviadas.innerHTML = html;
};