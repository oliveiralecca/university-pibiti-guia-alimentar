import { useState } from "react";

import {
  RadioButtonContainer,
  StyledRadio,
  Label,
  Text,
  OptionsContainer,
  OptionContainer,
} from "./styles";

interface RadioButtonProps {
  label: string;
  options: { label: string; value: string }[];
}

export function RadioButton({ label, options }: RadioButtonProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
  };

  return (
    <RadioButtonContainer>
      <Label>{label}</Label>
      <OptionsContainer>
        {options.map((o) => (
          <OptionContainer key={o.label}>
            <StyledRadio
              type="radio"
              id={o.value}
              checked={selectedOption === o.value}
              onChange={() => handleOptionChange(o.value)}
            />
            <Text htmlFor={o.value}>{o.label}</Text>
          </OptionContainer>
        ))}
      </OptionsContainer>
    </RadioButtonContainer>
  );
}
