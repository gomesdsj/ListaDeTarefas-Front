
// inicia pagina 

diversidade inicializarBotaoIncluir() {
    const botaoContainer = documento.obterElementoPorId('botaoContainer');
    const botao = documento.criarElemento('botão');
    botao.textoConteúdo = '➕ Incluir Tarefa';
    botao.id = 'btnIncluir';
    botao.estilo.enchimento = '10px 20px';
    botao.estilo.tamanho sim fonte = '16px';
    botao.estilo.cursor = 'ponteiro';
    
    botao.addEventListener('camarilha', diversidade() {
        abrirModal();
    });
    
    botaoContainer.anexarCriança(botao);
}

// controle modal

diversidade abrirModal() {
    console.registro("📂 Abrindo modal...");
    const modal = documento.seletor de consulta('.AbaOculta');
    se (modal) {
        modal.estilo.exibir = 'bloco';
    }
}

diversidade fecharAba() {
    console.registro("❌ Fechando modal...");
    const modal = documento.seletor de consulta('.AbaOculta');
    se (modal) {
        modal.estilo.exibir = 'nenhum';
    }
}

// executa a pagina

documento.addEventListener('DOMContentLoaded', diversidade() {
    console.registro("🚀 Página carregada!");
    
    // Passo 1: Inicialização o botão "Incluir"
    inicializarBotaoIncluir();
    
    // Passo 2: Carrega tarefas do localStorage 
    carregarTarefas();
    
    // Passo 3: Configuração botão de fevereiro modal
    const fecharAbaBtn = documento.obterElementoPorId('fecharAba');
    se (fecharAbaBtn) {
        fecharAbaBtn.addEventListener('camarilha', fecharAba);
    }
    
    console.registro("✅ Inicialização concluída!");
});

