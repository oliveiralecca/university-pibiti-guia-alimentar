import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.turquoise};

  padding: 20px 35px;

  display: flex;
  align-items: center;
  gap: 50px;

  // RECHECK: ver com elas se fica melhor com ou sem
  /* box-shadow: 0px 10px 15px -10px rgba(0, 0, 0, 0.6); */

  // TODO: quando a página tiver extensa, avaliar esse comportamento
  /* position: fixed;
  top: 0;
  z-index: 5; */
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.neutral.gray};
    transition: 0.2s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.secondary["light-blue"]};
  }

  .active {
    color: ${({ theme }) => theme.colors.neutral.white};
  }
`;
