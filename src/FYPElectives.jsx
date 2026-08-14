import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";

const tabs = [
  {
    key: "fyp",
    label: "Final Year Project (FYP) English",
    description:
      "You may choose a 7-week Pass/Fail course to strengthen your final year or capstone project communication.",
    courses: [
      {
        code: "LANG 4090",
        title: "Report Writing for Final Year Engineering Projects",
        url: "https://cle.hkust.edu.hk/courses/lang4090",
      },
      {
        code: "LANG 4091",
        title: "Presentation Skills for Final Year Projects",
        url: "https://cle.hkust.edu.hk/courses/lang4091",
      },
    ],
    cardClass:
      "block bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-amber-700",
    buttonClass:
      "bg-gradient-to-b from-orange-50 to-amber-100 border-amber-200 text-amber-700",
    tabClass: "border-amber-200 bg-gradient-to-b from-orange-50 to-amber-100 text-amber-700",
    activeTabClass: "border-amber-300 bg-gradient-to-b from-amber-200 to-orange-200 text-amber-900 shadow-lg",
  },
  {
    key: "putonghua",
    label: "Putonghua",
    description:
      "Free electives for beginners. Check each course's language background requirements and exclusions before enrolling.",
    courses: [
      {
        code: "LANG 1101",
        title: "Pinyin for Non-Chinese Language Background Students",
        url: "https://cle.hkust.edu.hk/courses/lang1101",
      },
      {
        code: "LANG 1102",
        title: "Chinese Characters for Non-Chinese Language Background Students I",
        url: "https://cle.hkust.edu.hk/courses/lang1102",
      },
      {
        code: "LANG 1103",
        title: "Chinese Characters for Non-Chinese Language Background Students II",
        url: "https://cle.hkust.edu.hk/courses/lang1103",
      },
    ],
    cardClass:
      "block bg-gradient-to-b from-emerald-50 to-green-100 border border-green-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-emerald-700",
    buttonClass:
      "bg-gradient-to-b from-emerald-50 to-green-100 border-green-200 text-emerald-700",
    tabClass: "border-green-200 bg-gradient-to-b from-emerald-50 to-green-100 text-emerald-700",
    activeTabClass: "border-green-300 bg-gradient-to-b from-green-200 to-emerald-200 text-emerald-900 shadow-lg",
  },
];

export default function FYPElectives() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const [activeTab, setActiveTab] = useState(null);
  const currentTab = tabs.find((tab) => tab.key === activeTab) ?? null;
  const otherCourseOptions = [
    { label: "English", path: "/english", cardClass: "from-blue-50 to-indigo-100 border-blue-200 text-blue-700" },
    { label: "Chinese", path: "/chinese", cardClass: "from-red-50 to-rose-100 border-rose-200 text-rose-700" },
    { label: "Other Languages", path: "/third-languages", cardClass: "from-emerald-50 to-green-100 border-green-200 text-emerald-700" },
    { label: "Broadening and UxOP", path: "/broadening", cardClass: "from-violet-50 to-purple-100 border-violet-200 text-violet-700" },
    { label: "HAIC", path: "/haic", cardClass: "from-cyan-50 to-sky-100 border-cyan-200 text-cyan-700" },
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
            navigate("/", { state: { direction: "down" } });
          }, 300);
        }}
      />

      <main className="max-w-7xl mx-auto px-6 pt-4">
        <section className="py-10 text-center">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Electives
          </h2>
        </section>

        <section className="mb-10 flex flex-wrap justify-center gap-4">
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
                    : { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                }
                className={`rounded-full border px-8 py-4 text-base font-semibold transition-colors duration-300 ${
                  isActive ? tab.activeTabClass : tab.tabClass
                }`}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </section>

        {currentTab && (
          <>
            <section className="mx-auto mb-8 max-w-4xl px-2">
              <p className="text-center text-base text-gray-500">
                {currentTab.description}
              </p>
            </section>

            <section className="grid grid-cols-1 gap-8 md:grid-cols-2 pb-8">
              {currentTab.courses.map((course) => (
                <a
                  key={course.code}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={currentTab.cardClass}
                >
                  <h4 className="mb-3 text-3xl font-semibold">{course.code}</h4>
                  <p className="mb-4 text-gray-700">{course.title}</p>
                  <span className={`${currentTab.accent} font-medium`}>
                    View Course Details
                  </span>
                </a>
              ))}
            </section>

            <section className="pb-20 text-center">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                See other courses you can take
              </p>

              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {otherCourseOptions.map((option) => (
                  <button
                    key={option.path}
                    type="button"
                    onClick={() => {
                      setExitDirection("up");
                      setTimeout(() => {
                        navigate(option.path, { state: { direction: "up" } });
                      }, 300);
                    }}
                    className={`rounded-[24px] border bg-gradient-to-b p-6 text-left text-lg font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${option.cardClass}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </motion.div>
  );
}
