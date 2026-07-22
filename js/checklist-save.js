async function salvarChecklist(respostas){

    mostrarLoading();

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

        esconderLoading();

        mostrarToast(
            "Você já enviou seu checklist hoje.",
            "warning"
        );

        return;

    }

    const agora =
    new Date();

    const dataChecklist =
    agora.toISOString()
    .split("T")[0];

    const horaChecklist =
    agora.toTimeString()
    .split(" ")[0];

    const observacoes =
    document
    .getElementById(
        "observacoes"
    )
    .value;

    let selfieUrl = null;

    try{

        if(selfieFinal){

            selfieUrl =
            await enviarFotoStorage(

                selfieFinal,

                usuario.id

            );

        }

    }catch(error){

        console.error(error);

        esconderLoading();

        mostrarToast(
            "Erro ao enviar a selfie.",
            "error"
        );

        return;

    }

    try{

        for(const resposta of respostas){

            if(
                fotosPerguntas[
                    resposta.indice
                ]
            ){

                resposta.foto =
                await enviarFotoStorage(

                    fotosPerguntas[
                        resposta.indice
                    ],

                    usuario.id

                );

            }

        }

    }catch(error){

        console.error(error);

        esconderLoading();

        mostrarToast(
            "Erro ao enviar uma das fotos.",
            "error"
        );

        return;

    }

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

        selfie_url:
        selfieUrl,

        data_checklist:
        dataChecklist,

        hora_checklist:
        horaChecklist,

        respostas:
        respostas,

        observacoes:
        observacoes

    }]);

    if(error){

        console.error(error);

        esconderLoading();

        mostrarToast(
            "Erro ao salvar checklist.",
            "error"
        );

        return;

    }

    mostrarSucesso();

}