const modalReset =
document.getElementById(
    "modalResetSenha"
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

    selectReset.innerHTML = "";

    data.forEach(funcionario => {

        const option =
        document.createElement(
            "option"
        );

        option.value =
        funcionario.id;

        option.textContent =
        funcionario.nome;

        selectReset.appendChild(
            option
        );

    });

}

function inicializarResetSenha(){

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
            document
            .getElementById(
                "funcionarioReset"
            )
            .value;

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

}