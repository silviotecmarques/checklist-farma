let totalTarefas = 0;

function renderizarChecklist() {

    checklistCargo.categorias.forEach(categoria => {

    categoria.tarefas.forEach(tarefa => {

            const tipo =
            tarefa.tipo || "avaliacao";

            const texto =
            tarefa.texto || tarefa;

            const foto =
            tarefa.foto || false;

            totalTarefas++;

            const item =
            document.createElement("div");

            item.className =
            "item-checklist";

            item.dataset.tipo =
            tipo;

            item.dataset.indice =
            totalTarefas;

            let html = `

                <div class="titulo-tarefa">
                    ${texto}
                </div>

            `;

            switch(tipo){

                case "avaliacao":

                    html += `

                        <div class="opcoes">

                            <label>
                                <input
                                    type="radio"
                                    name="tarefa${totalTarefas}"
                                    value="Sim"
                                    class="avaliacao">

                                Sim
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="tarefa${totalTarefas}"
                                    value="Parcial"
                                    class="avaliacao">

                                Parcial
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="tarefa${totalTarefas}"
                                    value="Nao"
                                    class="avaliacao">

                                Não
                            </label>

                        </div>

                    `;

                break;

                case "meta":

                    html += `

                        <div class="opcoes">

                            <label>

                                <input
                                    type="radio"
                                    name="tarefa${totalTarefas}"
                                    value="Sim"
                                    class="avaliacao">

                                Sim

                            </label>

                            <label>

                                <input
                                    type="radio"
                                    name="tarefa${totalTarefas}"
                                    value="Nao"
                                    class="avaliacao">

                                Não

                            </label>

                        </div>

                    `;

                break;

                case "numero":

                    html += `

                        <input
                            type="number"
                            class="campo-numero"
                            placeholder="Digite aqui">

                    `;

                break;

                case "texto":

                    html += `

                        <textarea
                            class="campo-texto"
                            placeholder="Digite aqui"></textarea>

                    `;

                break;

            }

            if(foto){

                html += `

                    <div class="foto-pergunta">

                        <button
                            type="button"
                            class="btnFotoPergunta"
                            onclick="abrirCamera(${totalTarefas})">

                        📷 Adicionar Evidência

                    </button>

                        <span
                            class="statusFoto"
                            id="statusFoto${totalTarefas}">

                            Nenhuma foto

                        </span>

                    </div>

                `;

            }

            item.innerHTML =
            html;

            lista.appendChild(item);

        });

    });

}