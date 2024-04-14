import { useState } from "react";

import { Affirmative } from "../Affirmative";
import { Option } from "../Option";
import { QuestionContainer } from "./styles";

interface QuestionProps {
  affirmative: string;
}

export function Question({ affirmative }: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
  };

  return (
    <QuestionContainer>
      <Affirmative title={affirmative} />
      <Option
        value="opt1"
        label="Concordo Totalmente"
        name="QuizOptions"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <Option
        value="opt2"
        label="Concordo Parcialmente"
        name="QuizOptions"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <Option
        value="opt3"
        label="Indiferente"
        name="QuizOptions"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <Option
        value="opt4"
        label="Discordo Parcialmente"
        name="QuizOptions"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <Option
        value="opt5"
        label="Discordo Totalmente"
        name="QuizOptions"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
    </QuestionContainer>
  );
}
