import { HiOutlineAnnotation, HiOutlineCursorClick } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import bordaGuia from "@/assets/borda-guia.png";
import { ButtonSecondary } from "@/components/Button/Secondary";
import { Loader } from "@/components/Loader";
import { useQuizContext } from "@/contexts/QuizContext";
import { useTheme } from "styled-components";

import { QuizIntroducaoContainer, MainContent, Title, Image } from "./styles";

export function QuizIntroducao() {
  const { fetchStates, isStatesValidating, fetchCourses, isCoursesValidating } =
    useQuizContext();

  const navigate = useNavigate();
  const theme = useTheme();

  const handleStartTest = async () => {
    await fetchStates();
    await fetchCourses();
    if (!isStatesValidating && !isCoursesValidating) navigate("/quiz/questoes");
  };

  return (
    <QuizIntroducaoContainer>
      <Image
        width={148}
        src={bordaGuia}
        alt="Borda colorida do Guia Alimentar."
      />

      <MainContent>
        {isStatesValidating || isCoursesValidating ? (
          <Loader size={80} />
        ) : (
          (
            <>
              <HiOutlineAnnotation
                size={100}
                color={theme.colors.secondary.pink}
              />
              <Title>
                Leia as afirmativas a seguir, e responda com
                &quot;Concordo&quot;, &quot;Discordo&quot; ou &quot;Não
                sei&quot; para cada uma delas.
              </Title>
              <ButtonSecondary onClick={handleStartTest}>
                Começar
                <HiOutlineCursorClick size={30} />
              </ButtonSecondary>
            </>
          ) || <p>Algo deu errado!</p>
        )}
      </MainContent>
    </QuizIntroducaoContainer>
  );
}
