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
              O Laboratório de Educação Alimentar e Nutricional (LEAN) é um
              grupo de pesquisa que funciona no Departamento de Nutrição (DNUT)
              da Universidade Federal de Sergipe (UFS). O LEAN foi criado em
              agosto de 2017, sob a coordenação da Professora Doutora Andhressa
              Fagundes.
            </p>
            <br />
            <p>
              Tem a missão de ser um espaço de referência no apoio às ações de
              Educação Alimentar e Nutricional (EAN) e suporte no processo de
              ensino-aprendizagem e inovação em alimentação e nutrição.
            </p>
            <br />
            <p>
              Esse é um dos projetos do LEAN/UFS:{" "}
              <strong>
                Ferramenta tecnológica interativa para o letramento nutricional
                sobre o Guia Alimentar para a População Brasileira
              </strong>
              , o LETRA_GAPB.
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
