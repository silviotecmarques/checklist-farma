document
.getElementById(
    "btnEntrarGerente"
)
.addEventListener(
    "click",
    async () => {

        const senha =
        document.getElementById(
            "senhaGerente"
        ).value;

        const { data, error } =
        await supabaseClient
        .rpc(
            "verificar_senha_gerente",
            {
                senha_digitada: senha
            }
        );

        console.log(
            "RETORNO RPC:",
            data
        );

        console.log(
            "ERRO RPC:",
            error
        );

        if(error){

            alert(
                "Erro ao localizar gerente."
            );

            return;

        }

        if(
            !data ||
            data.length === 0
        ){

            alert(
                "Senha incorreta."
            );

            return;

        }

        const tokenGerente =
        crypto.randomUUID();

        const {
            data: dadosUpdate,
            error: erroUpdate
        }
        =
        await supabaseClient
        .from("gerente")
        .update({

            token:
            tokenGerente

        })
        .eq(
            "id",
            data[0].id
        )
        .select();

        console.log(
            "TOKEN GERADO:",
            tokenGerente
        );

        console.log(
            "DADOS UPDATE:",
            dadosUpdate
        );

        console.log(
            "ERRO UPDATE:",
            erroUpdate
        );

        if(erroUpdate){

            alert(
                "Erro ao salvar sessão do gerente."
            );

            return;

        }

        localStorage.setItem(

            "tokenGerente",

            tokenGerente

        );

        window.location.href =
        "pages/gerente.html";

    }
);