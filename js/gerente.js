console.log("gerente.js carregou");

const lista =
document.getElementById(
"listaChecklists"
);

async function carregarChecklists(){

    lista.innerHTML =
    "Carregando...";

    const filtro =
    document.getElementById(
        "filtroData"
    ).value;

    let query =
    supabaseClient
    .from("checklists")
    .select("*");

    let hoje =
    new Date();

    if(
        filtro === "hoje"
    ){

        console.log(
    "DATA PC:",
    new Date()
);

console.log(
    "ISO:",
    new Date()
    .toISOString()
);

console.log(
    "DIA:",
    new Date()
    .toISOString()
    .split("T")[0]
);

        const dataHoje =
        hoje
        .toLocaleDateString(
            "en-CA"
        );

        console.log(
            "Hoje:",
            dataHoje
        );

        query =
        query.eq(
            "data_checklist",
            dataHoje
        );

    }

    if(
        filtro === "ontem"
    ){

        hoje.setDate(
            hoje.getDate() - 1
        );

        query =
        query.eq(
            "data_checklist",
            hoje
            .toLocaleDateString(
                "en-CA"
            )
        );

    }

    if(
        filtro === "7dias"
    ){

        hoje.setDate(
            hoje.getDate() - 7
        );

        query =
        query.gte(
            "data_checklist",
            hoje
            .toLocaleDateString(
                "en-CA"
            )
        );

    }

    const { data, error } =
    await query.order(
        "created_at",
        {
            ascending:false
        }
    );

    console.log(
        "CHECKLISTS:"
    );

    console.log(data);

    console.log(error);

    if(error){

        console.error(error);

        lista.innerHTML =
        "Erro ao carregar.";

        return;

    }

    lista.innerHTML = "";

    if(
        !data ||
        data.length === 0
    ){

        lista.innerHTML = `
        <div style="
            text-align:center;
            width:100%;
            padding:40px;
            font-size:22px;
            font-weight:bold;
            color:#666;
        ">
            Nenhum checklist encontrado.
        </div>
        `;

        return;

    }

    

    for (const item of data) {

    let fotoUrl = null;

    if (item.foto_url) {

        const { data: fotoData } =
        await supabaseClient
        .storage
        .from("fotos-checklists")
        .createSignedUrl(
            item.foto_url,
            3600
        );

        fotoUrl =
        fotoData?.signedUrl;
    }

    const card =
    document.createElement(
        "div"
    );

    card.className =
    "card-checklist";

    card.innerHTML = `

        <h3>
            ${item.funcionario_nome}
        </h3>

        ${
            fotoUrl

            ?

            `
            <img
            src="${fotoUrl}"
            class="foto-card">
            `

            :

            `
            <div class="foto-card-vazia">
                📷
            </div>
            `
        }

        <p>
            Cargo: ${item.cargo}
        </p>

        <p>
            Data: ${item.data_checklist}
        </p>

        <p>
            Hora: ${item.hora_checklist}
        </p>

        <div class="card-botoes">

            <button
            class="btn-detalhes"
            onclick='verDetalhes(${JSON.stringify(item)})'>

                Detalhes

            </button>

            <button
            class="btn-pdf"
            onclick='gerarPDFIndividual(${JSON.stringify(item)})'>

                PDF

            </button>

        </div>

    `;

    lista.appendChild(
        card
    );

}

}

function verDetalhes(item){

const modal =
document.getElementById(
    "modalDetalhes"
);

const conteudo =
document.getElementById(
    "conteudoDetalhes"
);

let html = `

<h3>
    ${item.funcionario_nome}
</h3>

<p>
    Cargo: ${item.cargo}
</p>

<p>
    Data: ${item.data_checklist}
</p>

<p>
    Hora: ${item.hora_checklist}
</p>

<hr>

`;

if(item.respostas){

    item.respostas.forEach(r => {

        let classe = "";

        if(r.status === "Sim"){

            classe =
            "detalhe-sim";

        }

        if(r.status === "Parcial"){

            classe =
            "detalhe-parcial";

        }

        if(r.status === "Nao"){

            classe =
            "detalhe-nao";

        }

        html += `

        <div class="detalhe-item">

            <strong>
                ${r.tarefa}
            </strong>

            <br>

            <span class="${classe}">
                ${r.status}
            </span>

            ${
                r.justificativa
                ?

                `<br><b>Motivo:</b>
                ${r.justificativa}`

                :

                ""
            }

        </div>

        `;

    });

}

conteudo.innerHTML =
html;

modal.style.display =
"flex";

}

