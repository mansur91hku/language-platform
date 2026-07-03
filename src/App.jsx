import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LanguageHomePage from "./HomePage";
import EnglishYearSelection from "./EnglishYearSelection";
import EnglishPathwaySelection from "./EnglishPathwaySelection";
import EnglishPathway1 from "./EnglishPathway1";
import SchoolSelection from "./SchoolSelection";
import ScienceCourseSelection from "./ScienceCourseSelection";
import EngineeringCourseSelection from "./EngineeringCourseSelection";
import BusinessCourseSelection from "./BusinessCourseSelection";
import HumanitiesCourseSelection from "./HumanitiesCourseSelection";
import AISCourseSelection from "./AISCourseSelection";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LanguageHomePage />} />
        <Route path="/english" element={<EnglishYearSelection />} />
        <Route path="/english/pathways" element={<EnglishPathwaySelection />} />
        <Route path="/english/pathway1" element={<EnglishPathway1 />} />
        <Route path="/english/pathway1/school" element={<SchoolSelection />} />
        <Route path="/english/pathway1/science" element={<ScienceCourseSelection />} />
        <Route path="/english/pathway1/engineering" element={<EngineeringCourseSelection />} />
        <Route path="/english/pathway1/business" element={<BusinessCourseSelection />} />
        <Route path="/english/pathway1/humanities" element={<HumanitiesCourseSelection />} />
        <Route path="/english/pathway1/ais" element={<AISCourseSelection />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;