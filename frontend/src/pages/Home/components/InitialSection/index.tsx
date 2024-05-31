import { RadioButton } from "@/components/Input/Radio";
import { Select } from "@/components/Select";

import { InitialSectionContainer } from "./styles";

export function InitialSection() {
  return (
    <InitialSectionContainer id="inicio">
      <Select
        label="Guia Alimentar"
        options={[
          { label: "male", value: "male" },
          { label: "female", value: "female" },
        ]}
      />

      <RadioButton
        label="Guia Alimentar"
        options={[
          { label: "male", value: "male" },
          { label: "female", value: "female" },
        ]}
      />
    </InitialSectionContainer>
  );
}
