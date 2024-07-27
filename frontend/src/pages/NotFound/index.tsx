import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import notFound from "@/assets/not-found.svg";
import { ButtonSecondary } from "@/components/Button/Secondary";

import { MainContent, Title, NotFoundContainer, Image } from "./styles";

export function NotFound() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <MainContent>
        <Title>Desculpe, não encontramos essa página 😞</Title>

        <Image
          width={700}
          src={notFound}
          alt="Imagem de erro para a página não encontrada."
        />

        <Title>Vamos tentar novamente!</Title>

        <ButtonSecondary onClick={backToHome}>
          <HiHome size={30} />
          Voltar para o Início
        </ButtonSecondary>
      </MainContent>
    </NotFoundContainer>
  );
}
