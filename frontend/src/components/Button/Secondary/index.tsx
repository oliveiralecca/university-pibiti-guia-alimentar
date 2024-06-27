import { ButtonHTMLAttributes, ReactNode } from "react";

import { Secondary } from "../styles";

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ButtonSecondary({ children, ...rest }: ButtonSecondaryProps) {
  return <Secondary {...rest}>{children}</Secondary>;
}
