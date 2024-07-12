import {
  HiOutlineAcademicCap,
  HiOutlineAnnotation,
  HiOutlineBookOpen,
} from "react-icons/hi";

import { ButtonLight } from "@/components/Button/Light";
import { useQuizContext } from "@/contexts/QuizContext";
import { useTheme } from "styled-components";

import {
  Classification,
  InformationContainer,
  MainContent,
  Title,
} from "./styles";

export function Information() {
  const theme = useTheme();
  const { formType, setFormType } = useQuizContext();

  return (
    <InformationContainer>
      <MainContent>
        <HiOutlineAnnotation size={100} color={theme.colors.secondary.pink} />
        <Title>
          Agora precisamos te conhecer, siga para responder algumas perguntas de
          caracterização.
        </Title>
      </MainContent>
      <Classification>
        <p>Você estuda em uma:</p>
        <div>
          <ButtonLight
            className={formType === "school" ? "selected" : ""}
            onClick={() => setFormType("school")}
          >
            <HiOutlineBookOpen size={20} />
            Escola
          </ButtonLight>
          <ButtonLight
            className={formType === "university" ? "selected" : ""}
            onClick={() => setFormType("university")}
          >
            <HiOutlineAcademicCap size={20} />
            Universidade
          </ButtonLight>
        </div>
      </Classification>
    </InformationContainer>
  );
}
