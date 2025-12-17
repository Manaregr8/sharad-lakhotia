import BlogCard, { type BlogWithAuthor } from "@/components/cards/BlogCard";
import { prisma } from "@/lib/prisma";
import styles from "@/styles/home.module.scss";

async function fetchLatestBlogs(): Promise<{ blogs: BlogWithAuthor[]; errored: boolean }> {
  if (!prisma) {
    console.error("[BlogSection] Prisma not available - DATABASE_URL may not be configured");
    return { blogs: [], errored: true };
  }

  try {
    const posts = await prisma.blog.findMany({
      where: { published: true },
      include: { author: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
      take: 3
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
      author: post.author
    }));

    return { blogs: formatted, errored: false };
  } catch (error) {
    console.error("[BlogSection] Failed to load blogs", error);
    return { blogs: [], errored: true };
  }
}

export default async function BlogSection() {
  const { blogs, errored } = await fetchLatestBlogs();

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <header className={styles.blogHeader}>
          <div>
            <span>Insights</span>
            <h2>Latest guidance from our specialists.</h2>
          </div>
        </header>
        {blogs.length > 0 ? (
          <div className={styles.blogGrid}>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} post={blog} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>
            {errored ? "We couldn't load the latest posts right now. Please try again shortly." : "No published blogs yet—check back soon."}
          </p>
        )}
      </div>
    </section>
  );
}
