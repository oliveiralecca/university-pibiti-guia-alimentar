import { ReactNode } from "react";

import { Container, StyledSelect, Label } from "./styles";

interface SelectProps {
  name: string;
  children: ReactNode;
}

export function Select({ name, children }: SelectProps) {
  return (
    <Container>
      <Label>{name}</Label>
      <StyledSelect>{children}</StyledSelect>
    </Container>
  );
}
