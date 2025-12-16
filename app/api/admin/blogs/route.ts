import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { blogWriteSchema } from "@/lib/validators";
import sanitizeHtml from "sanitize-html";

export async function POST(req: Request) {
  const session = (await getServerSession(authOptions as any)) as any;
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!prisma) {
    return NextResponse.json({ error: "Database connection is not configured" }, { status: 503 });
  }

  try {
    const body = await req.json();
    const parsed = blogWriteSchema.parse(body);

    // sanitize content before saving
    const cleanContent = sanitizeHtml(parsed.content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "figure", "figcaption", "h2", "h3", "h4"]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ["src", "alt", "title"]
      }
    });

    const created = await prisma.blog.create({
      data: {
        title: parsed.title,
        slug: parsed.slug,
        banner: parsed.banner,
        excerpt: parsed.excerpt,
        tags: parsed.tags,
        content: cleanContent,
        published: parsed.published,
        authorId: session?.user?.id
      }
    });

    return NextResponse.json({ ok: true, blog: created });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message ?? "Failed" }, { status: 400 });
  }
}

export async function GET() {
  if (!prisma) {
    return NextResponse.json({ error: "Database connection is not configured" }, { status: 503 });
  }

  // safe admin listing for UI (can be extended with pagination)
  const posts = await prisma.blog.findMany({ include: { author: { select: { name: true } } }, orderBy: { createdAt: "desc" } });
  return NextResponse.json({ posts });
}
