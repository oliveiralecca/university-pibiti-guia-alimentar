import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "@/layouts/Default";
import { Home } from "@/pages/Home";

import { Quiz } from "./pages/Quiz";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/questionario" element={<Quiz />} />
        <Route
          path="/sobre"
          element={
            <p>
              Página sobre a equipe ou sobre o projeto ou sobre o guia
              (superficial)
            </p>
          }
        />
      </Route>
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
}
