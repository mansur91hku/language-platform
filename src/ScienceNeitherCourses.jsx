import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import OtherCoursesSection from "./components/OtherCoursesSection";
import AdvancedCommunicationCourses from "./AdvancedCommunicationCourses";

export default function ScienceNeitherCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const year = sessionStorage.getItem("englishYear") || "2026";
  const pathway = sessionStorage.getItem("pathwayOrigin") === "pathway2" ? "pathway2" : "pathway1";
  const previousPage =
    location.state?.previousPage ||
    `/english/${year}/${pathway}/science/program-selection`;
  const [exitDirection, setExitDirection] = useState("up");
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  if (year === "2026" && pathway === "pathway2") {
    return (
      <AdvancedCommunicationCourses />
    );
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
            navigate(previousPage, { state: { direction: "down" } });
          }, 300);
        }}
      />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="py-16 text-center">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            School of Science
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            You are not in the OST or IRE program. Explore other course options
            below.
          </p>
        </section>

        <OtherCoursesSection />
      </main>
    </motion.div>
  );
}
