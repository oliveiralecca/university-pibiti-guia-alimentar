// import { HiOutlineAnnotation, HiOutlineCursorClick } from "react-icons/hi";

// import { ButtonSecondary } from "@/components/Button/Secondary";
import { useQuizContext } from "@/contexts/QuizContext";

import { MainContent, Title, ResultContainer } from "./styles";

export function Result() {
  const { score } = useQuizContext();

  return (
    <ResultContainer>
      {/* <Image
        width={148}
        src={bordaGuia}
        alt="Borda colorida do Guia Alimentar."
      /> */}

      <MainContent>
        {/* <HiOutlineAnnotation size={100} color={theme.colors.secondary.pink} /> */}
        <Title>Score: {score}</Title>
        {/* <ButtonSecondary onClick={handleStartTest}>
          Começar
          <HiOutlineCursorClick size={30} />
        </ButtonSecondary> */}
      </MainContent>
    </ResultContainer>
  );
}
