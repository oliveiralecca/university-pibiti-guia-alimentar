import styled from "styled-components";

export const QuizContainer = styled.div`
  padding: 100px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
