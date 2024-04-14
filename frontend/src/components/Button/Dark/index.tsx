import { Dark } from "../styles";

interface ButtonDarkProps {
  text: string;
}

export function ButtonDark({ text }: ButtonDarkProps) {
  return <Dark>{text}</Dark>;
}
