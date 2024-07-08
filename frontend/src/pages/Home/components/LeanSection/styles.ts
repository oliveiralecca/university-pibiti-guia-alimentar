import styled from "styled-components";

export const LeanSectionContainer = styled.div`
  padding: 150px 294px 150px 288px;
  display: flex;
  justify-content: center;

  .wrapper {
    max-width: 710px;
    min-width: 710px;
    gap: 190px;

    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 50px;
      max-width: 100%;
      min-width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 86px;
  align-items: center;

  div:nth-child(2) {
    text-align: justify;
  }

  @media (max-width: 768px) {
    gap: 30px;

    p {
      font-size: ${({ theme }) => theme.fontSize.paragraph2};
    }
  }
`;

export const Title = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.heading2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 55px;
  text-align: center;

  &::before {
    content: "LEAN";
    position: absolute;
    font-size: 127px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: 0.3em;
    color: ${({ theme }) => theme.colors.emphasis.orange}30;
    text-align: center;
    z-index: -10;
    right: -133px;

    @media (max-width: 768px) {
      font-size: 80px;
      right: 45%;
      transform: translateX(50%);
    }
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.heading3};
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 50px;
    margin-top: 0;
  }
`;
