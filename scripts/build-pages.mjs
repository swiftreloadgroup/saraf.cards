// Builds the site as plain static files and places them in the repository root,
// ready for GitHub Pages "Deploy from a branch" (main / root).
//
//   npm run build:pages
//
// Then commit and push the generated files (index.html, faq/, terms/, assets/, ...).
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "dist", "client");
const domain = "saraf.cards";

// Files and folders this script owns in the repository root. Anything else is left alone.
const generated = ["index.html", "faq", "terms", "assets", "favicon.ico", "favicon.svg", "robots.txt"];

// Build outside editor-specific settings so the output is a plain static site.
const env = { ...process.env, STATIC_EXPORT: "true" };
for (const key of ["LOVABLE_SANDBOX", "DEV_SERVER__PROJECT_PATH", "LOVABLE_NITRO_PRESET", "NITRO_PRESET"]) {
  delete env[key];
}

rmSync(join(root, "dist"), { recursive: true, force: true });
const build = spawnSync("npx", ["vite", "build"], { cwd: root, env, stdio: "inherit" });
if (build.status !== 0) process.exit(build.status ?? 1);

for (const page of ["index.html", "faq/index.html", "terms/index.html"]) {
  if (!existsSync(join(outDir, page))) {
    console.error(`Static build is missing ${page}; nothing was copied.`);
    process.exit(1);
  }
}

for (const name of generated) rmSync(join(root, name), { recursive: true, force: true });

for (const name of readdirSync(outDir)) {
  if (name === "_headers") continue; // Cloudflare-only file, ignored by GitHub Pages
  cpSync(join(outDir, name), join(root, name), { recursive: true });
}

// Custom domain for GitHub Pages, and stop Jekyll from processing the site.
writeFileSync(join(root, "CNAME"), `${domain}\n`);
writeFileSync(join(root, ".nojekyll"), "");

console.log("\nStatic site written to the repository root. Commit and push to publish on GitHub Pages.");
