function carregaFormas() {

    var formas= {
        forma01: {
            nome: "Eu gostaria de ir, mas...",
            imagem: "img/img1.avif",
            descricao:
            "Se é alguém que você se importa e quer manter uma relação conectada, com essa forma de dizer você pode demonstrar que gosta de estar junto dela e que isso só não acontecerá dessa vez porque você não pode.",
            citacao:
            "Eu gostaria de ir, mas não vou poder desta vez."               
            
        },

        forma02: {
            nome: "Obrigada por lembrar de mim...",
            imagem: "img/img2.jpg",
            descricao:
                "Com essa fala, você se coloca vulnerável, mostrando que se importa com o fato da pessoa ter se dedicado a se lembrar de você. Você não conseguirá dessa vez (ir ao evento, comparecer a algum happy hour, ou algo do tipo), mas deixou explícito que foi importante para você ter sido lembrada.",
            citacao:
                "Obrigada por lembrar de mim, mas infelizmente não vou conseguir."
        },

        forma03: {
            nome: "Estou sobrecarregada...",
            imagem: " img/img3.avif",
            descricao:
                "Aqui você comunica uma limitação sua, o que também te deixa vulnerável. Diz que está sobrecarregada e deixa explícito que gostaria que houvesse uma próxima vez. Dizer dessa forma ajuda a comunicar que o impedimento não é a pessoa e nem o convite, e sim a forma como está se sentindo: sobrecarregada.",
            citacao:
                "Estou um pouco sobrecarregada essa semana, que tal da próxima vez?"
        },

        forma04: {
            nome: "Não consigo...",
            imagem: "img/img4.jpg",
            descricao:
                "Embora essa forma aparente ser ''seca'', é também uma alternativa assertiva e gentil de se expressar. Algumas situações nos pedem mais firmeza e breviedade, então podemos ser, firmes, breves e gentis ao mesmo tempo.",
            citacao:
                "Não consigo, sinto muito."
        },

        forma05: {
            nome: "Sinto muito...",
            imagem: "img/img5.jpg",
            descricao:
                "Mais uma vez, essa forma coloca uma limitação sua como motivo do não. Quando expõe suas limitações, você também fica vulnerável. Quando isso acontece, sua colocação é recebida com maior empatia.",
            citacao:
                "Sinto muito, dessa vez não vou conseguir te ajudar com isso"  
        },

        forma06: {
            nome: "Preciso pensar um pouco...",
            imagem: " img/img6.jpg",
            descricao: "Você ainda não tem uma resposta, mas dizer dessa forma ajuda a comunicar que gostaria de pensar com mais calma sobre a situação porque ela é importante para você.",
            citacao:
                "Preciso pensar um pouco antes de te responder. Te respondo ainda no final dessa semana (para avaliar antes de responder)"
        },

        forma07: {
            nome: "Não me sinto à vontade...",
            imagem: " img/img8.jpg",
            descricao: "Você coloca um limite, dizendo que o tipo de situação para a qual foi convidada não te deixa a vontade, mas deixa também uma abertura para outros convites, o que mantém a relação conectada.",
            citacao:
                "Não me sinto à vontade para ir dessa vez"
        },

        forma08: {
            nome: "Nou vou poder estar presente...",
            imagem: " img/img7.jpg",
            descricao: "Aqui você demonstra que se importa com como será o evento para as outras pessoas, que você deseja que elas tenham bons momentos. Isso te ajuda a demonstrar que aquelas pessoas são queridas para você.",
            citacao:
                "Não vou poder estar presente dessa vez, mas desejo que seja um encontro muito especial para vocês."
        },

        forma09: {
            nome: "Fiquei muito honrada...",
            imagem: " img/img9.jpg",
            descricao: "Esta fala também expõe sua vulnerabilidade: você diz que não é capaz de fazer no momento. Além de ficar vulnerável e ativar a empatia da outra pessoa, você deixa muito claro que o pedido da pessoa significou muito para você.",
            citacao:
                "Fiquei muito honrada com seu pedido, contudo, não serei capaz de fazer o que pediu. Muito obrigada por perguntas, de qualquer forma, significou muito para mim."
        },
    };

    var cards = document.getElementById("cards");

    for (var forma in formas) {
        cards.innerHTML += 
            '<div class="details">' + 
            '<img class="foto" src="'+
            formas[forma].imagem +
            '"/>' + 
            '<details class="saiba-mais">' + 
            "<summary>" + 
            formas[forma].nome + 
            "</summary>" +
            "<blockquote>" +
            '<q class="citacao">' +
            formas[forma].citacao +
            "</q></blockquote>" + 
            '<p class="paragrafo">' +
            formas[forma].descricao +
            "</p>" +                           
            "</details>" +
            "</div>";
    }
}

carregaFormas();