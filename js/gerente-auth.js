if(
    localStorage.getItem(
        "gerenteLogado"
    ) !== "true"
){

    alert(
        "Acesso negado."
    );

    window.location.href =
    "../index.html";

}

const lista =
document.getElementById(
    "listaChecklists"
);

const btnLogout =
document.getElementById(
    "btnLogout"
);

if(btnLogout){

    btnLogout.addEventListener(

        "click",

        () => {

            localStorage.removeItem(
                "gerenteLogado"
            );

            window.location.href =
            "../index.html";

        }

    );

}