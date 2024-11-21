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
          oportunidade para aprender. Que tal conhecer mais sobre o Guia
          Alimentar para a População Brasileira? Esse é um assunto muito sério e
          o Guia Alimentar nos ajuda a fazer melhores escolhas alimentares. É a
          nossa saúde em jogo.
        </p>
        <p>Obrigado por participar do Quiz!</p>
      </>
    ),
    cta: (
      <p>
        Queremos colaborar com esse aprendizado. Você pode explorar mais
        conteúdos do Guia Alimentar conosco.
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
        <h1>
          Hunff! Obrigado por participar do Quiz. Você acertou {percentage} das
          questões.
        </h1>
        <p>
          Não desanime! Esse é um assunto muito sério e o Guia Alimentar nos
          ajuda a fazer melhores escolhas alimentares. É a nossa saúde em jogo.
        </p>
        <p>Obrigado por participar do Quiz!</p>
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
        <h1>Opa, você acertou {percentage}.</h1>
        <p>
          Você pode melhorar o seu conhecimento sobre esse assunto. Não
          desanime! Esse é um assunto muito sério e o Guia Alimentar nos ajuda a
          fazer melhores escolhas alimentares.
        </p>
        <p>É a nossa saúde em jogo.</p>
        <p>Obrigado por participar do Quiz!</p>
      </>
    ),
    cta: "",
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
          saudável. Esse é um assunto muito sério, e o Guia Alimentar nos ajuda
          a fazer melhores escolhas alimentares.
        </p>
        <p>Obrigado por participar!</p>
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
          assunto. Parabéns pelo desempenho incrível! Esse é um assunto muito
          sério e o Guia Alimentar nos ajuda a fazer melhores escolhas
          alimentares.
        </p>
        <p>Obrigado por participar!</p>
      </>
    ),
    cta: <p>Você pode explorar mais conteúdos do Guia Alimentar conosco.</p>,
  },
};

export const templatesWrongAnswers = {
  classificacaoAlimentos: [5, 6, 7, 8, 20],
  comensalidade: [11, 14, 18],
  sistemasAlimentares: [3, 4, 10],
};

export const additionalResult = {
  classificacaoAlimentos: (
    <>
      <p>
        A nova classificação dos alimentos do Brasil, trazida pelo Guia
        Alimentar, é um excelente direcionamento para escolhas saudáveis.
      </p>
      <p>São 4 classificações:</p>
      <ol>
        <li>
          Alimentos <i>in natura</i> e minimamente processados: vêm diretamente
          de plantas ou de animais. Exemplos: folhas, frutos, verduras, ovos,
          carnes e leite. Os alimentos minimamente processados são os{" "}
          <i>in natura</i>
          que passaram por pequenas alterações, como corte e lavagem.
        </li>
        <li>
          Ingredientes culinários: são produtos extraídos da natureza e usados
          para temperar e criar preparações culinárias: óleos, gorduras, açúcar
          e sal.
        </li>
        <li>
          Produtos processados: são os <i>in natura</i> ou minimamente
          processado feitos com a adição de sal ou de açúcar. Exemplos: legumes
          em conserva, frutas em calda, queijos e pães.
        </li>
        <li>
          Ultraprocessados: são fabricações que envolvem diversas etapas e
          técnicas de processamento, além de vários ingredientes. Exemplo:
          refrigerantes, biscoitos recheados, salgadinhos de pacote, sorvete e
          macarrão instantâneo.
        </li>
      </ol>
      <p>
        O Guia Alimentar recomenda que{" "}
        <strong>
          alimentos <i>in natura</i> e minimamente processados
        </strong>{" "}
        sejam a base da nossa alimentação, que os ingredientes culinários sejam
        consumidos em pequenas quantidades.
      </p>
      <p>
        Os <strong>alimentos processados</strong> devem ser limitados,
        consumidos também em pequenas quantidades, e os{" "}
        <strong>ultraprocessados</strong> devem ser evitados.
      </p>
      <p>
        Aos poucos podemos mudar as nossas escolhas para alinhar a nossa
        alimentação aos princípios do Guia Alimentar.
      </p>
    </>
  ),
  comensalidade: (
    <>
      <p>
        A alimentação envolve ações além do ato de comer. Por isso, o Guia
        Alimentar orienta que tenhamos atenção à&nbsp;
        <u>comensalidade</u>: comer com regularidade e atenção, em ambientes
        apropriados e com companhia.
      </p>
      <p>
        Realizar as refeições em horários semelhantes todos os dias, evitar
        “beliscar” nos intervalos, comer devagar e comer sem se envolver em
        outras atividades (dirigir, assistir televisão, mexer no celular).
      </p>
      <p>
        Realizar as refeições em locais limpos, confortáveis e tranquilos, em
        companhia, com familiares, amigos ou colegas de trabalho ou escola. Além
        disso, é importante compartilharmos as atividades domésticas de antes e
        depois das refeições.
      </p>
    </>
  ),
  sistemasAlimentares: (
    <>
      <p>
        Existem vários tipos de sistemas alimentares, mas vamos pensar nos dois
        mais comuns: (1) com base na agricultura familiar e (2) de monocultura.
        Vamos lá:
      </p>
      <p>
        Os sistemas alimentares com base na agricultura familiar, usam técnicas
        tradicionais de cultivo de vários alimentos combinados com a criação de
        animais. Distribuem a produção em feiras e pequenos comerciantes.
        Produzem alimentos mais saudáveis e mais variados, fortalecem a economia
        local e fazem os alimentos “viajarem” menos para chegar até a nossa
        mesa.
      </p>
      <p>
        As monoculturas são plantações de uma única espécie para fornecer
        matéria-prima para a indústria produzir os ultraprocessados e ração para
        animal (trigo e soja, por exemplo). Essas plantações usam muita água,
        precisam de muita terra e máquinas, não atende a saúde da população, e
        usam fertilizantes químicos, sementes transgênicas, agrotóxicos e
        antibióticos. Além disso, precisam de combustível para transportar os
        alimentos por longas distâncias.
      </p>
      <p>
        Algum desses elementos te parece saudável? Você consegue pensar no mundo
        daqui a alguns anos, se continuarmos usando o sistema de monocultura?
      </p>
      <p>
        Para piorar, esses sistemas são bastante desiguais, pois fortalecem uma
        rede de distribuição que não negocia os preços dos alimentos com os
        consumidores finais. Os alimentos viajam tanto que, sequer, conseguimos
        saber quem produziu... Pense nisso!
      </p>
      <p>
        O Guia Alimentar considera saudável os alimentos que são produzidos e
        distribuídos com base em um sistema alimentar social e ambientalmente
        sustentável.
      </p>
    </>
  ),
};
