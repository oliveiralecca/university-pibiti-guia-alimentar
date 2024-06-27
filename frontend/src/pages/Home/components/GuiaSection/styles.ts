import styled from "styled-components";

export const GuiaSectionContainer = styled.div`
  padding: 65px 95px 100px 160px;
`;

export const Title = styled.div`
  width: 50%;
  height: 201px;

  margin-left: -160px;
  padding: 30px 0 30px 55px;
  border-radius: 0 20px 20px 0;

  background: ${({ theme }) => theme.colors.primary.turquoise};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;

    width: max-content;
    height: 100%;

    span {
      color: ${({ theme }) => theme.colors.primary.turquoise};
    }
  }

  p:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.heading1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.black.white};
  }

  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.huge1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.black.white};
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: 90px;

  margin: 50px 0;
  align-items: center;

  div:nth-child(1) {
    text-align: justify;
  }

  div:nth-child(2) {
    text-align: center;

    img {
      border-radius: 20px;
      box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.colors.black.primary}40;
      margin-bottom: 20px;
    }

    small {
      font-size: ${({ theme }) => theme.fontSize.paragraph5};
      color: ${({ theme }) => theme.colors.black[600]};
    }
  }
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 70px;

  p {
    font-size: ${({ theme }) => theme.fontSize.heading1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    span {
      font-size: ${({ theme }) => theme.fontSize.huge2};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.secondary.pink};
      line-height: 70px;
    }
  }

  button {
    width: fit-content;
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
