import type { Metadata } from "next";
import BlogListing from "@/components/sections/BlogListing";
import { type BlogWithAuthor } from "@/components/cards/BlogCard";
import { getBaseUrl } from "@/lib/utils";
import styles from "@/styles/blog.module.scss";

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert articles on LASIK, cataract surgery, retina health, pediatric eye wellness, and vision care tips."
};

export const dynamic = "force-dynamic";

async function fetchAllBlogs(): Promise<{ blogs: BlogWithAuthor[]; errored: boolean }> {
  const baseUrl = getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/blogs`, {
      cache: "no-store"
    });

    if (!response.ok) {
      console.error("[BlogPage] Unexpected response when loading blogs", response.statusText);
      return { blogs: [], errored: true };
    }

    const data = (await response.json()) as { posts?: BlogWithAuthor[] };
    console.log("[BlogPage] /api/blogs response", data);

    const sorted = (data.posts ?? []).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return { blogs: sorted, errored: false };
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
