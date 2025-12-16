import BlogCard, { type BlogWithAuthor } from "@/components/cards/BlogCard";
import styles from "@/styles/home.module.scss";
import { getBaseUrl } from "@/lib/utils";

async function fetchLatestBlogs(): Promise<{ blogs: BlogWithAuthor[]; errored: boolean }> {
  const baseUrl = getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/blogs`, {
      cache: "no-store"
    });

    if (!response.ok) {
      console.error("[BlogSection] Unexpected response when loading blogs", response.statusText);
      return { blogs: [], errored: true };
    }

    const data = (await response.json()) as { posts?: BlogWithAuthor[] };
    console.log("[BlogSection] /api/blogs response", data);

    const sorted = (data.posts ?? []).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return { blogs: sorted.slice(0, 3), errored: false };
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
