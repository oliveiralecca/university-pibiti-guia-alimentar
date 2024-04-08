import { ButtonDark } from "@/components/Buttons/Dark/button";
import { ButtonLight } from "@/components/Buttons/Light/button";
import { Input } from "@/components/DefaultInput/input";

import { ExampleContainer } from "./styles";

export function ExampleSection() {
  return (
    <ExampleContainer>
      <ButtonLight text="Sign In" />
      <Input placeholder="abc@gmail.com" />
      <ButtonDark text="Login" />
    </ExampleContainer>
  );
}
