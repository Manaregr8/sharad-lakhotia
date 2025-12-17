import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  if (!prisma) {
    return NextResponse.json({ error: "Database not connected" }, { status: 503 });
  }

  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true
      }
    });

    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        published: true
      }
    });

    return NextResponse.json({
      database: "Connected",
      users: users,
      blogs: blogs.length,
      blogSample: blogs.slice(0, 3)
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
