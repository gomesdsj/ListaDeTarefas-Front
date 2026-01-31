
function inicializarBotaoIncluir() {
    const botaoContainer = document.getElementById('botaoContainer');
    const botao = document.createElement('button');
    botao.textContent = 'incluir';
    botao.id = 'btnIncluir';
    
    botao.addEventListener('click', function() {
        handleBotaoIncluir();
    });
    
    botaoContainer.appendChild(botao);
}


function handleBotaoIncluir() {
    alert('Tarefa incluída com sucesso!');
    
}


function exibirSaudacao() {
    alert("Bom dia! Antes de começar, lembre-se de verificar suas tarefas.");
}


document.addEventListener('DOMContentLoaded', function() {
    inicializarBotaoIncluir();
    exibirSaudacao();
});
