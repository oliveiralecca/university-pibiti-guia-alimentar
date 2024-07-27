import { Routes, Route } from "react-router-dom";

import { StepperProvider } from "@/components/Stepper/contexts/StepperContext";
import { QuizProvider } from "@/contexts/QuizContext";
import { DefaultLayout } from "@/layouts/Default";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Quiz } from "@/pages/Quiz";
import { QuizIntroducao } from "@/pages/QuizIntroducao";
import { Result } from "@/pages/Result";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <QuizProvider>
              <QuizIntroducao />
            </QuizProvider>
          }
        />
        <Route
          path="/quiz/questoes"
          element={
            <QuizProvider>
              <StepperProvider>
                <Quiz />
              </StepperProvider>
            </QuizProvider>
          }
        />
        <Route
          path="/quiz/result"
          element={
            <QuizProvider>
              <Result />
            </QuizProvider>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
