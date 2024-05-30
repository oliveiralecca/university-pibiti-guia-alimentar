import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "@/layouts/Default";
import { Home } from "@/pages/Home";

import { StepperProvider } from "./components/Stepper/contexts/StepperContext";
import { Quiz } from "./pages/Quiz";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/teste"
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
