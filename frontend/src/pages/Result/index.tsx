import { useMemo, useEffect, useState } from "react";
import {
  HiArrowLeft,
  HiArrowRight,
  HiHeart,
  HiOutlineLightBulb,
} from "react-icons/hi";

import { ButtonDark } from "@/components/Button/Dark";
import { ButtonLight } from "@/components/Button/Light";
import { Loader } from "@/components/Loader";
import { useQuizContext } from "@/contexts/QuizContext";
import { useLinkTarget } from "@/hooks/useLinkTarget";
import { scrollToTop } from "@/utils";

import { additionalResult, resultsByScore } from "./helpers";
import { MainContent, Title, ResultContainer, Texts, Buttons } from "./styles";

export function Result() {
  const [page, setPage] = useState(0);

  const { score, pagesQt, additionalPages } = useQuizContext();
  useLinkTarget("passos-link");

  useEffect(() => {
    scrollToTop();
  }, []);

  const currentScoreKey: keyof typeof resultsByScore = useMemo(() => {
    switch (score) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return "A";

      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        return "B";

      case 11:
      case 12:
      case 13:
      case 14:
        return "C";

      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
        return "D";

      default:
        return "E";
    }
  }, [score]);

  const result = resultsByScore[currentScoreKey];
  const message = result.message(
    result.hitsPercentages[score! as keyof typeof result.hitsPercentages],
  );
  const { cta } = result;

  const nextPage = () => {
    setPage((previous: number) => {
      if (previous < pagesQt) return previous + 1;
      return previous;
    });
  };

  const previousPage = () => {
    setPage((previous: number) => {
      if (previous >= 1) return previous - 1;
      return previous;
    });
  };

  if (!String(score)) {
    return (
      <ResultContainer $isLoader>
        <MainContent $isLoader>
          <Loader size={80} />
        </MainContent>
      </ResultContainer>
    );
  }

  const getAdditionalContent = (pg: number) => {
    if (additionalPages && pg === 1) {
      return additionalResult[
        additionalPages.additionalPage1 as keyof typeof additionalResult
      ];
    }
    if (additionalPages && pg === 2) {
      return additionalResult[
        additionalPages.additionalPage2 as keyof typeof additionalResult
      ];
    }
    if (additionalPages && pg === 3) {
      return additionalResult[
        additionalPages.additionalPage3 as keyof typeof additionalResult
      ];
    }
    return null;
  };

  const additionalContent = getAdditionalContent(page);

  return (
    <ResultContainer>
      <MainContent>
        <Title>RESULTADO</Title>

        {page === 0 && (
          <Texts>
            {message}
            {cta}
            <a
              href="https://bvsms.saude.gov.br/bvs/folder/dez_passos_alimentacao_adequada_saudavel_dobrado.pdf"
              className="passos-link"
            >
              <ButtonLight>
                <HiHeart size={20} />
                <span>Conheça os</span> 10 passos do GAPB
              </ButtonLight>
            </a>
          </Texts>
        )}

        {page > 0 && <Texts>{additionalContent}</Texts>}

        {pagesQt > 0 && (
          <Buttons $twoButtons={page > 0}>
            {page > 0 && (
              <ButtonDark onClick={previousPage}>
                <HiArrowLeft />
                Anterior
              </ButtonDark>
            )}

            {page < pagesQt && page > 0 && (
              <ButtonLight onClick={nextPage}>
                <HiOutlineLightBulb size={20} />
                Quer saber mais?
              </ButtonLight>
            )}

            {page < pagesQt && page === 0 && (
              <ButtonDark onClick={nextPage}>
                Próximo
                <HiArrowRight />
              </ButtonDark>
            )}
          </Buttons>
        )}
      </MainContent>
    </ResultContainer>
  );
}
