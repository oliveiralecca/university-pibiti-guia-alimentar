import { HTMLAttributes, useState } from "react";

import {
  SelectContainer,
  StyledSelect,
  Label,
  OptionsContainer,
  Option,
} from "./styles";

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  options: { label: string; value: string }[];
  selectedOption: string;
  onSelectChange: (option: string) => void;
}

export function Select({
  label,
  options,
  selectedOption,
  onSelectChange,
  ...rest
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: string) => {
    onSelectChange(value);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <Label>{label}</Label>
      <StyledSelect
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        {...rest}
      >
        {options.find((o) => o.value === selectedOption)?.label}
      </StyledSelect>
      {isOpen && (
        <OptionsContainer>
          {options.map((o) => (
            <Option key={o.value} onClick={() => handleOptionClick(o.value)}>
              {o.label}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
}
