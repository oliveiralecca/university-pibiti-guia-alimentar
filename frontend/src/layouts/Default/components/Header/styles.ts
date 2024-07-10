import { Link, NavLink } from "react-router-dom";

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
  z-index: 10;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const HeaderLogo = styled(NavLink)`
  height: 40px;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    height: 30px;
    z-index: 30;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.primary.turquoise};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  z-index: 20;
`;

export const MobileNavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral.gray};
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary["light-blue"]};
  }

  &.active {
    color: ${({ theme }) => theme.colors.neutral.white};
  }
`;

export const MobileLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral.gray};
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary["light-blue"]};
  }

  &.active {
    color: ${({ theme }) => theme.colors.neutral.white};
  }
`;

export const Img = styled.img`
  box-shadow: 0px 3px 4px 0px ${({ theme }) => theme.colors.black[800]}5f;
  border-radius: 6px;
`;
