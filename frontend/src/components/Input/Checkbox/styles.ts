import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const OptionsContainer = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "row"};
  gap: 20px;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledCheckbox = styled.input`
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid
    ${({ checked, theme }) =>
      checked ? theme.colors.secondary.pink : theme.colors.black[300]}cf;
  position: relative;
  transition: all 150ms linear;

  &::before {
    content: "";
    cursor: pointer;
    position: absolute;
    max-width: 14px;
    max-height: 14px;
    width: 100%;
    height: 100%;
    background-color: ${({ checked, theme }) =>
      checked ? theme.colors.primary.turquoise : "transparent"};
    opacity: ${({ checked }) => (checked ? 1 : 0.8)};
  }
`;

export const Text = styled.label<{ checked: boolean }>`
  cursor: pointer;
  color: ${({ theme, checked }) =>
    checked ? theme.colors.secondary.pink : "unset"};
`;
