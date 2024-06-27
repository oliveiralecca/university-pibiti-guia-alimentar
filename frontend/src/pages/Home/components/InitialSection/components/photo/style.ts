import styled from "styled-components";

export const Img = styled.img`
  border-radius: 15px;
  width: 24vw;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.black[400]}8f;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  p {
    font-size: 1.13vw;
    color: ${({ theme }) => theme.colors.black[300]};
  }

  @media (max-width: 600px) {
    p {
      display: none;
    }
  }
`;
