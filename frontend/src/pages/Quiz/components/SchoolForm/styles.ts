import styled from "styled-components";

export const Title = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.heading1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.heading2};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const InputNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
