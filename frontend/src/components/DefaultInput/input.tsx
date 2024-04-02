import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type InputProps = {
} & InputHTMLAttributes<HTMLInputElement>


export const Input = ({ name = '', type = 'text', ...rest}: InputProps) => {
  return ( 
    <>
        <S.Container>
            <S.Input type={type} name={name} {...rest} />
        </S.Container>
    </>
  );
}
