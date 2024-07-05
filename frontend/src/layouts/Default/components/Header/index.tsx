import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/logo.png";
import { useTheme } from "styled-components";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderNavigation,
  Img,
  HamburgerMenu,
  MobileNav,
  MobileNavLink,
} from "./styles";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname, hash } = useLocation();
  const path = pathname.slice(1);
  const theme = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <Img src={logo} alt="Logo de teste: substituir pela real" height={40} />
      </HeaderLogo>

      <HeaderNavigation>
        <a
          href="/#inicio"
          className={hash === "#inicio" || pathname === "/" ? "active" : ""}
        >
          Início
        </a>
        <Link to="/teste" className={path === "teste" ? "active" : ""}>
          Teste
        </Link>
        <a href="/#sobre" className={hash === "#sobre" ? "active" : ""}>
          Sobre o Projeto
        </a>
        <a href="/#lean" className={hash === "#lean" ? "active" : ""}>
          LEAN
        </a>
      </HeaderNavigation>

      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? (
          <HiOutlineX size={30} color={theme.colors.secondary.pink} />
        ) : (
          <HiOutlineMenu size={30} color={theme.colors.secondary.pink} />
        )}
      </HamburgerMenu>

      {isMenuOpen && (
        <MobileNav onClick={(e) => e.stopPropagation()}>
          <MobileNavLink
            href="/#inicio"
            className={hash === "#inicio" || pathname === "/" ? "active" : ""}
          >
            Início
          </MobileNavLink>
          <MobileNavLink
            href="/teste"
            className={path === "teste" ? "active" : ""}
          >
            Teste
          </MobileNavLink>
          <MobileNavLink
            href="/#sobre"
            className={hash === "#sobre" ? "active" : ""}
          >
            Sobre o Projeto
          </MobileNavLink>
          <MobileNavLink
            href="/#lean"
            className={hash === "#lean" ? "active" : ""}
          >
            LEAN
          </MobileNavLink>
        </MobileNav>
      )}
    </HeaderContainer>
  );
}
