import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";

import { useFetchCourses } from "@/services/courses";
import { Course } from "@/services/courses/types";
import { useFetchStates } from "@/services/states";
import { State } from "@/services/states/types";
import { Key } from "swr";
import { TriggerWithoutArgs } from "swr/mutation";

type FormType = "school" | "university" | undefined;
type Answer = 0 | 1 | "não sei";

export interface Quiz {
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
  age: string;
  state: string;
  knowGuia: string;
  opinionAbout?: string;
}

interface UniversityDescription {
  gender: string;
  age: string;
  course: string;
  campus: string;
  courseType: string;
  healthGraduated: string;
  knowGuia: string;
  opinionAbout?: string;
}

interface QuizState {
  formType: FormType;
  quizAnswers: Quiz | undefined;
  schoolDescription: SchoolDescription;
  universityDescription: UniversityDescription;
  states: State[] | undefined;
  isStatesValidating: boolean;
  courses: Course[] | undefined;
  isCoursesValidating: boolean;
  score: number | undefined;
  setFormType: Dispatch<SetStateAction<FormType>>;
  setQuizAnswers: Dispatch<SetStateAction<Quiz | undefined>>;
  setSchoolDescription: Dispatch<SetStateAction<SchoolDescription>>;
  setUniversityDescription: Dispatch<SetStateAction<UniversityDescription>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchStates: TriggerWithoutArgs<State[], any, Key, never>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchCourses: TriggerWithoutArgs<Course[], any, Key, never>;
  resetData: () => void;
  setScore: Dispatch<SetStateAction<number | undefined>>;
}

interface QuizProviderProps {
  children: ReactNode;
}

const emptySchoolDescription = {
  age: "",
  gender: "",
  knowGuia: "",
  state: "",
  opinionAbout: undefined,
};

const emptyUniversityDescription = {
  age: "",
  gender: "",
  course: "",
  campus: "",
  courseType: "",
  healthGraduated: "",
  knowGuia: "",
  opinionAbout: undefined,
};

const QuizContext = createContext<QuizState | null>(null);

function QuizProvider({ children }: QuizProviderProps) {
  const [formType, setFormType] = useState<FormType>();
  const [quizAnswers, setQuizAnswers] = useState<Quiz>();
  const [schoolDescription, setSchoolDescription] = useState<SchoolDescription>(
    emptySchoolDescription,
  );
  const [universityDescription, setUniversityDescription] =
    useState<UniversityDescription>(emptyUniversityDescription);
  const [score, setScore] = useState<number>();

  const { fetchStates, states, isStatesValidating } = useFetchStates();
  const { fetchCourses, courses, isCoursesValidating } = useFetchCourses();

  const resetData = () => {
    setFormType(undefined);
    setSchoolDescription(emptySchoolDescription);
    setUniversityDescription(emptyUniversityDescription);
    setQuizAnswers(undefined);
  };

  const values = useMemo(
    () => ({
      formType,
      quizAnswers,
      schoolDescription,
      universityDescription,
      states,
      isStatesValidating,
      courses,
      isCoursesValidating,
      score,
      setFormType,
      setQuizAnswers,
      setSchoolDescription,
      setUniversityDescription,
      fetchStates,
      fetchCourses,
      resetData,
      setScore,
    }),
    [
      formType,
      quizAnswers,
      schoolDescription,
      universityDescription,
      states,
      isStatesValidating,
      courses,
      isCoursesValidating,
      score,
      fetchStates,
      fetchCourses,
    ],
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
