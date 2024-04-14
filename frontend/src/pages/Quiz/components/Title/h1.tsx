import { H1 } from "./styles";

interface H1Props {
  title: string;
}

export function Title({ title }: H1Props) {
  return <H1>{title}</H1>;
}
