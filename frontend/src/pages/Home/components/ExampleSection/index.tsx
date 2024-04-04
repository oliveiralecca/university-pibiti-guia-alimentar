import { ButtonDark } from "@/components/Buttons/Dark/button";
import { ButtonLight } from "@/components/Buttons/Light/button";
import { Input } from "@/components/DefaultInput/input";

import { ExampleContainer } from "./styles";

export function ExampleSection() {
  return (
    <ExampleContainer>
      <ButtonLight>Sign In</ButtonLight>
      <Input placeholder="abc@gmail.com" />
      <ButtonDark>Login</ButtonDark>
    </ExampleContainer>
  );
}
