import { Routes, Route } from "react-router-dom";

import { StepperProvider } from "@/components/Stepper/contexts/StepperContext";
import { DefaultLayout } from "@/layouts/Default";
import { Home } from "@/pages/Home";
import { Quiz } from "@/pages/Quiz";
import { QuizIntroducao } from "@/pages/QuizIntroducao";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizIntroducao />} />
        <Route
          path="/quiz/questoes"
          element={
            <StepperProvider>
              <Quiz />
            </StepperProvider>
          }
        />
      </Route>
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
}
