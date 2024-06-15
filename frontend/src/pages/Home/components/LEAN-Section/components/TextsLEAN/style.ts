import styled from "styled-components";

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  height: 100%;
  width: 35%;

  @media (max-width: 1000px) {
    height: 100%;
    width: 50%;
  }

  @media (max-width: 600px) {
    height: 90vh;
    width: 80%;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.black.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    width: 100%;
    font-size: 2.5vmax;
    margin-bottom: 5.8vmax;

    @media (max-width: 600px) {
      margin-bottom: 9vmax;
      font-size: 3vmax;
    }
  }

  h1::before {
    content: "L E A N";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    color: ${({ theme }) => theme.colors.secondary.salmon};
    opacity: 0.2;
    width: 100%;
    height: 100%;
    font-size: 9.5vmax;
    transition: all 100ms linear;

    @media (max-width: 600px) {
      width: 110%;
      font-size: 10vmax;
    }
  }

  p {
    text-align: justify;
    color: ${({ theme }) => theme.colors.black[700]};
    margin-bottom: 1vmax;
    font-size: 1.35vmax;
    line-height: 1.55vmax;

    @media (max-width: 600px) {
      margin-bottom: 3vmax;
      font-size: 1.8vmax;
      line-height: normal;
    }

    :last-child {
      margin-bottom: 0;
    }
  }
`;
