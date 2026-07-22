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

    if(filtro === "hoje"){

        query =
        query.eq(
            "data_checklist",
            hoje.toLocaleDateString("en-CA")
        );

    }

    if(filtro === "ontem"){

        hoje.setDate(
            hoje.getDate()-1
        );

        query =
        query.eq(
            "data_checklist",
            hoje.toLocaleDateString("en-CA")
        );

    }

    if(filtro === "7dias"){

        hoje.setDate(
            hoje.getDate()-7
        );

        query =
        query.gte(
            "data_checklist",
            hoje.toLocaleDateString("en-CA")
        );

    }

    const {
        data,
        error
    } =
    await query.order(
        "created_at",
        {
            ascending:false
        }
    );

    if(error){

        console.error(error);

        lista.innerHTML =
        "Erro ao carregar.";

        return;

    }

    lista.innerHTML = "";

    if(
        !data ||
        data.length===0
    ){

        lista.innerHTML =

        `
        <div
        style="
        text-align:center;
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

    for(const item of data){

        let fotoUrl = null;

        if(item.selfie_url){

            const { data: fotoData } =
            await supabaseClient
            .storage
            .from(
                "fotos-checklists"
            )
            .createSignedUrl(

                item.selfie_url,

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

                    👤

                </div>
                `
            }

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