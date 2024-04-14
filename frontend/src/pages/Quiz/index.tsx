import { Question } from "./components/Question";
import { QuizContainer } from "./styles";

export function Quiz() {
  return (
    <QuizContainer>
      <Question affirmative="Você conhece o Guia Alimentar?" />
    </QuizContainer>
  );
}
