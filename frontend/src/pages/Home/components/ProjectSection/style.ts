import styled from "styled-components";

export const ProjectSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary.pink}80;

  img {
    margin-bottom: -5px;
    width: 13vw;
    margin-left: -2.88vw;
  }

  @media (max-width: 600px) {
    img {
      width: 23.4vw;
      margin-left: -8vw;
    }
  }

  @media (min-width: 700px) and (max-width: 1100px) and (min-height: 950px) {
    img {
      width: 16.5vw;
      margin-left: -5.5vw;
    }
  }
`;
