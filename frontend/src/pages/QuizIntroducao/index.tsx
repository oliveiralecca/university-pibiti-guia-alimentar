import { useState } from "react";
import { HiOutlineAnnotation, HiOutlineCursorClick } from "react-icons/hi";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import bordaGuia from "@/assets/borda-guia.png";
import { ButtonSecondary } from "@/components/Button/Secondary";
import { useTheme } from "styled-components";

import { QuizIntroducaoContainer, MainContent, Title, Image } from "./styles";

export function QuizIntroducao() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const theme = useTheme();

  const handleStartTest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/quiz/questoes");
    }, 2000);
  };
  return (
    <QuizIntroducaoContainer>
      <Image
        width={148}
        src={bordaGuia}
        alt="Borda colorida do Guia Alimentar."
      />

      <MainContent>
        {isLoading ? (
          <ColorRing
            visible
            height="80"
            width="80"
            colors={["#20BDCD", "#E14E5E", "#f8b26a", "#abbd81", "#23587e"]}
          />
        ) : (
          <>
            <HiOutlineAnnotation
              size={100}
              color={theme.colors.secondary.pink}
            />
            <Title>
              Leia as afirmativas a seguir, e responda com &quot;Concordo&quot;,
              &quot;Discordo&quot; ou &quot;Não sei&quot; para cada uma delas.
            </Title>
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
