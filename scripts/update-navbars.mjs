import fs from "fs";
import path from "path";

const srcDir = "src";
const skip = new Set(["App.jsx", "main.jsx"]);

function getImportPath(file) {
  const depth = (file.match(/\//g) || []).length;
  return depth === 0 ? "./components/PageNavBar" : `${"../".repeat(depth)}components/PageNavBar`;
}

function extractOnClickHandler(buttonMarkup) {
  const start = buttonMarkup.indexOf("onClick={");
  if (start === -1) return null;

  let index = start + "onClick={".length;
  let depth = 1;
  while (index < buttonMarkup.length && depth > 0) {
    const char = buttonMarkup[index];
    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;
    index += 1;
  }

  return buttonMarkup.slice(start + "onClick={".length, index - 1).trim();
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  if (content.includes("PageNavBar")) return false;
  if (!content.includes("fixed top-4 left-4 right-4 flex items-center justify-between")) {
    return false;
  }

  const navStart = content.indexOf(
    '<div className="fixed top-4 left-4 right-4 flex items-center justify-between z-50 pointer-events-none">',
  );
  if (navStart === -1) return false;

  const navEnd = content.indexOf("</div>", navStart);
  if (navEnd === -1) return false;

  const navBlock = content.slice(navStart, navEnd + "</div>".length);
  const backButtonStart = navBlock.indexOf("<button");
  const backButtonEnd = navBlock.indexOf("</button>", backButtonStart);
  if (backButtonStart === -1 || backButtonEnd === -1) return false;

  const backButton = navBlock.slice(backButtonStart, backButtonEnd + "</button>".length);
  if (!backButton.includes("Back")) return false;

  const onBackHandler = extractOnClickHandler(backButton);
  if (!onBackHandler) return false;

  const rel = path.relative(srcDir, filePath).replace(/\\/g, "/");
  const importPath = getImportPath(rel);

  if (!content.includes("import PageNavBar")) {
    const importLine = `import PageNavBar from "${importPath}";\n`;
    const imports = [...content.matchAll(/^import .+$/gm)];
    const lastImport = imports.pop();
    if (lastImport) {
      const idx = lastImport.index + lastImport[0].length;
      content = `${content.slice(0, idx)}\n${importLine}${content.slice(idx)}`;
    } else {
      content = importLine + content;
    }
  }

  content = content.replace(
    navBlock,
    `<PageNavBar onBack={() => {\n        ${onBackHandler}\n      }} />`,
  );
  fs.writeFileSync(filePath, content);
  return true;
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".jsx") && !skip.has(entry.name)) files.push(full);
  }
  return files;
}

let updated = 0;
for (const file of walk(srcDir)) {
  if (processFile(file)) {
    updated += 1;
    console.log("Updated", path.relative(srcDir, file));
  }
}

console.log("Total updated:", updated);
