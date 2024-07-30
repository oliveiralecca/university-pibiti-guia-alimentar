import styled from "styled-components";

export const ResultContainer = styled.div<{ $isLoader?: boolean }>`
  padding: 64px 100px;
  display: flex;
  background-color: ${({ theme, $isLoader }) =>
    $isLoader ? theme.colors.neutral.white : theme.colors.secondary.pink};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 30px;
    gap: 50px;
    height: 100%;
  }
`;

export const MainContent = styled.div<{ $isLoader?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ $isLoader }) => $isLoader && "center"};

  gap: 80px;
  min-height: 575px;

  color: ${({ theme }) => theme.colors.neutral.white};

  @media (max-width: 768px) {
    gap: 60px;
  }
`;

export const Title = styled.p`
  position: absolute;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.huge3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.turquoise};

  width: 100%;
  padding: 10px;

  background: ${({ theme }) => theme.colors.neutral.white};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.heading2};
    width: 100%;
  }
`;

export const Texts = styled.div`
  margin-top: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.heading1};
  }

  a {
    text-decoration: none;
  }

  button {
    color: ${({ theme }) => theme.colors.secondary["dark-blue"]};
    font-size: ${({ theme }) => theme.fontSize.heading3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    height: auto;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    margin-top: 93px;
    gap: 30px;
    text-align: center;

    h1 {
      font-size: ${({ theme }) => theme.fontSize.heading3};
    }

    button {
      font-size: ${({ theme }) => theme.fontSize.paragraph1};

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Buttons = styled.div<{ $twoButtons: boolean }>`
  display: flex;
  justify-content: ${({ $twoButtons }) =>
    $twoButtons ? "space-between" : "end"};
  width: 100%;
`;
