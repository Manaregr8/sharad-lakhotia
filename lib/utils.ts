import slugify from "slugify";
import { format } from "date-fns";

export const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export const formatBlogDate = (date: Date | string) => {
  const value = typeof date === "string" ? new Date(date) : date;
  return format(value, "dd MMM yyyy");
};

export const createSlug = (value: string) =>
  slugify(value, {
    lower: true,
    strict: true
  });

export const getBaseUrl = (): string => {
  if (typeof window !== "undefined") {
    return "";
  }

  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }

  if (process.env.PORT) {
    return `http://localhost:${process.env.PORT}`;
  }

  if (process.env.NEXTAUTH_URL) {
    return process.env.NEXTAUTH_URL.replace(/\/$/, "");
  }

  return "http://localhost:3000";
};
