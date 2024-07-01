import styled from "styled-components";

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 73vw;
  
  @media (min-width: 700px) and (max-width: 1100px) and (min-height: 950px) {
    width: 72vw;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin-bottom: 4.1vw;
  font-size: 2.8vw;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black.primary};

  span {
    margin-left: 1.3vw;
    font-size: 4vw;
    color: ${({ theme }) => theme.colors.secondary["green-blue"]};
  }

  @media (max-width: 600px) {
    margin-bottom: 4vw;
    font-size: 4.2vw;

    span {
      margin-left: 1.69vw;
      font-size: 6.6vw;
      margin-bottom: 1.4vw;
    }
  }

  @media (min-width: 700px) and (max-width: 1100px) and (min-height: 950px) {
    margin-bottom: 4vw;
    font-size: 3.5vw;

    span {
      margin-left: 1.77vw;
      font-size: 5.3vw;
      margin-bottom: 1.5vw;
    }
  }
`;

export const Text = styled.p`
  text-align: justify;
  font-size: 1.63vw;
  line-height: 2.22vw;

  p {
    margin-top: 2.66vw;
  }

  :first-child {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    font-size: 2.465vw;
    line-height: 3.05vw;
  }

  @media (min-width: 700px) and (max-width: 1100px) and (min-height: 950px) {
    font-size: 1.83vw;
    line-height: 2.52vw;
  }
`;
