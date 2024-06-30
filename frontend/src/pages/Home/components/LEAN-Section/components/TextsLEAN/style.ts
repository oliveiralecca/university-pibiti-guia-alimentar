import styled from "styled-components";

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33vw;
  margin-left: 20vw;
  margin-right: 14.5vw;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    width: 38vw;
    margin-bottom: 8.6vw;
    font-size: 2.7vw;
    letter-spacing: 0.01px;
    color: ${({ theme }) => theme.colors.black.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  h1::before {
    content: "L E A N";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    font-size: 10.2vw;
    transition: all 100ms linear;
    color: ${({ theme }) => theme.colors.secondary.pink}2a;
  }

  p {
    text-align: justify;
    margin-bottom: 1.5vw;
    font-size: 1.51vw;
    line-height: 1.5vw;
    color: ${({ theme }) => theme.colors.black[800]};
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    margin: auto;
    width: 59.4vw;

    h1 {
      width: 68.4vw;
      font-size: 4.86vw;
    }

    h1::before {
      font-size: 18.36vw;
    }

    p {
      margin-bottom: 2.7vw;
      font-size: 2.718vw;
      line-height: 2.7vw;
    }
  }
`;

export const ImgContainer = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 4vw;
    width: 100%;

    img {
      width: 13vw;
    }
  }
`;
