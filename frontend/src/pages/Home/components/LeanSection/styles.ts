import styled from "styled-components";

export const GuiaSectionContainer = styled.div`
  padding: 150px 294px 150px 288px;
  display: flex;
  justify-content: center;

  .wrapper {
    max-width: 645px;
    min-width: 645px;
    gap: 190px;

    display: flex;
    justify-content: space-between;
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
`;

export const Title = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.heading2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 55px;

  &::before {
    content: "LEAN";
    position: absolute;
    font-size: 107px;
    font-weight: 700;
    letter-spacing: 0.3em;
    color: ${({ theme }) => theme.colors.emphasis.orange}30;
    text-align: center;
    z-index: -10;
    right: -92px;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  margin-top: 60px;
`;
