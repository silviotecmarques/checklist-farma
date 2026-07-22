const successScreen =
document.getElementById(
    "successScreen"
);

const audioSucesso =
new Audio(
    "../assets/audio/sucesso.mp3"
);

audioSucesso.volume = 0.5;

const frasesSucesso = [

    "Excelente trabalho! Sua dedicação faz a diferença.",

    "Checklist recebido com sucesso. Obrigado pelo cuidado com a loja.",

    "Missão concluída! Até o próximo turno.",

    "Tudo sincronizado! Bom trabalho hoje.",

    "Você fez um ótimo trabalho. Até amanhã!",

    "Mais um checklist concluído com sucesso!",

    "Dados enviados com segurança. Obrigado!",

    "Sua organização ajuda toda a equipe.",

    "Parabéns! Tudo foi enviado corretamente.",

    "Sistema atualizado. Tenha um excelente descanso!"

];

function mostrarSucesso(){

    esconderLoading();

    if(!successScreen){

        return;

    }

    audioSucesso.currentTime = 0;

    audioSucesso.play().catch(()=>{});

    const frase =

        frasesSucesso[

            Math.floor(

                Math.random() *

                frasesSucesso.length

            )

        ];

    document.getElementById(
        "textoSucesso"
    ).textContent = frase;

    successScreen.style.display =
    "flex";

    setTimeout(()=>{

        localStorage.removeItem(
            "usuarioLogado"
        );

        window.location.href =
        "../index.html";

    },3000);

}