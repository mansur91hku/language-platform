import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


const advCommRoute = "/english/2023/pathway1/advanced-communication";

// ─── Nav bar helper ───────────────────────────────────────────────────────────
function NavBar({ onBack }) {
  return <PageNavBar onBack={onBack} />;
}

// ─── AIS Core Choice: LANG 2010 / LANG 2030 / LANG 2070 ──────────────────────
// Shown when affiliation is SENG, SHSS or SSCI and user is NOT on ISD/MAEC
export function Legacy2023AISCoreChoice() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ais/isd-question";
  const affiliation = location.state?.affiliation || "none";
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  const coreCourses = [
    { code: "LANG 2010", title: "English for Science I (3 credits)", url: "https://cle.hkust.edu.hk/courses/lang2010", forSchool: "SSCI" },
    { code: "LANG 2030", title: "Technical Communication I (3 credits)", url: "https://cle.hkust.edu.hk/courses/lang2030", forSchool: "SENG" },
    { code: "LANG 2070", title: "English Communication for Humanities and Social Science Studies I (3 credits)", url: "https://cle.hkust.edu.hk/courses/lang2070", forSchool: "SHSS" },
  ];

  return (
    <motion.div className="min-h-screen bg-white text-black" initial={{ y: initialDirection }} animate={{ y: 0 }} exit={{ y: exitDirection === "up" ? "-100%" : "100%" }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <NavBar
        onBack={() => { setExitDirection("down"); setTimeout(() => navigate(previousPage, { state: { direction: "down", affiliation } }), 300); }}
        onHome={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }}
      />
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Academy of Interdisciplinary Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You are required to take <span className="font-bold text-gray-800">one</span> of the following school-required courses (3 credits):
          </p>
        </section>

        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreCourses.map((c) => (
            <a key={c.code} href={c.url} target="_blank" rel="noopener noreferrer"
              className="block bg-gradient-to-b from-teal-50 to-cyan-100 border border-cyan-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-3xl font-semibold mb-4">{c.code}</h3>
              <p className="text-gray-700 text-base mb-4">{c.title}</p>
              <span className="text-cyan-700 font-medium">View Course Details</span>
            </a>
          ))}
        </section>

        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">Click the button below to see what comes next.</p>
          <button onClick={() => { setExitDirection("up"); setTimeout(() => navigate("/english/2023/ais/lang2062", { state: { direction: "up", previousPage: "/english/2023/ais/core-choice", affiliation } }), 300); }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}

// ─── AIS LANG 2062 (single course page) ──────────────────────────────────────
export function Legacy2023AISLANG2062() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ais/core-choice";
  const affiliation = location.state?.affiliation || "none";
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  return (
    <motion.div className="min-h-screen bg-white text-black" initial={{ y: initialDirection }} animate={{ y: 0 }} exit={{ y: exitDirection === "up" ? "-100%" : "100%" }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <NavBar
        onBack={() => { setExitDirection("down"); setTimeout(() => navigate(previousPage, { state: { direction: "down", affiliation } }), 300); }}
        onHome={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }}
      />
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Academy of Interdisciplinary Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You are also required to take the following school-required course (3 credits):
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <a href="https://cle.hkust.edu.hk/courses/lang2062" target="_blank" rel="noopener noreferrer"
            className="block bg-gradient-to-b from-teal-50 to-cyan-100 border border-cyan-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-4xl font-semibold mb-4">LANG 2062</h3>
            <p className="text-gray-700 text-lg mb-4">Professional Speaking for the Workplace (3 credits)</p>
            <span className="text-cyan-700 font-medium">View Course Details</span>
          </a>
        </section>

        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">Click the button below to see what comes next.</p>
          <button onClick={() => { setExitDirection("up"); setTimeout(() => navigate("/english/2023/ais/choice", { state: { direction: "up", previousPage: "/english/2023/ais/lang2062", affiliation } }), 300); }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}

// ─── AIS Choice: LANG 2061 / LANG 3060 ───────────────────────────────────────
export function Legacy2023AISChoiceCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ais/lang2062";
  const affiliation = location.state?.affiliation || "none";
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  return (
    <motion.div className="min-h-screen bg-white text-black" initial={{ y: initialDirection }} animate={{ y: 0 }} exit={{ y: exitDirection === "up" ? "-100%" : "100%" }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <NavBar
        onBack={() => { setExitDirection("down"); setTimeout(() => navigate(previousPage, { state: { direction: "down", affiliation } }), 300); }}
        onHome={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }}
      />
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Academy of Interdisciplinary Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            After <span className="font-bold text-gray-800">LANG 2062</span>, you are required to take{" "}
            <span className="font-bold text-gray-800">one</span> of the following courses (3 credits):
          </p>
        </section>

        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="https://cle.hkust.edu.hk/courses/lang2061" target="_blank" rel="noopener noreferrer"
            className="block bg-gradient-to-b from-teal-50 to-cyan-100 border border-cyan-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-4xl font-semibold mb-4">LANG 2061</h3>
            <p className="text-gray-700 text-lg mb-4">Professional Writing for the Workplace (3 credits)</p>
            <span className="text-cyan-700 font-medium">View Course Details</span>
          </a>
          <a href="https://cle.hkust.edu.hk/courses/lang3060" target="_blank" rel="noopener noreferrer"
            className="block bg-gradient-to-b from-teal-50 to-cyan-100 border border-cyan-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-4xl font-semibold mb-4">LANG 3060</h3>
            <p className="text-gray-700 text-lg mb-4">Advanced Academic Writing (3 credits)</p>
            <span className="text-cyan-700 font-medium">View Course Details</span>
          </a>
        </section>

        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">After completing these courses, you may also take Advanced Communication courses.</p>
          <button onClick={() => { setExitDirection("up"); setTimeout(() => navigate(advCommRoute, { state: { direction: "up", previousPage: location.pathname } }), 300); }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}

// ─── AIS ISD Courses ──────────────────────────────────────────────────────────
export function Legacy2023AISISDCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ais/isd-question";
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  const isdCourses = [
    { code: "LANG 4032", title: "Technical Communication II for IEDA and ISDN", url: "https://cle.hkust.edu.hk/courses/lang4032" },
  ];

  return (
    <motion.div className="min-h-screen bg-white text-black" initial={{ y: initialDirection }} animate={{ y: 0 }} exit={{ y: exitDirection === "up" ? "-100%" : "100%" }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <NavBar
        onBack={() => { setExitDirection("down"); setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300); }}
        onHome={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }}
      />
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Academy of Interdisciplinary Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As an <span className="font-bold text-gray-800">Innovation, Design and Technology (ISD)</span> student, you are required to take the following course:
          </p>
        </section>

        <section className="text-center mb-6">
          <p className="text-base text-gray-500 max-w-2xl mx-auto italic">
            Note: One of these courses should be taken after completing the two required English Communication courses and LANG 2030.
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          {isdCourses.map((c) => (
            <a key={c.code} href={c.url} target="_blank" rel="noopener noreferrer"
              className="block bg-gradient-to-b from-teal-50 to-cyan-100 border border-cyan-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-4xl font-semibold mb-4">{c.code}</h3>
              <p className="text-gray-700 text-lg mb-4">{c.title}</p>
              <span className="text-cyan-700 font-medium">View Course Details</span>
            </a>
          ))}
        </section>

        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">After completing this course, you may also take Advanced Communication courses.</p>
          <button onClick={() => { setExitDirection("up"); setTimeout(() => navigate(advCommRoute, { state: { direction: "up", previousPage: location.pathname } }), 300); }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}
