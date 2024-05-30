import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.turquoise};

  width: 100%;
  padding: 20px 35px;

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

export const Img = styled.img`
  box-shadow: 0px 3px 4px 0px ${({ theme }) => theme.colors.black[800]}5f;

  border-radius: 6px;
`;
