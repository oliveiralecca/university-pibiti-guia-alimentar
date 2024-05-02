import { Link } from "react-router-dom";

import emailIcon from "@/assets/email-icon.svg";
import facebookLogo from "@/assets/facebook-logo.svg";
import instagramLogo from "@/assets/instagram-logo.svg";
import logoTest from "@/assets/logo-test.svg";

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
      <img
        src={logoTest}
        alt="Logo de teste: substituir pela real"
        height={70}
        width={65}
      />
      <FooterMenu>
        <Link to="/">Início</Link>
        <Link to="/questionario">Questionário</Link>
        <Link to="/sobre">Sobre</Link>
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
