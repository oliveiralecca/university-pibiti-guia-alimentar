import styled from "styled-components";

export const NotFoundContainer = styled.div`
  padding: 100px;
  height: 100vh;

  display: flex;
  background: ${({ theme }) => theme.colors.primary.turquoise};

  @media (max-width: 768px) {
    padding: 40px 20px;
    gap: 20px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  button {
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    height: auto;
    margin: 20px 0;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 768px) {
    gap: 30px;
    width: 100%;

    button {
      font-size: ${({ theme }) => theme.fontSize.paragraph3};

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.heading1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.white};

  &:first-of-type {
    margin-bottom: -130px;
  }

  &:nth-of-type(2) {
    margin-top: -130px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.heading3};
    width: 100%;

    &:first-of-type {
      margin-bottom: -50px;
    }

    &:nth-of-type(2) {
      margin-top: -50px;
    }
  }
`;
