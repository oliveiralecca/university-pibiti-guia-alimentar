import { Link } from "react-router-dom";

import emailIcon from "@/assets/email-icon.svg";
import facebookLogo from "@/assets/facebook-logo.svg";
import instagramLogo from "@/assets/instagram-logo.svg";
import logo from "@/assets/logo.png";

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
      <img src={logo} alt="Logo do projeto" height={40} />
      <FooterMenu>
        <Link to="/#inicio">Início</Link>
        <Link to="/teste">Teste</Link>
        <Link to="/#sobre">Sobre o Projeto</Link>
        <Link to="/#lean">LEAN</Link>
      </FooterMenu>
      <Divider />
      <SocialMedia>
        <MediaButton to="https://www.google.com" target="_blank">
          <img
            src={facebookLogo}
            alt="Logo azul com o F do Facebook"
            height={40}
          />
        </MediaButton>
        <MediaButton to="https://www.google.com" target="_blank">
          <img
            src={instagramLogo}
            alt="Logo azul simulando uma câmera"
            height={35}
          />
        </MediaButton>
        <MediaButton to="mailto:teste@email.com" target="_blank">
          <img src={emailIcon} alt="Ícone de carta fechada azul" height={22} />
        </MediaButton>
      </SocialMedia>
      <small>© 2024 Projeto PIBITI - DNUT e DCOMP</small>
    </FooterContainer>
  );
}
