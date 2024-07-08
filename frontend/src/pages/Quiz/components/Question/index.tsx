import { useState } from "react";

import { Option } from "./components/Option";
import { QuestionContainer, OptionsContainer, Affirmative } from "./styles";

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
      <Affirmative>{affirmative}</Affirmative>
      <OptionsContainer>
        <Option
          value="concordo" // TODO: setar a depender da questão 0 ou 1; ou mapear isso num objeto de gabarito -> Q1 - concordo (1) - discordo (0) - não sei (0)
          label="Concordo"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <Option
          value="discordo"
          label="Discordo"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <Option
          value="naoSei"
          label="Não sei"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
      </OptionsContainer>
    </QuestionContainer>
  );
}
