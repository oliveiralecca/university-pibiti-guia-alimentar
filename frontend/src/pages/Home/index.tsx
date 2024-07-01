import { ExampleSection } from "./components/ExampleSection";
import { ProjectSection } from "./components/ProjectSection";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <ExampleSection />
      <ExampleSection />
      <ExampleSection />
      <ProjectSection />
    </HomeContainer>
  );
}
