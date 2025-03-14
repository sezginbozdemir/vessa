const fs = require("fs");
const path = require("path");

const PAGES_DIR = path.join(__dirname, ".next/server/app"); // 📌 Folderul unde sunt paginile generate
let fileCounter = 0; // 🔢 Contor pentru fișiere

function injectH1InFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // 📌 Extrage title-ul paginii din <title>...</title>
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  if (!titleMatch || titleMatch.length < 2) return; // ❌ Dacă nu există titlu, nu face nimic

  const pageTitle = titleMatch[1].trim(); // 📌 Extrage textul titlului

  // 📌 Crează <h1> ascuns
  const h1Tag = `<h1 style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap">${pageTitle}</h1>`;

  // 📌 Injectează <h1> după deschiderea <body>
  if (!content.includes(h1Tag)) {
	content = content.replace("<body", `<body>\n  ${h1Tag}`);
	fs.writeFileSync(filePath, content, "utf8"); // 📌 Suprascrie fișierul cu H1 injectat
	fileCounter++;
	console.log(`✅ ${fileCounter}. Injectat <h1> în: ${filePath}`);
  } else {
	fileCounter++;
	console.log(`⚠️ ${fileCounter}. ${filePath} - <h1> deja există, sărit.`);
  }
}

// 📌 Scanează toate fișierele HTML generate de Next.js
function processPages(dir) {
  fs.readdirSync(dir).forEach((file) => {
	const fullPath = path.join(dir, file);
	if (fs.statSync(fullPath).isDirectory()) {
	  processPages(fullPath); // 📌 Recursiv, intră în sub-foldere
	} else if (file.endsWith(".html")) {
	  injectH1InFile(fullPath);
	}
  });
}

console.log("🔍 Încep procesarea paginilor...");
processPages(PAGES_DIR);
console.log(`🚀 Procesarea s-a terminat! ${fileCounter} fișiere verificate.`);