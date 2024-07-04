import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/logo.png";

import { HeaderContainer, HeaderLogo, HeaderNavigation, Img } from "./styles";

export function Header() {
  const { pathname, hash } = useLocation();
  const path = pathname.slice(1);

  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <Img src={logo} alt="Logo de teste: substituir pela real" height={40} />
      </HeaderLogo>

      <HeaderNavigation>
        <a href="/#inicio" className={hash === "#inicio" ? "active" : ""}>
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
    </HeaderContainer>
  );
}
