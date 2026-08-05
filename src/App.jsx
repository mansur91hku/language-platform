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

// ── 2023-intake legacy flow ──────────────────────────────────────────────────
import Legacy2023PathwaySelection from "./Legacy2023PathwaySelection";
import Legacy2023Pathway1 from "./Legacy2023Pathway1";
import Legacy2023Pathway1LANG1403 from "./Legacy2023Pathway1LANG1403";
import Legacy2023Pathway2 from "./Legacy2023Pathway2";
import Legacy2023SchoolSelection from "./Legacy2023SchoolSelection";
import Legacy2023SMEDPlaceholder from "./Legacy2023SMEDPlaceholder";

// SBM
import Legacy2023SBMQuestion from "./Legacy2023SBMQuestion";
import Legacy2023SBMRMBICourses from "./Legacy2023SBMRMBICourses";
import Legacy2023SBMRMBICourses2 from "./Legacy2023SBMRMBICourses2";
import Legacy2023SBMStandardCourses from "./Legacy2023SBMStandardCourses";
import Legacy2023SBMChoiceCourses from "./Legacy2023SBMChoiceCourses";

// SENG / SHSS
import Legacy2023SENGCourses from "./Legacy2023SENGCourses";
import Legacy2023SHSSCourses from "./Legacy2023SHSSCourses";

// SSCI
import Legacy2023SSCICourses from "./Legacy2023SSCICourses";
import Legacy2023SSCIProgramQuestion from "./Legacy2023SSCIProgramQuestion";
import {
  Legacy2023SSCIOSTProg,
  Legacy2023SSCIIREProg,
  Legacy2023SSCIBTBProg,
  Legacy2023SSCIMAECProg,
  Legacy2023SSCIMAECChoice,
} from "./Legacy2023SSCISubPrograms";

// AIS
import Legacy2023AISQuestion from "./Legacy2023AISQuestion";
import Legacy2023AISISDQuestion from "./Legacy2023AISISDQuestion";
import {
  Legacy2023AISCoreChoice,
  Legacy2023AISLANG2062,
  Legacy2023AISChoiceCourses,
  Legacy2023AISISDCourses,
} from "./Legacy2023AISSubPrograms";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* ── Home ── */}
        <Route path="/" element={<LanguageHomePage />} />

        {/* ── English year selection ── */}
        <Route path="/english" element={<EnglishYearSelection />} />

        {/* ── 2024 / 2025 / 2026 flow ── */}
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

        {/* ── 2023 legacy flow ── */}
        <Route path="/english/2023/pathways" element={<Legacy2023PathwaySelection />} />
        <Route path="/english/2023/pathway1" element={<Legacy2023Pathway1 />} />
        <Route path="/english/2023/pathway1/lang1403" element={<Legacy2023Pathway1LANG1403 />} />
        <Route path="/english/2023/pathway2" element={<Legacy2023Pathway2 />} />
        <Route path="/english/2023/school" element={<Legacy2023SchoolSelection />} />
        <Route path="/english/2023/smed" element={<Legacy2023SMEDPlaceholder />} />

        {/* SBM */}
        <Route path="/english/2023/sbm" element={<Legacy2023SBMQuestion />} />
        <Route path="/english/2023/sbm/rmbi" element={<Legacy2023SBMRMBICourses />} />
        <Route path="/english/2023/sbm/rmbi/2" element={<Legacy2023SBMRMBICourses2 />} />
        <Route path="/english/2023/sbm/standard" element={<Legacy2023SBMStandardCourses />} />
        <Route path="/english/2023/sbm/standard/choice" element={<Legacy2023SBMChoiceCourses />} />

        {/* SENG & SHSS */}
        <Route path="/english/2023/seng" element={<Legacy2023SENGCourses />} />
        <Route path="/english/2023/shss" element={<Legacy2023SHSSCourses />} />

        {/* SSCI */}
        <Route path="/english/2023/ssci" element={<Legacy2023SSCICourses />} />
        <Route path="/english/2023/ssci/program" element={<Legacy2023SSCIProgramQuestion />} />
        <Route path="/english/2023/ssci/ost" element={<Legacy2023SSCIOSTProg />} />
        <Route path="/english/2023/ssci/ire" element={<Legacy2023SSCIIREProg />} />
        <Route path="/english/2023/ssci/btb" element={<Legacy2023SSCIBTBProg />} />
        <Route path="/english/2023/ssci/maec" element={<Legacy2023SSCIMAECProg />} />
        <Route path="/english/2023/ssci/maec/choice" element={<Legacy2023SSCIMAECChoice />} />

        {/* AIS */}
        <Route path="/english/2023/ais" element={<Legacy2023AISQuestion />} />
        <Route path="/english/2023/ais/isd-question" element={<Legacy2023AISISDQuestion />} />
        <Route path="/english/2023/ais/core-choice" element={<Legacy2023AISCoreChoice />} />
        <Route path="/english/2023/ais/lang2062" element={<Legacy2023AISLANG2062 />} />
        <Route path="/english/2023/ais/choice" element={<Legacy2023AISChoiceCourses />} />
        <Route path="/english/2023/ais/isd" element={<Legacy2023AISISDCourses />} />
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