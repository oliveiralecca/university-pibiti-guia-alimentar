import bordaGuia from "@/assets/borda-guia.png";

import {
  Text,
  GuiaSectionContainer,
  Image,
  MainContent,
  Title,
} from "./styles";

export function ProjectSection() {
  return (
    <GuiaSectionContainer id="sobre">
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
            O Guia Alimentar para a População Brasileira é de fácil acesso e
            está disponível para todos, mas alguns estudos revelam que o
            documento ainda é pouco conhecido pela população brasileira. Assim,
            foi desenvolvido o projeto de iniciação tecnológica, denominado
            “Ferramenta tecnológica interativa para o letramento de estudantes
            universitários sobre o Guia Alimentar para a População Brasileira”,
            com o objetivo de desenvolver uma ferramenta tecnológica interativa
            para diagnóstico e divulgação dos conteúdos do Guia Alimentar para
            adultos jovens.
          </p>
          <br />
          <p>
            O instrumento apresentado contempla as principais recomendações do
            Guia Alimentar para uma alimentação adequada e saudável, e elenca
            uma pontuação que traz a um resultado para cada participante. A
            partir deste resultado, você, participante, é redirecionado para uma
            orientação que considere o seu nível de conhecimento sobre o Guia
            Alimentar.
          </p>
          <br />
          <p>
            Espera-se que a existência e utilização desta ferramenta auxilie na
            disseminação do conteúdo do Guia Alimentar, bem como na promoção de
            uma alimentação adequada, além de colaborar com o delineamento de
            ações de educação alimentar e nutricional com maior capacidade de
            corroborar com a autonomia e mudança de comportamentos relacionados
            à alimentação adequada e saudável.
          </p>
        </Text>
      </MainContent>
    </GuiaSectionContainer>
  );
}
