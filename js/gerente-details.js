async function verDetalhes(item){

    const modal =
    document.getElementById(
        "modalDetalhes"
    );

    const conteudo =
    document.getElementById(
        "conteudoDetalhes"
    );

    let html = `

        <div class="detalhe-topo">

            <h2>

                ${item.funcionario_nome}

            </h2>

            <p>

                <strong>Cargo:</strong>
                ${item.cargo}

            </p>

            <p>

                <strong>Data:</strong>
                ${item.data_checklist}

            </p>

            <p>

                <strong>Hora:</strong>
                ${item.hora_checklist}

            </p>

        </div>

    `;

    // SELFIE

    if(item.selfie_url){

        const { data } =
        await supabaseClient
        .storage
        .from(
            "fotos-checklists"
        )
        .createSignedUrl(

            item.selfie_url,

            3600

        );

        if(data){

            html += `

                <div class="detalhe-selfie">

                    <h3>

                        📸 Selfie do Funcionário

                    </h3>

                    <img
                        src="${data.signedUrl}"
                        class="foto-selfie"

                        onclick="abrirFoto('${data.signedUrl}')">

                </div>

            `;

        }

    }

    html += `

        <hr>

    `;

    if(item.respostas){

        for(const r of item.respostas){

            let classe = "";

            if(r.resposta === "Sim"){

                classe =
                "detalhe-sim";

            }

            if(r.resposta === "Parcial"){

                classe =
                "detalhe-parcial";

            }

            if(r.resposta === "Nao"){

                classe =
                "detalhe-nao";

            }

            html += `

    <div class="detalhe-item">

        <strong>

            ${r.tarefa}

        </strong>

        <div class="detalhe-acoes">

            <span class="${classe}">

                ${r.resposta}

            </span>

`;

            if(r.foto){

                const { data } =
                await supabaseClient
                .storage
                .from(
                    "fotos-checklists"
                )
                .createSignedUrl(

                    r.foto,

                    3600

                );

                if(data){

                    html += `

    <button
        class="btnFoto"

        onclick="abrirFoto('${data.signedUrl}')">

        📷 Ver Evidência

    </button>

`;

                }

            }

            html += `

        </div>

    </div>

`;

        }

    }

    if(

        item.observacoes &&

        item.observacoes.trim() !== ""

    ){

        html += `

            <div class="detalhe-observacoes">

                <h3>

                    📝 Observações

                </h3>

                <p>

                    ${item.observacoes}

                </p>

            </div>

        `;

    }

    conteudo.innerHTML =
    html;

    modal.style.display =
    "flex";

    document.body.style.overflow =
    "hidden";

}

function abrirFoto(url){

    document
    .getElementById(
        "imagemModal"
    )
    .src =
    url;

    document
    .getElementById(
        "modalFoto"
    )
    .style.display =
    "flex";

    document.body.style.overflow =
    "hidden";

}

function fecharModalDetalhes(){

    document
    .getElementById(
        "modalDetalhes"
    )
    .style.display =
    "none";

    document.body.style.overflow =
    "auto";

}

function fecharModalFoto(){

    document
    .getElementById(
        "modalFoto"
    )
    .style.display =
    "none";

    document
    .getElementById(
        "imagemModal"
    )
    .src =
    "";

    document.body.style.overflow =
    "auto";

}

function inicializarDetalhes(){

    document
    .getElementById(
        "fecharDetalhes"
    )
    .addEventListener(

        "click",

        fecharModalDetalhes

    );

    document
    .getElementById(
        "modalDetalhes"
    )
    .addEventListener(

        "click",

        (e)=>{

            if(
                e.target.id ===
                "modalDetalhes"
            ){

                fecharModalDetalhes();

            }

        }

    );

    document
    .getElementById(
        "fecharFoto"
    )
    .addEventListener(

        "click",

        fecharModalFoto

    );

    document
    .getElementById(
        "modalFoto"
    )
    .addEventListener(

        "click",

        (e)=>{

            if(
                e.target.id ===
                "modalFoto"
            ){

                fecharModalFoto();

            }

        }

    );

}