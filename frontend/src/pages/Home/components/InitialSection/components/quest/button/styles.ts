import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BaseButton = styled.button`
  width: 25%;
  cursor: pointer;
  height: 100%;
  padding: 12px 0;
  border: none;
  border-radius: 7px;
  box-shadow: -2px 2px 2px 0.5px ${(props) => props.theme.colors.black[300]}7f;
  transition: all 150ms linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.salmon};
  }

  &:active {
    position: relative;
    top: 0.7px;
    box-shadow: none;
    transform: scale(0.98);
  }
`;

export const BtnQuest = styled(BaseButton)`
  color: ${(props) => props.theme.colors.black.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.paragraph2};
  background-color: ${(props) => props.theme.colors.emphasis.yellow};

  &:active {
    background-color: ${(props) => props.theme.colors.emphasis.orange};
  }
`;
