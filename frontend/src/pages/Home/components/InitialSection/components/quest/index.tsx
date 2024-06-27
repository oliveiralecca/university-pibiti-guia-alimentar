import { ButtonQuest } from "./Button/index";
import { Container, Title, Span } from "./style";

export function Quest() {
  return (
    <Container>
      <Title>
        O quanto você conhece o
        <Span>
          {" "}
          Guia Alimentar para a População Brasileira <span>?</span>
        </Span>
      </Title>
      <ButtonQuest />
    </Container>
  );
}
