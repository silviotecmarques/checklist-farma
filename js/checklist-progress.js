function registrarEventosProgresso() {

    document
    .querySelectorAll(".avaliacao")
    .forEach(campo => {

        campo.addEventListener(
            "change",
            atualizarProgresso
        );

    });

    document
    .querySelectorAll(".campo-numero")
    .forEach(campo => {

        campo.addEventListener(
            "input",
            atualizarProgresso
        );

    });

    document
    .querySelectorAll(".campo-texto")
    .forEach(campo => {

        campo.addEventListener(
            "input",
            atualizarProgresso
        );

    });

}

function atualizarProgresso(){

    let respondidas = 0;

    document
    .querySelectorAll(".item-checklist")
    .forEach(item => {

        if(item.querySelector(".avaliacao:checked")){

            respondidas++;
            return;

        }

        const numero =
        item.querySelector(".campo-numero");

        if(
            numero &&
            numero.value.trim() !== ""
        ){

            respondidas++;
            return;

        }

        const texto =
        item.querySelector(".campo-texto");

        if(
            texto &&
            texto.value.trim() !== ""
        ){

            respondidas++;
            return;

        }

    });

    const percentual =
    Math.round(
        (respondidas / totalTarefas)
        * 100
    );

    document.getElementById(
        "barraProgresso"
    ).style.width =
    percentual + "%";

    document.getElementById(
        "textoProgresso"
    ).textContent =
    percentual + "%";

}