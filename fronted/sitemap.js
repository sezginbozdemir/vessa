const fs = require("fs");
const path = require("path");

// Define the directory to scan for HTML files
const pagesDir = path.join(__dirname, ".next/server/app");

// Update this to your domain
const baseUrl = "https://vessahospital.ro";

// Define the output path within the public folder
const outputPath = path.join(__dirname, "public", "sitemap.xml");

function getAllHtmlFiles(dir) {
  let htmlFiles = [];
  try {
	const files = fs.readdirSync(dir, { withFileTypes: true });
	for (const file of files) {
	  const fullPath = path.join(dir, file.name);
	  if (file.isDirectory()) {
		htmlFiles = htmlFiles.concat(getAllHtmlFiles(fullPath));
	  } else if (file.isFile() && file.name.endsWith(".html")) {
		htmlFiles.push(fullPath);
	  }
	}
  } catch (err) {
	console.error(`Error reading directory ${dir}:`, err.message);
  }
  return htmlFiles;
}

function generateSitemap() {
  console.log("Scanning directory:", pagesDir);
  const htmlFiles = getAllHtmlFiles(pagesDir);
  if (htmlFiles.length === 0) {
	console.error("No HTML files found. Check the directory path.");
	return;
  }

  console.log("Found HTML files:", htmlFiles);

  const sitemapEntries = htmlFiles.map((file) => {
	const relativePath = file
	  .replace(pagesDir, "")
	  .replace(/\\/g, "/")
	  .replace(".html", "");
	return `<url><loc>${baseUrl}${relativePath}</loc></url>`;
  });

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join(
	"\n"
  )}\n</urlset>`;

  // Ensure the public directory exists
  if (!fs.existsSync(path.join(__dirname, "public"))) {
	fs.mkdirSync(path.join(__dirname, "public"), { recursive: true });
  }

  // Write the sitemap file to the public folder
  fs.writeFileSync(outputPath, sitemapContent, "utf8");
  console.log(`Sitemap generated at: ${outputPath}`);
}

generateSitemap();
