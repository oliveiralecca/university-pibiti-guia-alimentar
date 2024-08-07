import styled from "styled-components";

export const GuiaSectionContainer = styled.div`
  padding: 65px 95px 100px 160px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export const Title = styled.div`
  width: 465px;
  height: 201px;
  margin-left: -160px;
  padding: 30px 0 30px 55px;
  border-radius: 0 20px 20px 0;
  background: ${({ theme }) => theme.colors.primary.turquoise};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  @media (max-width: 768px) {
    height: 100.5px;
    width: 232.5px;
    margin-left: -30px;
    padding: 20px;

    p:nth-child(1) {
      font-size: ${({ theme }) => theme.fontSize.paragraph1};
    }

    p:nth-child(2) {
      font-size: 36.2px;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: 90px;
  margin-top: 50px;
  align-items: center;

  div:nth-child(1) {
    text-align: justify;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img {
      border-radius: 20px;
      box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.colors.black.primary}40;
    }

    small {
      font-size: ${({ theme }) => theme.fontSize.paragraph5};
      color: ${({ theme }) => theme.colors.black[600]};
    }

    a {
      text-decoration: none;
    }

    button {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;

    div:nth-child(1) {
      font-size: ${({ theme }) => theme.fontSize.paragraph2};
    }
  }
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-top: 50px;

  p {
    font-size: ${({ theme }) => theme.fontSize.heading1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    span {
      font-size: ${({ theme }) => theme.fontSize.huge1};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.secondary.pink};
      line-height: 70px;
    }
  }

  div {
    width: 80%;
    align-self: flex-start;
    display: flex;
    justify-content: center;
  }

  button {
    font-size: ${({ theme }) => theme.fontSize.heading3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    height: auto;
  }

  @media (max-width: 768px) {
    gap: 40px;

    p {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.heading2};

      span {
        font-size: ${({ theme }) => theme.fontSize.heading1};
        line-height: 45px;
      }
    }

    div {
      width: 100%;
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
