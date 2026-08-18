import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";

const tabs = [
  {
    key: "beginner",
    label: "Beginner",
    baseClass: "bg-gradient-to-b from-rose-50 to-pink-100 border-pink-200 text-pink-700",
    activeClass: "bg-gradient-to-b from-pink-200 to-rose-200 border-pink-300 text-pink-900 shadow-lg",
    cardClass: "block bg-gradient-to-b from-rose-50 to-pink-100 border border-pink-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-pink-700",
    courses: [
      { code: "LANG 1210", title: "Japanese Language and Culture for Beginners I", url: "https://cle.hkust.edu.hk/courses/lang1210" },
      { code: "LANG 1211", title: "Communicative Japanese for Beginners I", url: "https://cle.hkust.edu.hk/courses/lang1211" },
      { code: "LANG 1212", title: "Japanese Vocabulary and Grammar Essentials I", url: "https://cle.hkust.edu.hk/courses/lang1212" },
    ],
  },
  {
    key: "upper-beginner",
    label: "Upper Beginner",
    baseClass: "bg-gradient-to-b from-amber-50 to-orange-100 border-orange-200 text-orange-700",
    activeClass: "bg-gradient-to-b from-orange-200 to-amber-200 border-orange-300 text-orange-900 shadow-lg",
    cardClass: "block bg-gradient-to-b from-amber-50 to-orange-100 border border-orange-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-orange-700",
    courses: [
      { code: "LANG 2200", title: "Japanese Language and Culture for Beginners II", url: "https://cle.hkust.edu.hk/courses/lang2200" },
      { code: "LANG 2201", title: "Communicative Japanese for Beginners II", url: "https://cle.hkust.edu.hk/courses/lang2201" },
      { code: "LANG 2202", title: "Japanese Vocabulary and Grammar Essentials II", url: "https://cle.hkust.edu.hk/courses/lang2202" },
    ],
  },
];

const breatheDelays = [0, 0.5];

export default function JapaneseBeginner() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const [activeTab, setActiveTab] = useState(
    location.pathname.endsWith("/upper-beginner") ? "upper-beginner" : null
  );
  const tabButtonCommonClass =
    "cursor-pointer select-none px-8 py-4 rounded-full border text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2";
  const currentTab = tabs.find((tab) => tab.key === activeTab) ?? null;

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar onBack={() => { setExitDirection("down"); setTimeout(() => navigate("/third-languages", { state: { direction: "down" } }), 300); }} />

      <main className="max-w-7xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">Japanese</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a comprehensive 3-credit course or combine the 2-credit communication course with the 1-credit self-paced course.
          </p>
        </section>

        <section className="flex flex-wrap justify-center gap-6 mb-10">
          {tabs.map((tab, i) => {
            const isActive = activeTab === tab.key;

            return (
              <div key={tab.key} className="relative">
                {i === 0 && activeTab === null && (
                  <motion.span
                    className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-gray-200 md:inline-flex"
                    animate={{ x: [0, 6, 0], opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Click here 👉
                  </motion.span>
                )}
                <motion.button
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  animate={
                    isActive ? { scale: 1 } : { scale: [1, 1.05, 1] }
                  }
                  transition={
                    isActive
                      ? { duration: 0.2 }
                      : { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: breatheDelays[i] }
                  }
                  className={`${tabButtonCommonClass} ${
                    isActive ? tab.activeClass : tab.baseClass
                  }`}
                >
                  {tab.label}
                </motion.button>
              </div>
            );
          })}
        </section>

        {currentTab && (
          <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
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

            <section className="text-center pb-20">
              <button
                type="button"
                onClick={() => {
                  setExitDirection("down");
                  setTimeout(() => navigate("/third-languages", { state: { direction: "down" } }), 300);
                }}
                className={`inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] border text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${currentTab.cardClass}`}
              >
                Explore other language courses
              </button>
            </section>
          </>
        )}
      </main>
    </motion.div>
  );
}
