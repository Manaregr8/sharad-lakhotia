import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const inputDir = path.join(projectRoot, "public", "images", "professional 1");

const MAX_WIDTH = 1600;
const WEBP_QUALITY = 75;

function toPosix(p) {
  return p.split(path.sep).join("/");
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const entries = await fs.readdir(inputDir, { withFileTypes: true });
  const jpgs = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => /\.(jpe?g)$/i.test(name))
    .sort((a, b) => a.localeCompare(b));

  if (jpgs.length === 0) {
    console.log("No .jpg/.jpeg files found in:", inputDir);
    return;
  }

  const outputWebps = [];

  for (const filename of jpgs) {
    const inputPath = path.join(inputDir, filename);
    const baseName = filename.replace(/\.(jpe?g)$/i, "");
    const outputFilename = `${baseName}.webp`;
    const outputPath = path.join(inputDir, outputFilename);

    const already = await fileExists(outputPath);
    if (!already) {
      await sharp(inputPath)
        .rotate()
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY, effort: 5 })
        .toFile(outputPath);
    }

    // Public URL must encode the space
    const publicUrl = `/images/professional%201/${encodeURIComponent(outputFilename)}`.replace(/%2520/g, "%20");
    outputWebps.push(publicUrl);
  }

  const outFile = path.join(projectRoot, "lib", "achievementPhotos.ts");
  const content = `export type AchievementPhoto = {\n  src: string;\n  alt: string;\n};\n\nexport const achievementPhotos: AchievementPhoto[] = [\n${outputWebps
    .map((src, idx) => `  { src: "${src}", alt: "Achievement photo ${idx + 1}" },`)
    .join("\n")}\n];\n`;

  await fs.writeFile(outFile, content, "utf8");

  console.log(`Converted ${jpgs.length} images to WebP (quality ${WEBP_QUALITY}, maxWidth ${MAX_WIDTH}).`);
  console.log(`Wrote image list to: ${toPosix(path.relative(projectRoot, outFile))}`);
}

await main();
