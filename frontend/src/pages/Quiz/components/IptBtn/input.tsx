import React from "react";
import * as S from "./styles";

interface RadioButtonProps {
  value: string;
  label: string;
  name: string;
  selectedOption: string;
  handleOptionChange: (value: string) => void;
}

export const ButtonQuiz: React.FC<RadioButtonProps> = ({
  value,
  label,
  name,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <S.Label>
      <S.Container checked={selectedOption === value}>

        <S.Input
          type="radio"
          name={name}
          value={value}
          checked={selectedOption === value}
          onChange={() => handleOptionChange(value)}
        />
        <S.Text>
          {label}
        </S.Text>
          
      </S.Container>
    </S.Label>
  );
};


