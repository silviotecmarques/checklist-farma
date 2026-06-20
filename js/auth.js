document.addEventListener("DOMContentLoaded", async () => {

    const selectFuncionario =
        document.getElementById("funcionario");

    if (!selectFuncionario) {
        console.error("Select funcionario não encontrado.");
        return;
    }

    try {

        const { data, error } =
            await supabaseClient
                .from("funcionarios")
                .select("*")
                .order("nome");

        console.log("Funcionários:", data);
        console.log("Erro:", error);

        if (error) {

            console.error(error);

            mostrarMensagem(
                "Erro ao carregar funcionários.",
                "red"
            );

            return;
        }

        selectFuncionario.innerHTML =
            '<option value="">Selecione...</option>';

        data.forEach(funcionario => {

            const option =
                document.createElement("option");

            option.value =
                funcionario.id;

            option.textContent =
                funcionario.nome;

            selectFuncionario.appendChild(option);

        });

    } catch (erro) {

        console.error(erro);

        mostrarMensagem(
            "Falha ao conectar ao banco.",
            "red"
        );

    }

});

document
    .getElementById("btnLogin")
    .addEventListener("click", async () => {

        const id =
            document.getElementById("funcionario").value;

        const senha =
            document.getElementById("senha").value;

        if (!id) {

            mostrarMensagem(
                "Selecione um funcionário.",
                "red"
            );

            return;
        }

        if (!senha) {

            mostrarMensagem(
                "Digite sua senha.",
                "red"
            );

            return;
        }

        try {

            const { data, error } =
                await supabaseClient
                    .from("funcionarios")
                    .select("*")
                    .eq("id", Number(id))
                    .single();

            console.log("Usuário:", data);
            console.log("Erro Login:", error);

            if (error) {

                mostrarMensagem(
                    "Funcionário não encontrado.",
                    "red"
                );

                return;
            }

            if (!data.senha) {

                mostrarMensagem(
                    "Funcionário sem senha cadastrada.",
                    "red"
                );

                return;
            }

            if (data.senha !== senha) {

                mostrarMensagem(
                    "Senha incorreta.",
                    "red"
                );

                return;
            }

            localStorage.setItem(
                "usuarioLogado",
                JSON.stringify(data)
            );

            mostrarMensagem(
                `Bem-vindo, ${data.nome}!`,
                "green"
            );

            setTimeout(() => {

                window.location.href =
                    "pages/checklist.html";

            }, 1000);

        } catch (erro) {

            console.error(erro);

            mostrarMensagem(
                "Erro ao realizar login.",
                "red"
            );

        }

    });

const modalGerente =
document.getElementById(
    "modalGerente"
);

document
.getElementById(
    "btnGerente"
)
.addEventListener(
    "click",
    () => {

        modalGerente.style.display =
        "flex";

    }
);

document
.getElementById(
    "btnFecharModal"
)
.addEventListener(
    "click",
    () => {

        modalGerente.style.display =
        "none";

    }
);

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

        console.log(data);
        console.log(error);

        if(
            error
        ){

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

        const { error: erroToken } =
await supabaseClient
.from("gerente")
.update({

    token:
    tokenGerente

})
.eq(
    "id",
    data[0].id
);

console.log(
"ERRO UPDATE TOKEN:",
erroToken
);

        localStorage.setItem(

            "tokenGerente",

            tokenGerente

        );

        window.location.href =
        "pages/gerente.html";

    }
);

function mostrarMensagem(texto, cor) {

    const msg =
        document.getElementById("mensagem");

    if (!msg) return;

    msg.textContent =
        texto;

    msg.style.color =
        cor;

}