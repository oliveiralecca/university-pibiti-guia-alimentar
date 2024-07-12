import styled from "styled-components";

export const Container = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;

  background-color: ${({ checked, theme }) =>
    checked
      ? theme.colors.secondary.pink
      : theme.colors.secondary["light-blue"]};

  width: 520px;
  height: 60px;
  padding: 18px;

  border-radius: 10px;
  box-shadow: 1px 2px 4px 0px ${({ theme }) => theme.colors.black[300]};

  transform: ${({ checked }) => (checked ? "scale(0.999)" : "scale(1)")};
  transition: all 150ms linear;

  p {
    color: ${({ theme, checked }) =>
      checked ? theme.colors.neutral.white : "unset"};
  }

  &:hover {
    background-color: ${({ checked, theme }) =>
      checked ? "" : theme.colors.secondary["green-blue"]};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    height: 50px;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black[800]};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.paragraph3};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize.paragraph5};
  }
`;
