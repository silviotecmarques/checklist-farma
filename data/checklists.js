const checklists = {

    Caixa: {
        categorias: [

            {
                nome: "Organização",
                tarefas: [

                    {
                        tipo: "avaliacao",
                        texto: "Você realizou a limpeza e organização do seu caixa?",
                        foto: true
                    },

                    {
                        tipo: "avaliacao",
                        texto: "A frente de loja ficou organizada?",
                        foto: true
                    },

                    {
                        tipo: "avaliacao",
                        texto: "O estoque do seu setor ficou organizado?",
                        foto: true
                    }

                ]
            },

            {
                nome: "Resultados",
                tarefas: [

                    {
                        tipo: "numero",
                        texto: "Quanto de comissão você ganhou hoje?"
                    },

                    {
                        tipo: "numero",
                        texto: "Qual foi seu PEC hoje?"
                    }

                ]
            },

        ]
    },

    Balconista: {
        categorias: [

            {
                nome: "Organização",
                tarefas: [

                    {
                        tipo: "avaliacao",
                        texto: "Você organizou e alinhou sua gôndola?",
                        foto: true
                    },

                    {
                        tipo: "avaliacao",
                        texto: "Você organizou o estoque do seu setor?",
                        foto: true
                    }

                ]
            },

            {
                nome: "Metas e Vendas",
                tarefas: [

                    {
                        tipo: "meta",
                        texto: "Você atingiu a meta de Genéricos e Similares hoje?"
                    },

                    {
                        tipo: "numero",
                        texto: "Quantas marcas exclusivas você vendeu hoje?"
                    }

                ]
            },

        ]
    },

    Fiscal: {
        categorias: [

            {
                nome: "Alterações de Preço",
                tarefas: [

                    {
                        tipo: "meta",
                        texto: "Você imprimiu as alterações de preço do dia?",
                        foto: true
                    }

                ]
            },

            {
                nome: "Reposição e Organização",
                tarefas: [

                    {
                        tipo: "avaliacao",
                        texto: "Você realizou o reabastecimento das gôndolas e seções compartilhadas?"
                    },

                    {
                        tipo: "avaliacao",
                        texto: "Os pontos promocionais ficaram abastecidos e organizados?",
                        foto: true
                    }

                ]
            },

            {
                nome: "Finalização do Expediente",
                tarefas: [

                    {
                        tipo: "avaliacao",
                        texto: "Antes de encerrar o expediente você deixou a loja alinhada?"
                    },

                    {
                        tipo: "avaliacao",
                        texto: "As gôndolas e o estoque de fraldas ficaram organizados?"
                    }

                ]
            },
        ]
    },

   Farmacêutico: {
    categorias: [

        {
            tarefas: [

                {
                    tipo: "avaliacao",
                    texto: "Você organizou e alinhou sua gôndola?",
                    foto: true
                },

                {
                    tipo: "avaliacao",
                    texto: "Você organizou o estoque do seu setor?",
                    foto: true
                },

                {
                    tipo: "avaliacao",
                    texto: "A temperatura da geladeira de medicamentos foi registrada?"
                },

                {
                    tipo: "meta",
                    texto: "Você atingiu a meta de Genéricos e Similares hoje?"
                },

                {
                    tipo: "numero",
                    texto: "Quantas marcas exclusivas você vendeu hoje?"
                }

            ]
        }

    ]
},

    Perfumista: {
        categorias: [

            {
                nome: "Organização",
                tarefas: [

                    {
                        tipo: "avaliacao",
                        texto: "As gôndolas do seu setor ficaram limpas e organizadas?",
                        foto: true
                    },

                    {
                        tipo: "avaliacao",
                        texto: "Antes de encerrar o expediente você deixou o setor alinhado?"
                    }

                ]
            },

            {
                nome: "Resultados",
                tarefas: [

                    {
                        tipo: "numero",
                        texto: "Quantas das suas gôndolas já foram limpas neste mês?"
                    },

                    {
                        tipo: "numero",
                        texto: "Quantas marcas exclusivas você vendeu hoje?"
                    }

                ]
            },
        ]
    },

    "Atendente de Suplementos": {
        categorias: [

            {
                nome: "Organização",
                tarefas: [

                    {
                        tipo: "avaliacao",
                        texto: "As gôndolas de suplementos ficaram organizadas?"
                    },

                    {
                        tipo: "avaliacao",
                        texto: "O estoque de suplementos ficou organizado?"
                    }

                ]
            },

            {
                nome: "Resultados",
                tarefas: [

                    {
                        tipo: "meta",
                        texto: "Você atingiu sua meta de vendas hoje?"
                    },

                    {
                        tipo: "numero",
                        texto: "Quantos suplementos você vendeu hoje?"
                    }

                ]
            },

        ]
    }

};