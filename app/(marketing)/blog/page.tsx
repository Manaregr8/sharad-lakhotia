import type { Metadata } from "next";
import BlogListing from "@/components/sections/BlogListing";
import { type BlogWithAuthor } from "@/components/cards/BlogCard";
import { prisma } from "@/lib/prisma";
import styles from "@/styles/blog.module.scss";

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert articles on LASIK, cataract surgery, retina health, pediatric eye wellness, and vision care tips."
};

export const dynamic = "force-dynamic";

async function fetchAllBlogs(): Promise<{ blogs: BlogWithAuthor[]; errored: boolean }> {
  if (!prisma) {
    console.error("[BlogPage] Prisma not available - DATABASE_URL may not be configured");
    return { blogs: [], errored: true };
  }

  try {
    const posts = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" }
    });

    const formatted = posts.map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      banner: post.banner,
      excerpt: post.excerpt,
      tags: post.tags,
      createdAt: post.createdAt,
      published: post.published,
      author: { name: "Dr. Sharad Lakhotia" }
    }));

    return { blogs: formatted, errored: false };
  } catch (error) {
    console.error("[BlogPage] Failed to load blogs", error);
    return { blogs: [], errored: true };
  }
}

export default async function BlogPage() {
  const { blogs, errored } = await fetchAllBlogs();

  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <span>Clinic insights</span>
          <h1>Guidance to keep your eyes healthy and focused.</h1>
          <p>
            Articles from our specialists answering common questions about laser vision correction, cataract recovery, and
            everyday eye wellness.
          </p>
        </header>
        <BlogListing initialBlogs={blogs} errored={errored} />
      </div>
    </section>
  );
}
