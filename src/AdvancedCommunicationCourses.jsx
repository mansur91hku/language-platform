import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const sharedCourses = [
  { code: "LANG 2063", title: "Writing for Workplace Success", url: "https://cle.hkust.edu.hk/courses/lang2063" },
  { code: "LANG 2064", title: "Speaking for Workplace Success", url: "https://cle.hkust.edu.hk/courses/lang2064" },
  { code: "LANG 2065", title: "Research Writing", url: "https://cle.hkust.edu.hk/courses/lang2065" },
  { code: "LANG 2066", title: "Dynamic Science Communication: Engaging Audiences with Science Busking", url: "https://cle.hkust.edu.hk/courses/lang2066" },
  { code: "LANG 2067", title: "Digital Communication: Expressing Your Perspective in Digital Spaces", url: "https://cle.hkust.edu.hk/courses/lang2067" },
  { code: "LANG 2068", title: "Speaking with Impact", url: "https://cle.hkust.edu.hk/courses/lang2068" },
  { code: "LANG 2069", title: "Supercommunication Offline and On: The Art of Connecting", url: "https://cle.hkust.edu.hk/courses/lang2069" },
  { code: "LANG 2071", title: "From Proposal to Applause: Navigating the Academic Conference Journey", url: "https://cle.hkust.edu.hk/courses/lang2071" },
];

const tabs = [
  {
    key: "uxop",
    label: "Fulfill Common Core Experiencing (UxOP) Requirement",
    description: "These Advanced Communication courses can count towards the Common Core Experiencing (UxOP) requirement.",
    baseClass: "bg-gradient-to-b from-sky-50 to-blue-100 border-blue-200 text-blue-700",
    activeClass: "bg-gradient-to-b from-sky-200 to-blue-200 border-blue-200 text-blue-900 shadow-lg",
    cardClass: "block bg-gradient-to-b from-sky-50 to-blue-100 border border-blue-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-blue-700",
    courses: [
      ...sharedCourses,
      { code: "UTOP 2401", title: "Language Teaching Service-Learning Internship", url: "https://cle.hkust.edu.hk/courses/utop2401" },
    ],
  },
  {
    key: "broadening",
    label: "Fulfill Common Core Broadening Requirement",
    description: "These Advanced Communication courses can count towards the Common Core Broadening requirement.",
    baseClass: "bg-gradient-to-b from-emerald-50 to-green-100 border-green-200 text-emerald-700",
    activeClass: "bg-gradient-to-b from-emerald-200 to-green-200 border-green-200 text-emerald-900 shadow-lg",
    cardClass: "block bg-gradient-to-b from-emerald-50 to-green-100 border border-green-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-emerald-700",
    courses: [
      { code: "LANG 1405", title: "Mediated Me: An Introduction to Digital Literacy", url: "https://cle.hkust.edu.hk/courses/lang1405" },
      { code: "LANG 2090", title: "Exploring Language and Communication with Big Data", url: "https://cle.hkust.edu.hk/courses/lang2090" },
      { code: "LANG 2091", title: "Phonetics and Speech Technology", url: "https://cle.hkust.edu.hk/courses/lang2091" },
    ],
  },
  {
    key: "ctdl",
    label: "Fulfill Common Core Foundations (CTDL) Requirement",
    description: "These Advanced Communication courses can count towards the Common Core Foundations (CTDL) requirement.",
    baseClass: "bg-gradient-to-b from-orange-50 to-amber-100 border-amber-200 text-amber-700",
    activeClass: "bg-gradient-to-b from-amber-200 to-orange-200 border-amber-200 text-amber-900 shadow-lg",
    cardClass: "block bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-amber-700",
    courses: sharedCourses,
  },
];

const breatheDelays = [0, 0.5, 1.0];

export default function AdvancedCommunicationCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/pathway1/science/ost/no";
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const [activeTab, setActiveTab] = useState("uxop");
  const currentTab = tabs.find((t) => t.key === activeTab);
  const navBtn = "inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300 pointer-events-auto";

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="fixed top-4 left-4 right-4 flex items-center justify-between z-50 pointer-events-none">
        <button onClick={() => { setExitDirection("down"); setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300); }} className={navBtn}>Back</button>
        <button onClick={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }} className={navBtn}>Home</button>
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-4">
        {/* Title */}
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            Advanced Communication
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Now you may also take the following{" "}
            <span className="font-bold text-gray-800">Advanced Communication</span>{" "}
            courses under the English Communication group as{" "}
            <span className="font-bold italic text-gray-800">free electives</span>.
          </p>
        </section>

        {/* Tab buttons */}
        <section className="flex flex-wrap justify-center gap-6 mb-10">
          {tabs.map((tab, i) => {
            const isActive = activeTab === tab.key;
            return (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                animate={isActive ? { scale: 1 } : { scale: [1, 1.05, 1] }}
                transition={
                  isActive
                    ? { duration: 0.2 }
                    : { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: breatheDelays[i] }
                }
                className={`px-8 py-4 rounded-full border text-base font-semibold transition-colors duration-300 ${
                  isActive ? tab.activeClass : tab.baseClass
                }`}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </section>

        {/* Description */}
        <section className="max-w-4xl mx-auto mb-8 px-2">
          <p className="text-gray-500 text-base text-center">{currentTab.description}</p>
        </section>

        {/* Course cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentTab.courses.map((course) => (
            <a key={course.code} href={course.url} target="_blank" rel="noopener noreferrer" className={currentTab.cardClass}>
              <h4 className="text-3xl font-semibold mb-3">{course.code}</h4>
              <p className="text-gray-700 mb-4">{course.title}</p>
              <span className={`${currentTab.accent} font-medium`}>View Course Details</span>
            </a>
          ))}
        </section>

        {/* Explore button */}
        <section className="text-center mt-10 pb-20">
          <button
            onClick={() => { setExitDirection("down"); setTimeout(() => navigate("/english", { state: { direction: "down" } }), 300); }}
            className={`inline-flex items-center justify-center min-w-[260px] px-10 py-5 rounded-[32px] ${currentTab.baseClass} text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
          >
            Explore other English course pathways
          </button>
        </section>
      </main>
    </motion.div>
  );
}
