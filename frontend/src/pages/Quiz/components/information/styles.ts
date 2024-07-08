import styled from "styled-components";

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 30px;
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
