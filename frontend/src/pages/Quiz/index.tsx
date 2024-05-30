import { Stepper } from "@/components/Stepper";
// import { Question } from "@/components/Question";
import { useStepperContext } from "@/components/Stepper/contexts/StepperContext";

import { QuizContainer } from "./styles";

const blocks = ["10 passos para a alimentação saudável", "B", "C"];

export function Quiz() {
  const { activeStep } = useStepperContext();
  return (
    <QuizContainer>
      {/* <Question affirmative="Você conhece o Guia Alimentar?" /> */}
      <Stepper blocks={blocks}>
        {activeStep === 0 && (
          <div>
            <p>bloco de questoes A</p>
          </div>
        )}
        {activeStep === 1 && (
          <div>
            <p>bloco de questoes B</p>
          </div>
        )}
        {activeStep === 2 && (
          <div>
            <p>bloco de questoes C</p>
          </div>
        )}
        {activeStep === blocks.length && (
          <div>
            <p>
              Agora precisamos te conhecer, siga para responder algumas
              perguntas de caracterização.
            </p>
          </div>
        )}
        {activeStep === blocks.length + 1 && (
          <div>
            <p>questionario de caracterizacao</p>
          </div>
        )}
        {activeStep === blocks.length + 2 && (
          <div>
            <p>RESULTADO: EXPERT</p>
          </div>
        )}
      </Stepper>
    </QuizContainer>
  );
}
