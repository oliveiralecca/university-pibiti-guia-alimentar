import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.colors.black.white};
  color: ${(props) => props.theme.colors.secondary.pink};
  padding: 9.6px 16px;
  border: 2px solid ${(props) => props.theme.colors.black[300]}6a;
  border-radius: 9.6px;
  width: 100%;
  height: 48px;

  transition: all 180ms linear;
  &:focus-within {
    border-color: ${(props) => props.theme.colors.secondary.pink};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.black[400]}4f;
    font-size: ${(props) => props.theme.fontSize.paragraph4};
  }
`;
