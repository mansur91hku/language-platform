import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import OtherCoursesSection from "./components/OtherCoursesSection";
import { getOSTCourse, isPathway1_2026 } from "./utils/englishYear";

export default function OSTCourseSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const year = sessionStorage.getItem("englishYear") || "2026";
  const pathway = sessionStorage.getItem("pathwayOrigin") === "pathway2" ? "pathway2" : "pathway1";
  const previousPage =
    location.state?.previousPage || `/english/${year}/${pathway}/science/program-selection`;
  const [exitDirection, setExitDirection] = useState("up");
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const ostCourse = getOSTCourse();
  const showOtherCourses = isPathway1_2026();

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
        <section className="py-10 text-center">
          <p className="mx-auto max-w-4xl text-2xl text-gray-600">
            Since you are in{" "}
            <span className="font-bold text-gray-800">
              Ocean Science and Technology (OST)
            </span>
            , you are required to take the following course:
          </p>
        </section>

        <section className="mx-auto max-w-4xl">
          <a
            href={ostCourse.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-[32px] border border-blue-200 bg-gradient-to-b from-sky-50 to-blue-100 p-10 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="mb-4 text-4xl font-semibold">{ostCourse.code}</h3>
            <p className="mb-4 text-lg text-gray-700">{ostCourse.title}</p>
            <span className="font-medium text-blue-700">View Course Details</span>
          </a>
        </section>

        {showOtherCourses ? (
          <OtherCoursesSection />
        ) : (
          <section className="mt-10 text-center">
            <p className="mb-6 text-lg text-gray-600">
              Click on the button below to see what's next after this course.
            </p>
            <button
              type="button"
              onClick={() => {
                setExitDirection("up");
                setTimeout(() => {
                  navigate(`/english/${year}/${pathway}/science/advanced-communication`, {
                    state: {
                      direction: "up",
                      previousPage: location.pathname,
                    },
                  });
                }, 300);
              }}
              className="inline-flex min-w-[220px] items-center justify-center rounded-[32px] border border-blue-200 bg-gradient-to-b from-blue-50 to-indigo-100 px-10 py-5 text-lg font-semibold text-blue-700 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              Continue
            </button>
          </section>
        )}
      </main>
    </motion.div>
  );
}
