import { InputHTMLAttributes } from "react";

import { Ipt } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return <Ipt {...props} />;
}
