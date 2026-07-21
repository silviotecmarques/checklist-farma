function inicializarValidacao(){

    document
    .getElementById("btnEnviar")
    .addEventListener(

        "click",

        async () => {

            atualizarProgresso();

            const percentual =
            parseInt(

                document
                .getElementById(
                    "textoProgresso"
                )
                .textContent

            );

            if(percentual < 100){

                alert(
                    "Responda todas as perguntas antes de enviar."
                );

                return;

            }

            const respostas = [];

            const itens =
            document.querySelectorAll(
                ".item-checklist"
            );

            for(const item of itens){

                const pergunta =
                item.querySelector(
                    ".titulo-tarefa"
                ).textContent.trim();

                const tipo =
                item.dataset.tipo;

                const indice =
                parseInt(
                    item.dataset.indice
                );

                const exigeFoto =
                item.dataset.foto === "true";

                const radio =
                item.querySelector(
                    ".avaliacao:checked"
                );

                const numero =
                item.querySelector(
                    ".campo-numero"
                );

                const texto =
                item.querySelector(
                    ".campo-texto"
                );

                let resposta = "";

                if(radio){

                    resposta =
                    radio.value;

                }

                else if(numero){

                    resposta =
                    numero.value.trim();

                }

                else if(texto){

                    resposta =
                    texto.value.trim();

                }

                else{

                    alert(
                        "Existem perguntas sem resposta."
                    );

                    return;

                }

                if(
                    exigeFoto &&
                    !fotosPerguntas[indice]
                ){

                    alert(
                        `Capture a foto da pergunta:\n\n${pergunta}`
                    );

                    return;

                }

                respostas.push({

                    indice,

                    tipo,

                    tarefa: pergunta,

                    resposta,

                    foto: null

                });

            }

            window.respostasPendentes =
            respostas;
            abrirCamera();

        }

    );

}