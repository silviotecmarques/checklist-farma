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

        <h3>
            ${item.funcionario_nome}
        </h3>

        <p>
            <b>Cargo:</b>
            ${item.cargo}
        </p>

        <p>
            <b>Data:</b>
            ${item.data_checklist}
        </p>

        <p>
            <b>Hora:</b>
            ${item.hora_checklist}
        </p>

        <hr>

    `;

    if(item.respostas){

        for(const r of item.respostas){

            let classe = "";

            if(r.resposta === "Sim"){

                classe = "detalhe-sim";

            }

            if(r.resposta === "Parcial"){

                classe = "detalhe-parcial";

            }

            if(r.resposta === "Nao"){

                classe = "detalhe-nao";

            }

            html += `

                <div class="detalhe-item">

                    <strong>
                        ${r.tarefa}
                    </strong>

                    <br>

                    <span class="${classe}">
                        ${r.resposta}
                    </span>

            `;

            if(r.foto){

                const { data } =
                await supabaseClient
                .storage
                .from("fotos-checklists")
                .createSignedUrl(
                    r.foto,
                    3600
                );

                if(data){

                    html += `

                        <br><br>

                        <button
    class="btnFoto"

    onclick="abrirFoto('${data.signedUrl}')">

    📷 Ver Foto

</button>

                    `;

                }

            }

            html += `

                </div>

            `;

        }

    }

    if(
        item.observacoes &&
        item.observacoes.trim() !== ""
    ){

        html += `

            <hr>

            <b>Observações:</b>

            <br>

            ${item.observacoes}

        `;

    }

    conteudo.innerHTML =
    html;

    modal.style.display =
    "flex";

}

function inicializarDetalhes(){

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

}