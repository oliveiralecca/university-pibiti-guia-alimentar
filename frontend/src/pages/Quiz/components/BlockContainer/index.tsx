import { ReactNode } from "react";

import { Container } from "./styles";

export function BlockContainer({
  children,
  gap = 80,
  mobileGap = 20,
}: {
  children: ReactNode;
  gap?: number;
  mobileGap?: number;
}) {
  return (
    <Container $gap={gap} $mobileGap={mobileGap}>
      {children}
    </Container>
  );
}
