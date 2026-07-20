const fotosPerguntas = {};

let perguntaAtual = null;

const video =
document.getElementById(
    "camera"
);

const canvas =
document.getElementById(
    "canvas"
);

const btnCapturar =
document.getElementById(
    "btnCapturar"
);

let streamAtual = null;

async function abrirCamera(indice){

    perguntaAtual = indice;

    document.getElementById(
        "cameraContainer"
    ).style.display =
    "flex";

    try{

        streamAtual =
        await navigator.mediaDevices
        .getUserMedia({

            video:{

                facingMode:"environment"

            }

        });

        video.srcObject =
        streamAtual;

    }catch(error){

        console.error(error);

        alert(
            "Não foi possível acessar a câmera."
        );

    }

}

btnCapturar.addEventListener(

    "click",

    () => {

        canvas.width =
        video.videoWidth;

        canvas.height =
        video.videoHeight;

        const ctx =
        canvas.getContext(
            "2d"
        );

        ctx.drawImage(
            video,
            0,
            0
        );

        canvas.toBlob(

            blob => {

                fotosPerguntas[
                    perguntaAtual
                ] = blob;

                if(streamAtual){

                    streamAtual
                    .getTracks()
                    .forEach(
                        track =>
                        track.stop()
                    );

                }

                document.getElementById(
                    "cameraContainer"
                ).style.display =
                "none";

                const status =
                document.getElementById(
                    `statusFoto${perguntaAtual}`
                );

                if(status){
                        status.textContent =
                        
                            "✅ Foto capturada";

                        status.classList.add(
                            "ok"
                    );

                }

            },

            "image/jpeg",

            0.9

        );

    }

);

async function enviarFotoStorage(
    arquivo,
    funcionarioId
){

    const nomeArquivo =
    `${funcionarioId}_${Date.now()}_${Math.random().toString(36).substring(2,8)}.jpg`;

    const { error } =
    await supabaseClient
    .storage
    .from(
        "fotos-checklists"
    )
    .upload(
        nomeArquivo,
        arquivo
    );

    if(error){

        throw error;

    }

    return nomeArquivo;

}