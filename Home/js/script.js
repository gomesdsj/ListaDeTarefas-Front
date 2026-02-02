
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
    const abaOculta = document.querySelector('.AbaOculta');
    abaOculta.style.display = 'block';
    
}

function fecharAba() {
    const abaOculta = document.querySelector('.AbaOculta');
    abaOculta.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    inicializarBotaoIncluir();
    const fecharAbaBtn = document.getElementById('fecharAba');
    if (fecharAbaBtn) {
        fecharAbaBtn.addEventListener('click', fecharAba);
    }
});
