import styled from "styled-components";

export const LeanContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 16vw;
  padding-bottom: 12vw;
  background-color: white;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 7vw;
  max-height: 90%;
  margin-bottom: 10px;

  :last-child {
    margin-top: 60px;
  }

  img {
    width: 100%;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
