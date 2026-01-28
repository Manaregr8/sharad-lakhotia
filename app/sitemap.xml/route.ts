import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { services } from "@/lib/services";

export async function GET() {
  const baseUrl = process.env.NEXTAUTH_URL ?? "https://www.visionaryeyeclinic.com";

  let posts: { slug: string }[] = [];

  if (!prisma) {
    console.error("Prisma client is not initialised. Blog URLs will be omitted from the sitemap.");
  } else {
    try {
      posts = (await prisma.blog.findMany({
        where: { published: true },
        select: { slug: true }
      })) as { slug: string }[];
    } catch (error) {
      console.error("Failed to load blog slugs for sitemap.", error);
    }
  }

  const staticUrls = ["/", "/about", "/services", "/gallery", "/blog", "/contact", "/privacy", "/faq"].map((path) => `${baseUrl}${path}`);

  const serviceUrls = services.map((s) => `${baseUrl}/services/${s.slug}`);

  const blogUrls = posts.map((p) => `${baseUrl}/blog/${p.slug}`);

  const urls = [...staticUrls, ...serviceUrls, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((u) => {
        return `<url><loc>${u}</loc></url>`;
      })
      .join("\n")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
