import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.turquoise};

  padding: 20px 35px;

  display: flex;
  align-items: center;
  gap: 50px;

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
    color: ${({ theme }) => theme.colors.black[500]};
    transition: 0.2s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.secondary["light-blue"]};
  }

  .active {
    color: ${({ theme }) => theme.colors.neutral.white};
  }
`;