async function gerarPDFIndividual(item){

    const { jsPDF } =
    window.jspdf;

    const doc =
    new jsPDF();

    let y = 20;

    doc.setFontSize(18);

    doc.text(
        "CHECKLIST FARMA",
        20,
        y
    );

    y += 15;

    doc.setFontSize(12);

    doc.text(
        `Funcionario: ${item.funcionario_nome}`,
        20,
        y
    );

    y += 8;

    doc.text(
        `Cargo: ${item.cargo}`,
        20,
        y
    );

    y += 8;

    doc.text(
        `Data: ${item.data_checklist}`,
        20,
        y
    );

    y += 8;

    doc.text(
        `Hora: ${item.hora_checklist}`,
        20,
        y
    );

    y += 15;

    if(item.respostas){

        item.respostas.forEach(r => {

    doc.text(
        r.tarefa,
        20,
        y
    );

    y += 8;

    doc.text(
        `Resposta: ${r.status}`,
        25,
        y
    );

    y += 12;

            if(r.justificativa){

                doc.text(
                    `Motivo: ${r.justificativa}`,
                    25,
                    y
                );

                y += 8;

            }

            if(y > 270){

                doc.addPage();

                y = 20;

            }

        });

    }

    if(
        item.observacoes &&
        item.observacoes.trim() !== ""
    ){

        y += 10;

        if(y > 250){

            doc.addPage();

            y = 20;

        }

        doc.setFontSize(14);

        doc.text(
            "OBSERVACOES:",
            20,
            y
        );

        y += 10;

        doc.setFontSize(12);

        const linhas =
        doc.splitTextToSize(
            item.observacoes,
            170
        );

        doc.text(
            linhas,
            20,
            y
        );

        y += linhas.length * 7;

    }

    if(
        item.vitaminas_vendidas !== null &&
        item.vitaminas_vendidas !== undefined
    ){

        y += 10;

        doc.text(
            `Vitaminas Vendidas: ${item.vitaminas_vendidas}`,
            20,
            y
        );

    }

    if(item.meta_genericos){

        y += 8;

        doc.text(
            `Meta Genericos: ${item.meta_genericos}`,
            20,
            y
        );

    }

    doc.save(
        `Checklist-${item.funcionario_nome}.pdf`
    );

}

document
.getElementById(
"btnAtualizar"
)
.addEventListener(
"click",
() => {

    carregarChecklists();

}
);

document
.getElementById(
"fecharDetalhes"
)
.addEventListener(
"click",
() => {

    document
    .getElementById(
        "modalDetalhes"
    )
    .style.display =
    "none";

}

);

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

carregarChecklists();

const modalReset =
document.getElementById(
    "modalResetSenha"
);

console.log(
    document.getElementById("btnResetSenha")
);

console.log(
    document.getElementById("modalResetSenha")
);

async function carregarFuncionariosSenha(){

    const { data, error } =
    await supabaseClient
    .from("funcionarios")
    .select("id,nome")
    .order("nome");

    if(error){

        console.error(error);

        alert(
            "Erro ao carregar funcionários."
        );

        return;

    }

    const selectReset =
    document.getElementById(
        "funcionarioReset"
    );

    if(!selectReset){

        console.error(
            "funcionarioReset não encontrado."
        );

        return;

    }

    selectReset.innerHTML = "";

    data.forEach(funcionario => {

        const option =
        document.createElement("option");

        option.value =
        funcionario.id;

        option.textContent =
        funcionario.nome;

        selectReset.appendChild(
            option
        );

    });

}

document
.getElementById(
    "btnResetSenha"
)
.addEventListener(
    "click",
    async () => {

        await carregarFuncionariosSenha();

        modalReset.style.display =
        "flex";

    }
);

document
.getElementById(
    "fecharReset"
)
.addEventListener(
    "click",
    () => {

        modalReset.style.display =
        "none";

    }
);

document
.getElementById(
    "confirmarReset"
)
.addEventListener(
    "click",
    async () => {

        const funcionarioId =
        document.getElementById(
            "funcionarioReset"
        ).value;

        const { error } =
        await supabaseClient
        .from("funcionarios")
        .update({
            senha:"123456"
        })
        .eq(
            "id",
            funcionarioId
        );

        if(error){

            alert(
                "Erro ao resetar senha."
            );

            return;

        }

        alert(
            "Senha redefinida para 123456."
        );

        modalReset.style.display =
        "none";

    }
);