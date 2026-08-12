import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function Legacy2023SMEDPlaceholder() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage =
    location.state?.previousPage || "/english/2023/school";
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
      <PageNavBar onBack={() => {
            setExitDirection("down");
            setTimeout(() => {
              navigate(previousPage, { state: { direction: "down" } });
            }, 300);
          }} />
      <main className="max-w-5xl mx-auto px-6 pt-4">

        <section className="flex flex-col items-center justify-center text-center py-24">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            School of Medicine
          </h2>
          <p className="text-2xl text-gray-500 max-w-2xl mb-6">
            Course pathway information for SMED students is not yet available on this platform.
          </p>
          <p className="text-lg text-gray-400">
            Please contact an advisor for guidance on your English course requirements.
          </p>
        </section>
      </main>
    </motion.div>
  );
}