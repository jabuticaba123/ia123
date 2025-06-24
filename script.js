const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de finalizar o ensino médio e precisa decidir qual será a sua carreira futura. Suas escolhas podem gerar consequências." ,  
        alternativas: [
           
            {
                texto: "Isso me assusta!",
                afirmacao: "Estava nervoso(a) demais para tomar um decisão concreta. "
            },
            {
                texto: "Isso é brilhante!",
                afirmacao: "Logo começou a pesquisar as possibilitades que possui."
            }
        ]
    },
    {
        enunciado: "Ao acessar sites que a uma lista com diversas escolhas de carreira. Você decide selecionar opções que vão de acordo com suas habilidades.",
        alternativas: [
            {
                texto: "Escolhe a opção de uma área mais complexa e que você não tem tanta experiência, apenas para ganhar mais conhecimento. ",
                afirmacao: "Conseguiu ser ousado(a) e terá uma mente brilhante."
            },
            {
                texto: "Ao selecionar a opção que contém mais de seu conhecimento, você entra em uma área mais acessível.",
                afirmacao: "Conseguiu ser equilibrado e poderá ampliar seus métodos."
            }
        ]
    },
    {
        enunciado: "Chega o grande dia da entrevista de emprego. Como será sua atitude diante isso?",
        alternativas: [
            {
                texto: "Se vestirá formalmente para a ocasiáo, irá se apresentar adequadamente e usará o vocabulário correto.",
                afirmacao: "Você se saiu bem na entrevista e foi contratado."
            },
            {
                texto: "Colocará a primeira peça de roupa despojada, chegará atrasado e usará gírias.",
                afirmacao: "Você passou uma má visão e não foi contratado."
            }
        ]
    },
    {
        enunciado: " Com seu desempenho em uma área de trabalho é necessário ser bem visto com quais atitudes?",
        alternativas: [
            {
                texto: "Se dedicar ao máximo, ser bem disposto, comunicativo e pontual.",
                afirmacao: "Parábens! Seu chefe notou seu desempenho e recebeu um aumento salarial."
            },
            {
                texto: "Se dedicar quando somente lhe dar vontade, reclamar diariamente e chegar atrasado.",
                afirmacao: "Ops! Somente seu colega de trabalho recebeu um aumento."
            }
        ]
    },
    {
        enunciado: "Você precisa organizar uma apresentação para a seguinte semana, mas houve um imprevisto e está um pouco atrasado. O que você fará? ",
        alternativas: [
            {
                texto: "Decidiu utilizar a inteligência artificial para realizar boa parte de seu projeto e facilitar sua situação." ,
                afirmacao: "O seu chefe achou muito monotóno seu projeto e não aprovou. Ele esperava mais dedicação."
            },
            {
                texto: "Dedicou-se ao máximo em seu projeto, ficando com um sono desregulado.",
                afirmacao: "Você foi aprovado! Se projeto foi um sucesso. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
