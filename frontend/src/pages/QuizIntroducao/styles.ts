import styled from "styled-components";

export const QuizIntroducaoContainer = styled.div`
  padding: 64px 100px 64px 0;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 30px;
    gap: 50px;
    height: 100%;
  }
`;

export const Image = styled.img`
  margin: -64px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  min-height: 575px;

  button {
    font-size: ${({ theme }) => theme.fontSize.heading3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    height: auto;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    gap: 30px;

    button {
      font-size: ${({ theme }) => theme.fontSize.paragraph1};

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.heading1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 65%;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.heading2};
    width: 100%;
  }
`;
