import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import { isPathway1_2026 } from "./utils/englishYear";

export default function AISCourseSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const [exitDirection, setExitDirection] = useState("up");
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const showPreEnrolledHeader = isPathway1_2026();

  const courses = [
    {
      code: "LANG 1406",
      title: "Academic English for Business Studies",
      url: "https://cle.hkust.edu.hk/courses/lang1406",
      color: "from-emerald-50 to-green-100 border-green-200",
      textColor: "text-green-700",
    },
    {
      code: "LANG 1407",
      title: "Academic English for Engineering Studies",
      url: "https://cle.hkust.edu.hk/courses/lang1407",
      color: "from-orange-50 to-amber-100 border-amber-200",
      textColor: "text-orange-700",
    },
    {
      code: "LANG 1408",
      title: "Academic English for Humanities and Social Science Studies",
      url: "https://cle.hkust.edu.hk/courses/lang1408",
      color: "from-purple-50 to-violet-100 border-violet-200",
      textColor: "text-violet-700",
    },
    {
      code: "LANG 1409",
      title: "Academic English for Science Studies",
      url: "https://cle.hkust.edu.hk/courses/lang1409",
      color: "from-sky-50 to-blue-100 border-blue-200",
      textColor: "text-blue-700",
    },
  ];

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
            navigate("/english/pathway1/school", { state: { direction: "down" } });
          }, 300);
        }}
      />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="py-10 text-center">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            {showPreEnrolledHeader
              ? "Required course"
              : "Academy of Interdisciplinary Studies"}
          </h2>
          <p className="text-xl text-gray-600">
            {showPreEnrolledHeader
              ? "You are pre-enrolled into this course."
              : "You may select any of these four courses"}
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 pb-16 md:grid-cols-2">
          {courses.map((course) => (
            <a
              key={course.code}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-[32px] border bg-gradient-to-b ${course.color} p-10 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h3 className="mb-4 text-4xl font-semibold">{course.code}</h3>
              <p className="mb-4 text-lg text-gray-700">{course.title}</p>
              <span className={`${course.textColor} font-medium`}>
                View Course Details
              </span>
            </a>
          ))}
        </section>

        <section className="mt-10 pb-16 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Click on the button below to see what's next after this course.
          </p>
          <button
            type="button"
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/english/pathway1/ais/isd", {
                  state: { direction: "up" },
                });
              }, 300);
            }}
            className="inline-flex min-w-[220px] items-center justify-center rounded-[32px] border border-blue-200 bg-gradient-to-b from-blue-50 to-indigo-100 px-10 py-5 text-lg font-semibold text-blue-700 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}
