import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

let prismaClient: PrismaClient | undefined;
let prismaInitError: Error | undefined;

if (!process.env.DATABASE_URL) {
  prismaInitError = new Error("DATABASE_URL is not defined");
  if (process.env.NODE_ENV === "development") {
    console.warn("DATABASE_URL is not defined. Falling back to demo content.");
  }
} else {
  try {
    prismaClient =
      globalForPrisma.prisma ??
      new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
      });

    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = prismaClient;
    }
  } catch (error) {
    prismaInitError = error as Error;
    prismaClient = undefined;
    console.error("Failed to initialize Prisma Client:", error);
  }
}

export const prisma = prismaClient;
export const prismaError = prismaInitError;
export const isPrismaAvailable = Boolean(prismaClient);
