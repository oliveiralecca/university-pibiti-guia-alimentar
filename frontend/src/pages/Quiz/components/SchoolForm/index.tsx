import { RadioButton } from "@/components/Input/Radio";
import { Input } from "@/components/Input/Text";
import { Select } from "@/components/Select";
import { useQuizContext } from "@/contexts/QuizContext";
import { preventSymbolsAndLimitDigits, transformAndSortStates } from "@/utils";

import { BlockContainer } from "../BlockContainer";
import { Form, InputNumber, Title } from "./styles";

// TODO: persistir valores dos Radio e Select -> aqui e no outro form
export function SchoolForm() {
  const { schoolDescription, setSchoolDescription, states } = useQuizContext();

  const statesOptions = transformAndSortStates(states);

  const handleFieldChange = (field: string, value: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSchoolDescription((previous: any) => {
      if (field === "knowGuia" && value === "não conheço") {
        return {
          ...previous,
          opinionAbout: undefined,
          [field]: value,
        };
      }

      return {
        ...previous,
        [field]: value,
      };
    });
  };

  return (
    <BlockContainer gap={50} mobileGap={30}>
      <Title>Questionário</Title>
      <Form>
        <RadioButton
          name="gender"
          label="Como você se identifica?"
          options={[
            { label: "Homem", value: "homem" },
            { label: "Mulher", value: "mulher" },
            { label: "Outro", value: "outro" },
          ]}
          onButtonChange={(option) => handleFieldChange("gender", option)}
        />

        <InputNumber>
          <label htmlFor="age">Qual a sua idade?</label>
          <Input
            id="age"
            type="number"
            value={schoolDescription.age}
            onKeyDown={preventSymbolsAndLimitDigits}
            onChange={(e) => handleFieldChange("age", e.target.value)}
          />
        </InputNumber>

        <Select
          id="state"
          label="Estado de residência:"
          options={statesOptions}
          onSelectChange={(option) => handleFieldChange("state", option)}
        />

        <RadioButton
          name="knowGuia"
          direction="column"
          label="Você conhece o Guia Alimentar para População Brasileira, livro publicado pelo Ministério da Saúde?"
          options={[
            { label: "Não conheço", value: "não conheço" },
            { label: "Já ouvir falar", value: "já ouvi falar" },
            {
              label:
                "Já tive algum contato (vi reportagem, participei de evento ou já folheei)",
              value: "já tive algum contato",
            },
            { label: "Já li boa parte", value: "já li boa parte" },
          ]}
          onButtonChange={(option) => handleFieldChange("knowGuia", option)}
        />

        {schoolDescription.knowGuia &&
          schoolDescription.knowGuia !== "não conheço" && (
            <RadioButton
              name="opinionAbout"
              direction="column"
              label="Do que você conheceu, o que achou das orientações?"
              options={[
                { label: "Fáceis", value: "fáceis" },
                { label: "Difíceis", value: "difíceis" },
                {
                  label: "Não tenho opinião formada",
                  value: "não tenho opinião formada",
                },
              ]}
              onButtonChange={(option) =>
                handleFieldChange("opinionAbout", option)
              }
            />
          )}
      </Form>
    </BlockContainer>
  );
}
