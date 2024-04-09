import styled from "styled-components";

export const Container = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  
  background-color: ${({ checked, theme }) => (checked ? theme.colors.emphasis["success-green"] : theme.colors.secondary["light-blue"])};
  width: 520px;
  height: 60px;

  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid gray;
  box-shadow: 1px 2px 4px 0px ${({theme}) => theme.colors.black[400]};

  transform: ${({ checked }) => (checked ? "scale(0.999)" : "scale(1)")};;
  transition: all 150ms linear;

  &:hover {
    background-color: ${({ checked, theme }) => (checked ? "" : theme.colors.secondary["green-blue"])}; 
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Text = styled.p`
  padding: 8px;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.black[800]};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  font-size: ${({theme}) => theme.fontSize.paragraph3} ;
`;

export const Label = styled.label`
 
`;