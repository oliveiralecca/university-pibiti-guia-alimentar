import { useEffect } from "react";

import { GuiaSection } from "./components/GuiaSection";
import { LeanSection } from "./components/LeanSection";
import { ProjectSection } from "./components/ProjectSection";
import { HomeContainer } from "./styles";

export function Home() {
  useEffect(() => {
    localStorage.removeItem("userResult");
  }, []);

  return (
    <HomeContainer>
      <GuiaSection />
      <ProjectSection />
      <LeanSection />
    </HomeContainer>
  );
}
