const usuario =
JSON.parse(
localStorage.getItem("usuarioLogado")
);

if (!usuario) {

window.location.href =
    "../index.html";

}

document.getElementById(
"nomeFuncionario"
).textContent =
usuario.nome;

document.getElementById(
"cargoFuncionario"
).textContent =
usuario.cargo;

const checklistCargo =
checklists[usuario.cargo];

if (!checklistCargo) {

alert(
    "Checklist não encontrado para o cargo: " +
    usuario.cargo
);

throw new Error(
    "Checklist não encontrado."
);

}

const lista =
document.getElementById(
"listaChecklist"
);

const perguntasComJustificativaNoSim = [

    "Verifiquei pendências do turno anterior",

    "Retirei avarias ou produtos inadequados para venda",

    "Informei faltas de produtos ao responsável",

    "Verifiquei produtos próximos ao vencimento",

    "Registrei ocorrências identificadas durante o turno",

    "Comuniquei imediatamente situações relevantes à liderança",

    "Registrei possíveis divergências encontradas"

];

let totalTarefas = 0;

checklistCargo.categorias.forEach(
categoria => {

const titulo =
document.createElement("h2");

titulo.textContent =
categoria.nome;

lista.appendChild(titulo);

categoria.tarefas.forEach(
tarefa => {

    const textoTarefa =
    typeof tarefa === "string"
        ? tarefa
        : tarefa.texto;

    const exigeJustificativaNoSim =
    perguntasComJustificativaNoSim.includes(
        textoTarefa
    );

    totalTarefas++;

    const item =
    document.createElement("div");

    item.className =
    "item-checklist";

    item.innerHTML = `

    <div class="titulo-tarefa">
        ${textoTarefa}
    </div>

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

    <textarea
class="justificativa"
data-sim="${exigeJustificativaNoSim}"
placeholder="Descreva..."
style="display:none;"></textarea>

    `;

    lista.appendChild(item);

});

});

const radios =
document.querySelectorAll(
".avaliacao"
);

radios.forEach(radio => {

radio.addEventListener(
    "change",
    atualizarProgresso
);

radio.addEventListener(
    "change",
    exibirJustificativa
);

});

function exibirJustificativa(event){

    const item =
    event.target.closest(
        ".item-checklist"
    );

    const textarea =
    item.querySelector(
        ".justificativa"
    );

    const exigeNoSim =
    textarea.dataset.sim === "true";

    if(
        exigeNoSim &&
        event.target.value === "Sim"
    ){

        textarea.style.display =
        "block";

        return;

    }

    textarea.style.display =
    "none";

    textarea.value = "";

}

function atualizarProgresso(){

const respondidas =
document.querySelectorAll(
    ".avaliacao:checked"
).length;

const percentual =
Math.round(
    (respondidas / totalTarefas)
    * 100
);

document.getElementById(
    "barraProgresso"
).style.width =
    percentual + "%";

const texto =
document.getElementById(
    "textoProgresso"
);

if(texto){

    texto.textContent =
    percentual + "%";

}

}

document
.getElementById("btnEnviar")
.addEventListener(
"click",
salvarChecklist
);

async function salvarChecklist(){

const hoje =
new Date()
.toISOString()
.split("T")[0];

const { data: existente } =
await supabaseClient
.from("checklists")
.select("id")
.eq(
    "funcionario_id",
    usuario.id
)
.eq(
    "data_checklist",
    hoje
)
.limit(1);

if(
    existente &&
    existente.length > 0
){

    alert(
        "Você já enviou seu checklist hoje."
    );

    return;

}    

const respostas = [];

let pontos = 0;

const itens =
document.querySelectorAll(
    ".item-checklist"
);

for(const item of itens){

    const selecionado =
    item.querySelector(
        ".avaliacao:checked"
    );

    if(!selecionado){

        alert(
            "Existem tarefas sem resposta."
        );

        return;
    }

    const justificativa =
    item.querySelector(
        ".justificativa"
    ).value;

    const textarea =
item.querySelector(
    ".justificativa"
);

const exigeNoSim =
textarea.dataset.sim === "true";

if(
    exigeNoSim &&
    selecionado.value === "Sim" &&
    justificativa.trim() === ""
){

        alert(
            "Justifique todas as respostas Parcial ou Não."
        );

        return;

    }

    if(
        selecionado.value === "Sim"
    ){

        pontos += 100;

    }else if(
        selecionado.value === "Parcial"
    ){

        pontos += 50;

    }

    respostas.push({

        tarefa:
        item.querySelector(
            ".titulo-tarefa"
        ).textContent.trim(),

        status:
        selecionado.value,

        justificativa

    });

}

const notaFinal =
Math.round(
    pontos /
    totalTarefas
);

const respondidas =
document.querySelectorAll(
    ".avaliacao:checked"
).length;

const percentualConclusao =
Math.round(
    (respondidas / totalTarefas)
    * 100
);

if(percentualConclusao < 100){

    alert(
        "Responda todas as perguntas antes de enviar."
    );

    return;

}

const observacoes =
document.getElementById(
    "observacoes"
).value;

const agora =
new Date();

const dataChecklist =
agora.toISOString()
.split("T")[0];

const horaChecklist =
agora.toTimeString()
.split(" ")[0];

const { error } =
await supabaseClient
.from("checklists")
.insert([{

    funcionario_id:
    usuario.id,

    funcionario_nome:
    usuario.nome,

    cargo:
    usuario.cargo,

    data_checklist:
    dataChecklist,

    hora_checklist:
    horaChecklist,

    nota:
    notaFinal,

    percentual:
    notaFinal,

    respostas:
    respostas,

    observacoes:
    observacoes,

}]);

if(error){

    console.error(error);

    alert(
        "Erro ao salvar checklist."
    );

    return;

}

alert(
    `Checklist enviado com sucesso!\n\nNota Final: ${notaFinal}%`
);

window.location.reload();

}

const btnLogout =
document.getElementById(
    "btnLogout"
);

if(btnLogout){

    btnLogout.addEventListener(
        "click",
        () => {

            localStorage.clear();

            window.location.href =
            "../index.html";

        }
    );

}


const btnSenha =
document.getElementById(
    "btnSenha"
);

const modalSenha =
document.getElementById(
    "modalSenha"
);

btnSenha.addEventListener(
    "click",
    () => {

        modalSenha.style.display =
        "flex";

    }
);

document.getElementById(
    "fecharSenha"
).addEventListener(
    "click",
    () => {

        modalSenha.style.display =
        "none";

    }
);

document.getElementById(
    "salvarSenha"
).addEventListener(
    "click",
    async () => {

        const senhaAtual =
        document.getElementById(
            "senhaAtual"
        ).value;

        const novaSenha =
        document.getElementById(
            "novaSenha"
        ).value;

        const confirmarSenha =
        document.getElementById(
            "confirmarSenha"
        ).value;

        if(
            senhaAtual !==
            usuario.senha
        ){

            alert(
                "Senha atual incorreta."
            );

            return;
        }

        if(
            novaSenha !==
            confirmarSenha
        ){

            alert(
                "As senhas não conferem."
            );

            return;
        }

        const { error } =
        await supabaseClient
        .from("funcionarios")
        .update({
            senha:novaSenha
        })
        .eq(
            "id",
            usuario.id
        );

        if(error){

            alert(
                "Erro ao atualizar senha."
            );

            return;
        }

        usuario.senha =
        novaSenha;

        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(usuario)
        );

        alert(
            "Senha atualizada com sucesso!"
        );

        modalSenha.style.display =
        "none";

    }
);