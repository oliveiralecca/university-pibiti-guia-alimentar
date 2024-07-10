import { HiOutlineLightBulb, HiOutlineLink } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import capaGuia from "@/assets/capa-guia.png";
import { ButtonLight } from "@/components/Button/Light";
import { ButtonSecondary } from "@/components/Button/Secondary";
import { useLinkTarget } from "@/hooks/useLinkTarget";

import {
  CallToAction,
  GuiaSectionContainer,
  MainContent,
  Title,
} from "./styles";

export function GuiaSection() {
  const navigate = useNavigate();

  const handleNavigateToTest = () => {
    navigate("/quiz");
  };

  useLinkTarget("guia-link");

  return (
    <GuiaSectionContainer id="inicio">
      <Title>
        <div>
          <p>O que é o</p>
          <p>
            GUIA ALIME<span>NTAR?</span>
          </p>
        </div>
      </Title>
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
            O Guia Alimentar para a População Brasileira (GAPB), do Ministério
            da Saúde, lançado em 2006 e atualizado em 2014, aborda os princípios
            e as recomendações para uma alimentação adequada e saudável,
            considerado pela constituição do Brasil um direito humano, requisito
            básico para a promoção, proteção e recuperação da saúde.
          </p>
          <br />
          <p>
            O objetivo principal do GAPB é mostrar, de forma clara e acessível,
            que é possível ter uma alimentação equilibrada e saudável, mesmo nos
            dias mais corridos. Para isso, além das orientações, traz
            estratégias de como superar obstáculos para o consumo desses
            alimentos, se reafirmando como um instrumento de apoio às ações de
            Educação Alimentar e Nutricional (EAN).
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
