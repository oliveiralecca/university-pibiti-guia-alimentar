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

export const templatesWrongAnswers = {
  sistemasAlimentares: [3, 4, 10],
  classificacaoAlimentos: [5, 6, 7, 8, 20],
  comensalidade: [11, 14, 18],
};

export const additionalResult = {
  sistemasAlimentares: (
    <>
      <p>
        Existem vários tipos de sistemas alimentares, mas vamos pensar em
        basicamente dois, que têm pautado as nossas vidas: um com base na
        agricultura familiar e o outro, de monocultura.
      </p>
      <p>Vamos lá:</p>
      <p>
        Os sistemas alimentares com base na agricultura familiar, que usam
        técnicas tradicionais com cultivo de vários alimentos combinados à
        criação de animais, são baseados no processamento mínimo dos alimentos,
        com uma distribuição integrada por feiras e pequenos comerciantes.
      </p>{" "}
      <p>
        Esses sistemas produzem alimentos mais saudáveis, mais variados,
        fortalecem a economia local e fazem os alimentos “viajarem” menos para
        chegar na nossa mesa. Mas, infelizmente, esses estão cada vez mais raros
        e estão sendo substituídos por monoculturas: plantação de uma única
        espécie para fornecer matéria-prima para a indústria produzir os
        ultraprocessados e ração para animal. Requerem um elevado consumo de
        água, precisam de muita terra, máquinas, fertilizantes químicos,
        sementes transgênicas, agrotóxicos e antibióticos, além de combustível e
        de transportar os alimentos por longas distâncias. Algum desses
        elementos te parece saudável? Você consegue pensar no mundo daqui a
        alguns anos, se continuarmos usando nesse sistema?
      </p>{" "}
      <p>
        Para piorar, esses sistemas são bastante desiguais, pois fortalecem uma
        rede de distribuição que não negocia os preços com os consumidores
        finais. Os alimentos viajam tanto que, sequer, conseguimos saber quem
        são os produtores... Pense nisso!
      </p>{" "}
      <p>
        O guia considera saudável os alimentos que são produzidos e distribuídos
        com base em um sistema social e ambientalmente sustentável.
      </p>
    </>
  ),
  classificacaoAlimentos: (
    <>
      <p>
        A nova classificação dos alimentos usada no Brasil, trazida pelo Guia
        Alimentar, é um excelente direcionamento para escolhas saudáveis. São 4
        classificações. Vamos entender cada uma delas?
      </p>
      <ol>
        <li>
          Alimentos in natura e minimamente processados: são obtidos diretamente
          de plantas ou de animais e não sofrem alteração após deixarem a
          natureza. Exemplos: folhas, frutos, verduras, ou ovos, carnes e leite.
          Os alimentos minimamente processados são os in natura que passaram por
          alterações mínimas (corte e lavagem).{" "}
        </li>
        <li>
          Ingredientes culinários: são produtos extraídos diretamente da
          natureza ou de alimentos in natura e usados para temperar e cozinhar
          alimentos e criar preparações culinárias, como: óleos, gorduras,
          açúcar e sal.{" "}
        </li>
        <li>
          Produtos processados: são os in natura ou minimamente processado
          fabricados com a adição de sal ou de açúcar. Exemplos: legumes em
          conserva, frutas em calda, queijos e pães.
        </li>
        <li>
          Ultraprocessados: são produtos cuja fabricação envolve diversas etapas
          e técnicas de processamento, além de vários ingredientes, muitos de
          uso exclusivamente industrial. Exemplo: refrigerantes, biscoitos
          recheados, salgadinhos de pacote, sorvete e macarrão instantâneo.
        </li>
      </ol>
      <p>
        O Guia Alimentar recomenda que alimentos in natura e minimamente
        processados sejam a base da nossa alimentação, que os ingredientes
        culinários sejam consumidos em pequenas quantidades. Os alimentos
        processados devem ser limitados, consumidos também em pequenas
        quantidades, e os ultraprocessados devem ser evitados.
      </p>
      <p>
        Podemos, aos poucos, mudar as nossas escolhas para alinhar a nossa
        alimentação aos princípios do Guia Alimentar.
      </p>
    </>
  ),
  comensalidade: (
    <>
      <p>
        É importante lembrarmos que a alimentação envolve ações além do ato de
        comer. Por isso, o Guia Alimentar orienta que tenhamos atenção à&nbsp;
        <u>comensalidade</u>: estar atento ao ato de comer, comer com
        regularidade e atenção, em ambientes apropriados e com companhia.{" "}
      </p>
      <p>
        Isto envolve realizar as refeições em horários semelhantes, evitar
        “beliscar” nos intervalos, comer devagar para desfrutar o que está
        comendo, comer sem se envolver em outras atividades (dirigir, assistir
        televisão, mexer no celular). Realizar as refeições em locais limpos,
        confortáveis e tranquilos, em companhia, com familiares, amigos ou
        colegas de trabalho ou escola, e sem estímulos para o consumo de
        quantidades exageradas, como em redes de <i>fast foods</i>.
      </p>
      <p>
        Além disso, é importante compartilhar as atividades domésticas de antes
        e depois das refeições.
      </p>
    </>
  ),
};
