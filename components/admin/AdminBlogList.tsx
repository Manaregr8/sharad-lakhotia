"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import type { BlogWithAuthor } from "@/components/cards/BlogCard";
import { formatBlogDate } from "@/lib/utils";
import styles from "./AdminBlogList.module.scss";

interface AdminBlog extends BlogWithAuthor {
  published: boolean;
}

interface AdminBlogListProps {
  posts: AdminBlog[];
}

export default function AdminBlogList({ posts }: AdminBlogListProps) {
  const [items, setItems] = useState(posts);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleDelete = useCallback(async (id: string) => {
    const blog = items.find((item) => item.id === id);
    const title = blog?.title ?? "this blog";

    const confirmation = window.confirm(`Delete "${title}"? This action cannot be undone.`);
    if (!confirmation) {
      return;
    }

    setPendingId(id);
    setFeedback(null);

    try {
      const response = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Failed to delete the blog." );
      }

      setItems((prev) => prev.filter((item) => item.id !== id));
      setFeedback(`Deleted "${title}".`);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to delete the blog.";
      setFeedback(message);
    } finally {
      setPendingId(null);
    }
  }, [items]);

  const hasItems = useMemo(() => items.length > 0, [items.length]);

  return (
    <div className={styles.wrapper}>
      {feedback && <p className={styles.feedback}>{feedback}</p>}
      {hasItems ? (
        <div className={styles.grid}>
          {items.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.headerRow}>
                <span className={post.published ? styles.published : styles.draft}>
                  {post.published ? "Published" : "Draft"}
                </span>
                <span className={styles.date}>{formatBlogDate(post.createdAt)}</span>
              </div>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.meta}>
                <span>{post.author?.name ?? "Unassigned"}</span>
                <span>•</span>
                <span>{post.slug}</span>
              </p>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
              <div className={styles.actions}>
                <Link href={`/admin/blogs/edit/${post.id}`} className={styles.edit}>
                  Edit
                </Link>
                <button
                  type="button"
                  className={styles.delete}
                  onClick={() => handleDelete(post.id)}
                  disabled={pendingId === post.id}
                >
                  {pendingId === post.id ? "Deleting…" : "Delete"}
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className={styles.empty}>No blogs available. Create one to get started.</p>
      )}
    </div>
  );
}
