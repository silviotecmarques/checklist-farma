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

            senha: novaSenha

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

            JSON.stringify(
                usuario
            )

        );

        alert(
            "Senha atualizada com sucesso!"
        );

        modalSenha.style.display =
        "none";

        document.getElementById(
            "senhaAtual"
        ).value = "";

        document.getElementById(
            "novaSenha"
        ).value = "";

        document.getElementById(
            "confirmarSenha"
        ).value = "";

    }
);