import { createContext, useContext, ReactNode, useState, useMemo } from "react";

interface StepperState {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
}

interface StepperProviderProps {
  children: ReactNode;
}

const StepperContext = createContext<StepperState | null>(null);

function StepperProvider({ children }: StepperProviderProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const values = useMemo(
    () => ({
      activeStep,
      handleNext,
      handleBack,
    }),
    [activeStep],
  );

  return (
    <StepperContext.Provider value={values}>{children}</StepperContext.Provider>
  );
}

function useStepperContext() {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error("Stepper context must not be used outside its provider");
  }

  return context;
}

export { StepperProvider, useStepperContext };
