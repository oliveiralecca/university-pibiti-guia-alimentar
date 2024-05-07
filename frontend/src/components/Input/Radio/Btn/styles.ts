import styled from "styled-components";

export const Container = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 6px;
  border-radius: 10px;

  #Ipt {
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.5px solid
      ${({ checked, theme }) =>
        checked
          ? theme.colors.secondary["dark-blue"]
          : theme.colors.black[300]}cf;
    position: relative;
    transition: all 150ms linear;
  }

  #Ipt::before {
    content: "";
    cursor: pointer;
    position: absolute;
    max-width: 14px;
    max-height: 14px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ checked, theme }) =>
      checked ? theme.colors.primary.turquoise : theme.colors.black[300]}cf;
    opacity: ${({ checked }) => (checked ? 1 : 0.8)};
  }
`;

export const Text = styled.p`
  cursor: pointer;
  margin-left: 5px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black[800]};
`;
