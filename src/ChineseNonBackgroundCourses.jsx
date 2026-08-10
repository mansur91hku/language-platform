import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function ChineseNonBackgroundCourses() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  const [exitDirection, setExitDirection] = useState("up");

  const levels = [
    { code: "LANG 1511", level: "Level 1", prerequisite: "Below HSK 1 or equivalent", url: "https://cle.hkust.edu.hk/courses/lang1511" },
    { code: "LANG 1512", level: "Level 2", prerequisite: "HSK 1 or equivalent", url: "https://cle.hkust.edu.hk/courses/lang1512" },
    { code: "LANG 1513", level: "Level 3", prerequisite: "HSK 2 or equivalent", url: "https://cle.hkust.edu.hk/courses/lang1513" },
    { code: "LANG 1514", level: "Level 4", prerequisite: "HSK 3 or equivalent", url: "https://cle.hkust.edu.hk/courses/lang1514" },
    { code: "LANG 1515", level: "Level 5", prerequisite: "HSK 4 & 5 or equivalent", url: "https://cle.hkust.edu.hk/courses/lang1515" },
  ];

  const navBtn = "inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300 pointer-events-auto";
  const continueBtn = "inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 text-amber-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300";

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="fixed top-4 left-4 right-4 flex items-center justify-between z-50 pointer-events-none">
        <button onClick={() => { setExitDirection("down"); setTimeout(() => navigate("/chinese", { state: { direction: "down" } }), 300); }} className={navBtn}>Back</button>
        <button onClick={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }} className={navBtn}>Home</button>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
            Non-Chinese Language Background
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chinese as a Foreign Language — select the level that matches your current proficiency
          </p>
        </section>

        <section className="mb-4 px-2">
          <p className="text-gray-500 text-base">
            Enrol in the level that corresponds to your current HSK (Hanyu Shuiping Kaoshi) level or equivalent. If you are unsure of your level, start from Level 1.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {levels.map((lvl) => (
            <a
              key={lvl.code}
              href={lvl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-3xl font-semibold">{lvl.code}</h4>
                <span className="text-sm font-semibold bg-amber-200 text-amber-800 rounded-full px-3 py-1 ml-3 mt-1 whitespace-nowrap">
                  {lvl.level}
                </span>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wide">
                Prerequisite
              </p>
              <p className="text-gray-800 text-base mb-5">{lvl.prerequisite}</p>
              <span className="text-amber-700 font-medium">View Course Details</span>
            </a>
          ))}
        </section>

        {/* Continue to free electives */}
        <section className="text-center mt-10 pb-20">
          <p className="text-lg text-gray-600 mb-6">
            Click on the button below to see what's next after this course.
          </p>
          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/chinese/non-background/electives", {
                  state: { direction: "up" },
                });
              }, 300);
            }}
            className={continueBtn}
          >
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}
