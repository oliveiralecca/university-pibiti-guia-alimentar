import { HiOutlineAnnotation } from "react-icons/hi";

import { useTheme } from "styled-components";

import { InformationContainer, MainContent, Title } from "./styles";

export function Information() {
  const theme = useTheme();

  return (
    <InformationContainer>
      <MainContent>
        <HiOutlineAnnotation size={100} color={theme.colors.secondary.pink} />
        <Title>
          Agora precisamos te conhecer, siga para responder algumas perguntas de
          caracterização.
        </Title>
      </MainContent>
    </InformationContainer>
  );
}
