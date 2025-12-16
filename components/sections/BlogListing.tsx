"use client";

import { useMemo, useState } from "react";
import BlogCard, { type BlogWithAuthor } from "@/components/cards/BlogCard";
import styles from "@/styles/blog.module.scss";

interface BlogListingProps {
  initialBlogs: BlogWithAuthor[];
  errored?: boolean;
}

export default function BlogListing({ initialBlogs, errored = false }: BlogListingProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    if (!term) {
      return initialBlogs;
    }

    return initialBlogs.filter((post) => {
      const title = post.title.toLowerCase();
      const author = (post.author?.name ?? "").toLowerCase();
      return title.includes(term) || author.includes(term);
    });
  }, [initialBlogs, query]);

  const hasActiveQuery = query.trim().length > 0;

  const renderEmptyState = () => {
    if (hasActiveQuery) {
      return <p className={styles.emptyState}>No blogs found.</p>;
    }

    if (errored) {
      return <p className={styles.emptyState}>We couldn’t load blog posts right now. Please try again later.</p>;
    }

    return <p className={styles.emptyState}>No published blogs yet—check back soon.</p>;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <label className={styles.search} htmlFor="blog-search">
          <span className={styles.searchLabel}>Search articles</span>
          <input
            id="blog-search"
            type="search"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        renderEmptyState()
      )}
    </div>
  );
}
