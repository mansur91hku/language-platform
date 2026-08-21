import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LanguageHomePage from "./HomePage";
import { getEnglishYear } from "./utils/englishYear";
import EnglishYearSelection from "./EnglishYearSelection";
import ChineseBackgroundSelection from "./ChineseBackgroundSelection";
import ChineseBackgroundCourses from "./ChineseBackgroundCourses";
import ChineseNonBackgroundCourses from "./ChineseNonBackgroundCourses";
import ChineseGCSQuestion from "./ChineseGCSQuestion";
import ChineseGCSLANG2170 from "./ChineseGCSLANG2170";
import ChineseOtherCourses from "./ChineseOtherCourses";
import ChineseNonBackgroundElectives from "./ChineseNonBackgroundElectives";

// ── Third Languages ───────────────────────────────────────────────────────────
import ThirdLanguageSelection from "./ThirdLanguageSelection";
import JapaneseBeginner from "./JapaneseBeginner";
import KoreanBeginner from "./KoreanBeginner";
import FrenchBeginner from "./FrenchBeginner";
import SpanishBeginner from "./SpanishBeginner";
import CantoneseBackgroundQuestion from "./CantoneseBackgroundQuestion";
import CantoneseChineseBackground from "./CantoneseChineseBackground";
import CantoneseNonChineseBackground from "./CantoneseNonChineseBackground";
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
import OSTIREProgramQuestion from "./OSTIREProgramQuestion";
import ScienceNeitherCourses from "./ScienceNeitherCourses";
import SchoolOtherCourses from "./SchoolOtherCourses";
import BroadeningUxOPCourses from "./BroadeningUxOPCourses";
import HAICCourses from "./HAICCourses";
import FYPElectives from "./FYPElectives";

// ── 2023-intake legacy flow ──────────────────────────────────────────────────
import Legacy2023Pathway1 from "./Legacy2023Pathway1";
import Legacy2023SchoolSelection from "./Legacy2023SchoolSelection";
import Legacy2023SMEDPlaceholder from "./Legacy2023SMEDPlaceholder";

// SBM
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
} from "./Legacy2023SSCISubPrograms";

// AIS
import Legacy2023AISQuestion from "./Legacy2023AISQuestion";
import Legacy2023AISISDQuestion from "./Legacy2023AISISDQuestion";
import {
  Legacy2023AISChoiceCourses,
  Legacy2023AISISDCourses,
} from "./Legacy2023AISSubPrograms";

