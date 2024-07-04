import { HiOutlineLightBulb } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import capaGuia from "@/assets/capa-guia.png";
import { ButtonSecondary } from "@/components/Button/Secondary";

import {
  CallToAction,
  GuiaSectionContainer,
  MainContent,
  Title,
} from "./styles";

export function GuiaSection() {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/teste");
  };

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
      <MainContent>
        <div>
          <p>
            O Guia Alimentar para a População Brasileira é o documento oficial
            do Ministério da Saúde que aborda os princípios e as recomendações
            de uma alimentação adequada e saudável. A alimentação e nutrição
            adequadas são requisitos básicos para a promoção, proteção e
            recuperação da saúde.
          </p>
          <br />
          <p>
            Foi na perspectiva de contribuir com as ações de promoção à saúde
            por meio da alimentação adequada e saudável que surgiu o Guia
            alimentar para a População Brasileira, lançado originalmente em 2006
            e atualizado em 2014, trazendo a NOVA classificação de alimentos e
            recomendação de consumo por grau de processamento (in natura ou
            minimamente processados, processados e ultraprocessados), assim como
            a ampliação de princípios e recomendações. Reafirmando-se como um
            instrumento de apoio às ações de Educação Alimentar e Nutricional
            (EAN).
          </p>
          <br />
          <p>
            O objetivo principal deste Guia é mostrar, de forma clara e
            acessível, que é possível ter uma alimentação equilibrada e saudável
            mesmo nos dias mais corridos. Para isso, traz estratégias de como
            facilitar e superar desafios e barreiras para o consumo desses
            alimentos.
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
        </div>
      </MainContent>
      <CallToAction>
        <p>
          O quanto você conhece o{" "}
          <span>Guia alimentar para a população brasileira </span>?
        </p>
        <ButtonSecondary onClick={handleStartTest}>
          <HiOutlineLightBulb size={30} />
          Começar o teste
        </ButtonSecondary>
      </CallToAction>
    </GuiaSectionContainer>
  );
}
