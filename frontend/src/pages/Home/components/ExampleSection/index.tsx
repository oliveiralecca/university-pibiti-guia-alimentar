import { ExampleContainer } from "./styles";
import { Input } from "@/components/DefaultInput/input";
import { ButtonDark } from "@/components/BtnDarkColor/button";
import { ButtonLight } from "@/components/BtnLightColor/button";

export function ExampleSection() {
  return (
    <ExampleContainer>
      <ButtonLight></ButtonLight>
      <Input placeholder='abc@gmail.com' />
      <ButtonDark></ButtonDark>
    </ExampleContainer>
  );
}
