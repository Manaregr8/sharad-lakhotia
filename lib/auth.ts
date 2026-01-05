import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import { prisma } from "./prisma";
import { withRlsContext } from "./rls";

export const authOptions: NextAuthOptions = {
  ...(prisma ? { adapter: PrismaAdapter(prisma) } : {}),
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin/login"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        if (!prisma) {
          throw new Error("Database connection is not configured");
        }

        // Set RLS context using the provided email so the DB can decide whether
        // this email is permitted to access the User table.
        const user = await withRlsContext(
          prisma,
          { user: { email: credentials.email } } as any,
          (tx) =>
            tx.user.findUnique({
              where: { email: credentials.email }
            })
        );

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const passwordMatch = await compare(credentials.password, user.passwordHash);

        if (!passwordMatch) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        } as const;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role ?? "ADMIN";
        token.id = (user as { id: string }).id;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }

      return session;
    }
  }
};

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: string;
    };
  }

  interface User {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
  }
}
