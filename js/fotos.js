let fotoSelecionada = null;

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

console.log(video);
console.log(canvas);
console.log(btnCapturar);

let streamAtual = null;

async function abrirCamera(){

    document.getElementById(
        "cameraContainer"
    ).style.display = "flex";

    try{

        streamAtual =
        await navigator.mediaDevices
        .getUserMedia({

            video:{
                facingMode:"user"
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

                fotoSelecionada =
                blob;

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

                continuarEnvioChecklist();

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
    `${funcionarioId}_${Date.now()}.jpg`;

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