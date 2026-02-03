
// ===================================
// INICIALIZAÇÃO DA PÁGINA
// ===================================

function inicializarBotaoIncluir() {
    const botaoContainer = document.getElementById('botaoContainer');
    const botao = document.createElement('button');
    botao.textContent = '➕ Incluir Tarefa';
    botao.id = 'btnIncluir';
    botao.style.padding = '10px 20px';
    botao.style.fontSize = '16px';
    botao.style.cursor = 'pointer';
    
    botao.addEventListener('click', function() {
        abrirModal();
    });
    
    botaoContainer.appendChild(botao);
}

// ===================================
// CONTROLE DO MODAL
// ===================================

function abrirModal() {
    console.log("📂 Abrindo modal...");
    const modal = document.querySelector('.AbaOculta');
    if (modal) {
        modal.style.display = 'block';
    }
}

function fecharAba() {
    console.log("❌ Fechando modal...");
    const modal = document.querySelector('.AbaOculta');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ===================================
// EXECUTAR QUANDO A PÁGINA CARREGAR
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Página carregada!");
    
    // Passo 1: Inicializa o botão "Incluir"
    inicializarBotaoIncluir();
    
    // Passo 2: Carrega tarefas do localStorage (READ)
    carregarTarefas();
    
    // Passo 3: Configura botão de fechar modal
    const fecharAbaBtn = document.getElementById('fecharAba');
    if (fecharAbaBtn) {
        fecharAbaBtn.addEventListener('click', fecharAba);
    }
    
    console.log("✅ Inicialização concluída!");
});

