import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";

import { useFetchStates } from "@/services/states";
import { State } from "@/services/states/types";

type FormType = "school" | "university" | undefined;
type Answer = 0 | 1;

interface Quiz {
  question1: Answer;
  question2: Answer;
  question3: Answer;
  question4: Answer;
  question5: Answer;
  question6: Answer;
  question7: Answer;
  question8: Answer;
  question9: Answer;
  question10: Answer;
  question11: Answer;
  question12: Answer;
  question13: Answer;
  question14: Answer;
  question15: Answer;
  question16: Answer;
  question17: Answer;
  question18: Answer;
  question19: Answer;
  question20: Answer;
  question21: Answer;
  question22: Answer;
  question23: Answer;
  question24: Answer;
}

interface SchoolDescription {
  gender: string;
  age: string; // TODO: transformar em number quando enviar pro back
  state: string;
  knowGuia: string;
  opinionAbout?: string;
}

interface QuizState {
  formType: FormType;
  quizAnswers: Quiz | undefined;
  schoolDescription: SchoolDescription;
  states: State[] | undefined;
  isStatesValidating: boolean;
  setFormType: Dispatch<SetStateAction<FormType>>;
  setQuizAnswers: Dispatch<SetStateAction<Quiz | undefined>>;
  setSchoolDescription: Dispatch<SetStateAction<SchoolDescription>>;
}

interface QuizProviderProps {
  children: ReactNode;
}

const QuizContext = createContext<QuizState | null>(null);

function QuizProvider({ children }: QuizProviderProps) {
  const [formType, setFormType] = useState<FormType>();
  const [quizAnswers, setQuizAnswers] = useState<Quiz>();
  const [schoolDescription, setSchoolDescription] = useState<SchoolDescription>(
    {
      age: "",
      gender: "",
      knowGuia: "",
      state: "",
      opinionAbout: undefined,
    },
  );

  const { data: states, isValidating: isStatesValidating } = useFetchStates();

  const values = useMemo(
    () => ({
      formType,
      quizAnswers,
      schoolDescription,
      states,
      isStatesValidating,
      setFormType,
      setQuizAnswers,
      setSchoolDescription,
    }),
    [formType, isStatesValidating, quizAnswers, schoolDescription, states],
  );

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
}

function useQuizContext() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("Quiz context must not be used outside its provider");
  }

  return context;
}

export { QuizProvider, useQuizContext };
