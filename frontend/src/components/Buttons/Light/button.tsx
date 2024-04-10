import * as S from "./styles";

interface ButtonProps {
  text:string;
}

export function ButtonLight({ text }: ButtonProps) {
  return <S.Button>{text}</S.Button>;
}
