import { HiOutlineLightBulb, HiOutlineLink } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import capaGuia from "@/assets/capa-guia.png";
import { ButtonLight } from "@/components/Button/Light";
import { ButtonSecondary } from "@/components/Button/Secondary";
import { useLinkTarget } from "@/hooks/useLinkTarget";

import { CallToAction, GuiaSectionContainer, MainContent } from "./styles";

export function GuiaSection() {
  const navigate = useNavigate();

  const handleNavigateToTest = () => {
    navigate("/quiz");
  };

  useLinkTarget("guia-link");

  return (
    <GuiaSectionContainer id="inicio">
      <CallToAction>
        <p>
          Você conhece o{" "}
          <span>Guia Alimentar para a População Brasileira </span>?
        </p>
        <div>
          <ButtonSecondary onClick={handleNavigateToTest}>
            <HiOutlineLightBulb size={30} />
            Começar o Quiz
          </ButtonSecondary>
        </div>
      </CallToAction>
      <MainContent>
        <div>
          <p>
            Em 2014, o Ministério da Saúde publicou o Guia Alimentar para a
            População Brasileira (GAPB) com recomendações para uma alimentação
            adequada e saudável e uma nova classificação de alimentos.
          </p>
          <br />
          <p>
            O GAPB busca mostrar que é possível ter uma alimentação saudável
            mesmo nos dias corridos.
          </p>
          <br />
          <p>
            Para isso, além das orientações, o material traz estratégias de como
            superar obstáculos.
          </p>
        </div>
        <div>
          <img
            width={302}
            height={374}
            src={capaGuia}
            alt="Capa oficial do Guia Alimentar."
          />
          <small>Imagem: Ministério da Saúde</small>
          <a
            href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf"
            className="guia-link"
          >
            <ButtonLight>
              <HiOutlineLink size={20} />
              Acesse o GAPB Completo
            </ButtonLight>
          </a>
        </div>
      </MainContent>
    </GuiaSectionContainer>
  );
}
