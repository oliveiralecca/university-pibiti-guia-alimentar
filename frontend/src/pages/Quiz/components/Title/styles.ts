import styled from "styled-components";

export const H1 = styled.h1`
  display: inline;
  margin-top: 25px;
  width: 520px;
  height: 55px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.heading2};
  color: ${({ theme }) => theme.colors.emphasis["success-green"]};
`;
