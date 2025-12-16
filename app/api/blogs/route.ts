import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!prisma) {
    return NextResponse.json({ posts: [] }, { status: 503 });
  }

  try {
    const posts = await prisma.blog.findMany({
      include: { author: { select: { name: true } } },
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
      author: post.author
    }));

    return NextResponse.json({ posts: serialised });
  } catch (error) {
    console.error("[GET /api/blogs] Failed to fetch blogs", error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}
