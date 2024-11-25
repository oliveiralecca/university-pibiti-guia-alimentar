import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { useQuizContext } from "@/contexts/QuizContext";
import { useCreateUser } from "@/services/users";
import { areAllValuesFilled, replaceNaoSeiOptions } from "@/utils";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LinearStepper from "@mui/material/Stepper";

import { ButtonDark } from "../Button/Dark";
import { ButtonLight } from "../Button/Light";
import { Loader } from "../Loader";
import { useStepperContext } from "./contexts/StepperContext";
import { StepperContainer, buttonsBoxStyle, contentBoxStyle } from "./styles";

interface StepperProps {
  blocks: string[];
  children: ReactNode;
}

export function Stepper({ blocks, children }: StepperProps) {
  const navigate = useNavigate();

  const { activeStep, handleBack, handleNext } = useStepperContext();
  const {
    formType,
    termsAccepted,
    quizAnswers,
    schoolDescription,
    universityDescription,
    resetData,
  } = useQuizContext();

  const description =
    formType === "school"
      ? {
          ...schoolDescription,
          age: Number(schoolDescription.age),
        }
      : {
          ...universityDescription,
          age: Number(universityDescription.age),
        };

  const quiz = replaceNaoSeiOptions(quizAnswers);

  const isSubmitDisabled =
    !formType ||
    !quizAnswers ||
    !areAllValuesFilled(quizAnswers, undefined, true) ||
    (formType === "school" && !areAllValuesFilled(schoolDescription, true)) ||
    (formType === "university" &&
      !areAllValuesFilled(universityDescription, true));

  const blockOneComplete =
    quizAnswers &&
    [
      "question1",
      "question2",
      "question3",
      "question4",
      "question5",
      "question6",
    ].every((key) => key in quizAnswers);
  const blockTwoComplete =
    quizAnswers &&
    [
      "question7",
      "question8",
      "question9",
      "question10",
      "question11",
      "question12",
    ].every((key) => key in quizAnswers);
  const blockThreeComplete =
    quizAnswers &&
    [
      "question13",
      "question14",
      "question15",
      "question16",
      "question17",
      "question18",
    ].every((key) => key in quizAnswers);
  const blockFourComplete =
    quizAnswers &&
    [
      "question19",
      "question20",
      "question21",
      "question22",
      "question23",
      "question24",
    ].every((key) => key in quizAnswers);

  const isNextDisabled =
    (activeStep === 4 && !formType) ||
    (activeStep === 0 && !blockOneComplete) ||
    (activeStep === 1 && !blockTwoComplete) ||
    (activeStep === 2 && !blockThreeComplete) ||
    (activeStep === 3 && !blockFourComplete);

  const { createUser, isCreatingUser } = useCreateUser(formType, {
    termsAccepted,
    description,
    quiz,
  });

  const handleBackClick = () => {
    handleBack();
  };

  const handleNextClick = () => {
    handleNext();
  };

  const handleSubmit = async () => {
    await createUser();
    resetData();
    navigate("/quiz/resultado");
  };

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

        <Box sx={buttonsBoxStyle}>
          {activeStep < blocks.length + 2 && (
            <ButtonDark disabled={activeStep === 0} onClick={handleBackClick}>
              Anterior
            </ButtonDark>
          )}

          {activeStep === blocks.length + 1 ? (
            <ButtonLight
              disabled={isSubmitDisabled || isCreatingUser}
              onClick={handleSubmit}
            >
              {isCreatingUser ? <Loader size={35} /> : "Finalizar"}
            </ButtonLight>
          ) : (
            activeStep < blocks.length + 1 && (
              <ButtonDark onClick={handleNextClick} disabled={isNextDisabled}>
                Próximo
              </ButtonDark>
            )
          )}
        </Box>
      </>
    </StepperContainer>
  );
}
