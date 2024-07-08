import styled from "styled-components";

export const ProjectSectionContainer = styled.div`
  padding: 64px 100px 64px 0;
  background: ${({ theme }) => theme.colors.secondary.pink}50;
  display: flex;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 30px;
    gap: 50px;
  }
`;

export const Image = styled.img`
  margin: -64px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.heading1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  span {
    font-size: ${({ theme }) => theme.fontSize.huge3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary.turquoise};
    line-height: 55px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.heading2};

    span {
      font-size: ${({ theme }) => theme.fontSize.heading1};
      line-height: 45px;
    }
  }
`;

export const Text = styled.div`
  text-align: justify;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
  }
`;
