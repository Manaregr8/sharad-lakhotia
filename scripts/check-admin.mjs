import fs from "node:fs";
import path from "node:path";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

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
const dotenvPath = path.join(cwd, ".env");
const dotenvText = readDotEnv(dotenvPath);
const databaseUrl = process.env.DATABASE_URL ?? getEnvValue(dotenvText, "DATABASE_URL");

if (!databaseUrl) {
  console.error("DATABASE_URL is not set (and .env not readable).");
  process.exit(2);
}

const email = process.argv[2] ?? "admin@lakhotiaeyecentre.com";
const password = process.argv[3];

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
});

try {
  const user = await prisma.user.findUnique({
    where: { email },
    select: { email: true, name: true, role: true, passwordHash: true },
  });

  if (!user) {
    console.log("NOT_FOUND");
    process.exit(0);
  }

  const passwordMatches = password ? await compare(password, user.passwordHash ?? "") : undefined;

  console.log(
    JSON.stringify(
      {
        email: user.email,
        name: user.name,
        role: user.role,
        hasPasswordHash: Boolean(user.passwordHash),
        passwordHashPrefix: user.passwordHash?.slice(0, 10) ?? null,
        passwordMatches,
      },
      null,
      2,
    ),
  );
} finally {
  await prisma.$disconnect();
}
