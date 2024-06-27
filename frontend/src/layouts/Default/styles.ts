import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    flex: 1;
    margin-top: 85.39px;
  }
`;

export const Img = styled.img`
  box-shadow: 0px 3px 4px 0px ${({ theme }) => theme.colors.black[800]}5f;

  border-radius: 6px;
`;
