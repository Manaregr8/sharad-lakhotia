import fs from "node:fs";
import path from "node:path";
import { PrismaClient } from "@prisma/client";

function readDotEnv(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

function getEnvValue(dotenvText, key) {
  const lines = dotenvText.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/);
    if (!match) continue;
    const [, foundKey, raw] = match;
    if (foundKey !== key) continue;

    const value = raw.trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      return value.slice(1, -1);
    }
    return value;
  }
  return undefined;
}

const cwd = process.cwd();
const dotenvText = readDotEnv(path.join(cwd, ".env"));
const databaseUrl = process.env.DATABASE_URL_APP ?? getEnvValue(dotenvText, "DATABASE_URL_APP");

if (!databaseUrl) {
  console.error("DATABASE_URL_APP is not set.");
  process.exit(2);
}

const prisma = new PrismaClient({
  datasources: { db: { url: databaseUrl } },
});

try {
  await prisma.$queryRaw`SELECT 1 as ok`;
  const publishedCount = await prisma.blog.count({ where: { published: true } });
  console.log(JSON.stringify({ ok: true, publishedCount }, null, 2));
} catch (error) {
  console.error(error);
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
