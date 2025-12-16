import Link from "next/link";
import { formatBlogDate } from "@/lib/utils";
import styles from "./BlogCard.module.scss";

export interface BlogWithAuthor {
  id: string;
  title: string;
  slug: string;
  banner: string;
  excerpt: string;
  tags: string[];
  createdAt: string | Date;
  published?: boolean;
  author?: {
    name: string | null;
  } | null;
}

interface BlogCardProps {
  post: BlogWithAuthor;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.banner} style={{ backgroundImage: `url(${post.banner})` }} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{formatBlogDate(post.createdAt)}</span>
          <span>•</span>
          <span>{post.author?.name ?? "Visionary Team"}</span>
        </div>
        <h3>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ul className={styles.tags}>
          {post.tags.map((tag: string) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
