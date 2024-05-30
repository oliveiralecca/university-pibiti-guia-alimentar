import styled from "styled-components";

export const Label = styled.label`
  margin-bottom: 3px;
`;

export const StyledSelect = styled.select`
  max-width: 99%;
  height: 54%;
  padding: 6px;
  color: ${({ theme }) => theme.colors.black[600]}ef;
  border-radius: 9.6px;
  box-shadow: 0px 1px 4px 0px ${({ theme }) => theme.colors.black[300]};
  border: 2px solid ${(props) => props.theme.colors.black[300]}6a;
`;

export const Container = styled.div`
  display: flex;
  padding: 6px;
  flex-direction: column;
  max-width: 405px;
  max-height: 100px;
  width: 100%;
  height: 100px;
`;
