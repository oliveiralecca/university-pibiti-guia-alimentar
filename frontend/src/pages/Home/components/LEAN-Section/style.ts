import styled from "styled-components";

export const LeanContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  height: 100%;
  width: 100%;
  padding: 40px 0 20px 0;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 8.5%;
  max-height: 90%;
  margin-left: -30px;
  margin-bottom: 10px;

  :first-child {
    margin-bottom: 30px;
  }

  img {
    width: 100%;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
