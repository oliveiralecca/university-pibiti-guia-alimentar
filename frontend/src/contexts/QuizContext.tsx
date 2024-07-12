import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";

type FormType = "school" | "university" | undefined;

interface QuizState {
  formType: FormType;
  setFormType: Dispatch<SetStateAction<FormType>>;
}

interface QuizProviderProps {
  children: ReactNode;
}

const QuizContext = createContext<QuizState | null>(null);

function QuizProvider({ children }: QuizProviderProps) {
  const [formType, setFormType] = useState<FormType>();

  const values = useMemo(
    () => ({
      formType,
      setFormType,
    }),
    [formType],
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
