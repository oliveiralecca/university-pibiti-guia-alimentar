import * as S from "./styles";

interface ButtonProps {
  text:string;
}

export function ButtonDark({ text }: ButtonProps) {
  return <S.Button>{text}</S.Button>;
}
