import styled from "styled-components";

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;

export const Title = styled.div`
  color: white;
  position: relative;
  margin-bottom: 2.27vw;
  height: 8.13vmax;
  padding-left: 5.21vmax;
  font-size: 2.29vmax;
  line-height: 4.4vmax;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ::before {
    content: "";
    position: absolute;
    left: -20px;
    top: -9px;
    z-index: -1;
    max-width: 24.123vmax;
    height: 7.8vmax;
    width: 100%;
    border-radius: 0 15px 15px 0;
    padding: 14px 10px;
    background-color: ${({ theme }) => theme.colors.primary.turquoise};
  }

  @media (max-width: 600px) {
    height: 11.7072vw;
    padding-left: 4vw;
    font-size: 3.2976vw;
    line-height: 6.336vw;

    ::before {
      height: 12vw;
      max-width: 33.2vw;
      border-radius: 10px;
      padding: 10px 6px;
    }
  }

  @media (min-width: 700px) and (max-width: 1100px) and (min-height: 950px) {
    margin-bottom: 2.5vh;
    height: 11vw;
    padding-left: 4vw;
    font-size: 3vw;
    line-height: 6vw;

    ::before {
      max-width: 27.49vw;
    }
  }
`;

export const SpanContainer = styled.span`
  display: block;
  font-size: 3.23vw;
  color: white;

  span {
    color: ${({ theme }) => theme.colors.primary.turquoise};
  }

  @media (max-width: 600px) {
    font-size: 4.6512vw;
  }

  @media (min-width: 700px) and (max-width: 1100px) and (min-height: 950px) {
    font-size: 4vw;
  }
`;

export const Text = styled.p`
  text-align: justify;
  margin-left: 7.34vw;
  font-size: 1.31vw;
  line-height: 1.9vw;

  p {
    margin-top: 2.1vw;
  }

  @media (max-width: 600px) {
    font-size: 1.92vw;
    line-height: 2.736vw;
  }

  @media (min-width: 700px) and (max-width: 1050px) and (min-height: 950px) {
    font-size: 1.54vw;
  }
`;
