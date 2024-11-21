import { useEffect } from "react";
import { HiOutlineAnnotation, HiOutlineCursorClick } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

import bordaGuia from "@/assets/borda-guia.png";
import { ButtonSecondary } from "@/components/Button/Secondary";
import { Loader } from "@/components/Loader";
import { useQuizContext } from "@/contexts/QuizContext";
import { useTheme } from "styled-components";

import { QuizIntroducaoContainer, MainContent, Title, Image } from "./styles";

export function QuizIntroducao() {
  const {
    fetchStates,
    isStatesValidating,
    isStatesError,
    fetchCourses,
    isCoursesValidating,
    isCoursesError,
  } = useQuizContext();

  const navigate = useNavigate();
  const theme = useTheme();

  const handleStartTest = async () => {
    await fetchStates();
    await fetchCourses();
    if (
      !isStatesError &&
      !isCoursesError &&
      !isStatesValidating &&
      !isCoursesValidating
    )
      navigate("/quiz/questoes");
  };

  useEffect(() => {
    if (isStatesError || isCoursesError) {
      toast.error(
        "Ops! Algo deu errado ao tentar iniciar o Quiz. Tente novamente.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        },
      );
    }
  }, [isCoursesError, isStatesError]);

  return (
    <QuizIntroducaoContainer>
      <ToastContainer newestOnTop />
      <Image
        width={148}
        src={bordaGuia}
        alt="Borda colorida do Guia Alimentar."
      />

      <MainContent>
        {isStatesValidating || isCoursesValidating ? (
          <Loader size={80} />
        ) : (
          <>
            <HiOutlineAnnotation
              size={100}
              color={theme.colors.secondary.pink}
            />
            <Title>Leia as afirmativas a seguir e responda:</Title>
            <ButtonSecondary onClick={handleStartTest}>
              Começar
              <HiOutlineCursorClick size={30} />
            </ButtonSecondary>
          </>
        )}
      </MainContent>
    </QuizIntroducaoContainer>
  );
}
