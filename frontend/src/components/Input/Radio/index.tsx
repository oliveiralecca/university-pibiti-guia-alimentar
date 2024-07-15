import { InputHTMLAttributes, useState } from "react";

import {
  RadioButtonContainer,
  StyledRadio,
  Label,
  Text,
  OptionsContainer,
  OptionContainer,
} from "./styles";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  direction?: string;
  label: string;
  options: { label: string; value: string }[];
  onButtonChange: (option: string) => void;
}

export function RadioButton({
  direction,
  label,
  options,
  onButtonChange,
  ...rest
}: RadioButtonProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
    onButtonChange(optionValue);
  };

  return (
    <RadioButtonContainer>
      <Label>{label}</Label>
      <OptionsContainer direction={direction}>
        {options.map((o) => (
          <OptionContainer key={o.label}>
            <StyledRadio
              type="radio"
              id={o.value}
              checked={selectedOption === o.value}
              onChange={() => handleOptionChange(o.value)}
              {...rest}
            />
            <Text htmlFor={o.value} checked={selectedOption === o.value}>
              {o.label}
            </Text>
          </OptionContainer>
        ))}
      </OptionsContainer>
    </RadioButtonContainer>
  );
}
