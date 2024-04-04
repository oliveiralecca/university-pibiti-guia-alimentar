import styled from "styled-components";

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  padding: 9px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 3px ${(props) => props.theme.colors.black[300]};
  color: ${(props) => props.theme.colors.black.primary};
  font-size: ${(props) => props.theme.fontSize.paragraph4};
  transition: all 150ms linear;

  background-color: ${(props) => props.theme.colors.secondary["light-blue"]};
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary["green-blue"]};
  }

  &:active {
    position: relative;
    top: 0.7px;
    box-shadow: none;
    transform: scale(0.98);

    background-color: ${(props) => props.theme.colors.secondary["dark-blue"]};
  }
`;
