import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LanguageHomePage from "./HomePage";
import EnglishYearSelection from "./EnglishYearSelection";
import EnglishPathwaySelection from "./EnglishPathwaySelection";
import EnglishPathway1 from "./EnglishPathway1";
import EnglishPathway2 from "./EnglishPathway2";
import SchoolSelection from "./SchoolSelection";
import ScienceCourseSelection from "./ScienceCourseSelection";
import EngineeringCourseSelection from "./EngineeringCourseSelection";
import BusinessCourseSelection from "./BusinessCourseSelection";
import HumanitiesCourseSelection from "./HumanitiesCourseSelection";
import AISCourseSelection from "./AISCourseSelection";
import OSTQuestion from "./OSTQuestion";
import OSTCourseSelection from "./OSTCourseSelection";
import IREQuestion from "./IREQuestion";
import IRECourseSelection from "./IRECourseSelection";
import AdvancedCommunicationCourses from "./AdvancedCommunicationCourses";
import ISDQuestion from "./ISDQuestion";
import ISDCourseSelection from "./ISDCourseSelection";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LanguageHomePage />} />
        <Route path="/english" element={<EnglishYearSelection />} />
        <Route path="/english/pathways" element={<EnglishPathwaySelection />} />
        <Route path="/english/pathway1" element={<EnglishPathway1 />} />
        <Route path="/english/pathway2" element={<EnglishPathway2 />} />
        <Route path="/english/pathway1/school" element={<SchoolSelection />} />
        <Route path="/english/pathway1/science" element={<ScienceCourseSelection />} />
        <Route path="/english/pathway1/engineering" element={<EngineeringCourseSelection />} />
        <Route path="/english/pathway1/business" element={<BusinessCourseSelection />} />
        <Route path="/english/pathway1/humanities" element={<HumanitiesCourseSelection />} />
        <Route path="/english/pathway1/ais" element={<AISCourseSelection />} />
        <Route path="/english/pathway1/science/ost" element={<OSTQuestion />} />
        <Route path="/english/pathway1/science/ost/yes" element={<OSTCourseSelection />} />
        <Route path="/english/pathway1/science/ost/no" element={<IREQuestion />} />
        <Route path="/english/pathway1/science/ost/no/yes" element={<IRECourseSelection />} />
        <Route path="/english/pathway1/science/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/pathway1/ais/isd" element={<ISDQuestion />} />
        <Route path="/english/pathway1/ais/isd/yes" element={<ISDCourseSelection />} />
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