import type { PrismaClient } from "@prisma/client";

type SessionLike = {
  user?: {
    id?: string;
    role?: string;
    email?: string;
  };
} | null;

export async function withRlsContext<T>(
  prisma: PrismaClient,
  session: SessionLike,
  fn: (tx: PrismaClient) => Promise<T>,
) {
  const userId = session?.user?.id ?? null;
  const role = session?.user?.role ?? "";
  const email = session?.user?.email ?? null;

  return prisma.$transaction(async (tx) => {
    // These GUCs are read by Postgres RLS policies in prisma/rls.sql
    await tx.$executeRaw`SELECT set_config('app.user_id', ${userId}, true);`;
    await tx.$executeRaw`SELECT set_config('app.role', ${role}, true);`;
    await tx.$executeRaw`SELECT set_config('app.user_email', ${email}, true);`;

    return fn(tx as unknown as PrismaClient);
  });
}
