import { Link, NavLink, useLocation } from "react-router-dom";

import logoGuia from "@/assets/logo-guia.svg";
import { Img } from "@/layouts/Default/styles";

import { HeaderContainer, HeaderNavigation } from "./styles";

export function Header() {
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <Img
          src={logoGuia}
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
