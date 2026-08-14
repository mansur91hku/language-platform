import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import { getEnglishYear } from "./utils/englishYear";

export default function EnglishPathway1() {
  const navigate = useNavigate();
  const location = useLocation();
  const [exitDirection, setExitDirection] = useState("up");

  // Write pathwayOrigin synchronously so downstream pages (SchoolSelection
  // back-button, Science / IRE / OST navigation) can read it immediately.
  sessionStorage.setItem("pathwayOrigin", "pathway1");

  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

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
            const year = getEnglishYear() || "2026";
            navigate(`/english/${year}/pathways`, { state: { direction: "down" } });
          }, 300);
        }}
      />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="py-10 text-center">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Required course
          </h2>

          <p className="text-xl text-gray-600">
            You are pre-enrolled into this course.
          </p>
        </section>

        <section className="mx-auto max-w-4xl">
          <a
            href="https://cle.hkust.edu.hk/courses/lang1402"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-[32px] border border-blue-200 bg-gradient-to-b from-blue-50 to-indigo-100 p-10 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="mb-4 text-4xl font-semibold">LANG 1402</h3>
            <p className="mb-4 text-lg text-gray-700">
              English for University Studies
            </p>
            <span className="font-medium text-blue-600">View Course Details</span>
          </a>
        </section>

        <section className="mt-10 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Click on the button below to see what's next after this course.
          </p>

          <button
            type="button"
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                const year = getEnglishYear() || "2026";
                navigate(`/english/${year}/pathway1/school`, {
                  state: {
                    direction: "up",
                    previousPage: `/english/${year}/pathway1`,
                  },
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
