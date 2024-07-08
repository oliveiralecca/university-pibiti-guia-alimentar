import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Affirmative = styled.h1`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.heading2};
  color: ${({ theme }) => theme.colors.secondary["dark-blue"]};

  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    margin-bottom: 20px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`;
