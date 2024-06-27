import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const BaseButton = styled.button`
  width: 24vw;
  cursor: pointer;
  height: 100%;
  padding: 1vw 0;
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

  @media (max-width: 600px) {
    padding: 1vw 0;
    width: 35vw;
    border-radius: 5px;
  }
`;

export const BtnQuest = styled(BaseButton)`
  font-size: 1.3vw;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.black.white};
  background-color: ${(props) => props.theme.colors.emphasis.yellow};

  &:active {
    background-color: ${(props) => props.theme.colors.emphasis.orange};
  }

  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;
