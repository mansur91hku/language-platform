import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";



export default function Legacy2023AISISDQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ais/lang2030";
  const affiliation = location.state?.affiliation || "SENG";
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  const [exitDirection, setExitDirection] = useState("up");

  const handleYes = () => {
    setExitDirection("up");
    setTimeout(() => {
      navigate("/english/2023/ais/isd", {
        state: {
          direction: "up",
          previousPage: location.pathname,
          affiliation,
        },
      });
    }, 300);
  };

  const handleNo = () => {
    setExitDirection("up");
    setTimeout(() => {
      navigate("/english/2023/ais/choice", {
        state: {
          direction: "up",
          previousPage: location.pathname,
          affiliation,
          from: "isd-no",
        },
      });
    }, 300);
  };

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
              navigate(previousPage, {
                state: {
                  direction: "down",
                  affiliation,
                  previousPage: "/english/2023/ais",
                },
              });
            }, 300);
          }} />

      <main className="max-w-5xl mx-auto px-6 pt-4">
        <section className="text-center py-16">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            Academy of Interdisciplinary Studies
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Are you in the following program?{" "}
            <span className="font-bold text-gray-800">
              Integrative Systems and Design (ISD)
            </span>
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pb-16">
          <button
            onClick={handleYes}
            className="
              bg-gradient-to-b from-teal-50 to-cyan-100
              border border-cyan-200 rounded-[32px] p-10
              text-center shadow-md hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300
            "
          >
            <h3 className="text-4xl font-semibold">Yes</h3>
          </button>

          <button
            onClick={handleNo}
            className="
              bg-gradient-to-b from-teal-50 to-cyan-100
              border border-cyan-200 rounded-[32px] p-10
              text-center shadow-md hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300
            "
          >
            <h3 className="text-4xl font-semibold">No</h3>
          </button>
        </section>
      </main>
    </motion.div>
  );
}
