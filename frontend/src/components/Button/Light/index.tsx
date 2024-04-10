import { Light } from "../styles";

interface ButtonLightProps {
  text: string;
}

export function ButtonLight({ text }: ButtonLightProps) {
  return <Light>{text}</Light>;
}
