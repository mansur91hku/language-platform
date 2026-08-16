import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function Legacy2023SSCIProgramQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage =
    location.state?.previousPage || "/english/2023/ssci";

  const [exitDirection, setExitDirection] = useState("up");

  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  const programs = [
    { label: "Ocean Science and Technology (OST)", route: "/english/2023/ssci/ost" },
    { label: "International Research Enrichment (IRE)", route: "/english/2023/ssci/ire" },
    { label: "Biotechnology and Business (BTB)", route: "/english/2023/ssci/btb" },
    { label: "Mathematics and Economics (MAEC)", route: "/english/2023/ssci/maec" },
    { label: "None of these", route: "/english/2023/pathway1/advanced-communication" },
  ];

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
        <section className="text-center py-12">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            School of Science
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Are you on any of the following programs?
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 max-w-3xl mx-auto pb-16">
          {programs.map((program) => (
            <button
              key={program.label}
              onClick={() => {
                setExitDirection("up");
                setTimeout(() => {
                  navigate(program.route, {
                    state: {
                      direction: "up",
                      previousPage: "/english/2023/ssci/program",
                    },
                  });
                }, 300);
              }}
              className="
                bg-gradient-to-b from-sky-50 to-blue-100
                border border-blue-200 rounded-[32px] px-10 py-8
                text-center shadow-md hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-semibold">{program.label}</h3>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
