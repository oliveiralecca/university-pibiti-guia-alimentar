import * as S from "./styles";

type ButtonProps = {
  children: React.ReactNode;
};

export function ButtonLight({ children }: ButtonProps) {
  return <S.Button>{children}</S.Button>;
}
