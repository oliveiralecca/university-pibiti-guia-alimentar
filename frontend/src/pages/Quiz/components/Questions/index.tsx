import React, { useState } from "react";
import { ButtonQuiz } from "../IptBtn/input";
import { QuestionsContainer } from './styles';
import { Title } from "../Title/h1";

export const QuestionsSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
  };

  return (
    <QuestionsContainer>
      <Title title="Você conhece o Guia Alimentar?" />
      <ButtonQuiz
        value="opt1"
        label="Concordo Totalmente"
        name="QuizOptions"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <ButtonQuiz
        value="opt2"
        label="Concordo Parcialmente"
        name="QuizOptions"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <ButtonQuiz
        value="opt3"
        label="Indiferente"
        name="QuizOptions"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <ButtonQuiz
        value="opt4"
        label="Discordo Parcialmente"
        name="QuizOptions"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <ButtonQuiz
        value="opt5"
        label="Discordo Totalmente"
        name="QuizOptions"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
    </QuestionsContainer>
  );
};

