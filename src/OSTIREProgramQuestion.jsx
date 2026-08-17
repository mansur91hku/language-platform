import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import { getEnglishYear, getPathwayOrigin } from "./utils/englishYear";

export default function OSTIREProgramQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const year = getEnglishYear() || "2026";
  const pathway = getPathwayOrigin() === "pathway2" ? "pathway2" : "pathway1";
  const previousPage =
    location.state?.previousPage || `/english/${year}/${pathway}/science`;
  const [exitDirection, setExitDirection] = useState("up");
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  const neitherPath =
    ((year === "2025" || year === "2024") && pathway === "pathway1") ||
    ((year === "2025" || year === "2024") && pathway === "pathway2") ||
    (year === "2026" && pathway === "pathway2")
      ? `/english/${year}/${pathway}/science/advanced-communication`
      : `/english/${year}/${pathway}/science/neither`;

  const options = [
    {
      label: "OST",
      description: "Ocean Science and Technology (OST)",
      path: `/english/${year}/${pathway}/science/ost/yes`,
    },
    {
      label: "IRE",
      description: "International Research Enrichment (IRE)",
      path: `/english/${year}/${pathway}/science/ire`,
    },
    {
      label: "Neither",
      description: "I am not in OST or IRE",
      path: neitherPath,
    },
  ];

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
            navigate(previousPage, { state: { direction: "down" } });
          }, 300);
        }}
      />

      <main className="max-w-5xl mx-auto px-6 pt-4">
        <section className="py-16 text-center">
          <h2 className="mb-8 text-5xl font-semibold tracking-tight md:text-7xl">
            School of Science
          </h2>
          <p className="mx-auto max-w-3xl text-2xl text-gray-600">
            Are you in either of these programs?
          </p>
        </section>

        <section className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {options.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => {
                setExitDirection("up");
                setTimeout(() => {
                  navigate(option.path, {
                    state: {
                      direction: "up",
                      previousPage: location.pathname,
                    },
                  });
                }, 300);
              }}
              className="rounded-[32px] border border-blue-200 bg-gradient-to-b from-sky-50 to-blue-100 p-10 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="mb-3 text-4xl font-semibold">{option.label}</h3>
              <p className="text-base text-gray-600">{option.description}</p>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
