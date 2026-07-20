const usuario =
JSON.parse(
    localStorage.getItem(
        "usuarioLogado"
    )
);

if(!usuario){

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
checklists[
    usuario.cargo
];

if(!checklistCargo){

    alert(
        "Checklist não encontrado para o cargo."
    );

    throw new Error(
        "Checklist não encontrado."
    );

}

const lista =
document.getElementById(
    "listaChecklist"
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