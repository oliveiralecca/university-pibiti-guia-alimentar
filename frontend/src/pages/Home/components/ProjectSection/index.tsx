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
            Considerando a importância do Guia Alimentar para a População
            Brasileira (GAPB) e o baixo conhecimento deste documento pela
            população brasileira, foi desenvolvido o projeto{" "}
            <strong>
              &quot;Ferramenta tecnológica interativa para o letramento de
              estudantes universitários sobre o Guia Alimentar para a População
              Brasileira&quot;
            </strong>
            , o LETRA^GAPB.
          </p>
          <br />
          <p>
            O instrumento foi desenvolvido para contemplar as principais
            recomendações do GAPB e elenca uma pontuação para cada questão
            correta, trazendo um resultado final para cada participante. A
            partir do resultado, você, participante, é redirecionado para uma
            orientação que considere o seu nível de conhecimento sobre o Guia
            Alimentar.
          </p>
          <br />
          <p>
            Espera-se que a utilização desta ferramenta auxilie na disseminação
            do conteúdo do Guia Alimentar e a interação com o seu conteúdo,
            aumentando o letramento nessa temática, bem como na promoção de uma
            alimentação adequada e no delineamento de ações de Educação
            Alimentar e Nutricional que corroborem com a autonomia e mudança de
            comportamentos relacionados à alimentação adequada e saudável.
          </p>
        </Text>
      </MainContent>
    </ProjectSectionContainer>
  );
}
