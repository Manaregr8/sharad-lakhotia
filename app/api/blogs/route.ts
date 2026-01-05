import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    if (!prisma) {
      console.error("[GET /api/blogs] Prisma not available - DATABASE_URL may not be configured");
      return NextResponse.json({ posts: [], error: "Database not configured" }, { status: 503 });
    }

    const posts = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" }
    });

    const serialised = posts.map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      banner: post.banner,
      excerpt: post.excerpt,
      tags: post.tags,
      createdAt: post.createdAt.toISOString(),
      published: post.published,
      author: { name: "Dr. Sharad Lakhotia" }
    }));

    return NextResponse.json({ posts: serialised }, { status: 200 });
  } catch (error) {
    console.error("[GET /api/blogs] Error fetching blogs:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { posts: [], error: errorMessage },
      { status: 500 }
    );
  }
}
