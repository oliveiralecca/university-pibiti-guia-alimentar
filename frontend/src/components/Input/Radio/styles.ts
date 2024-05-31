import styled from "styled-components";

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StyledRadio = styled.input`
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

  &::before {
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

export const Text = styled.label`
  cursor: pointer;
`;
