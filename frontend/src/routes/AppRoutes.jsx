import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CaseStudy from "../pages/CaseStudy";
import Resume from "../pages/Resume";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/resume"
        element={<Resume />}
      />

      <Route
        path="/case-study/:slug"
        element={<CaseStudy />}
      />
    </Routes>
  );
}

export default AppRoutes;