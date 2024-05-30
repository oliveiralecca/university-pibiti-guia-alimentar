import { ReactNode } from "react";

import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LinearStepper from "@mui/material/Stepper";

import { ButtonDark } from "../Button/Dark";
import { ButtonLight } from "../Button/Light";
import { useStepperContext } from "./contexts/StepperContext";
import { StepperContainer, buttonsBoxStyle, contentBoxStyle } from "./styles";

interface StepperProps {
  blocks: string[];
  children: ReactNode;
}

export function Stepper({ blocks, children }: StepperProps) {
  const { activeStep, handleBack, handleNext } = useStepperContext();

  return (
    <StepperContainer>
      <LinearStepper alternativeLabel activeStep={activeStep}>
        {blocks.map((label) => {
          const stepProps: { completed?: boolean } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </LinearStepper>

      <>
        <Box sx={contentBoxStyle}>{children}</Box>

        <Box sx={buttonsBoxStyle(activeStep, blocks)}>
          {activeStep < blocks.length + 1 && (
            <ButtonDark
              text="Anterior"
              disabled={activeStep === 0}
              onClick={handleBack}
            />
          )}

          {activeStep === blocks.length + 1 ? (
            <ButtonLight text="Finalizar" onClick={handleNext} />
          ) : (
            activeStep < blocks.length + 1 && (
              <ButtonDark text="Próximo" onClick={handleNext} />
            )
          )}
        </Box>
      </>
    </StepperContainer>
  );
}
