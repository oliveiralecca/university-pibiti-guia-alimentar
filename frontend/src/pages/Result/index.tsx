import { useMemo } from "react";
import { HiHeart } from "react-icons/hi";

import { ButtonLight } from "@/components/Button/Light";
import { Loader } from "@/components/Loader";
import { useQuizContext } from "@/contexts/QuizContext";
import { useLinkTarget } from "@/hooks/useLinkTarget";

import { resultsByScore } from "./helpers";
import { MainContent, Title, ResultContainer, Texts } from "./styles";

export function Result() {
  const { score } = useQuizContext();
  useLinkTarget("passos-link");

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

  if (!score) {
    return (
      <ResultContainer $isLoader>
        <MainContent $isLoader>
          <Loader size={80} />
        </MainContent>
      </ResultContainer>
    );
  }

  return (
    <ResultContainer>
      <MainContent>
        <Title>RESULTADO</Title>

        <Texts>
          {message}
          {cta}
          <a
            href="https://bvsms.saude.gov.br/bvs/folder/dez_passos_alimentacao_adequada_saudavel_dobrado.pdf"
            className="passos-link"
          >
            <ButtonLight>
              <HiHeart size={20} />
              Conheça os 10 passos do GAPB
            </ButtonLight>
          </a>
        </Texts>
      </MainContent>
    </ResultContainer>
  );
}
