import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { demoBlogs } from "@/lib/demo-content";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!prisma) {
    console.warn("[GET /api/blogs] Prisma not available - using demo content");
    return NextResponse.json({ posts: demoBlogs });
  }

  try {
    const posts = await prisma.blog.findMany({
      include: { author: { select: { name: true } } },
      orderBy: { createdAt: "desc" }
    });

    if (posts.length === 0) {
      console.warn("[GET /api/blogs] No blogs found in database, using demo content");
      return NextResponse.json({ posts: demoBlogs });
    }

    const serialised = posts.map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      banner: post.banner,
      excerpt: post.excerpt,
      tags: post.tags,
      createdAt: post.createdAt.toISOString(),
      published: post.published,
      author: post.author
    }));

    return NextResponse.json({ posts: serialised });
  } catch (error) {
    console.error("[GET /api/blogs] Failed to fetch blogs from database", error);
    console.warn("[GET /api/blogs] Falling back to demo content");
    return NextResponse.json({ posts: demoBlogs });
  }
}