function RedirectToYearSpecific({ path }) {
  const location = useLocation();
  const year = getEnglishYear();

  const target = (() => {
    if (year === "2023") {
      return path.replace("/english/", "/english/2023/");
    }

    if (year && year !== "2023") {
      return path.replace("/english/", `/english/${year}/`);
    }

    return path;
  })();

  return <Navigate to={target} replace state={location.state} />;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* ── Home ── */}
        <Route path="/" element={<LanguageHomePage />} />
        <Route path="/broadening" element={<BroadeningUxOPCourses />} />
        <Route path="/haic" element={<HAICCourses />} />
        <Route path="/fyp" element={<FYPElectives />} />

        {/* ── Chinese pathway ── */}
        <Route path="/chinese" element={<ChineseBackgroundSelection />} />
        <Route path="/chinese/background" element={<ChineseBackgroundCourses />} />
        <Route path="/chinese/background/gcs" element={<ChineseGCSQuestion />} />
        <Route path="/chinese/background/gcs/yes" element={<ChineseGCSLANG2170 />} />
        <Route path="/chinese/background/gcs/no" element={<ChineseOtherCourses />} />
        <Route path="/chinese/non-background" element={<ChineseNonBackgroundCourses />} />
        <Route path="/chinese/non-background/electives" element={<ChineseNonBackgroundElectives />} />

        {/* ── Third Languages ── */}
        <Route path="/third-languages" element={<ThirdLanguageSelection />} />
        <Route path="/third-languages/japanese" element={<JapaneseBeginner />} />
        <Route path="/third-languages/japanese/upper-beginner" element={<JapaneseBeginner />} />
        <Route path="/third-languages/korean" element={<KoreanBeginner />} />
        <Route path="/third-languages/french" element={<FrenchBeginner />} />
        <Route path="/third-languages/spanish" element={<SpanishBeginner />} />
        <Route path="/third-languages/spanish/upper-beginner" element={<SpanishBeginner />} />
        <Route path="/third-languages/cantonese" element={<CantoneseBackgroundQuestion />} />
        <Route path="/third-languages/cantonese/chinese-background" element={<CantoneseChineseBackground />} />
        <Route path="/third-languages/cantonese/non-chinese-background" element={<CantoneseNonChineseBackground />} />

        {/* ── English year selection ── */}
        <Route path="/english" element={<EnglishYearSelection />} />

        {/* ── 2024 / 2025 / 2026 flow ── */}
        <Route path="/english/pathways" element={<RedirectToYearSpecific path="/english/pathways" />} />
        <Route path="/english/pathway1" element={<RedirectToYearSpecific path="/english/pathway1" />} />
        <Route path="/english/pathway2" element={<RedirectToYearSpecific path="/english/pathway2" />} />
        <Route path="/english/pathway1/school" element={<RedirectToYearSpecific path="/english/pathway1/school" />} />
        <Route path="/english/pathway1/science" element={<RedirectToYearSpecific path="/english/pathway1/science" />} />
        <Route path="/english/pathway1/engineering" element={<RedirectToYearSpecific path="/english/pathway1/engineering" />} />
        <Route path="/english/pathway1/business" element={<RedirectToYearSpecific path="/english/pathway1/business" />} />
        <Route path="/english/pathway1/humanities" element={<RedirectToYearSpecific path="/english/pathway1/humanities" />} />
        <Route path="/english/pathway1/ais" element={<RedirectToYearSpecific path="/english/pathway1/ais" />} />
        <Route path="/english/pathway1/science/ost" element={<RedirectToYearSpecific path="/english/pathway1/science/ost" />} />
        <Route path="/english/pathway1/science/program-selection" element={<RedirectToYearSpecific path="/english/pathway1/science/program-selection" />} />
        <Route path="/english/pathway1/science/neither" element={<RedirectToYearSpecific path="/english/pathway1/science/neither" />} />
        <Route path="/english/pathway1/science/ost/yes" element={<RedirectToYearSpecific path="/english/pathway1/science/ost/yes" />} />
        <Route path="/english/pathway1/science/ost/no" element={<RedirectToYearSpecific path="/english/pathway1/science/ost/no" />} />
        <Route path="/english/pathway1/science/ire" element={<RedirectToYearSpecific path="/english/pathway1/science/ire" />} />
        <Route path="/english/pathway1/science/ost/no/yes" element={<RedirectToYearSpecific path="/english/pathway1/science/ost/no/yes" />} />
        <Route path="/english/pathway1/science/advanced-communication" element={<RedirectToYearSpecific path="/english/pathway1/science/advanced-communication" />} />
        <Route path="/english/pathway2/science/advanced-communication" element={<RedirectToYearSpecific path="/english/pathway2/science/advanced-communication" />} />
        <Route path="/english/pathway1/engineering/advanced-communication" element={<RedirectToYearSpecific path="/english/pathway1/engineering/advanced-communication" />} />
        <Route path="/english/pathway1/business/advanced-communication" element={<RedirectToYearSpecific path="/english/pathway1/business/advanced-communication" />} />
        <Route path="/english/pathway1/humanities/advanced-communication" element={<RedirectToYearSpecific path="/english/pathway1/humanities/advanced-communication" />} />
        <Route path="/english/pathway1/ais/advanced-communication" element={<RedirectToYearSpecific path="/english/pathway1/ais/advanced-communication" />} />
        <Route path="/english/pathway1/engineering/other-courses" element={<RedirectToYearSpecific path="/english/pathway1/engineering/other-courses" />} />
        <Route path="/english/pathway1/business/other-courses" element={<RedirectToYearSpecific path="/english/pathway1/business/other-courses" />} />
        <Route path="/english/pathway1/humanities/other-courses" element={<RedirectToYearSpecific path="/english/pathway1/humanities/other-courses" />} />
        <Route path="/english/pathway1/ais/other-courses" element={<RedirectToYearSpecific path="/english/pathway1/ais/other-courses" />} />
        <Route path="/english/pathway1/ais/isd" element={<RedirectToYearSpecific path="/english/pathway1/ais/isd" />} />
        <Route path="/english/pathway1/ais/isd/yes" element={<RedirectToYearSpecific path="/english/pathway1/ais/isd/yes" />} />
        <Route path="/english/pathway2/engineering/advanced-communication" element={<RedirectToYearSpecific path="/english/pathway2/engineering/advanced-communication" />} />
        <Route path="/english/pathway2/business/advanced-communication" element={<RedirectToYearSpecific path="/english/pathway2/business/advanced-communication" />} />
        <Route path="/english/pathway2/humanities/advanced-communication" element={<RedirectToYearSpecific path="/english/pathway2/humanities/advanced-communication" />} />
        <Route path="/english/pathway2/ais/advanced-communication" element={<RedirectToYearSpecific path="/english/pathway2/ais/advanced-communication" />} />

        <Route path="/english/2024/pathways" element={<EnglishPathwaySelection />} />
        <Route path="/english/2024/pathway1" element={<EnglishPathway1 />} />
        <Route path="/english/2024/pathway2" element={<EnglishPathway2 />} />
        <Route path="/english/2024/pathway1/school" element={<SchoolSelection />} />
        <Route path="/english/2024/pathway2/school" element={<SchoolSelection />} />
        <Route path="/english/2024/pathway1/science" element={<ScienceCourseSelection />} />
        <Route path="/english/2024/pathway2/science" element={<ScienceCourseSelection />} />
        <Route path="/english/2024/pathway1/engineering" element={<EngineeringCourseSelection />} />
        <Route path="/english/2024/pathway2/engineering" element={<EngineeringCourseSelection />} />
        <Route path="/english/2024/pathway1/business" element={<BusinessCourseSelection />} />
        <Route path="/english/2024/pathway2/business" element={<BusinessCourseSelection />} />
        <Route path="/english/2024/pathway1/humanities" element={<HumanitiesCourseSelection />} />
        <Route path="/english/2024/pathway2/humanities" element={<HumanitiesCourseSelection />} />
        <Route path="/english/2024/pathway1/ais" element={<AISCourseSelection />} />
        <Route path="/english/2024/pathway2/ais" element={<AISCourseSelection />} />
        <Route path="/english/2024/pathway1/science/ost" element={<OSTQuestion />} />
        <Route path="/english/2024/pathway2/science/ost" element={<OSTQuestion />} />
        <Route path="/english/2024/pathway1/science/program-selection" element={<OSTIREProgramQuestion />} />
        <Route path="/english/2024/pathway2/science/program-selection" element={<OSTIREProgramQuestion />} />
        <Route path="/english/2024/pathway1/science/neither" element={<ScienceNeitherCourses />} />
        <Route path="/english/2024/pathway2/science/neither" element={<ScienceNeitherCourses />} />
        <Route path="/english/2024/pathway1/science/ost/yes" element={<OSTCourseSelection />} />
        <Route path="/english/2024/pathway2/science/ost/yes" element={<OSTCourseSelection />} />
        <Route path="/english/2024/pathway1/science/ost/no" element={<IREQuestion />} />
        <Route path="/english/2024/pathway2/science/ost/no" element={<IREQuestion />} />
        <Route path="/english/2024/pathway1/science/ire" element={<IRECourseSelection />} />
        <Route path="/english/2024/pathway2/science/ire" element={<IRECourseSelection />} />
        <Route path="/english/2024/pathway1/science/ost/no/yes" element={<IRECourseSelection />} />
        <Route path="/english/2024/pathway2/science/ost/no/yes" element={<IRECourseSelection />} />
        <Route path="/english/2024/pathway1/science/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2024/pathway2/science/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2024/pathway1/engineering/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2024/pathway2/engineering/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2024/pathway1/business/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2024/pathway2/business/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2024/pathway1/humanities/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2024/pathway2/humanities/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2024/pathway1/ais/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2024/pathway2/ais/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2024/pathway1/engineering/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2024/pathway2/engineering/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2024/pathway1/business/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2024/pathway2/business/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2024/pathway1/humanities/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2024/pathway2/humanities/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2024/pathway1/ais/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2024/pathway2/ais/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2024/pathway1/ais/isd" element={<ISDQuestion />} />
        <Route path="/english/2024/pathway2/ais/isd" element={<ISDQuestion />} />
        <Route path="/english/2024/pathway1/ais/isd/yes" element={<ISDCourseSelection />} />
        <Route path="/english/2024/pathway2/ais/isd/yes" element={<ISDCourseSelection />} />

        <Route path="/english/2025/pathways" element={<EnglishPathwaySelection />} />
        <Route path="/english/2025/pathway1" element={<EnglishPathway1 />} />
        <Route path="/english/2025/pathway2" element={<EnglishPathway2 />} />
        <Route path="/english/2025/pathway1/school" element={<SchoolSelection />} />
        <Route path="/english/2025/pathway2/school" element={<SchoolSelection />} />
        <Route path="/english/2025/pathway1/science" element={<ScienceCourseSelection />} />
        <Route path="/english/2025/pathway2/science" element={<ScienceCourseSelection />} />
        <Route path="/english/2025/pathway1/engineering" element={<EngineeringCourseSelection />} />
        <Route path="/english/2025/pathway2/engineering" element={<EngineeringCourseSelection />} />
        <Route path="/english/2025/pathway1/business" element={<BusinessCourseSelection />} />
        <Route path="/english/2025/pathway2/business" element={<BusinessCourseSelection />} />
        <Route path="/english/2025/pathway1/humanities" element={<HumanitiesCourseSelection />} />
        <Route path="/english/2025/pathway2/humanities" element={<HumanitiesCourseSelection />} />
        <Route path="/english/2025/pathway1/ais" element={<AISCourseSelection />} />
        <Route path="/english/2025/pathway2/ais" element={<AISCourseSelection />} />
        <Route path="/english/2025/pathway1/science/ost" element={<OSTQuestion />} />
        <Route path="/english/2025/pathway2/science/ost" element={<OSTQuestion />} />
        <Route path="/english/2025/pathway1/science/program-selection" element={<OSTIREProgramQuestion />} />
        <Route path="/english/2025/pathway2/science/program-selection" element={<OSTIREProgramQuestion />} />
        <Route path="/english/2025/pathway1/science/neither" element={<ScienceNeitherCourses />} />
        <Route path="/english/2025/pathway2/science/neither" element={<ScienceNeitherCourses />} />
        <Route path="/english/2025/pathway1/science/ost/yes" element={<OSTCourseSelection />} />
        <Route path="/english/2025/pathway2/science/ost/yes" element={<OSTCourseSelection />} />
        <Route path="/english/2025/pathway1/science/ost/no" element={<IREQuestion />} />
        <Route path="/english/2025/pathway2/science/ost/no" element={<IREQuestion />} />
        <Route path="/english/2025/pathway1/science/ire" element={<IRECourseSelection />} />
        <Route path="/english/2025/pathway2/science/ire" element={<IRECourseSelection />} />
        <Route path="/english/2025/pathway1/science/ost/no/yes" element={<IRECourseSelection />} />
        <Route path="/english/2025/pathway2/science/ost/no/yes" element={<IRECourseSelection />} />
        <Route path="/english/2025/pathway1/science/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2025/pathway2/science/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2025/pathway1/engineering/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2025/pathway2/engineering/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2025/pathway1/business/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2025/pathway2/business/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2025/pathway1/humanities/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2025/pathway2/humanities/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2025/pathway1/ais/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2025/pathway2/ais/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2025/pathway1/engineering/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2025/pathway2/engineering/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2025/pathway1/business/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2025/pathway2/business/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2025/pathway1/humanities/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2025/pathway2/humanities/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2025/pathway1/ais/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2025/pathway2/ais/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2025/pathway1/ais/isd" element={<ISDQuestion />} />
        <Route path="/english/2025/pathway2/ais/isd" element={<ISDQuestion />} />
        <Route path="/english/2025/pathway1/ais/isd/yes" element={<ISDCourseSelection />} />
        <Route path="/english/2025/pathway2/ais/isd/yes" element={<ISDCourseSelection />} />

        <Route path="/english/2026/pathways" element={<EnglishPathwaySelection />} />
        <Route path="/english/2026/pathway1" element={<EnglishPathway1 />} />
        <Route path="/english/2026/pathway2" element={<EnglishPathway2 />} />
        <Route path="/english/2026/pathway1/school" element={<SchoolSelection />} />
        <Route path="/english/2026/pathway2/school" element={<SchoolSelection />} />
        <Route path="/english/2026/pathway1/science" element={<ScienceCourseSelection />} />
        <Route path="/english/2026/pathway2/science" element={<ScienceCourseSelection />} />
        <Route path="/english/2026/pathway1/engineering" element={<EngineeringCourseSelection />} />
        <Route path="/english/2026/pathway1/business" element={<BusinessCourseSelection />} />
        <Route path="/english/2026/pathway1/humanities" element={<HumanitiesCourseSelection />} />
        <Route path="/english/2026/pathway1/ais" element={<AISCourseSelection />} />
        <Route path="/english/2026/pathway1/science/ost" element={<OSTQuestion />} />
        <Route path="/english/2026/pathway2/science/ost" element={<OSTQuestion />} />
        <Route path="/english/2026/pathway1/science/program-selection" element={<OSTIREProgramQuestion />} />
        <Route path="/english/2026/pathway2/science/program-selection" element={<OSTIREProgramQuestion />} />
        <Route path="/english/2026/pathway1/science/neither" element={<ScienceNeitherCourses />} />
        <Route path="/english/2026/pathway2/science/neither" element={<ScienceNeitherCourses />} />
        <Route path="/english/2026/pathway1/science/ost/yes" element={<OSTCourseSelection />} />
        <Route path="/english/2026/pathway2/science/ost/yes" element={<OSTCourseSelection />} />
        <Route path="/english/2026/pathway1/science/ost/no" element={<IREQuestion />} />
        <Route path="/english/2026/pathway2/science/ost/no" element={<IREQuestion />} />
        <Route path="/english/2026/pathway1/science/ire" element={<IRECourseSelection />} />
        <Route path="/english/2026/pathway2/science/ire" element={<IRECourseSelection />} />
        <Route path="/english/2026/pathway1/science/ost/no/yes" element={<IRECourseSelection />} />
        <Route path="/english/2026/pathway2/science/ost/no/yes" element={<IRECourseSelection />} />
        <Route path="/english/2026/pathway1/science/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway2/science/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway1/engineering/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway2/engineering/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway1/business/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway2/business/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway1/humanities/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway2/humanities/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway1/ais/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway2/ais/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway2/optional-advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2026/pathway1/engineering" element={<EngineeringCourseSelection />} />
        <Route path="/english/2026/pathway2/engineering" element={<EngineeringCourseSelection />} />
        <Route path="/english/2026/pathway1/business" element={<BusinessCourseSelection />} />
        <Route path="/english/2026/pathway2/business" element={<BusinessCourseSelection />} />
        <Route path="/english/2026/pathway1/humanities" element={<HumanitiesCourseSelection />} />
        <Route path="/english/2026/pathway2/humanities" element={<HumanitiesCourseSelection />} />
        <Route path="/english/2026/pathway1/ais" element={<AISCourseSelection />} />
        <Route path="/english/2026/pathway2/ais" element={<AISCourseSelection />} />
        <Route path="/english/2026/pathway1/engineering/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2026/pathway2/engineering/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2026/pathway1/business/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2026/pathway2/business/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2026/pathway1/humanities/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2026/pathway2/humanities/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2026/pathway1/ais/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2026/pathway2/ais/other-courses" element={<SchoolOtherCourses />} />
        <Route path="/english/2026/pathway1/ais/isd" element={<ISDQuestion />} />
        <Route path="/english/2026/pathway2/ais/isd" element={<ISDQuestion />} />
        <Route path="/english/2026/pathway1/ais/isd/yes" element={<ISDCourseSelection />} />
        <Route path="/english/2026/pathway2/ais/isd/yes" element={<ISDCourseSelection />} />

        {/* ── 2023 legacy flow ── */}
        <Route path="/english/2023/pathway1/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2023/pathway2/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2023/ais/lang2030" element={<Legacy2023SENGCourses />} />
        <Route path="/english/2023/ais/lang2070" element={<Legacy2023SHSSCourses />} />
        <Route path="/english/2023/ais/lang2010" element={<Legacy2023SSCICourses />} />
        <Route path="/english/2023/ais/lang2062" element={<Navigate to="/english/2023/ais/choice" replace />} />
        <Route path="/english/2023/ais/choice" element={<Legacy2023AISChoiceCourses />} />
        <Route path="/english/2023/ais/maec" element={<Navigate to="/english/2023/ais" replace />} />
        <Route path="/english/2023/ais/maec/choice" element={<Navigate to="/english/2023/ais" replace />} />
        <Route path="/english/2023/ais/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2023/pathways" element={<Navigate to="/english/2023/pathway1" replace />} />
        <Route path="/english/2023/pathway1" element={<Legacy2023Pathway1 />} />
        <Route path="/english/2023/pathway1/lang1403" element={<Navigate to="/english/2023/school" replace />} />
        <Route path="/english/2023/pathway2" element={<Navigate to="/english/2023/pathway1" replace />} />
        <Route path="/english/2023/school" element={<Legacy2023SchoolSelection />} />
        <Route path="/english/2023/smed" element={<Legacy2023SMEDPlaceholder />} />

        {/* SBM */}
        <Route path="/english/2023/sbm" element={<Legacy2023SBMStandardCourses />} />
        <Route path="/english/2023/sbm/standard" element={<Navigate to="/english/2023/sbm" replace />} />
        <Route path="/english/2023/sbm/rmbi" element={<Navigate to="/english/2023/sbm" replace />} />
        <Route path="/english/2023/sbm/rmbi/2" element={<Navigate to="/english/2023/sbm" replace />} />
        <Route path="/english/2023/sbm/standard/choice" element={<Legacy2023SBMChoiceCourses />} />
        <Route path="/english/2023/sbm/advanced-communication" element={<AdvancedCommunicationCourses />} />

        {/* SENG & SHSS */}
        <Route path="/english/2023/seng" element={<Legacy2023SENGCourses />} />
        <Route path="/english/2023/shss" element={<Legacy2023SHSSCourses />} />
        <Route path="/english/2023/seng/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2023/shss/advanced-communication" element={<AdvancedCommunicationCourses />} />

        {/* SSCI */}
        <Route path="/english/2023/ssci" element={<Legacy2023SSCICourses />} />
        <Route path="/english/2023/ssci/program" element={<Legacy2023SSCIProgramQuestion />} />
        <Route path="/english/2023/ssci/ost" element={<Legacy2023SSCIOSTProg />} />
        <Route path="/english/2023/ssci/ire" element={<Legacy2023SSCIIREProg />} />
        <Route path="/english/2023/ssci/btb" element={<Legacy2023SSCIBTBProg />} />
        <Route path="/english/2023/ssci/maec" element={<Legacy2023SSCIMAECProg />} />
        <Route path="/english/2023/ssci/maec/choice" element={<Navigate to="/english/2023/ssci/maec" replace />} />
        <Route path="/english/2023/ssci/maec/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2023/ssci/advanced-communication" element={<AdvancedCommunicationCourses />} />

        {/* AIS */}
        <Route path="/english/2023/ais" element={<Legacy2023AISQuestion />} />
        <Route path="/english/2023/ais/isd-question" element={<Legacy2023AISISDQuestion />} />
        <Route path="/english/2023/ais/lang2062" element={<Navigate to="/english/2023/ais/choice" replace />} />
        <Route path="/english/2023/ais/choice" element={<Legacy2023AISChoiceCourses />} />
        <Route path="/english/2023/ais/isd" element={<Legacy2023AISISDCourses />} />
        <Route path="/english/2023/ais/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2023/ais/isd/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2023/ais/choice/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2023/ais/shss/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2023/ais/ssci/advanced-communication" element={<AdvancedCommunicationCourses />} />
        <Route path="/english/2023/ais/sbm/advanced-communication" element={<AdvancedCommunicationCourses />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;