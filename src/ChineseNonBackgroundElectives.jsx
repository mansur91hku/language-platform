import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


const electives = [
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
];

export default function ChineseNonBackgroundElectives() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  const navBtn =
    "inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300 pointer-events-auto";

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar onBack={() => {
            setExitDirection("down");
            setTimeout(() => navigate("/chinese/non-background", { state: { direction: "down" } }), 300);
          }} />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
            Free Electives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You may also take the following free electives for non-Chinese language background students:
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
          {electives.map((course) => (
            <a
              key={course.code}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h4 className="text-3xl font-semibold mb-3">{course.code}</h4>
              <p className="text-gray-700 mb-4">{course.title}</p>
              <span className="text-amber-700 font-medium">View Course Details</span>
            </a>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
