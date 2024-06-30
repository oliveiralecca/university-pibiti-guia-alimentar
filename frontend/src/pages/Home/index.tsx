import { ExampleSection } from "./components/ExampleSection";
import { LeanSection } from "./components/LEAN-Section";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <ExampleSection />
      <LeanSection />
    </HomeContainer>
  );
}
