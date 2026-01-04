import fs from "node:fs";
import path from "node:path";
import bcrypt from "bcryptjs";
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

const email = process.argv[2] ?? "admin@lakhotiaeyecentre.com";
const newPassword = process.argv[3] ?? "Admin@123";

const cwd = process.cwd();
const dotenvPath = path.join(cwd, ".env");
const dotenvText = readDotEnv(dotenvPath);
const databaseUrl = process.env.DATABASE_URL ?? getEnvValue(dotenvText, "DATABASE_URL");

if (!databaseUrl) {
  console.error("DATABASE_URL is not set (and .env not readable).");
  process.exit(2);
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
});

try {
  const passwordHash = await bcrypt.hash(newPassword, 10);

  const updated = await prisma.user.update({
    where: { email },
    data: { passwordHash },
    select: { email: true, name: true, role: true, updatedAt: true },
  });

  console.log(
    JSON.stringify(
      {
        message: "Password updated",
        user: updated,
      },
      null,
      2,
    ),
  );
} catch (error) {
  console.error(error);
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
