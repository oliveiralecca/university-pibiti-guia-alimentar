import { InputHTMLAttributes } from "react";

import { StyledInput } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return <StyledInput {...props} />;
}
