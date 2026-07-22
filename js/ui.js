const loadingScreen =
document.getElementById(
    "loadingScreen"
);

function mostrarLoading(){

    if(!loadingScreen){

        return;

    }

    loadingScreen.style.display =
    "flex";

}

function esconderLoading(){

    if(!loadingScreen){

        return;

    }

    loadingScreen.style.display =
    "none";

}

function mostrarToast(
    mensagem,
    tipo="info"
){

    let container =
    document.querySelector(
        ".toast-container"
    );

    if(!container){

        container =
        document.createElement("div");

        container.className =
        "toast-container";

        document.body.appendChild(
            container
        );

    }

    const toast =
    document.createElement("div");

    toast.className =
    `toast ${tipo}`;

    toast.textContent =
    mensagem;

    container.appendChild(
        toast
    );

    setTimeout(()=>{

        toast.remove();

    },3000);

}