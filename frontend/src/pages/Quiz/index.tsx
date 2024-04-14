import { QuestionsSection } from "./components/Questions";
import { QuizContainer } from "./styles";

export function Quiz() {
  return (
    <QuizContainer>
      <QuestionsSection affirmative="Você conhece o Guia Alimentar?" />
    </QuizContainer>
  );
}
