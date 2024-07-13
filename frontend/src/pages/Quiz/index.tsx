import { Stepper } from "@/components/Stepper";
import { useStepperContext } from "@/components/Stepper/contexts/StepperContext";
import { useQuizContext } from "@/contexts/QuizContext";

import { BlockContainer } from "./components/BlockContainer";
import { Information } from "./components/Information";
import { Question } from "./components/Question";
import { QuizContainer } from "./styles";
import { SchoolForm } from "./components/SchoolForm";

const blocks = ["Bloco 1", "Bloco 2", "Bloco 3", "Bloco 4"];

export function Quiz() {
  const { activeStep } = useStepperContext();
  const { formType } = useQuizContext();

  return (
    <QuizContainer>
      <Stepper blocks={blocks}>
        {activeStep === 0 && (
          <BlockContainer>
            <Question affirmative="1 - A alimentação é mais que a ingestão de alimentos." />
            <Question affirmative="2 - Para ter uma alimentação saudável, é necessário ter organização do tempo." />
            <Question affirmative="3 - Uma alimentação adequada e saudável não depende de um sistema alimentar social e ambientalmente sustentável." />
            <Question affirmative="4 - Guias alimentares servem para ampliar a autonomia da população na escolha de uma alimentação saudável e adequada." />
            <Question affirmative="5 - Comer alimentos in natura ou minimamente processados (como grãos, raízes, tubérculos, farinhas, legumes, verduras, frutas, castanhas), não tem relação com uma alimentação saudável, balanceada e com um sistema alimentar social e ambientalmente sustentável." />
            <Question affirmative="6 - Consumir óleos, gorduras, sal e açúcar em pequenas quantidades é adequado." />
          </BlockContainer>
        )}

        {activeStep === 1 && (
          <BlockContainer>
            <Question affirmative="7 - Em sua opinião, o consumo de alimentos processados, como pães, raízes e cereais, pode ser feito sem prejuízo para a saúde." />
            <Question affirmative="8 - A alimentação saudável consiste em escolher consumir menos ultraprocessados e mais alimentos in natura e minimamente processados." />
            <Question affirmative="9 - O consumo de alimentos in natura não tem relação a agricultura familiar." />
            <Question affirmative="10 - Para você, fazer compras em feiras livres ou em locais, que oferecem variedade de alimentos in natura, ajuda a ter uma alimentação saudável." />
            <Question affirmative="11 - Cozinhar em um ambiente limpo e organizado torna esse momento mais prazeroso e diminui o tempo de preparação das refeições." />
            <Question affirmative='12 - Fazer refeições sempre em horários semelhantes ajuda a evitar o ato de "beliscar" nos intervalos das refeições.' />
          </BlockContainer>
        )}

        {activeStep === 2 && (
          <BlockContainer>
            <Question affirmative="13 - Comer em ambientes apropriados (locais limpos, confortáveis e tranquilos) influencia na quantidade de alimentos consumida." />
            <Question affirmative="14 - Preparar e fazer as refeições em companhia (com familiares, amigos, colegas de trabalho ou de escola) ajuda no convívio e evita que se coma rapidamente." />
            <Question affirmative="15 - Comer com atenção, sem se envolver em outras atividades (como celular, computador, televisão), é uma boa maneira de controlar, naturalmente, a quantidade e o que se come." />
            <Question affirmative="16 - Ser crítico(a) com propagandas de alimentos em televisão, redes sociais, ofertas de brindes, descontos e promoções, é importante para a escolha dos alimentos." />
            <Question affirmative="17 - Compartilhar habilidades culinárias entre as gerações favorece o consumo de alimentos ultraprocessados." />
            <Question affirmative="18 - Não organizar o tempo para preparar refeições colabora com a compra de alimentos processados, devido à praticidade para o consumo." />
          </BlockContainer>
        )}

        {activeStep === 3 && (
          <BlockContainer>
            <Question affirmative="19 - O aumento da obesidade nos últimos anos tem relação com o aumento no consumo de alimentos ultraprocessados." />
            <Question affirmative="20 - O consumo de alimentos ultraprocessados (salgadinhos de pacote, refrigerantes, sorvetes, sucos de caixinha e biscoitos recheados) não precisa ser evitado já que não afeta a saúde." />
            <Question affirmative="21 - Consumir alimentos de todos os grupos alimentares, tais como verduras, legumes, frutas, raízes, cereais, carnes e outros, promove uma alimentação saudável." />
            <Question affirmative="22 - Os rótulos nutricionais nas embalagens dos alimentos servem como suporte para ajudar em escolhas mais saudáveis." />
            <Question affirmative="23 - As embalagens atrativas e a formulação dos alimentos ultraprocessados, com sabores fortes e marcantes, estimulam o consumo em excesso desses produtos." />
            <Question affirmative="24 - Alimentação saudável não precisa de planejamento na compra dos alimentos, organização da despensa doméstica e definição de cardápio." />
          </BlockContainer>
        )}

        {activeStep === blocks.length && <Information />}

        {activeStep === blocks.length + 1 && (
          <>
            {formType === "school" && <SchoolForm />}
            <div>
              {formType === "university" && <p>questionario UNIVERSIDADE</p>}
            </div>
          </>
        )}

        {activeStep === blocks.length + 2 && (
          <div>
            <p>component - RESULTADO: EXPERT</p>
          </div>
        )}
      </Stepper>
    </QuizContainer>
  );
}
