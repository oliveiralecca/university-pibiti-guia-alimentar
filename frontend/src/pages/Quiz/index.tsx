import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Stepper } from "@/components/Stepper";
import { useStepperContext } from "@/components/Stepper/contexts/StepperContext";
import { useQuizContext } from "@/contexts/QuizContext";
import { scrollToTop } from "@/utils";

import { BlockContainer } from "./components/BlockContainer";
import { Information } from "./components/Information";
import { Question } from "./components/Question";
import { SchoolForm } from "./components/SchoolForm";
import { UniversityForm } from "./components/UniversityForm";
import { QuizContainer } from "./styles";

const blocks = ["Bloco 1", "Bloco 2", "Bloco 3", "Bloco 4"];

export function Quiz() {
  const { activeStep } = useStepperContext();
  const { formType } = useQuizContext();

  useEffect(() => {
    scrollToTop();
  }, [activeStep]);

  return (
    <QuizContainer>
      <ToastContainer newestOnTop />
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
              affirmative="2 - Para ter uma alimentação saudável é necessário ter organização do tempo."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={3}
              affirmative="3 - Uma alimentação adequada não depende de um sistema alimentar sustentável."
              correctAnswer="discordo"
            />
            <Question
              questionNumber={4}
              affirmative="4 - Guias alimentares servem para ampliar a autonomia da população na escolha de uma alimentação saudável e adequada."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={5}
              affirmative={
                <span>
                  5 - Comer mais alimentos <i>in natura</i> ou minimamente
                  processados (como grãos, raízes, tubérculos, farinhas,
                  legumes, verduras, frutas, castanhas), não tem relação com uma
                  alimentação saudável e balanceada.
                </span>
              }
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
              affirmative="7 - O consumo de alimentos processados (pães e cereais, por exemplo) não prejudica a saúde."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={8}
              affirmative={
                <span>
                  8 - Alimentação saudável é comer menos ultraprocessados e mais
                  alimentos <i>in natura</i>.
                </span>
              }
              correctAnswer="concordo"
            />
            <Question
              questionNumber={9}
              affirmative={
                <span>
                  9 - Comer alimentos <i>in natura</i> não tem relação com a
                  agricultura familiar.
                </span>
              }
              correctAnswer="discordo"
            />
            <Question
              questionNumber={10}
              affirmative="10 - Fazer compras em feiras ajuda a ter uma alimentação saudável."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={11}
              affirmative="11 - Cozinhar em ambiente limpo e organizado é prazeroso e diminui o tempo de preparação das refeições."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={12}
              affirmative='12 - Fazer refeições nos mesmos horários ajuda a evitar o ato de "beliscar".'
              correctAnswer="concordo"
            />
          </BlockContainer>
        )}

        {activeStep === 2 && (
          <BlockContainer>
            <Question
              questionNumber={13}
              affirmative="13 - Os ambientes podem influenciar a quantidade de alimentos que comemos."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={14}
              affirmative="14 - Preparar e realizar as refeições com companhia (familiares, amigos, colegas de trabalho ou de escola) evita comer rapidamente."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={15}
              affirmative="15 - Comer com atenção, sem celular, computador e televisão, ajuda a controlar a quantidade de comida."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={16}
              affirmative="16 - Devemos ser crítico(a)s com propagandas de alimentos na televisão e nas redes sociais, e com as ofertas, brindes, descontos e promoções para escolher os alimentos."
              correctAnswer="discordo"
            />
            <Question
              questionNumber={17}
              affirmative="17 - Compartilhar habilidades culinárias entre as gerações favorece o consumo de alimentos ultraprocessados."
              correctAnswer="discordo"
            />
            <Question
              questionNumber={18}
              affirmative="18 - Não organizar o tempo para preparar refeições colabora com a compra de alimentos processados e ultraprocessados, porque são mais práticos."
              correctAnswer="concordo"
            />
          </BlockContainer>
        )}

        {activeStep === 3 && (
          <BlockContainer>
            <Question
              questionNumber={19}
              affirmative="19 - O aumento da obesidade nos últimos anos tem relação com o aumento no consumo de alimentos ultraprocessados (biscoitos recheados, refrigerantes, sorvetes, salgadinhos de pacote e sucos de caixinha)."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={20}
              affirmative="20 - O consumo de alimentos ultraprocessados (salgadinhos de pacote, refrigerantes, sorvetes, sucos de caixinha e biscoitos recheados) não precisa ser evitado, já que não afeta a saúde."
              correctAnswer="discordo"
            />
            <Question
              questionNumber={21}
              affirmative="21 - Consumir alimentos de todos os grupos alimentares (verduras, legumes, frutas, raízes, grãos, cereais, carnes, leite e derivados) promove uma alimentação saudável."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={22}
              affirmative="22 - As informações sobre os alimentos nas embalagens servem para ajudar em escolhas mais saudáveis."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={23}
              affirmative="23 - As embalagens atrativas e os sabores fortes dos alimentos ultraprocessados estimulam o alto consumo desses produtos."
              correctAnswer="concordo"
            />
            <Question
              questionNumber={24}
              affirmative="24 - Alimentação saudável não precisa de planejamento na compra e organização dos alimentos, e na definição de cardápio."
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
