import leanLogo from "@/assets/lean-logo.png";
import ufsLogo from "@/assets/ufs-logo.png";

import { LeanSectionContainer, Images, MainContent, Title } from "./styles";

export function LeanSection() {
  return (
    <LeanSectionContainer id="lean">
      <div className="wrapper">
        <MainContent>
          <Title>Conheça o LEAN</Title>
          <div>
            <p>
              O Laboratório de Educação Alimentar e Nutricional da Universidade
              Federal de Sergipe (LEAN/UFS) é um grupo de pesquisa oficial do
              Conselho Nacional de Desenvolvimento Científico e Tecnológico
              (CNPq), que nasceu em agosto de 2017, no Departamento de Nutrição
              (DNUT), sob a coordenação da Profa. Dra. Andhressa Fagundes.
            </p>
            <br />
            <p>
              Tem a missão de ser um espaço de referência no apoio às ações de
              Educação Alimentar e Nutricional (EAN) e de temáticas correlatas.
              Trata-se de um espaço criativo para suporte no processo de
              ensino-aprendizagem e inovação no campo da pesquisa em alimentação
              e nutrição.
            </p>
          </div>
        </MainContent>
        <Images>
          <img
            width={90}
            src={ufsLogo}
            alt="Brasão da Universidade Federal de Sergipe."
          />
          <img width={90} src={leanLogo} alt="Logo do projeto." />
        </Images>
      </div>
    </LeanSectionContainer>
  );
}
