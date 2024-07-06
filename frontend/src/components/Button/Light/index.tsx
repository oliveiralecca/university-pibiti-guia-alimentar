import { ButtonHTMLAttributes, ReactNode } from "react";

import { Light } from "../styles";

interface ButtonLightProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ButtonLight({ children, ...rest }: ButtonLightProps) {
  return <Light {...rest}>{children}</Light>;
}
