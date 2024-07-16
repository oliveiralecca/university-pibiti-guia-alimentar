type Answer = 0 | 1;

export interface SchoolUserDescription {
  gender: string;
  age: number;
  state: string;
  knowGuia: string;
  opinionAbout?: string;
}

export interface UniversityUserDescription {
  gender: string;
  age: number;
  course: string;
  campus: string;
  courseType: string;
  healthGraduated: string;
  knowGuia: string;
  opinionAbout?: string;
}

export interface QuizAnswers {
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

export interface User {
  description: SchoolUserDescription | UniversityUserDescription;
  quiz: QuizAnswers;
}
