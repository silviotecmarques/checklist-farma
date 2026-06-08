const checklists = {

    Balconista: {

        categorias: [

            {
                nome: "Início do Turno",
                tarefas: [
                    "Cheguei no horário programado",
                    "Alinhei prioridades com a equipe e liderança",
                    "Verifiquei pendências do turno anterior",
                    "Verifiquei a organização inicial das gôndolas do meu setor",
                    "Verifiquei a necessidade de reposição nas gôndolas"
                ]
            },

            {
                nome: "Durante o Turno",
                tarefas: [
                    "Apresentei benefícios dos suplementos e vitaminas aos clientes",
                    "Reabasteci os produtos em falta nas gôndolas",
                    "Conferi a precificação dos produtos do setor",
                    "Verifiquei produtos próximos ao vencimento",
                    "Organizei o estoque do setor",
                    "Retirei avarias ou produtos inadequados para venda",
                    "Mantive a limpeza e organização do setor",
                    "Informei faltas de produtos ao responsável",
                    "Divulguei campanhas e promoções vigentes aos clientes",
                    "Trabalhei venda adicional durante os atendimentos",
                    "Ofereci marcas exclusivas quando aplicável"
                ]
            },

            {
                nome: "Final do Turno",
                tarefas: [
                    "Deixei as reposições alinhadas para o próximo turno",
                    "Informei pendências para o próximo turno",
                    "Conferi a limpeza final do setor",
                    "Conferi a organização final das gôndolas",
                    "Registrei o total de vitaminas/marcas exclusivas vendidas hoje",
                    "Verifiquei o resultado da meta diária de genéricos",
                    "Encerrei o turno conforme orientação da liderança"
                ]
            }

        ]
    },

    Caixa: {

        categorias: [

            {
                nome: "Início do Turno",
                tarefas: [
                    "Cheguei no horário programado",
                    "Alinhei prioridades com a liderança",
                    "Verifiquei pendências do turno anterior",
                    "Verifiquei a organização inicial das gôndolas do meu setor",
                    "Verifiquei a necessidade de reposição nas gôndolas",
                    "Conferi o fundo de caixa"
                ]
            },

            {
                nome: "Durante o Turno",
                tarefas: [
                    "Realizei atendimento cordial aos clientes",
                    "Registrei corretamente as vendas realizadas",
                    "Conferi os valores recebidos antes de finalizar as vendas",
                    "Ofereci campanhas, benefícios e programas da farmácia",
                    "Mantive organização e limpeza do caixa",
                    "Solicitei apoio em casos de divergências ou dúvidas",
                    "Comuniquei problemas operacionais quando identificados",
                    "Mantive controle dos valores sob minha responsabilidade",
                    "Organizei comprovantes e documentos necessários",
                    "Reabasteci os produtos em falta nas gôndolas",
                    "Conferi a precificação dos produtos do setor",
                    "Verifiquei produtos próximos ao vencimento",
                    "Organizei o estoque do setor",
                    "Retirei avarias ou produtos inadequados para venda",
                    "Mantive a limpeza e organização do setor",
                    "Informei faltas de produtos ao responsável"
                ]
            },

            {
                nome: "Final do Turno",
                tarefas: [
                    "Realizei conferência do caixa",
                    "Registrei possíveis divergências encontradas",
                    "Organizei documentos e comprovantes do dia",
                    "Informei pendências para o próximo turno",
                    "Deixei o caixa organizado para o próximo colaborador",
                    "Encerrei o turno conforme orientação da liderança"
                ]
            }

        ]
    },

    Fiscal: {

    categorias: [

        {
            nome: "Início do Turno",
            tarefas: [
                "Cheguei no horário programado",
                "Alinhei prioridades com a equipe e liderança",
                "Verifiquei pendências do turno anterior",
                "Verifiquei a organização inicial das gôndolas do meu setor",
                "Verifiquei a necessidade de reposição nas gôndolas",
                "Recebi informações e pendências do turno anterior"
            ]
        },

        {
            nome: "Durante o Turno",
            tarefas: [
                "Realizei rondas periódicas em todos os setores",
                "Monitorei áreas de maior risco de perdas",
                "Observei movimentações suspeitas quando necessário",
                "Apoiei a equipe em situações de prevenção de perdas",
                "Registrei ocorrências identificadas durante o turno",
                "Comuniquei imediatamente situações relevantes à liderança",
                "Verifiquei a organização geral dos setores da loja",
                "Apoiei inventários, auditorias ou conferências quando solicitado",
                "Reabasteci os produtos em falta nas gôndolas",
                "Conferi a precificação dos produtos do setor",
                "Verifiquei produtos próximos ao vencimento",
                "Organizei o estoque do setor",
                "Retirei avarias ou produtos inadequados para venda",
                "Mantive a limpeza e organização do setor",
                "Informei faltas de produtos ao responsável",
                "Divulguei campanhas e promoções vigentes aos clientes"
            ]
        },

        {
            nome: "Final do Turno",
            tarefas: [
                "Deixei as reposições alinhadas para o próximo turno",
                "Informei pendências para o próximo turno",
                "Conferi a limpeza final do setor",
                "Conferi a organização final das gôndolas",
                "Encerrei o turno conforme orientação da liderança"
            ]
        }

    ]
},
Farmacêutico: {

    categorias: [

        {
            nome: "Início do Turno",
            tarefas: [
                "Cheguei no horário programado",
                "Alinhei prioridades com a equipe e liderança",
                "Verifiquei pendências do turno anterior",
                "Verifiquei a organização inicial das gôndolas do meu setor",
                "Verifiquei medicamentos sujeitos a controle especial"
            ]
        },

        {
            nome: "Durante o Turno",
            tarefas: [
                "Realizei atendimento e orientação farmacêutica aos clientes",
                "Avaliei receitas e prescrições apresentadas",
                "Esclareci dúvidas sobre medicamentos quando necessário",
                "Acompanhei a dispensação de medicamentos controlados",
                "Conferi registros obrigatórios dos controlados",
                "Verifiquei medicamentos próximos ao vencimento",
                "Orientei a equipe quando necessário",
                "Acompanhei intercorrências ou reclamações relacionadas a medicamentos",
                "Organizei o estoque do setor",
                "Divulguei campanhas e promoções vigentes aos clientes",
                "Apresentei benefícios dos suplementos e vitaminas aos clientes",
                "Trabalhei venda adicional durante os atendimentos",
                "Ofereci marcas exclusivas quando aplicável"
            ]
        },

        {
            nome: "Final do Turno",
            tarefas: [
                "Conferi os registros realizados durante o dia",
                "Verifiquei pendências técnicas a serem repassadas",
                "Informei ocorrências para o próximo turno",
                "Conferi a limpeza final do setor",
                "Deixei as reposições alinhadas para o próximo turno",
                "Registrei o total de vitaminas/marcas exclusivas vendidas hoje",
                "Verifiquei o resultado da meta diária de genéricos",
                "Encerrei o turno conforme orientação da liderança"
            ]
        }

    ]
},
Perfumista: {

    categorias: [

        {
            nome: "Início do Turno",
            tarefas: [
                "Cheguei no horário programado",
                "Alinhei prioridades com a equipe e liderança",
                "Verifiquei pendências do turno anterior",
                "Verifiquei a organização inicial do setor de perfumaria",
                "Identifiquei necessidades de reposição nas gôndolas",
                "Verifiquei campanhas e ofertas vigentes do setor"
            ]
        },

        {
            nome: "Durante o Turno",
            tarefas: [
                "Reabasteci os produtos em falta nas gôndolas",
                "Conferi preços e etiquetas dos produtos",
                "Verifiquei produtos próximos ao vencimento",
                "Organizei o estoque do setor",
                "Retirei avarias ou produtos inadequados para venda",
                "Mantive o setor limpo e organizado",
                "Informei faltas de produtos ao responsável",
                "Realizei atendimento consultivo aos clientes",
                "Apresentei produtos e lançamentos quando aplicável",
                "Divulguei campanhas e promoções vigentes aos clientes",
                "Trabalhei venda adicional durante os atendimentos",
                "Ofereci marcas exclusivas quando aplicável",
                "Identifiquei oportunidades de venda consultiva",
                "Apresentei benefícios dos suplementos e vitaminas aos clientes"
            ]
        },

        {
            nome: "Final do Turno",
            tarefas: [
                "Deixei as reposições alinhadas para o próximo turno",
                "Informei pendências para a equipe seguinte",
                "Conferi a limpeza final do setor",
                "Conferi a organização final das gôndolas",
                "Registrei o total de vitaminas/marcas exclusivas vendidas hoje",
                "Encerrei o turno conforme orientação da liderança"
            ]
        }

    ]
},
"Atendente de Suplementos": {

    categorias: [

        {
            nome: "Início do Turno",
            tarefas: [
                "Cheguei no horário programado",
                "Alinhei prioridades com a equipe e liderança",
                "Verifiquei a organização inicial do setor de suplementos",
                "Identifiquei necessidades de reposição nas gôndolas",
                "Verifiquei campanhas, metas e ofertas vigentes"
            ]
        },

        {
            nome: "Durante o Turno",
            tarefas: [
                "Reabasteci produtos em falta nas gôndolas",
                "Conferi preços e etiquetas dos produtos",
                "Verifiquei produtos próximos ao vencimento",
                "Retirei avarias ou produtos inadequados para venda",
                "Mantive o setor limpo e organizado",
                "Organizei o estoque do setor",
                "Informei faltas de produtos ao responsável",
                "Identifiquei oportunidades de venda consultiva",
                "Apresentei benefícios dos suplementos e vitaminas aos clientes",
                "Ofereci marcas exclusivas quando aplicável",
                "Divulguei campanhas e promoções vigentes",
                "Sugeri combos e produtos complementares quando aplicável"
            ]
        },

        {
            nome: "Final do Turno",
            tarefas: [
                "Deixei as reposições alinhadas para o próximo turno",
                "Informei pendências para a equipe seguinte",
                "Conferi a limpeza final do setor",
                "Conferi a organização final das gôndolas",
                "Registrei o total de vitaminas/marcas exclusivas vendidas hoje",
                "Encerrei o turno conforme orientação da liderança"
            ]
        }

    ]
}
};