import * as S from "./styles";

interface ButtonQuizProps {
  value: string;
  label: string;
  name: string;
  selectedOption: string;
  handleOptionChange: (value: string) => void;
}

export function ButtonQuiz({
  value,
  label,
  name,
  selectedOption,
  handleOptionChange,
}: ButtonQuizProps) {
  return (
    <label>
      <S.Container checked={selectedOption === value}>
        <S.Input
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
