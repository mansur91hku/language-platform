import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import OtherCoursesSection from "./components/OtherCoursesSection";
import {
  isPathway2_2026,
  getPathwayOrigin,
} from "./utils/englishYear";
import { sharedAdvancedCourses } from "./data/advancedCommunicationCourses";

export default function AdvancedCommunicationCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const year = sessionStorage.getItem("englishYear") || "2026";
  const currentPathway = getPathwayOrigin() === "pathway2" ? "pathway2" : "pathway1";
  const isSBM2023 = location.pathname === "/english/2023/sbm/advanced-communication";
  const isSSCI2023 = location.pathname === "/english/2023/ssci/advanced-communication";
  const isSSCIMAEC2023 = location.pathname === "/english/2023/ssci/maec/advanced-communication";
  const isSENG2023 = location.pathname === "/english/2023/seng/advanced-communication";
  const isSHSS2023 = location.pathname === "/english/2023/shss/advanced-communication";
  const isAIS2023 = location.pathname === "/english/2023/ais/advanced-communication";
  const isAISISD2023 = location.pathname === "/english/2023/ais/isd/advanced-communication";
  const isAISChoice2023 = location.pathname === "/english/2023/ais/choice/advanced-communication";
  const isAISSHSS2023 = location.pathname === "/english/2023/ais/shss/advanced-communication";
  const isAIS2023SSCI = location.pathname === "/english/2023/ais/ssci/advanced-communication";
  const isAISSBM2023 = location.pathname === "/english/2023/ais/sbm/advanced-communication";
  const isAISAffiliateSixCourse = isAISSHSS2023 || isAIS2023SSCI || isAISSBM2023;
  const previousPage =
    location.state?.previousPage ||
    (isSBM2023
      ? "/english/2023/sbm/standard/choice"
      : isSSCIMAEC2023
        ? "/english/2023/ssci/maec"
        : isSSCI2023
          ? "/english/2023/ssci/program"
          : isSENG2023
            ? "/english/2023/seng"
            : isSHSS2023
              ? "/english/2023/shss"
              : isAISISD2023
                ? "/english/2023/ais/isd"
                : isAISChoice2023 || isAISAffiliateSixCourse
                  ? "/english/2023/ais/choice"
                  : isAIS2023
                    ? "/english/2023/ais"
                    : `/english/${year}/${currentPathway}/school`);
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const isPathway2Year2026 = isPathway2_2026();
  const isPathway2Flow = isPathway2Year2026 || getPathwayOrigin() === "pathway2";
  const courses =
    isSBM2023 || isSSCIMAEC2023 || isAISChoice2023 || isAISAffiliateSixCourse
      ? sharedAdvancedCourses.filter((course) =>
          ["LANG 2065", "LANG 2066", "LANG 2067", "LANG 2068", "LANG 2069", "LANG 2071"].includes(
            course.code,
          ),
        )
      : sharedAdvancedCourses;

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

      <main className="max-w-7xl mx-auto px-6 pt-4">
        <section className="py-10 text-center">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            {isPathway2Flow && year !== "2023" ? "Required Course" : "Optional Advanced Communication courses"}
          </h2>
          <p className="mx-auto max-w-4xl text-xl text-gray-600">
            {isPathway2Flow && year !== "2023" ? (
              year === "2026"
                ? "You must choose one of the following Advanced Communication courses."
                : "You must choose one of the following Advanced Communication courses. After completing the course, you can also take another course from this list, to substitute for CTDL or Experiencing credits."
            ) : (
              "You may take one of the following Advanced Communication courses to substitute for CTDL or Experiencing credits."
            )}
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <a
              key={course.code}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-b from-sky-50 to-blue-100 border border-blue-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h4 className="mb-3 text-3xl font-semibold">{course.code}</h4>
              <p className="mb-4 text-gray-700">{course.title}</p>
              <span className="text-blue-700 font-medium">View Course Details</span>
            </a>
          ))}
        </section>

        <OtherCoursesSection variant="advancedCommunication" hideHAIC={isSBM2023 || isSSCI2023 || isSSCIMAEC2023 || isSENG2023 || isSHSS2023 || isAIS2023 || isAISISD2023 || isAISChoice2023 || isAISAffiliateSixCourse} />
      </main>
    </motion.div>
  );
}
