import { ReactNode } from "react";

import { MContainer, Container, Label } from "./styles";

interface ButtonRadioProps {
  title: string;
  children: ReactNode;
}

export function BtnContainer({ title, children }: ButtonRadioProps) {
  return (
    <MContainer>
      <Label>{title}</Label>
      <Container>{children}</Container>
    </MContainer>
  );
}
