async function gerarPDFIndividual(item){

    const { jsPDF } =
    window.jspdf;

    const doc =
    new jsPDF();

    let y = 20;

    doc.setFontSize(18);

    doc.text(
        "CHECKLIST FARMA",
        20,
        y
    );

    y += 15;

    doc.setFontSize(12);

    doc.text(
        `Funcionário: ${item.funcionario_nome}`,
        20,
        y
    );

    y += 8;

    doc.text(
        `Cargo: ${item.cargo}`,
        20,
        y
    );

    y += 8;

    doc.text(
        `Data: ${item.data_checklist}`,
        20,
        y
    );

    y += 8;

    doc.text(
        `Hora: ${item.hora_checklist}`,
        20,
        y
    );

    y += 15;

    if(item.respostas){

        item.respostas.forEach(r => {

            if(y > 270){

                doc.addPage();

                y = 20;

            }

            doc.setFont(undefined,"bold");

            doc.text(
                r.tarefa,
                20,
                y
            );

            y += 8;

            doc.setFont(undefined,"normal");

            doc.text(
                `Resposta: ${r.resposta}`,
                25,
                y
            );

            y += 12;

        });

    }

    if(
        item.observacoes &&
        item.observacoes.trim() !== ""
    ){

        if(y > 240){

            doc.addPage();

            y = 20;

        }

        doc.setFont(undefined,"bold");

        doc.text(
            "Observações:",
            20,
            y
        );

        y += 8;

        doc.setFont(undefined,"normal");

        const linhas =
        doc.splitTextToSize(

            item.observacoes,

            170

        );

        doc.text(

            linhas,

            20,

            y

        );

        y +=
        linhas.length * 7;

    }

    doc.save(

        `Checklist-${item.funcionario_nome}.pdf`

    );

}