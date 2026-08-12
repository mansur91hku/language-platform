import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function ChineseGCSQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  const navBtn =
    "inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300 pointer-events-auto";

  const cardBase =
    "bg-gradient-to-b from-rose-50 to-red-100 border border-red-200 rounded-[32px] p-10 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300";

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
            setTimeout(() => navigate("/chinese/background", { state: { direction: "down" } }), 300);
          }} />

      <main className="max-w-5xl mx-auto px-6 pt-4">
        <section className="text-center py-16">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            Chinese Language Background
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Are you in the{" "}
            <span className="font-bold text-gray-800">
              Global China Studies (GCS)
            </span>{" "}
            program?
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pb-20">
          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/chinese/background/gcs/yes", {
                  state: { direction: "up", previousPage: "/chinese/background/gcs" },
                });
              }, 300);
            }}
            className={cardBase}
          >
            <h3 className="text-4xl font-semibold">Yes</h3>
          </button>

          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/chinese/background/lang1133", {
                  state: { direction: "up", previousPage: "/chinese/background/gcs" },
                });
              }, 300);
            }}
            className={cardBase}
          >
            <h3 className="text-4xl font-semibold">No</h3>
          </button>
        </section>
      </main>
    </motion.div>
  );
}
