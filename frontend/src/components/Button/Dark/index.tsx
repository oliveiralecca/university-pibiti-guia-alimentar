import { ButtonHTMLAttributes, ReactNode } from "react";

import { Dark } from "../styles";

interface ButtonDarkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ButtonDark({ children, ...rest }: ButtonDarkProps) {
  return <Dark {...rest}>{children}</Dark>;
}
