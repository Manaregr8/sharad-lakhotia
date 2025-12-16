import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { blogWriteSchema } from "@/lib/validators";
import sanitizeHtml from "sanitize-html";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions as any);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!prisma) {
    return NextResponse.json({ error: "Database connection is not configured" }, { status: 503 });
  }

  try {
    const body = await req.json();
    const parsed = blogWriteSchema.parse(body);

    const cleanContent = sanitizeHtml(parsed.content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "figure", "figcaption", "h2", "h3", "h4"]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ["src", "alt", "title"]
      }
    });

    const updated = await prisma.blog.update({
      where: { id: params.id },
      data: {
        title: parsed.title,
        slug: parsed.slug,
        banner: parsed.banner,
        excerpt: parsed.excerpt,
        tags: parsed.tags,
        content: cleanContent,
        published: parsed.published
      }
    });

    return NextResponse.json({ ok: true, blog: updated });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message ?? "Failed" }, { status: 400 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions as any);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!prisma) {
    return NextResponse.json({ error: "Database connection is not configured" }, { status: 503 });
  }

  try {
    await prisma.blog.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message ?? "Failed" }, { status: 400 });
  }
}
