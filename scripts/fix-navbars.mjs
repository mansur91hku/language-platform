import fs from "fs";
import path from "path";

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".jsx")) files.push(full);
  }
  return files;
}

const brokenPattern =
  /<PageNavBar onBack=\{\(\) => \{\s*\(\) => \{([\s\S]*?)\}\s*\}\} \/>/g;

let fixed = 0;
for (const file of walk("src")) {
  let content = fs.readFileSync(file, "utf8");
  if (!brokenPattern.test(content)) continue;

  content = content.replace(
    brokenPattern,
    "<PageNavBar onBack={() => {$1}} />",
  );
  fs.writeFileSync(file, content);
  fixed += 1;
  console.log("Fixed", file);
}

console.log("Total fixed:", fixed);
