import * as S from "./styles";

type ButtonProps = {
  children: React.ReactNode;
};

export function ButtonDark({ children }: ButtonProps) {
  return <S.Button>{children}</S.Button>;
}
