import { SelectContainer, StyledSelect, Label } from "./styles";

interface SelectProps {
  label: string;
  options: { label: string; value: string }[];
}

export function Select({ label, options }: SelectProps) {
  return (
    <SelectContainer>
      <Label>{label}</Label>
      <StyledSelect>
        {options.map((o) => (
          <option key={o.value} label={o.label} value={o.value} />
        ))}
      </StyledSelect>
    </SelectContainer>
  );
}
