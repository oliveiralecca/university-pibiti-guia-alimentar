import { useEffect } from "react";

import { GuiaSection } from "./components/GuiaSection";
import { LeanSection } from "./components/LeanSection";
import { ProjectSection } from "./components/ProjectSection";
import { HomeContainer } from "./styles";

export function Home() {
  useEffect(() => {
    localStorage.removeItem("userResult");
    localStorage.removeItem("additionalResultPages");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeContainer>
      <GuiaSection />
      <ProjectSection />
      <LeanSection />
    </HomeContainer>
  );
}
