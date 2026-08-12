import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import { broadeningCourses, uxopCourses } from "./data/advancedCommunicationCourses";

export default function BroadeningUxOPCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const [activeSection, setActiveSection] = useState("broadening");

  const sections = [
    {
      key: "broadening",
      label: "Broadening (Humanities)",
      description:
        "These courses can count towards the Common Core Broadening requirement.",
      courses: broadeningCourses,
      cardClass:
        "block bg-gradient-to-b from-emerald-50 to-green-100 border border-green-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
      accent: "text-emerald-700",
    },
    {
      key: "uxop",
      label: "UxOP",
      description:
        "These courses can count towards the Common Core Experiencing (UxOP) requirement.",
      courses: uxopCourses,
      cardClass:
        "block bg-gradient-to-b from-sky-50 to-blue-100 border border-blue-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
      accent: "text-blue-700",
    },
  ];

  const currentSection = sections.find((section) => section.key === activeSection);

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
            navigate("/", { state: { direction: "down" } });
          }, 300);
        }}
      />

      <main className="max-w-7xl mx-auto px-6 pt-4">
        <section className="py-10 text-center">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Broadening (Humanities) and UxOP
          </h2>
          <p className="mx-auto max-w-4xl text-xl text-gray-600">
            Browse courses that fulfill Common Core Broadening and UxOP
            requirements.
          </p>
        </section>

        <section className="mb-10 flex flex-wrap justify-center gap-4">
          {sections.map((section) => (
            <button
              key={section.key}
              type="button"
              onClick={() => setActiveSection(section.key)}
              className={`rounded-full border px-8 py-4 text-base font-semibold transition-colors duration-300 ${
                activeSection === section.key
                  ? "border-blue-300 bg-blue-100 text-blue-900 shadow-lg"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {section.label}
            </button>
          ))}
        </section>

        <section className="mx-auto mb-8 max-w-4xl px-2">
          <p className="text-center text-base text-gray-500">
            {currentSection.description}
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {currentSection.courses.map((course) => (
            <a
              key={course.code}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className={currentSection.cardClass}
            >
              <h4 className="mb-3 text-3xl font-semibold">{course.code}</h4>
              <p className="mb-4 text-gray-700">{course.title}</p>
              <span className={`${currentSection.accent} font-medium`}>
                View Course Details
              </span>
            </a>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
