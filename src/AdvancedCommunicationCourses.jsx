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
  const previousPage =
    location.state?.previousPage || `/english/${year}/${currentPathway}/school`;
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const isPathway2Year2026 = isPathway2_2026();
  const isPathway2Flow = isPathway2Year2026 || getPathwayOrigin() === "pathway2";
  const courses = sharedAdvancedCourses;

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

        <OtherCoursesSection variant="advancedCommunication" />
      </main>
    </motion.div>
  );
}
