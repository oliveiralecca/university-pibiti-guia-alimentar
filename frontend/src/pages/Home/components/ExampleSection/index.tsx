import { ButtonDark } from "@/components/Button/Dark";
import { ButtonLight } from "@/components/Button/Light";
import { Input } from "@/components/Input";

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
