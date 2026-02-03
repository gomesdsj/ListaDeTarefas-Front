
let listaDeTarefas = [];

// leitura inicial das tarefas ao carregar a página
function carregarTarefas() {
    console.log("📖 Lendo tarefas do localStorage...");
    
    // Busca as tarefas salvas no localStorage
    const tarefasSalvas = localStorage.getItem('listaDeTarefas');
    
    // Se houver tarefas salvas, converte de JSON para array
    if (tarefasSalvas) {
        listaDeTarefas = JSON.parse(tarefasSalvas);
        console.log("✅ Tarefas carregadas:", listaDeTarefas);
    } else {
        console.log("⚠️ Nenhuma tarefa encontrada. Iniciando com lista vazia.");
    }
    
    // Exibe as tarefas na tela
    exibirTarefas();
}

// create
function salvarTarefa() {
    console.log("➕ Criando nova tarefa...");
    
    // Obtém o valor digitado no input
    const inputTarefa = document.getElementById("respostaTarefa");
    const descricaoTarefa = inputTarefa.value;
    
    // Valida se o campo não está vazio
    if (descricaoTarefa.trim() === "") {
        alert("❌ Digite uma tarefa antes de enviar!");
        return;
    }
    
    // Cria um objeto tarefa com ID único
    const novaTarefa = {
        id: Date.now(), // ID único baseado no timestamp
        descricao: descricaoTarefa,
        dataCriacao: new Date().toLocaleDateString('pt-BR')
    };
    
    // Adiciona a tarefa ao array
    listaDeTarefas.push(novaTarefa);
    console.log("✅ Tarefa criada:", novaTarefa);
    
    // Salva no localStorage (persistência de dados)
    salvarNoLocalStorage();
    
    // Limpa o input
    inputTarefa.value = "";
    
    // Atualiza a exibição
    exibirTarefas();
    
    // Fecha o modal
    fecharModal();
}

// read - Exibe as tarefas na tela
function exibirTarefas() {
    console.log("🔍 Exibindo tarefas...");
    
    const listaTarefasDiv = document.getElementById("listaTarefasEnviadas");
    
    // Se não houver tarefas, mostra mensagem
    if (listaDeTarefas.length === 0) {
        listaTarefasDiv.innerHTML = "<p style='color: #999; text-align: center; padding: 2rem;'>Nenhuma tarefa criada ainda.</p>";
        return;
    }
    
    // Constrói HTML com cada tarefa
    let html = "";
    listaDeTarefas.forEach((tarefa) => {
        html += `
            <div class='TarefaEnviada' data-id='${tarefa.id}'>
                <div>
                    <span>${tarefa.descricao}</span>
                    <small>📅 ${tarefa.dataCriacao}</small>
                </div>
                <div class='botoes-acao'>
                    <button class='btn-editar' onclick="editarTarefa(${tarefa.id})">✏️ Editar</button>
                    <button class='btn-deletar' onclick="deletarTarefa(${tarefa.id})">🗑️ Deletar</button>
                </div>
            </div>
        `;
    });
    
    listaTarefasDiv.innerHTML = html;
    console.log(`✅ ${listaDeTarefas.length} tarefa(s) exibida(s)`);
}

//Update - Edita uma tarefa existente
function editarTarefa(id) {
    console.log("✏️ Editando tarefa com ID:", id);
    
    // Encontra a tarefa pelo ID
    const tarefaAtual = listaDeTarefas.find(t => t.id === id);
    
    if (!tarefaAtual) {
        alert("❌ Tarefa não encontrada!");
        return;
    }
    
    // Solicita novo texto ao usuário
    const novaDescricao = prompt("Edite a tarefa:", tarefaAtual.descricao);
    
    // Se o usuário cancelou, sai da função
    if (novaDescricao === null) {
        console.log("⚠️ Edição cancelada pelo usuário");
        return;
    }
    
    // Valida se não está vazio
    if (novaDescricao.trim() === "") {
        alert("❌ A tarefa não pode estar vazia!");
        return;
    }
    
    // Atualiza a descrição
    tarefaAtual.descricao = novaDescricao;
    console.log("✅ Tarefa atualizada:", tarefaAtual);
    
    // Salva no localStorage
    salvarNoLocalStorage();
    
    // Atualiza a exibição
    exibirTarefas();
}

// Delete - Deleta uma tarefa existente
function deletarTarefa(id) {
    console.log("🗑️ Deletando tarefa com ID:", id);
    
    // Pede confirmação ao usuário
    const confirmar = confirm("Tem certeza que deseja deletar esta tarefa?");
    
    if (!confirmar) {
        console.log("⚠️ Deleção cancelada pelo usuário");
        return;
    }
    
    // Filtra a tarefa (remove do array)
    const tamanhoAnterior = listaDeTarefas.length;
    listaDeTarefas = listaDeTarefas.filter(t => t.id !== id);
    
    if (tamanhoAnterior === listaDeTarefas.length) {
        alert("❌ Tarefa não encontrada!");
        return;
    }
    
    console.log("✅ Tarefa deletada. Restante:", listaDeTarefas.length);
    
    // Salva no localStorage
    salvarNoLocalStorage();
    
    // Atualiza a exibição
    exibirTarefas();
}
// função para salvar a lista de tarefas no localStorage
function salvarNoLocalStorage() {
    console.log("💾 Salvando no localStorage...");
    localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas));
    console.log("✅ Dados salvos com sucesso!");
}

//fechar modal==
function fecharModal() {
    const modal = document.querySelector('.AbaOculta');
    if (modal) {
        modal.style.display = 'none';
    }
}