import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.colors.black.white};
  padding: 9.6px 16px;
  border: 2px solid ${(props) => props.theme.colors.black[300]}6a;
  border-radius: 9.6px;
  width: 560px;
  height: 48px;

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
