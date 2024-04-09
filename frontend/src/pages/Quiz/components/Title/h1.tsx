import { H1 } from "./styles"

interface h1Props {
    title: string;
}

export function Title({title}:h1Props) {
  return <H1>{title}</H1>;
}
