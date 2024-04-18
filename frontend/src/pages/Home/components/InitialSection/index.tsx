import { useState } from "react";

import { BtnContainer } from "@/components/Input/Radio";
import { BtnRadio } from "@/components/Input/Radio/Btn";
import { Select } from "@/components/Input/Select";
import { Option } from "@/components/Input/Select/Option";

import { InitialSectionContainer } from "./styles";

export function InitialSection() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
  };

  return (
    <InitialSectionContainer>
      <Select name="Guia Alimentar">
        <Option label="Selecione" />
        <Option label="Teste" value={1} />
      </Select>

      <BtnContainer title="Guia Alimentar">
        <BtnRadio
          value="1"
          label="Concordo"
          name="BtnOptions"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <BtnRadio
          value="opt2"
          label="Discordo"
          name="QuizOptions"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
      </BtnContainer>
    </InitialSectionContainer>
  );
}
