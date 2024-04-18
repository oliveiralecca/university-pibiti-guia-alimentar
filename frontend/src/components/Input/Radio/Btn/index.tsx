import * as S from "./styles";

interface ButtonRadioProps {
  value: string;
  label: string;
  name: string;
  selectedOption: string;
  handleOptionChange: (value: string) => void;
}

export function BtnRadio({
  value,
  label,
  name,
  selectedOption,
  handleOptionChange,
}: ButtonRadioProps) {
  return (
    <label>
      <S.Container checked={selectedOption === value}>
        <input
          id="Ipt"
          type="radio"
          name={name}
          value={value}
          checked={selectedOption === value}
          onChange={() => handleOptionChange(value)}
        />
        <S.Text>{label}</S.Text>
      </S.Container>
    </label>
  );
}
