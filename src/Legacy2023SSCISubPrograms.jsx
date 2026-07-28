import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

// Shared single-extra-course page for OST, IRE and BTB
function SingleExtraCourse({ title, courseCode, courseTitle, courseUrl, textColorClass, gradientClass, borderClass, selfRoute }) {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ssci/program";
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
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={() => {
              setExitDirection("down");
              setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300);
            }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300"
          >
            Back
          </button>
          <button
            onClick={() => {
              setExitDirection("down");
              setTimeout(() => navigate("/", { state: { direction: "down" } }), 300);
            }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300"
          >
            Home
          </button>
        </div>

        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            School of Science
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since you are on the <span className="font-bold text-gray-800">{title}</span> program, you are required to take the following additional course (3 credits):
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <a
            href={courseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block bg-gradient-to-b ${gradientClass} border ${borderClass} rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
          >
            <h3 className="text-4xl font-semibold mb-4">{courseCode}</h3>
            <p className="text-gray-700 text-lg mb-4">{courseTitle}</p>
            <span className={`${textColorClass} font-medium`}>View Course Details</span>
          </a>
        </section>

        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">
            After completing this course, you may also take Advanced Communication courses.
          </p>
          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/english/pathway1/science/advanced-communication", {
                  state: { direction: "up", previousPage: selfRoute },
                });
              }, 300);
            }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}

export function Legacy2023SSCIOSTProg() {
  return (
    <SingleExtraCourse
      title="Ocean Science and Technology (OST)"
      courseCode="LANG 3025"
      courseTitle="Academic English for Ocean Science (3 credits)"
      courseUrl="https://cle.hkust.edu.hk/courses/lang3025"
      gradientClass="from-sky-50 to-blue-100"
      borderClass="border-blue-200"
      textColorClass="text-blue-700"
      selfRoute="/english/2023/ssci/ost"
    />
  );
}

export function Legacy2023SSCIIREProg() {
  return (
    <SingleExtraCourse
      title="International Research Enrichment (IRE)"
      courseCode="LANG 3027"
      courseTitle="Science Communication in English for Research Students (3 credits)"
      courseUrl="https://cle.hkust.edu.hk/courses/lang3027"
      gradientClass="from-sky-50 to-blue-100"
      borderClass="border-blue-200"
      textColorClass="text-blue-700"
      selfRoute="/english/2023/ssci/ire"
    />
  );
}

export function Legacy2023SSCIBTBProg() {
  return (
    <SingleExtraCourse
      title="Biotechnology and Business (BTB)"
      courseCode="LANG 2060"
      courseTitle="English for Biotechnology and Business (3 credits)"
      courseUrl="https://cle.hkust.edu.hk/courses/lang2060"
      gradientClass="from-sky-50 to-blue-100"
      borderClass="border-blue-200"
      textColorClass="text-blue-700"
      selfRoute="/english/2023/ssci/btb"
    />
  );
}

// MAEC needs LANG 2062 + choice of LANG 2061 or LANG 3060
export function Legacy2023SSCIMAECProg() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ssci/program";
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
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={() => {
              setExitDirection("down");
              setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300);
            }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300"
          >
            Back
          </button>
          <button
            onClick={() => {
              setExitDirection("down");
              setTimeout(() => navigate("/", { state: { direction: "down" } }), 300);
            }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300"
          >
            Home
          </button>
        </div>

        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            School of Science
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since you are on the <span className="font-bold text-gray-800">Marine Environmental Chemistry (MAEC)</span> program, you are required to take the following additional courses (6 credits):
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <a
            href="https://cle.hkust.edu.hk/courses/lang2062"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-b from-sky-50 to-blue-100 border border-blue-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-4xl font-semibold mb-4">LANG 2062</h3>
            <p className="text-gray-700 text-lg mb-4">Required course (3 credits)</p>
            <span className="text-blue-700 font-medium">View Course Details</span>
          </a>

          <div>
            <p className="text-center text-lg text-gray-600 mb-6">
              Plus <span className="font-semibold text-gray-800">one</span> of the following (3 credits):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="https://cle.hkust.edu.hk/courses/lang2061"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-b from-sky-50 to-blue-100 border border-blue-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-4xl font-semibold mb-4">LANG 2061</h3>
                <p className="text-gray-700 text-lg mb-4">English for Science Communication (3 credits)</p>
                <span className="text-blue-700 font-medium">View Course Details</span>
              </a>
              <a
                href="https://cle.hkust.edu.hk/courses/lang3060"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-b from-sky-50 to-blue-100 border border-blue-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-4xl font-semibold mb-4">LANG 3060</h3>
                <p className="text-gray-700 text-lg mb-4">Advanced Science Communication (3 credits)</p>
                <span className="text-blue-700 font-medium">View Course Details</span>
              </a>
            </div>
          </div>
        </section>

        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">
            After completing these courses, you may also take Advanced Communication courses.
          </p>
          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/english/pathway1/science/advanced-communication", {
                  state: { direction: "up", previousPage: "/english/2023/ssci/maec" },
                });
              }, 300);
            }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}