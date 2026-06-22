import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CaseStudy from "../pages/CaseStudy";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/case-study/:slug"
        element={<CaseStudy />}
      />
    </Routes>
  );
}

export default AppRoutes;