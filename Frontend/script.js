const cards = document.querySelector('.cards');

async function carregarTarefas() {

    try {

        const resposta = await fetch('http://localhost:3000/tarefas/listar');

        if (!resposta.ok) {
            throw new Error('Erro ao buscar tarefas');
        }

        const dados = await resposta.json();

        cards.innerHTML = "";

        dados.forEach(tarefa => {

            cards.innerHTML += `
                <div class="card">

                    <img 
                        src="${tarefa.imagem}" 
                        alt="${tarefa.nome}"
                    >

                    <div class="info">

                        <h2>${tarefa.nome}</h2>

                        <p>${tarefa.descricao}</p>

                        <span>
                            Início: 
                            ${formatarData(tarefa.dataInicio)}
                        </span>

                        <span>
                            Fim: 
                            ${formatarData(tarefa.dataFim)}
                        </span>

                    </div>

                </div>
            `;
        });

    } catch (error) {

        console.log(error);

        cards.innerHTML = `
            <p>Erro ao carregar tarefas.</p>
        `;
    }
}

function formatarData(data) {

    const novaData = new Date(data);

    return novaData.toLocaleDateString('pt-BR');
}

carregarTarefas();