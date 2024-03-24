import { ExampleContainer } from "./styles";
import { Input } from "../Email/input";
import { ButtonSig } from  "../SignIn/button";
import { ButtonLog } from "../Login/button";


export function ExampleSection() {
  return (
    <ExampleContainer>
      <ButtonSig></ButtonSig>
        <Input placeholder='abc@gmail.com' />
      <ButtonLog></ButtonLog>
    </ExampleContainer>
  );
}
