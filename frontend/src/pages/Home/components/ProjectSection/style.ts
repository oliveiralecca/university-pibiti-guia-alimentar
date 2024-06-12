import styled from "styled-components";

export const ProjectSectionContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary.salmon};
  max-height: 100vh;
  height: auto;
  padding-bottom: 50px;

  @media (max-width: 1120px) {
    max-height: none;
  }

  section {
    height: 100%;
    width: 12%;
  }
`;
