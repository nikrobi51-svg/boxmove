import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlFiles = [];
const errors = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = full.slice(rootDir.length + 1).replaceAll("\\", "/");
    if (entry === "tools" || entry === "assets" || entry.startsWith(".")) continue;
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (entry.endsWith(".html")) {
      htmlFiles.push(rel);
    }
  }
}

function fail(message) {
  errors.push(message);
}

function attr(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

walk(rootDir);

const titles = new Map();
const descriptions = new Map();

for (const rel of htmlFiles) {
  const html = readFileSync(join(rootDir, rel), "utf8");
  const isRootRedirect = rel === "index.html";
  const is404 = rel === "404.html";
  const title = attr(html, /<title>([\s\S]*?)<\/title>/i);
  const description = attr(html, /<meta name="description" content="([^"]*)"/i);
  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/i);
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];

  if (!title) fail(`${rel}: missing title`);
  if (!description) fail(`${rel}: missing meta description`);
  if (!canonical) fail(`${rel}: missing canonical`);
  if (!isRootRedirect && h1Count !== 1) fail(`${rel}: expected exactly one H1, found ${h1Count}`);
  if (!isRootRedirect && !is404 && !/<meta name="robots" content="index, follow"/i.test(html)) {
    fail(`${rel}: indexable page does not have index, follow`);
  }
  if (is404 && !/<meta name="robots" content="noindex, follow"/i.test(html)) {
    fail(`${rel}: 404 page should be noindex, follow`);
  }
  if (!isRootRedirect) {
    if (titles.has(title)) fail(`${rel}: duplicate title with ${titles.get(title)}`);
    titles.set(title, rel);
    if (descriptions.has(description)) fail(`${rel}: duplicate description with ${descriptions.get(description)}`);
    descriptions.set(description, rel);
  }
  for (const block of jsonLdBlocks) {
    try {
      JSON.parse(stripTags(block[1]));
    } catch (error) {
      fail(`${rel}: invalid JSON-LD (${error.message})`);
    }
  }
  if (/class="floating-contact floating-contact-whatsapp"[^>]*\?text=/i.test(html)) {
    fail(`${rel}: floating WhatsApp link contains prefilled text`);
  }
}

const requiredFiles = [
  "ru/index.html",
  "en/index.html",
  "ka/index.html",
  "ru/gruzoperevozki-tbilisi/index.html",
  "ru/gruzovoe-taksi-tbilisi/index.html",
  "ru/perevozka-mebeli-tbilisi/index.html",
  "ru/razborka-sborka-mebeli-tbilisi/index.html",
  "ru/kvartirny-pereezd-tbilisi/index.html",
  "ru/ofisny-pereezd-tbilisi/index.html",
  "ru/gruzchiki-tbilisi/index.html",
  "ru/vyvoz-musora-tbilisi/index.html",
  "ru/gruzoperevozki-po-gruzii/index.html",
  "en/cargo-transportation-tbilisi/index.html",
  "en/man-with-van-tbilisi/index.html",
  "en/furniture-moving-tbilisi/index.html",
  "en/furniture-assembly-tbilisi/index.html",
  "en/apartment-moving-tbilisi/index.html",
  "en/office-moving-tbilisi/index.html",
  "en/movers-tbilisi/index.html",
  "en/junk-removal-tbilisi/index.html",
  "en/cargo-transportation-georgia/index.html",
  "ka/tvirtis-gadazidva-tbilisi/index.html",
  "ka/satvirto-taqsi-tbilisi/index.html",
  "ka/avejis-gadazidva-tbilisi/index.html",
  "ka/avejis-dashla-atsyoba-tbilisi/index.html",
  "ka/binis-gadatana-tbilisi/index.html",
  "ka/ofisis-gadatana-tbilisi/index.html",
  "ka/mtvirtavebi-tbilisi/index.html",
  "ka/nagvis-gatana-tbilisi/index.html",
  "ka/tvirtis-gadazidva-sakartvelo/index.html",
  "404.html",
  "sitemap.xml",
  "robots.txt"
];

for (const file of requiredFiles) {
  if (!existsSync(join(rootDir, file))) fail(`missing required file: ${file}`);
}

const sitemap = readFileSync(join(rootDir, "sitemap.xml"), "utf8");
for (const file of requiredFiles.filter((file) => file.endsWith("index.html") && file !== "index.html")) {
  const loc = `https://boxmove.ge/${file.replace(/index\.html$/, "")}`;
  if (!sitemap.includes(`<loc>${loc}</loc>`)) fail(`sitemap missing ${loc}`);
}

const robots = readFileSync(join(rootDir, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://boxmove.ge/sitemap.xml")) fail("robots.txt missing sitemap URL");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML files, sitemap.xml and robots.txt`);
