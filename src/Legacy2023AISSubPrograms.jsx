import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const advCommRoute = "/english/pathway1/science/advanced-communication";

// ─── Reusable nav bar ────────────────────────────────────────────────────────
function NavBar({ onBack, onHome }) {
  return (
    <div className="pt-2 flex items-center justify-between">
      <button
        onClick={onBack}
        className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300"
      >
        Back
      </button>
      <button
        onClick={onHome}
        className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300"
      >
        Home
      </button>
    </div>
  );
}

// ─── LANG 2062 + choice block (shared by SENG, SHSS, SSCI, MAEC) ─────────────
function SchoolRequiredPlusChoice({ colorClass, borderClass, textColor }) {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <div>
        <p className="text-center text-lg text-gray-600 mb-6">
          You must also take the following school-required courses (6 credits):
        </p>
        <a
          href="https://cle.hkust.edu.hk/courses/lang2062"
          target="_blank"
          rel="noopener noreferrer"
          className={`block bg-gradient-to-b ${colorClass} border ${borderClass} rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
        >
          <h3 className="text-4xl font-semibold mb-4">LANG 2062</h3>
          <p className="text-gray-700 text-lg mb-4">Required course (3 credits)</p>
          <span className={`${textColor} font-medium`}>View Course Details</span>
        </a>
      </div>

      <div>
        <p className="text-center text-lg text-gray-600 mb-6">
          Plus <span className="font-semibold text-gray-800">one</span> of the following (3 credits):
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="https://cle.hkust.edu.hk/courses/lang2061"
            target="_blank"
            rel="noopener noreferrer"
            className={`block bg-gradient-to-b ${colorClass} border ${borderClass} rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
          >
            <h3 className="text-4xl font-semibold mb-4">LANG 2061</h3>
            <p className="text-gray-700 text-lg mb-4">English for Communication (3 credits)</p>
            <span className={`${textColor} font-medium`}>View Course Details</span>
          </a>
          <a
            href="https://cle.hkust.edu.hk/courses/lang3060"
            target="_blank"
            rel="noopener noreferrer"
            className={`block bg-gradient-to-b ${colorClass} border ${borderClass} rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
          >
            <h3 className="text-4xl font-semibold mb-4">LANG 3060</h3>
            <p className="text-gray-700 text-lg mb-4">Advanced English Communication (3 credits)</p>
            <span className={`${textColor} font-medium`}>View Course Details</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── AIS / SENG ──────────────────────────────────────────────────────────────
export function Legacy2023AISSENGCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ais";
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  return (
    <motion.div className="min-h-screen bg-white text-black" initial={{ y: initialDirection }} animate={{ y: 0 }} exit={{ y: exitDirection === "up" ? "-100%" : "100%" }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <NavBar
          onBack={() => { setExitDirection("down"); setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300); }}
          onHome={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }}
        />
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Academy of Interdisciplinary Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Required school course for SENG-affiliated programs (3 credits):</p>
        </section>
        <section className="max-w-4xl mx-auto mb-8">
          <a href="https://cle.hkust.edu.hk/courses/lang2030" target="_blank" rel="noopener noreferrer"
            className="block bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-4xl font-semibold mb-4">LANG 2030</h3>
            <p className="text-gray-700 text-lg mb-4">Technical Communication in English (3 credits)</p>
            <span className="text-orange-700 font-medium">View Course Details</span>
          </a>
        </section>
        <SchoolRequiredPlusChoice colorClass="from-teal-50 to-cyan-100" borderClass="border-cyan-200" textColor="text-cyan-700" />
        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">After completing these courses, you may also take Advanced Communication courses.</p>
          <button onClick={() => { setExitDirection("up"); setTimeout(() => navigate(advCommRoute, { state: { direction: "up", previousPage: "/english/2023/ais/seng" } }), 300); }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}

// ─── AIS / SHSS ──────────────────────────────────────────────────────────────
export function Legacy2023AISSHSSCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ais";
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  return (
    <motion.div className="min-h-screen bg-white text-black" initial={{ y: initialDirection }} animate={{ y: 0 }} exit={{ y: exitDirection === "up" ? "-100%" : "100%" }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <NavBar
          onBack={() => { setExitDirection("down"); setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300); }}
          onHome={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }}
        />
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Academy of Interdisciplinary Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Required school course for SHSS-affiliated programs (3 credits):</p>
        </section>
        <section className="max-w-4xl mx-auto mb-8">
          <a href="https://cle.hkust.edu.hk/courses/lang2070" target="_blank" rel="noopener noreferrer"
            className="block bg-gradient-to-b from-purple-50 to-violet-100 border border-violet-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-4xl font-semibold mb-4">LANG 2070</h3>
            <p className="text-gray-700 text-lg mb-4">English for Humanities and Social Sciences (3 credits)</p>
            <span className="text-violet-700 font-medium">View Course Details</span>
          </a>
        </section>
        <SchoolRequiredPlusChoice colorClass="from-teal-50 to-cyan-100" borderClass="border-cyan-200" textColor="text-cyan-700" />
        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">After completing these courses, you may also take Advanced Communication courses.</p>
          <button onClick={() => { setExitDirection("up"); setTimeout(() => navigate(advCommRoute, { state: { direction: "up", previousPage: "/english/2023/ais/shss" } }), 300); }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}

// ─── AIS / SSCI ──────────────────────────────────────────────────────────────
export function Legacy2023AISSSCICourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ais";
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  return (
    <motion.div className="min-h-screen bg-white text-black" initial={{ y: initialDirection }} animate={{ y: 0 }} exit={{ y: exitDirection === "up" ? "-100%" : "100%" }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <NavBar
          onBack={() => { setExitDirection("down"); setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300); }}
          onHome={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }}
        />
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Academy of Interdisciplinary Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Required school course for SSCI-affiliated programs (3 credits):</p>
        </section>
        <section className="max-w-4xl mx-auto mb-8">
          <a href="https://cle.hkust.edu.hk/courses/lang2010" target="_blank" rel="noopener noreferrer"
            className="block bg-gradient-to-b from-sky-50 to-blue-100 border border-blue-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-4xl font-semibold mb-4">LANG 2010</h3>
            <p className="text-gray-700 text-lg mb-4">English for Science (3 credits)</p>
            <span className="text-blue-700 font-medium">View Course Details</span>
          </a>
        </section>
        <SchoolRequiredPlusChoice colorClass="from-teal-50 to-cyan-100" borderClass="border-cyan-200" textColor="text-cyan-700" />
        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">After completing these courses, you may also take Advanced Communication courses.</p>
          <button onClick={() => { setExitDirection("up"); setTimeout(() => navigate(advCommRoute, { state: { direction: "up", previousPage: "/english/2023/ais/ssci" } }), 300); }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}

// ─── AIS / MAEC ──────────────────────────────────────────────────────────────
export function Legacy2023AISMAECCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ais";
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  return (
    <motion.div className="min-h-screen bg-white text-black" initial={{ y: initialDirection }} animate={{ y: 0 }} exit={{ y: exitDirection === "up" ? "-100%" : "100%" }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <NavBar
          onBack={() => { setExitDirection("down"); setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300); }}
          onHome={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }}
        />
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Academy of Interdisciplinary Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a <span className="font-bold text-gray-800">MAEC</span> student, you are required to take the following school-required courses (6 credits):
          </p>
        </section>
        <SchoolRequiredPlusChoice colorClass="from-teal-50 to-cyan-100" borderClass="border-cyan-200" textColor="text-cyan-700" />
        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">After completing these courses, you may also take Advanced Communication courses.</p>
          <button onClick={() => { setExitDirection("up"); setTimeout(() => navigate(advCommRoute, { state: { direction: "up", previousPage: "/english/2023/ais/maec" } }), 300); }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}

// ─── AIS / ISD ───────────────────────────────────────────────────────────────
export function Legacy2023AISISDCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.previousPage || "/english/2023/ais";
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  const isdCourses = [
    { code: "LANG 4030", url: "https://cle.hkust.edu.hk/courses/lang4030" },
    { code: "LANG 4031", url: "https://cle.hkust.edu.hk/courses/lang4031" },
    { code: "LANG 4032", url: "https://cle.hkust.edu.hk/courses/lang4032" },
    { code: "LANG 4034", url: "https://cle.hkust.edu.hk/courses/lang4034" },
  ];

  return (
    <motion.div className="min-h-screen bg-white text-black" initial={{ y: initialDirection }} animate={{ y: 0 }} exit={{ y: exitDirection === "up" ? "-100%" : "100%" }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <NavBar
          onBack={() => { setExitDirection("down"); setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300); }}
          onHome={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }}
        />
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Academy of Interdisciplinary Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As an <span className="font-bold text-gray-800">ISD</span> student, after completing two required English Communication courses and LANG 2030, you must also take one of the following (3 credits):
          </p>
        </section>

        <section className="max-w-4xl mx-auto mb-8">
          <a href="https://cle.hkust.edu.hk/courses/lang2030" target="_blank" rel="noopener noreferrer"
            className="block bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 mb-8">
            <h3 className="text-4xl font-semibold mb-4">LANG 2030</h3>
            <p className="text-gray-700 text-lg mb-4">Technical Communication in English — required first (3 credits)</p>
            <span className="text-orange-700 font-medium">View Course Details</span>
          </a>

          <p className="text-center text-lg text-gray-600 mb-6">
            Then one of the following ISD-specific courses (3 credits):
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isdCourses.map((c) => (
              <a key={c.code} href={c.url} target="_blank" rel="noopener noreferrer"
                className="block bg-gradient-to-b from-teal-50 to-cyan-100 border border-cyan-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-4xl font-semibold mb-4">{c.code}</h3>
                <span className="text-cyan-700 font-medium">View Course Details</span>
              </a>
            ))}
          </div>
        </section>

        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">After completing these courses, you may also take Advanced Communication courses.</p>
          <button onClick={() => { setExitDirection("up"); setTimeout(() => navigate(advCommRoute, { state: { direction: "up", previousPage: "/english/2023/ais/isd" } }), 300); }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}