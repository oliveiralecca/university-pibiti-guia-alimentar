import { ButtonHTMLAttributes } from "react";

import { Light } from "../styles";

interface ButtonLightProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function ButtonLight({ text, ...rest }: ButtonLightProps) {
  return <Light {...rest}>{text}</Light>;
}
