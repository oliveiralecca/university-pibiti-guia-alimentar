import styled from "styled-components";

export const GuiaSectionContainer = styled.div`
  padding: 64px 100px 64px 0;
  background: ${({ theme }) => theme.colors.secondary.pink}80;

  display: flex;
  gap: 100px;
`;

export const Image = styled.img`
  margin: -64px 0;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.heading1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  span {
    font-size: ${({ theme }) => theme.fontSize.heading1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary.turquoise};
    line-height: 55px;
  }
`;

export const Text = styled.div`
  text-align: justify;
`;
