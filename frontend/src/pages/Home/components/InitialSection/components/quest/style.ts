import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2.25vw;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black[800]};

  @media (max-width: 600px) {
    font-size: 3.5vw;
  }
`;

export const Span = styled.span`
  margin-top: 1.5vw;
  font-size: 3.23vw;
  color: ${({ theme }) => theme.colors.emphasis["alert-red"]};

  span {
    color: black;
  }

  @media (max-width: 600px) {
    font-size: 5vw;
    margin-top: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 5.3vw auto;
`;
