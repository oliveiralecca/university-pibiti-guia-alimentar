import { ExampleSection } from "./components/ExampleSection";
import { InitialSection } from "./components/InitialSection";
import { LeanSection } from "./components/LEAN-Section";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <InitialSection />
      <ExampleSection />
      <InitialSection />
      <ExampleSection />
      <LeanSection />
    </HomeContainer>
  );
}
