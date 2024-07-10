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
  MobileLink,
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
        <Img src={logo} alt="Logo do projeto." height={40} />
      </HeaderLogo>

      <HeaderNavigation>
        <a
          href="/#inicio"
          className={
            hash === "#inicio" || (!hash && !path.startsWith("quiz"))
              ? "active"
              : ""
          }
        >
          Início
        </a>
        <Link to="/quiz" className={path.startsWith("quiz") ? "active" : ""}>
          Quiz
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
            onClick={toggleMenu}
            className={
              hash === "#inicio" || (!hash && !path.startsWith("quiz"))
                ? "active"
                : ""
            }
          >
            Início
          </MobileNavLink>
          <MobileLink
            to="/quiz"
            className={path.startsWith("quiz") ? "active" : ""}
          >
            Quiz
          </MobileLink>
          <MobileNavLink
            href="/#sobre"
            onClick={toggleMenu}
            className={hash === "#sobre" ? "active" : ""}
          >
            Sobre o Projeto
          </MobileNavLink>
          <MobileNavLink
            href="/#lean"
            onClick={toggleMenu}
            className={hash === "#lean" ? "active" : ""}
          >
            LEAN
          </MobileNavLink>
        </MobileNav>
      )}
    </HeaderContainer>
  );
}
