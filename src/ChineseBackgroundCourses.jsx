import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const tabs = [
  {
    key: "lower",
    label: "Lower Chinese Proficiency",
    description:
      "Proficiency higher than non-Chinese language background students but lower than typical Chinese language background students; typically without formal qualifications in Chinese",
    baseClass: "bg-gradient-to-b from-rose-50 to-red-100 border-red-200 text-red-700",
    activeClass: "bg-gradient-to-b from-rose-200 to-red-200 border-red-200 text-red-900 shadow-lg",
    cardClass: "block bg-gradient-to-b from-rose-50 to-red-100 border border-red-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-red-700",
    courses: [
      { code: "LANG 1416I", title: "Effective Chinese Communication", url: "https://cle.hkust.edu.hk/courses/lang1416" },
    ],
  },
  {
    key: "level3",
    label: "HKDSE Level 3 or Equivalent",
    description: "Suitable for students with Level 3 in HKDSE Chinese or an equivalent standard",
    baseClass: "bg-gradient-to-b from-orange-50 to-amber-100 border-amber-200 text-amber-700",
    activeClass: "bg-gradient-to-b from-amber-200 to-orange-200 border-amber-200 text-amber-900 shadow-lg",
    cardClass: "block bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-amber-700",
    courses: [
      { code: "LANG 1416C/P", title: "Effective Chinese Communication", url: "https://cle.hkust.edu.hk/courses/lang1416" },
    ],
  },
  {
    key: "advanced",
    label: "Stronger Chinese Qualifications",
    description:
      "For students with Level 3 or above in HKDSE Chinese, a Chinese qualification in the Mainland Gaokao (PRC) or GSAT, or equivalent (e.g. a high grade in GCE AL, IB AH, or IB AS Chinese)",
    baseClass: "bg-gradient-to-b from-purple-50 to-violet-100 border-violet-200 text-violet-700",
    activeClass: "bg-gradient-to-b from-violet-200 to-purple-200 border-violet-200 text-violet-900 shadow-lg",
    cardClass: "block bg-gradient-to-b from-purple-50 to-violet-100 border border-violet-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-violet-700",
    courses: [
      { code: "LANG 1421", title: "Chinese Communication in the Digital Era", url: "https://cle.hkust.edu.hk/courses/lang1421" },
      { code: "LANG 1422", title: "Chinese for Workplace Applications", url: "https://cle.hkust.edu.hk/courses/lang1422" },
      { code: "LANG 1423", title: "Chinese Communication in Global Context", url: "https://cle.hkust.edu.hk/courses/lang1423" },
      { code: "LANG 1424C/P", title: "Chinese Writing in Cultural Contexts", url: "https://cle.hkust.edu.hk/courses/lang1424" },
      { code: "LANG 1425", title: "Chinese Communication in Interpersonal Relations", url: "https://cle.hkust.edu.hk/courses/lang1425" },
      { code: "LANG 1426", title: "Chinese Communication in Film and Literary Contexts", url: "https://cle.hkust.edu.hk/courses/lang1426" },
    ],
  },
];

const breatheDelays = [0, 0.5, 1.0];

export default function ChineseBackgroundCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const [activeTab, setActiveTab] = useState("lower");
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
      {/* Nav */}
      <div className="fixed top-4 left-4 right-4 flex items-center justify-between z-50 pointer-events-none">
        <button
          onClick={() => { setExitDirection("down"); setTimeout(() => navigate("/chinese", { state: { direction: "down" } }), 300); }}
          className={navBtn}
        >
          Back
        </button>
        <button
          onClick={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }}
          className={navBtn}
        >
          Home
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-4">
        {/* Title */}
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
            Chinese Language Background
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your proficiency group to see the relevant course options
          </p>
        </section>

        {/* Tab buttons — animated breathing on inactive tabs */}
        <section className="flex flex-wrap justify-center gap-6 mb-10">
          {tabs.map((tab, i) => {
            const isActive = activeTab === tab.key;
            return (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                animate={
                  isActive
                    ? { scale: 1 }
                    : { scale: [1, 1.05, 1] }
                }
                transition={
                  isActive
                    ? { duration: 0.2 }
                    : { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: breatheDelays[i] }
                }
                className={`px-8 py-4 rounded-full border text-lg font-semibold transition-colors duration-300 ${
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
          <p className="text-gray-500 text-base text-center">
            {currentTab.description}
          </p>
        </section>

        {/* Course cards — centred when only one */}
        {currentTab.courses.length === 1 ? (
          <section className="flex justify-center">
            <a
              href={currentTab.courses[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTab.cardClass} w-full md:w-1/2`}
            >
              <h4 className="text-3xl font-semibold mb-3">{currentTab.courses[0].code}</h4>
              <p className="text-gray-700 mb-4">{currentTab.courses[0].title}</p>
              <span className={`${currentTab.accent} font-medium`}>View Course Details</span>
            </a>
          </section>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentTab.courses.map((course) => (
              <a
                key={course.code}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className={currentTab.cardClass}
              >
                <h4 className="text-3xl font-semibold mb-3">{course.code}</h4>
                <p className="text-gray-700 mb-4">{course.title}</p>
                <span className={`${currentTab.accent} font-medium`}>View Course Details</span>
              </a>
            ))}
          </section>
        )}

        {/* Continue to GCS question */}
        <section className="text-center mt-10 pb-20">
          <p className="text-lg text-gray-600 mb-6">
            Click on the button below to see what's next after this course.
          </p>
          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/chinese/background/gcs", {
                  state: { direction: "up" },
                });
              }, 300);
            }}
            className={`inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] border ${currentTab.cardClass} ${currentTab.accent} text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
          >
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}
