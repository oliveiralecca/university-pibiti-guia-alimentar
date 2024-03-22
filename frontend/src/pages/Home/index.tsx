import { ExampleSection } from "./components/ExampleSection";
import { InitialSection } from "./components/InitialSection";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <InitialSection />
      <ExampleSection />
    </HomeContainer>
  );
}
