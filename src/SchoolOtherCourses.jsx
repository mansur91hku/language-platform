import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import OtherCoursesSection from "./components/OtherCoursesSection";
import AdvancedCommunicationCourses from "./AdvancedCommunicationCourses";
import { getPathwayOrigin } from "./utils/englishYear";

export default function SchoolOtherCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const year = sessionStorage.getItem("englishYear") || "2026";
  const pathway = sessionStorage.getItem("pathwayOrigin") === "pathway2" ? "pathway2" : "pathway1";
  const previousPage =
    location.state?.previousPage || `/english/${year}/${pathway}/school`;
  const [exitDirection, setExitDirection] = useState("up");
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  if (getPathwayOrigin() === "pathway2") {
    return <AdvancedCommunicationCourses />;
  }

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar
        onBack={() => {
          setExitDirection("down");
          setTimeout(() => {
            navigate(previousPage, {
              state: { direction: "down" },
            });
          }, 300);
        }}
      />

      <main className="mx-auto max-w-6xl px-6 pt-4">
        <OtherCoursesSection />
      </main>
    </motion.div>
  );
}
