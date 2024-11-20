import bordaGuia from "@/assets/borda-guia.png";

import {
  Text,
  ProjectSectionContainer,
  Image,
  MainContent,
  Title,
} from "./styles";

export function ProjectSection() {
  return (
    <ProjectSectionContainer id="sobre">
      <Image
        width={148}
        src={bordaGuia}
        alt="Borda colorida do Guia Alimentar."
      />

      <MainContent>
        <Title>
          Sobre o <span>Projeto</span>
        </Title>
        <Text>
          <p>
            Esse projeto foi pensado para divulgar o GAPB, que é tão importante
            para todos nós!
          </p>
          <br />
          <p>
            O site foi desenvolvido para divulgar as principais recomendações do
            GAPB com um Quiz. Ao final, traz a pontuação para cada participante
            com uma orientação sobre o Guia Alimentar.
          </p>
          <br />
          <p>
            Esperamos que a utilização desse site ajude a divulgar o Guia
            Alimentar, aumentando o conhecimento sobre esse tema.
          </p>
          <br />
          <p>
            Ter uma alimentação adequada é fundamental para saúde e qualidade de
            vida!
          </p>
        </Text>
      </MainContent>
    </ProjectSectionContainer>
  );
}
