import lateralguia from "@/assets/lateral-guia.svg";

import { Texts } from "./components/texts";
import { ProjectSectionContainer } from "./style";

export function ProjectSection() {
  return (
    <ProjectSectionContainer>
      <section>
        <img src={lateralguia} alt="Capa do guia" />
      </section>
      <Texts />
    </ProjectSectionContainer>
  );
}
