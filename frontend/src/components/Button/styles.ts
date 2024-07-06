import styled from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  min-width: 10rem;
  width: fit-content;
  height: 3rem;
  padding: 15px 30px;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 3px ${(props) => props.theme.colors.black[300]};

  font-size: ${(props) => props.theme.fontSize.paragraph4};
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary["green-blue"]};
    cursor: pointer;
  }
`;

export const Dark = styled(BaseButton)`
  color: ${(props) => props.theme.colors.black.white};
  background-color: ${(props) => props.theme.colors.secondary["dark-blue"]};

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.secondary["dark-blue"]}50;
  }
`;

export const Light = styled(BaseButton)`
  color: ${(props) => props.theme.colors.black[800]};
  background-color: ${(props) => props.theme.colors.secondary["light-blue"]};

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) =>
      props.theme.colors.secondary["light-blue"]}50;
  }
`;

export const Secondary = styled(BaseButton)`
  color: ${(props) => props.theme.colors.black.white};
  background-color: ${(props) => props.theme.colors.emphasis.yellow};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.salmon};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.emphasis.yellow}50;
  }
`;
