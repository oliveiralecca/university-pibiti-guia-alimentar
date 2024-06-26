import styled from "styled-components";

export const Title = styled.h1`
  line-height: 45px;
  color: ${({ theme }) => theme.colors.black[800]};
  font-size: ${({ theme }) => theme.fontSize.heading3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  span {
    line-height: 55px;
    font-size: ${({ theme }) => theme.fontSize.heading1};
    color: ${({ theme }) => theme.colors.emphasis["alert-red"]};
  }
`;

export const Container = styled.div`
  margin: 58px auto;
  width: 82.8%;
`;
