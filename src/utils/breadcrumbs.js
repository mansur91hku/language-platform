import { getEnglishYear } from "./englishYear";

const SEGMENT_LABELS = {
  english: "English",
  chinese: "Chinese",
  "third-languages": "Other Languages",
  broadening: "Broadening & UxOP",
  haic: "HAIC",
  fyp: "Electives",
  pathways: "Pathways",
  pathway1: "Pathway 1",
  pathway2: "Pathway 2",
  school: "School Selection",
  science: "School of Science",
  engineering: "School of Engineering",
  business: "School of Business and Management",
  humanities: "School of Humanities and Social Science",
  ais: "Academy of Interdisciplinary Studies",
  ost: "OST Program",
  "program-selection": "Program Selection",
  ire: "IRE Program",
  neither: "Other Courses",
  "advanced-communication": "Advanced Communication",
  isd: "ISD Program",
  background: "Background",
  "non-background": "Non-Background",
  gcs: "GCS",
  lang1133: "LANG 1133",
  lang1403: "LANG 1403",
  electives: "Electives",
  japanese: "Japanese",
  korean: "Korean",
  french: "French",
  spanish: "Spanish",
  cantonese: "Cantonese",
  "upper-beginner": "Upper Beginner",
  "chinese-background": "Chinese Background",
  "non-chinese-background": "Non-Chinese Background",
  smed: "School of Medicine",
  sbm: "School of Business and Management",
  seng: "School of Engineering",
  shss: "School of Humanities and Social Science",
  ssci: "School of Science",
  program: "Program Selection",
  rmbi: "RMBI",
  standard: "Standard",
  choice: "Choice Courses",
  "isd-question": "ISD Question",
  "core-choice": "Core Choice",
  lang2062: "LANG 2062",
  2023: "2023",
  2024: "2024",
  2025: "2025",
  2026: "2026",
};

function buildPath(prefix, segments) {
  return prefix + (segments.length ? `/${segments.join("/")}` : "");
}

export function buildBreadcrumbs(pathname) {
  if (pathname === "/") {
    return [];
  }

  const parts = pathname.split("/").filter(Boolean);
  const crumbs = [];
  let cumulativePath = "";

  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];

    if (part === "yes" || part === "no") {
      continue;
    }

    cumulativePath = buildPath("", parts.slice(0, i + 1));
    const label = SEGMENT_LABELS[part] || part.replace(/-/g, " ");

    if (crumbs.length === 0) {
      crumbs.push({ label, path: cumulativePath });
      continue;
    }

    const lastLabel = crumbs[crumbs.length - 1].label;
    if (lastLabel === label && crumbs[crumbs.length - 1].path === cumulativePath) {
      continue;
    }

    crumbs.push({ label, path: cumulativePath });
  }

  return crumbs;
}
