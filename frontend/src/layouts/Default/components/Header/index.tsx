import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/logo.png";

import { HeaderContainer, HeaderLogo, HeaderNavigation } from "./styles";

export function Header() {
  const { pathname, hash } = useLocation();
  const path = pathname.slice(1);

  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <img src={logo} alt="Logo do projeto" height={40} />
      </HeaderLogo>

      <HeaderNavigation>
        <Link to="/#inicio" className={hash === "#inicio" ? "active" : ""}>
          Início
        </Link>
        <Link to="/teste" className={path === "teste" ? "active" : ""}>
          Teste
        </Link>
        <Link to="/#sobre" className={hash === "#sobre" ? "active" : ""}>
          Sobre o Projeto
        </Link>
        <Link to="/#lean" className={hash === "#lean" ? "active" : ""}>
          LEAN
        </Link>
      </HeaderNavigation>
    </HeaderContainer>
  );
}
