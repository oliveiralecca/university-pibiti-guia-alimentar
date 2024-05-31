import { useState } from "react";

import { BtnContainer } from "@/components/Input/Radio";
import { BtnRadio } from "@/components/Input/Radio/Btn";
import { Select } from "@/components/Select";

import { InitialSectionContainer } from "./styles";

export function InitialSection() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
  };

  return (
    <InitialSectionContainer id="inicio">
      <Select
        label="Guia Alimentar"
        options={[
          { label: "male", value: "male" },
          { label: "female", value: "female" },
        ]}
      />

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
