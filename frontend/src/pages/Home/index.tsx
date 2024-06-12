import { ExampleSection } from "./components/ExampleSection";
import { InitialSection } from "./components/InitialSection";
import { ProjectSection } from "./components/ProjectSection";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <InitialSection />
      <ExampleSection />
      <InitialSection />
      <ProjectSection />
    </HomeContainer>
  );
}
