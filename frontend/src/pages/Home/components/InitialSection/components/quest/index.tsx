import { ButtonQuest } from "./button/index";
import { Container, Title } from "./style";

export function Quest() {
  return (
    <>
      <Container>
        <Title>
          O quanto você conhece o
          <span> Guia alimentar para a população brasileira</span> ?
        </Title>
        <ButtonQuest />
      </Container>
    </>
  );
}
