import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "@/layouts/Default";
import { Home } from "@/pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/questionario"
          element={<p>Futura página de questionário</p>}
        />
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
