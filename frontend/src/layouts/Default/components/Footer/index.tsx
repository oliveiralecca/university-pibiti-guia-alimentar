import { Link } from "react-router-dom";

import emailIcon from "@/assets/email-icon.svg";
import logoGuia from "@/assets/logo.png";

import { Img } from "../Header/styles";
import {
  Divider,
  FooterContainer,
  FooterMenu,
  MediaButton,
  SocialMedia,
} from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <Img
        src={logoGuia}
        alt="Logo de teste: substituir pela real"
        height={40}
      />
      <FooterMenu>
        <Link to="/#inicio">Início</Link>
        <Link to="/teste">Teste</Link>
        <Link to="/#sobre">Sobre o Projeto</Link>
        <Link to="/#lean">LEAN</Link>
      </FooterMenu>
      <Divider />
      <SocialMedia>
        <MediaButton to="mailto:lean@academico.ufs.br" target="_blank">
          <img src={emailIcon} alt="Ícone de carta fechada azul" height={22} />
        </MediaButton>
      </SocialMedia>
      <small>© 2024 Projeto PIBITI - DCOMP e DNUT / UFS</small>
    </FooterContainer>
  );
}
