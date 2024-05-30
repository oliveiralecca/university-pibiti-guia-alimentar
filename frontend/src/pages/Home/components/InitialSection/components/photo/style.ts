import styled from "styled-components";

export const Img = styled.img`
  border-radius: 15px;
  width: 60%;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.black[400]}8f;
  margin: auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.paragraph5};
    color: ${({ theme }) => theme.colors.black[300]};
  }
`;
