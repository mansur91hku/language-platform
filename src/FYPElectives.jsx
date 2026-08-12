import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";

export default function FYPElectives() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

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

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="py-16 text-center">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            FYP English Electives
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Final Year Project English elective course options will be available
            here.
          </p>
        </section>
      </main>
    </motion.div>
  );
}
