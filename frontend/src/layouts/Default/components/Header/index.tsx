import { Link, NavLink, useLocation } from "react-router-dom";

import logoTest from "@/assets/logo-test.svg";

import { HeaderContainer, HeaderNavigation } from "./styles";

export function Header() {
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logoTest}
          alt="Logo de teste: substituir pela real"
          height={40}
        />
      </NavLink>

      <HeaderNavigation>
        <Link to="/" className={path === "" ? "active" : ""}>
          Início
        </Link>
        <Link
          to="/questionario"
          className={path === "questionario" ? "active" : ""}
        >
          Questionário
        </Link>
        <Link to="/sobre" className={path === "sobre" ? "active" : ""}>
          Sobre
        </Link>
      </HeaderNavigation>
    </HeaderContainer>
  );
}
