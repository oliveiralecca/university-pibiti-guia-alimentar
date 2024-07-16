import { Stepper } from "@/components/Stepper";
import { useStepperContext } from "@/components/Stepper/contexts/StepperContext";
import { useQuizContext } from "@/contexts/QuizContext";

import { BlockContainer } from "./components/BlockContainer";
import { Information } from "./components/Information";
import { Question } from "./components/Question";
import { SchoolForm } from "./components/SchoolForm";
import { UniversityForm } from "./components/UniversityForm";
import { QuizContainer } from "./styles";
// import { Result } from "../Result";

const blocks = ["Bloco 1", "Bloco 2", "Bloco 3", "Bloco 4"];

export function Quiz() {
  const { activeStep } = useStepperContext();
  const { formType } = useQuizContext();

  return (
    <QuizContainer>
      <Stepper blocks={blocks}>
        {activeStep === 0 && (
          <BlockContainer>
            <Question
              questionNumber={1}
              affirmative="1 - A alimentação é mais que a ingestão de alimentos."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={2}
              affirmative="2 - Para ter uma alimentação saudável, é necessário ter organização do tempo."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={3}
              affirmative="3 - Uma alimentação adequada e saudável não depende de um sistema alimentar social e ambientalmente sustentável."
              correctAnswer="discordo"
            />
            <Question
              questionNumber={4}
              affirmative="4 - Guias alimentares servem para ampliar a autonomia da população na escolha de uma alimentação saudável e adequada."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={5}
              affirmative="5 - Comer alimentos in natura ou minimamente processados (como grãos, raízes, tubérculos, farinhas, legumes, verduras, frutas, castanhas), não tem relação com uma alimentação saudável, balanceada e com um sistema alimentar social e ambientalmente sustentável."
              correctAnswer="discordo"
            />
            <Question
              questionNumber={6}
              affirmative="6 - Consumir óleos, gorduras, sal e açúcar em pequenas quantidades é adequado."
              correctAnswer="concordo"
            />
          </BlockContainer>
        )}

        {activeStep === 1 && (
          <BlockContainer>
            <Question
              questionNumber={7}
              affirmative="7 - Em sua opinião, o consumo de alimentos processados, como pães, raízes e cereais, pode ser feito sem prejuízo para a saúde."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={8}
              affirmative="8 - A alimentação saudável consiste em escolher consumir menos ultraprocessados e mais alimentos in natura e minimamente processados."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={9}
              affirmative="9 - O consumo de alimentos in natura não tem relação a agricultura familiar."
              correctAnswer="discordo"
            />
            <Question
              questionNumber={10}
              affirmative="10 - Para você, fazer compras em feiras livres ou em locais, que oferecem variedade de alimentos in natura, ajuda a ter uma alimentação saudável."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={11}
              affirmative="11 - Cozinhar em um ambiente limpo e organizado torna esse momento mais prazeroso e diminui o tempo de preparação das refeições."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={12}
              affirmative='12 - Fazer refeições sempre em horários semelhantes ajuda a evitar o ato de "beliscar" nos intervalos das refeições.'
              correctAnswer="concordo"
            />
          </BlockContainer>
        )}

        {activeStep === 2 && (
          <BlockContainer>
            <Question
              questionNumber={13}
              affirmative="13 - Comer em ambientes apropriados (locais limpos, confortáveis e tranquilos) influencia na quantidade de alimentos consumida."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={14}
              affirmative="14 - Preparar e fazer as refeições em companhia (com familiares, amigos, colegas de trabalho ou de escola) ajuda no convívio e evita que se coma rapidamente."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={15}
              affirmative="15 - Comer com atenção, sem se envolver em outras atividades (como celular, computador, televisão), é uma boa maneira de controlar, naturalmente, a quantidade e o que se come."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={16}
              affirmative="16 - Ser crítico(a) com propagandas de alimentos em televisão, redes sociais, ofertas de brindes, descontos e promoções, é importante para a escolha dos alimentos."
              correctAnswer="discordo"
            />
            <Question
              questionNumber={17}
              affirmative="17 - Compartilhar habilidades culinárias entre as gerações favorece o consumo de alimentos ultraprocessados."
              correctAnswer="discordo"
            />
            <Question
              questionNumber={18}
              affirmative="18 - Não organizar o tempo para preparar refeições colabora com a compra de alimentos processados, devido à praticidade para o consumo."
              correctAnswer="concordo"
            />
          </BlockContainer>
        )}

        {activeStep === 3 && (
          <BlockContainer>
            <Question
              questionNumber={19}
              affirmative="19 - O aumento da obesidade nos últimos anos tem relação com o aumento no consumo de alimentos ultraprocessados."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={20}
              affirmative="20 - O consumo de alimentos ultraprocessados (salgadinhos de pacote, refrigerantes, sorvetes, sucos de caixinha e biscoitos recheados) não precisa ser evitado já que não afeta a saúde."
              correctAnswer="discordo"
            />
            <Question
              questionNumber={21}
              affirmative="21 - Consumir alimentos de todos os grupos alimentares, tais como verduras, legumes, frutas, raízes, cereais, carnes e outros, promove uma alimentação saudável."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={22}
              affirmative="22 - Os rótulos nutricionais nas embalagens dos alimentos servem como suporte para ajudar em escolhas mais saudáveis."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={23}
              affirmative="23 - As embalagens atrativas e a formulação dos alimentos ultraprocessados, com sabores fortes e marcantes, estimulam o consumo em excesso desses produtos."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={24}
              affirmative="24 - Alimentação saudável não precisa de planejamento na compra dos alimentos, organização da despensa doméstica e definição de cardápio."
              correctAnswer="discordo"
            />
          </BlockContainer>
        )}

        {activeStep === blocks.length && <Information />}

        {activeStep === blocks.length + 1 && (
          <>
            {formType === "school" && <SchoolForm />}
            {formType === "university" && <UniversityForm />}
          </>
        )}
      </Stepper>
    </QuizContainer>
  );
}
