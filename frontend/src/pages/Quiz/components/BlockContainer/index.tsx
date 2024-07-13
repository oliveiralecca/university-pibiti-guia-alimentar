import { ReactNode } from "react";

import { Container } from "./styles";

export function BlockContainer({
  children,
  gap = 80,
}: {
  children: ReactNode;
  gap?: number;
}) {
  return <Container gap={gap}>{children}</Container>;
}
