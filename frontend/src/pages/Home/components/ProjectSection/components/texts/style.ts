import styled from "styled-components";

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 73vw;
  margin: auto;
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
`;

export const Text = styled.p`
  text-align: justify;

  font-size: 1.6vw;
  line-height: 2.22vw;

  p {
    margin-top: 2.05vw;
  }

  :first-child {
    margin-top: 0;
  }
`;
