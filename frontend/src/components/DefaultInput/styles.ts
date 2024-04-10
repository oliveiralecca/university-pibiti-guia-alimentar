import styled from "styled-components";

export const Ipt = styled.input`
  background-color: ${(props) => props.theme.colors.black.white};
  padding: 0.6rem 1rem;
  border: 2px solid ${(props) => props.theme.colors.black[300]}6a;
  border-radius: 0.6rem;
  width: 25rem;
  height: 3rem;

  transition: all 180ms linear;
  &:focus-within {
    outline: 0.5px solid ${(props) => props.theme.colors.emphasis.orange}66;
    border-color: ${(props) => props.theme.colors.emphasis.orange}77;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.black[400]}4f;
    font-size: ${(props) => props.theme.fontSize.paragraph4};
  }
`;
