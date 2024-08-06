import { ReactNode } from "react";

import { useQuizContext, Quiz } from "@/contexts/QuizContext";

import { Option } from "./components/Option";
import { QuestionContainer, OptionsContainer, Affirmative } from "./styles";

interface QuestionProps {
  affirmative: ReactNode;
  correctAnswer: "concordo" | "discordo";
  questionNumber: number;
}

export function Question({
  affirmative,
  correctAnswer,
  questionNumber,
}: QuestionProps) {
  const { setQuizAnswers, quizAnswers } = useQuizContext();

  const handleOptionChange = (optionValue: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setQuizAnswers((previous: any) => {
      if (optionValue === "não sei") {
        return {
          ...previous,
          [`question${questionNumber}`]: optionValue,
        };
      }

      return {
        ...previous,
        [`question${questionNumber}`]: Number(optionValue),
      };
    });
  };

  return (
    <QuestionContainer>
      <Affirmative>{affirmative}</Affirmative>
      <OptionsContainer>
        <Option
          value={correctAnswer === "concordo" ? "1" : "0"}
          label="Concordo"
          selectedOption={String(
            quizAnswers?.[`question${questionNumber}` as keyof Quiz],
          )}
          handleOptionChange={handleOptionChange}
        />
        <Option
          value={correctAnswer === "discordo" ? "1" : "0"}
          label="Discordo"
          selectedOption={String(
            quizAnswers?.[`question${questionNumber}` as keyof Quiz],
          )}
          handleOptionChange={handleOptionChange}
        />
        <Option
          value="não sei"
          label="Não sei"
          selectedOption={String(
            quizAnswers?.[`question${questionNumber}` as keyof Quiz],
          )}
          handleOptionChange={handleOptionChange}
        />
      </OptionsContainer>
    </QuestionContainer>
  );
}
