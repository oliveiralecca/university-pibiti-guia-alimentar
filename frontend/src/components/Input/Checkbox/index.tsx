import { InputHTMLAttributes } from "react";

import {
  CheckboxContainer,
  StyledCheckbox,
  Label,
  Text,
  OptionsContainer,
  OptionContainer,
} from "./styles";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  direction?: string;
  label: string;
  options: { label: string; value: string }[];
  selectedOptions: string[];
  onCheckboxChange: (options: string[]) => void;
}

export function Checkbox({
  direction,
  label,
  options,
  selectedOptions,
  onCheckboxChange,
  ...rest
}: CheckboxProps) {
  const handleOptionChange = (optionValue: string) => {
    const newSelectedOptions = selectedOptions.includes(optionValue)
      ? selectedOptions.filter((option) => option !== optionValue)
      : [...selectedOptions, optionValue];
    onCheckboxChange(newSelectedOptions);
  };

  return (
    <CheckboxContainer>
      <Label>{label}</Label>
      <OptionsContainer direction={direction}>
        {options.map((o) => (
          <OptionContainer key={o.label}>
            <StyledCheckbox
              type="checkbox"
              id={o.value}
              checked={selectedOptions.includes(o.value)}
              onChange={() => handleOptionChange(o.value)}
              {...rest}
            />
            <Text htmlFor={o.value} checked={selectedOptions.includes(o.value)}>
              {o.label}
            </Text>
          </OptionContainer>
        ))}
      </OptionsContainer>
    </CheckboxContainer>
  );
}
