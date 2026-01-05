import { prisma as prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { withRlsContext } from "@/lib/rls";

/**
 * This endpoint fixes blog authors to Dr. Sharad Lakhotia
 * Run once to update existing blogs with wrong author names
 */
export async function POST() {
  try {
    const session = (await getServerSession(authOptions as any)) as any;
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session?.user?.email !== "admin@lakhotiaeyecentre.com") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (!prismaClient) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 500 }
      );
    }

    // Get or create the admin user
    const admin = await prismaClient.user.findFirst({
      where: { email: "admin@lakhotiaeyecentre.com" },
      orderBy: { createdAt: "asc" }
    });

    if (!admin) {
      return NextResponse.json(
        { error: "Admin user not found. Run seed first." },
        { status: 400 }
      );
    }

    // Update all blogs to have the admin as author
    const updated = await withRlsContext(prismaClient, session, (tx) =>
      tx.blog.updateMany({
        data: { authorId: admin.id }
      })
    );

    return NextResponse.json({
      success: true,
      message: `Fixed ${updated.count} blogs to author: ${admin.name}`
    });
  } catch (error) {
    console.error("Fix authors error:", error);
    return NextResponse.json(
      { error: "Failed to fix authors" },
      { status: 500 }
    );
  }
}
