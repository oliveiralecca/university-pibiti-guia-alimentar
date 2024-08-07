import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

import { useFetchCourses } from "@/services/courses";
import { Course } from "@/services/courses/types";
import { useFetchStates } from "@/services/states";
import { State } from "@/services/states/types";
import { AdditionalResultPages } from "@/services/users/types";
import { countAdditionalPages } from "@/utils";
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
  wrongAnswers: number[] | undefined;
  additionalPages: AdditionalResultPages | undefined;
  pagesQt: number;
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
  setWrongAnswers: Dispatch<SetStateAction<number[] | undefined>>;
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
  const [wrongAnswers, setWrongAnswers] = useState<number[]>();
  const [additionalPages, setAdditionalPages] =
    useState<AdditionalResultPages>();
  const [pagesQt, setPagesQt] = useState<number>(0);

  const { fetchStates, states, isStatesValidating } = useFetchStates();
  const { fetchCourses, courses, isCoursesValidating } = useFetchCourses();

  const userResults = localStorage.getItem("userResult");
  const additionalPagesJSON = localStorage.getItem("additionalResultPages");

  useEffect(() => {
    if (userResults) {
      const resultObj = JSON.parse(userResults);
      setScore(resultObj.score);
      setWrongAnswers(resultObj.wrongAnswers);
    }

    if (additionalPagesJSON)
      setAdditionalPages(JSON.parse(additionalPagesJSON));
  }, [additionalPagesJSON, userResults]);

  useEffect(() => {
    if (additionalPages) {
      setPagesQt(countAdditionalPages(additionalPages));
    }
  }, [additionalPages]);

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
      wrongAnswers,
      additionalPages,
      pagesQt,
      setFormType,
      setQuizAnswers,
      setSchoolDescription,
      setUniversityDescription,
      fetchStates,
      fetchCourses,
      resetData,
      setScore,
      setWrongAnswers,
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
      wrongAnswers,
      additionalPages,
      pagesQt,
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
