import { Container, Input, Text } from "./styles";

interface OptionProps {
  value: string;
  label: string;
  selectedOption: string;
  handleOptionChange: (value: string) => void;
}

export function Option({
  value,
  label,
  selectedOption,
  handleOptionChange,
}: OptionProps) {
  return (
    <Container checked={selectedOption === value}>
      <Input
        type="radio"
        value={value}
        checked={selectedOption === value}
        onChange={() => handleOptionChange(value)}
      />
      <Text>{label}</Text>
    </Container>
  );
}
