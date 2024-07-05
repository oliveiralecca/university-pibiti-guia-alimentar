import { GuiaSection } from "./components/GuiaSection";
import { ProjectSection } from "./components/ProjectSection";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <GuiaSection />
      <ProjectSection />
    </HomeContainer>
  );
}
