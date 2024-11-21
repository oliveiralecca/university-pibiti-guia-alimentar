import { KeyboardEvent } from "react";

import { Quiz } from "@/contexts/QuizContext";
import { Course } from "@/services/courses/types";
import { State } from "@/services/states/types";
import { AdditionalResultPages, QuizAnswers } from "@/services/users/types";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const preventSymbolsAndLimitDigits = (
  e: KeyboardEvent<HTMLInputElement>,
) => {
  const target = e.target as HTMLInputElement;

  if (["e", "E", "+", "-"].includes(e.key)) {
    e.preventDefault();
  }

  const currentValue = target.value;
  const digitCount = currentValue.replace(/\D/g, "").length;

  if (digitCount >= 2 && /\d/.test(e.key)) {
    e.preventDefault();
  }
};

export const transformAndSortStates = (
  states?: State[],
): { label: string; value: string }[] => {
  if (!states) return [];
  return (
    states
      .map((state) => ({
        label: state.nome,
        value: state.nome.toLowerCase(),
      }))
      // .sort((a, b) => a.label.localeCompare(b.label));
      .sort((a, b) => {
        if (a.label === "Sergipe") return -1;
        if (b.label === "Sergipe") return 1;
        return a.label.localeCompare(b.label);
      })
  );
};

export const transformCourses = (
  courses?: Course[],
): { label: string; value: string }[] => {
  if (!courses) return [];
  return courses.map((course) => ({
    label: course.name,
    value: course.name.toLowerCase(),
  }));
};

type QuestionObject = {
  [key: string]: number | string;
};

export const replaceNaoSeiOptions = (obj: Quiz | undefined): QuizAnswers => {
  if (!obj) return {} as unknown as QuizAnswers;
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = value === "não sei" ? 0 : value;
    return acc;
  }, {} as QuestionObject) as unknown as QuizAnswers;
};

type GenericObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const areAllValuesFilled = (
  obj: GenericObject,
  formObject?: boolean,
  quizObject?: boolean,
): boolean => {
  if (quizObject) {
    if (Object.keys(obj).length !== 24) {
      return false;
    }
  }

  return Object.values(obj).every((value, index) => {
    const key = Object.keys(obj)[index];
    if (formObject && key === "opinionAbout") {
      return true;
    }
    return value !== null && value !== undefined && value !== "";
  });
};

export const filterWrongQuestions = (obj: QuizAnswers): number[] => {
  return Object.keys(obj)
    .filter((key) => obj[key as keyof QuizAnswers] === 0)
    .map((key) => parseInt(key.replace("question", ""), 10));
};

export function hasAtLeastTwoCommonElements(
  wrongAnswers: number[],
  template: number[],
) {
  let commonElementsCount = 0;

  for (let i = 0; i < template.length; i += 1) {
    if (wrongAnswers.includes(template[i])) {
      commonElementsCount += 1;
      if (commonElementsCount >= 2) {
        return true;
      }
    }
  }

  return false;
}

export const countAdditionalPages = (pages: AdditionalResultPages) => {
  let count = 0;

  if (pages.additionalPage1) count += 1;
  if (pages.additionalPage2) count += 1;
  if (pages.additionalPage3) count += 1;

  return count;
};
