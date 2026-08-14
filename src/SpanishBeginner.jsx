import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";

const courses = [
  {
    code: "LANG 1330",
    title: "Spanish Language and Culture for Beginners I",
    url: "https://cle.hkust.edu.hk/courses/lang1330",
  },
  {
    code: "LANG 2330",
    title: "Spanish Language and Culture for Beginners II",
    url: "https://cle.hkust.edu.hk/courses/lang2330",
  },
];

export default function SpanishBeginner() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar onBack={() => { setExitDirection("down"); setTimeout(() => navigate("/third-languages", { state: { direction: "down" } }), 300); }} />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">Spanish</h2>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
          {courses.map((course) => (
            <a
              key={course.code}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-b from-yellow-50 to-amber-100 border border-amber-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h4 className="text-3xl font-semibold mb-3">{course.code}</h4>
              <p className="text-gray-700 mb-4">{course.title}</p>
              <span className="text-amber-700 font-medium">View Course Details</span>
            </a>
          ))}
        </section>

        <section className="text-center pb-20">
          <button
            onClick={() => {
              setExitDirection("down");
              setTimeout(() => navigate("/third-languages", { state: { direction: "down" } }), 300);
            }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-yellow-50 to-amber-100 border border-amber-200 text-amber-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            Explore other language courses
          </button>
        </section>
      </main>
    </motion.div>
  );
}
