import capaGuia from "@/assets/capa-do-guia.svg";

import { Img, Container } from "./style";

export function Photo() {
  return (
    <Container>
      <Img src={capaGuia} alt="Capa do Guia Alimentar" />
      <p>Imagem: Lorem ipsum dolor.</p>
    </Container>
  );
}
