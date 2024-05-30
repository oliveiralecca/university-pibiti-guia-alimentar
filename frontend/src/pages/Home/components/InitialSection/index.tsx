import { Image } from "./components/photo";
import { Quest } from "./components/quest";
import { Texts } from "./components/texts/index";
import { InitialSectionContainer, Container } from "./styles";

export function InitialSection() {
  return (
    <InitialSectionContainer>
      <Container>
        <Texts />
        <Image />
      </Container>
      <Quest />
    </InitialSectionContainer>
  );
}
