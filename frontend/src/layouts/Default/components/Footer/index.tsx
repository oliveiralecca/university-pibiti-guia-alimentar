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
      <Img src={logoGuia} alt="Logo do projeto." height={40} />
      <FooterMenu>
        <a href="/#inicio">Início</a>
        <a href="/quiz">Quiz</a>
        <a href="/#sobre">Sobre o Projeto</a>
        <a href="/#lean">LEAN</a>
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
