import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { type BlogWithAuthor } from "@/components/cards/BlogCard";
import AdminBlogList from "@/components/admin/AdminBlogList";
import styles from "@/styles/admin-blogs.module.scss";

export const metadata: Metadata = {
  title: "Admin - Blogs",
  description: "Manage blog posts. Create, edit, publish or delete articles."
};

type AdminBlog = BlogWithAuthor & { published: boolean };

async function getAllBlogs(): Promise<{ posts: AdminBlog[]; errored: boolean }> {
  if (!prisma) {
    console.error("Prisma client is not initialised. Admin blog listing requires a configured database.");
    return { posts: [], errored: true };
  }

  try {
    const posts = await prisma.blog.findMany({
      include: { author: { select: { name: true } } },
      orderBy: { createdAt: "desc" }
    });

    const formatted = posts.map((post): AdminBlog => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      banner: post.banner,
      excerpt: post.excerpt,
      tags: post.tags,
      createdAt: post.createdAt,
      published: post.published,
      author: post.author
    }));

    return { posts: formatted, errored: false };
  } catch (error) {
    console.error("Unable to load blogs from database in admin view.", error);
    return { posts: [], errored: true };
  }
}

export default async function AdminBlogsPage() {
  const { posts, errored } = await getAllBlogs();

  return (
    <section>
      <div className="container">
        <div className={styles.header}>
          <h1>Blogs</h1>
          <div>
            <Link href="/admin/blogs/create" className={styles.createButton}>
              Create new
            </Link>
          </div>
        </div>
        {errored && (
          <p className={styles.notice}>
            We couldn’t connect to the database. Add a valid <code>DATABASE_URL</code> and try again.
          </p>
        )}
        <AdminBlogList posts={posts} />
        {!errored && posts.length === 0 && <p className={styles.notice}>No blogs created yet.</p>}
      </div>
    </section>
  );
}
