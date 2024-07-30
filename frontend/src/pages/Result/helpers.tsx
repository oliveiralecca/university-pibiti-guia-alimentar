export const resultsByScore = {
  A: {
    hitsPercentages: {
      0: "0%",
      1: "10%",
      2: "10%",
      3: "20%",
      4: "20%",
      5: "20%",
    },
    message: (percentage: string) => (
      <>
        <h1>Poxa... 😰</h1>
        <p>
          Você só acertou {percentage} das questões. Esse resultado é uma
          oportunidade para identificar áreas que precisam de mais aprendizado.
          Que tal conhecer mais sobre o Guia Alimentar para a População
          Brasileira? O conhecimento se constrói passo a passo. Esse é um
          assunto muito sério: aqui temos informações do Guia Alimentar do
          Brasil, que nos ajudam a fazer melhores escolhas alimentares. É a
          nossa saúde em jogo. Obrigado por participar do Quiz!
        </p>
      </>
    ),
    cta: (
      <p>
        Queremos colaborar com esse progresso. Você pode explorar mais conteúdos
        do Guia Alimentar conosco.
      </p>
    ),
  },
  B: {
    hitsPercentages: {
      6: "30%",
      7: "30%",
      8: "40%",
      9: "40%",
      10: "40%",
    },
    message: (percentage: string) => (
      <>
        <h1>Hunff!</h1>
        <p>
          Você acertou {percentage} das questões, o que mostra um bom esforço.
          Não desanime! Esse é um assunto muito sério: aqui temos informações do
          Guia Alimentar do Brasil, que nos ajudam a fazer melhores escolhas
          alimentares. É a nossa saúde em jogo. Obrigado por participar do Quiz!
        </p>
      </>
    ),
    cta: (
      <p>
        Queremos colaborar com esse progresso. Você pode explorar mais conteúdos
        do Guia Alimentar conosco.
      </p>
    ),
  },
  C: {
    hitsPercentages: {
      11: "50%",
      12: "50%",
      13: "60%",
      14: "60%",
    },
    message: (percentage: string) => (
      <>
        <p>
          Opa, você acertou {percentage}, o que mostra que você pode focar para
          melhorar o seu entendimento sobre esse assunto. Não desanime! Esse é
          um assunto muito sério: aqui temos informações do Guia Alimentar do
          Brasil, que nos ajudam a fazer melhores escolhas alimentares. É a
          nossa saúde em jogo. Obrigado por participar do Quiz!
        </p>
      </>
    ),
    cta: <p>Você pode explorar mais conteúdos do Guia Alimentar conosco.</p>,
  },
  D: {
    hitsPercentages: {
      15: "70%",
      16: "70%",
      17: "70%",
      18: "80%",
      19: "80%",
    },
    message: (percentage: string) => (
      <>
        <h1>Yey! Parabéns! 🥳👌</h1>
        <p>
          Você acertou {percentage} do Quiz, o que demonstra um bom entendimento
          sobre o assunto. Continue assim e siga aprendendo sobre alimentação
          saudável. Esse é um assunto muito sério: aqui temos informações do
          Guia Alimentar do Brasil, que nos ajudam a fazer melhores escolhas
          alimentares. Obrigado por participar!
        </p>
      </>
    ),
    cta: <p>Você pode explorar mais conteúdos do Guia Alimentar conosco.</p>,
  },
  E: {
    hitsPercentages: {
      20: "90%",
      21: "90%",
      22: "90%",
      23: "100%",
      24: "100%",
    },
    message: (percentage: string) => (
      <>
        <h1>Wow! Você arrasou! 👏🎉👊</h1>
        <p>
          Acertou {percentage} do Quiz, mostrando um excelente domínio sobre o
          assunto. Parabéns pelo desempenho incrível! Obrigado por participar!
          Esse é um assunto muito sério: aqui temos informações do Guia
          Alimentar do Brasil, que nos ajudam a fazer melhores escolhas
          alimentares. Continue assim!
        </p>
      </>
    ),
    cta: <p>Você pode explorar mais conteúdos do Guia Alimentar conosco.</p>,
  },
};
