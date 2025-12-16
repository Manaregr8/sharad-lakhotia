import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogEditor from "@/components/forms/BlogEditor";
import { prisma } from "@/lib/prisma";

interface EditPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: EditPageProps): Promise<Metadata> {
  if (!prisma) {
    return { title: "Database unavailable" };
  }

  const post = await prisma.blog.findUnique({ where: { id: params.id } });
  if (!post) return { title: "Not found" };

  return { title: `Edit: ${post.title}` };
}

export default async function AdminEditBlog({ params }: EditPageProps) {
  if (!prisma) {
    return (
      <section>
        <div className="container">
          <p>
            Database connection is not configured. Provide a valid <code>DATABASE_URL</code> to enable editing blog posts.
          </p>
        </div>
      </section>
    );
  }

  const post = await prisma.blog.findUnique({ where: { id: params.id } });
  if (!post) notFound();

  const initialData = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    banner: post.banner,
    excerpt: post.excerpt,
    tags: post.tags,
    content: post.content,
    published: post.published
  };

  return (
    <section>
      <div className="container">
        <BlogEditor blogId={post.id} initialData={initialData} mode="edit" />
      </div>
    </section>
  );
}
