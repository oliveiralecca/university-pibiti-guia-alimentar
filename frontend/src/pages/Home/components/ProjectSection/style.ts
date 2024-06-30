import styled from "styled-components";

export const ProjectSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.secondary.salmon};

  //padding-top: 4vw;
  //padding-bottom: 55px;
  //border: 2px solid green;

  img {
    //margin-top: -1px;
    margin-bottom: -5px;

    width: 13vw;
    //height: 100%;
    //width: 13.2vw;
    margin-left: -2.88vw;
  }
`;
