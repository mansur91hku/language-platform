import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import OtherCoursesSection from "./components/OtherCoursesSection";
import { isPathway2_2026 } from "./utils/englishYear";
import {
  sharedAdvancedCourses,
  broadeningCourses,
  uxopCourses,
} from "./data/advancedCommunicationCourses";

const tabs = [
  {
    key: "uxop",
    label: "Fulfill Common Core Experiencing (UxOP) Requirement",
    description:
      "These Advanced Communication courses can count towards the Common Core Experiencing (UxOP) requirement.",
    baseClass:
      "bg-gradient-to-b from-sky-50 to-blue-100 border-blue-200 text-blue-700",
    activeClass:
      "bg-gradient-to-b from-sky-200 to-blue-200 border-blue-200 text-blue-900 shadow-lg",
    cardClass:
      "block bg-gradient-to-b from-sky-50 to-blue-100 border border-blue-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-blue-700",
    courses: uxopCourses,
  },
  {
    key: "broadening",
    label: "Fulfill Common Core Broadening Requirement",
    description:
      "These Advanced Communication courses can count towards the Common Core Broadening requirement.",
    baseClass:
      "bg-gradient-to-b from-emerald-50 to-green-100 border-green-200 text-emerald-700",
    activeClass:
      "bg-gradient-to-b from-emerald-200 to-green-200 border-green-200 text-emerald-900 shadow-lg",
    cardClass:
      "block bg-gradient-to-b from-emerald-50 to-green-100 border border-green-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-emerald-700",
    courses: broadeningCourses,
  },
  {
    key: "ctdl",
    label: "Fulfill Common Core Foundations (CTDL) Requirement",
    description:
      "These Advanced Communication courses can count towards the Common Core Foundations (CTDL) requirement.",
    baseClass:
      "bg-gradient-to-b from-orange-50 to-amber-100 border-amber-200 text-amber-700",
    activeClass:
      "bg-gradient-to-b from-amber-200 to-orange-200 border-amber-200 text-amber-900 shadow-lg",
    cardClass:
      "block bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-amber-700",
    courses: sharedAdvancedCourses,
  },
];

const breatheDelays = [0, 0.5, 1.0];

export default function AdvancedCommunicationCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage =
    location.state?.previousPage || "/english/pathway1/science/ost/no";
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const [activeTab, setActiveTab] = useState("uxop");
  const isPathway2Year2026 = isPathway2_2026();
  const currentTab = tabs.find((tab) => tab.key === activeTab);

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
            {isPathway2Year2026 ? "Required course" : "Advanced Communication"}
          </h2>
          <p className="mx-auto max-w-4xl text-xl text-gray-600">
            {isPathway2Year2026 ? (
              "You must choose one of the following Advanced Communication courses."
            ) : (
              <>
                Now you may also take the following{" "}
                <span className="font-bold text-gray-800">
                  Advanced Communication
                </span>{" "}
                courses under the English Communication group as{" "}
                <span className="font-bold italic text-gray-800">
                  free electives
                </span>
                .
              </>
            )}
          </p>
        </section>

        {!isPathway2Year2026 && (
          <>
            <section className="mb-10 flex flex-wrap justify-center gap-6">
              {tabs.map((tab, index) => {
                const isActive = activeTab === tab.key;
                return (
                  <motion.button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    animate={isActive ? { scale: 1 } : { scale: [1, 1.05, 1] }}
                    transition={
                      isActive
                        ? { duration: 0.2 }
                        : {
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: breatheDelays[index],
                          }
                    }
                    className={`rounded-full border px-8 py-4 text-base font-semibold transition-colors duration-300 ${
                      isActive ? tab.activeClass : tab.baseClass
                    }`}
                  >
                    {tab.label}
                  </motion.button>
                );
              })}
            </section>

            <section className="mx-auto mb-8 max-w-4xl px-2">
              <p className="text-center text-base text-gray-500">
                {currentTab.description}
              </p>
            </section>
          </>
        )}

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {(isPathway2Year2026 ? sharedAdvancedCourses : currentTab.courses).map(
            (course) => (
              <a
                key={course.code}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isPathway2Year2026
                    ? tabs[0].cardClass
                    : currentTab.cardClass
                }
              >
                <h4 className="mb-3 text-3xl font-semibold">{course.code}</h4>
                <p className="mb-4 text-gray-700">{course.title}</p>
                <span
                  className={`${
                    isPathway2Year2026 ? "text-blue-700" : currentTab.accent
                  } font-medium`}
                >
                  View Course Details
                </span>
              </a>
            ),
          )}
        </section>

        {isPathway2Year2026 ? (
          <OtherCoursesSection />
        ) : (
          <section className="mt-10 pb-20 text-center">
            <button
              type="button"
              onClick={() => {
                setExitDirection("down");
                setTimeout(() => {
                  navigate("/english", { state: { direction: "down" } });
                }, 300);
              }}
              className={`inline-flex min-w-[260px] items-center justify-center rounded-[32px] px-10 py-5 text-lg font-semibold shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${currentTab.baseClass}`}
            >
              Explore other English course pathways
            </button>
          </section>
        )}
      </main>
    </motion.div>
  );
}
