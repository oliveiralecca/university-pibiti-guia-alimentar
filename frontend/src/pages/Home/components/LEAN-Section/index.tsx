import leanicon from "@/assets/lean-icon.svg";
import ufsicon from "@/assets/ufs-icon.svg";

import { TextsSection } from "./components/TextsLEAN";
import { LeanContainer, ImgContainer } from "./style";

export function LeanSection() {
  return (
    <LeanContainer>
      <TextsSection />
      <ImgContainer>
        <img src={ufsicon} alt="Imagem do logo da UFS" />
        <img src={leanicon} alt="Imagem do logo do LEAN" />
      </ImgContainer>
    </LeanContainer>
  );
}
