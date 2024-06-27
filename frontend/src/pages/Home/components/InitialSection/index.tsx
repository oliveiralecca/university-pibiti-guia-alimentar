import { Photo } from "./components/Photo/index";
import { Quest } from "./components/quest/index";
import { Texts } from "./components/Texts/index";
import { InitialSectionContainer, Container } from "./styles";

export function InitialSection() {
  return (
    <InitialSectionContainer>
      <Container>
        <Texts />
        <Photo />
      </Container>
      <Quest />
    </InitialSectionContainer>
  );
}
