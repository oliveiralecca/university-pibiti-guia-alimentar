import { ButtonHTMLAttributes } from "react";

import { Dark } from "../styles";

interface ButtonDarkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function ButtonDark({ text, ...rest }: ButtonDarkProps) {
  return <Dark {...rest}>{text}</Dark>;
}
