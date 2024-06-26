import { Image } from "./components/photo";
import { Quest } from "./components/quest";
import { Texts } from "./components/texts";
import { Container, InitialSectionContainer } from "./styles";

export function InitialSection() {
  return (
    <InitialSectionContainer id="inicio">
      <Container>
        <Texts />
        <Image />
      </Container>
      <Quest />
    </InitialSectionContainer>
  );
}
