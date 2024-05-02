import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.turquoise};

  width: 100%;
  padding: 7.5px 35px;
  display: flex;
  align-items: center;
  gap: 50px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 0;
  z-index: 5;
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
