import fs from "fs";

const files = [
  "src/SpanishUpperBeginner.jsx",
  "src/SpanishBeginner.jsx",
  "src/KoreanBeginner.jsx",
  "src/JapaneseUpperBeginner.jsx",
  "src/JapaneseBeginner.jsx",
  "src/FrenchBeginner.jsx",
  "src/ChineseNonBackgroundElectives.jsx",
  "src/ChineseLANG1133Elective.jsx",
  "src/ChineseNonBackgroundCourses.jsx",
  "src/ChineseGCSQuestion.jsx",
  "src/ChineseGCSLANG2170.jsx",
  "src/ChineseBackgroundCourses.jsx",
  "src/CantoneseNonChineseBackground.jsx",
  "src/CantoneseChineseBackground.jsx",
  "src/CantoneseBackgroundQuestion.jsx",
];

for (const file of files) {
  const content = fs
    .readFileSync(file, "utf8")
    .replace(/\n\s*const navBtn =[\s\S]*?pointer-events-auto";\n/, "\n");
  fs.writeFileSync(file, content);
}

console.log("Removed unused navBtn from", files.length, "files");
