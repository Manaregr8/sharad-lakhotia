import type { Metadata } from "next";
import { notFound } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import Link from "next/link";
import BlogCard, { type BlogWithAuthor } from "@/components/cards/BlogCard";
import { prisma } from "@/lib/prisma";
import { formatBlogDate } from "@/lib/utils";
import styles from "@/styles/blog-detail.module.scss";

interface BlogDetailPageProps {
  params: { slug: string };
}

type BlogDetail = BlogWithAuthor & { content: string };

async function getBlog(slug: string): Promise<BlogDetail | null> {
  if (!prisma) {
    console.error("Prisma client is not initialised. Ensure DATABASE_URL is configured before building blog pages.");
    return null;
  }

  try {
    const post = await prisma.blog.findFirst({
      where: { slug, published: true },
      include: { author: { select: { name: true } } }
    });

    if (!post) {
      return null;
    }

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      banner: post.banner,
      excerpt: post.excerpt,
      tags: post.tags,
      createdAt: post.createdAt,
      published: post.published,
      author: post.author,
      content: post.content
    };
  } catch (error) {
    console.error("Failed to load blog detail from database.", error);
    return null;
  }
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const post = await getBlog(params.slug);

  if (!post) {
    return { title: "Blog not found" };
  }

  const baseUrl = process.env.NEXTAUTH_URL ?? "https://www.visionaryeyeclinic.com";

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}/api/og/blog/${post.slug}`]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}/api/og/blog/${post.slug}`]
    }
  };
}

export async function generateStaticParams() {
  if (!prisma) {
    console.warn("Prisma client unavailable during static params generation. No blog pages will be pre-rendered.");
    return [];
  }

  const posts = await prisma.blog.findMany({
    where: { published: true },
    select: { slug: true }
  });

  return posts.map((post: (typeof posts)[number]): { slug: string } => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = await getBlog(params.slug);

  if (!post) {
    notFound();
  }

  const cleanHtml = sanitizeHtml(post.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h2", "h3", "h4", "figure", "figcaption"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height"],
      a: ["href", "name", "target", "rel"]
    },
    allowedSchemes: ["http", "https", "mailto"]
  });

  const formattedRelated = await (async (): Promise<BlogWithAuthor[]> => {
    if (!prisma) {
      return [];
    }

    try {
      const relatedPosts = await prisma.blog.findMany({
        where: {
          published: true,
          slug: { not: post.slug },
          tags: { hasSome: post.tags }
        },
        include: { author: { select: { name: true } } },
        orderBy: { createdAt: "desc" },
        take: 3
      });

      return relatedPosts.map((item: (typeof relatedPosts)[number]): BlogWithAuthor => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        banner: item.banner,
        excerpt: item.excerpt,
        tags: item.tags,
        createdAt: item.createdAt,
        published: item.published,
        author: item.author
      }));
    } catch (error) {
      console.error("Failed to load related blogs from database.", error);
      return [];
    }
  })();

  return (
    <article className={styles.article}>
      <div className="container">
        <header className={styles.header}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to blog
          </Link>
          <h1>{post.title}</h1>
          <div className={styles.meta}>
            <span>{formatBlogDate(post.createdAt)}</span>
            <span>•</span>
            <span>{post.author?.name ?? "Visionary Team"}</span>
          </div>
          <div className={styles.tags}>
            {post.tags.map((tag: string) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          <div className={styles.banner} style={{ backgroundImage: `url(${post.banner})` }} aria-hidden="true" />
        </header>
        {/* eslint-disable-next-line react/no-danger */}
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: cleanHtml }} />
        {formattedRelated.length > 0 && (
          <section className={styles.related}>
            <h2>Related articles</h2>
            <div className={styles.relatedGrid}>
              {formattedRelated.map((item: BlogWithAuthor) => (
                <BlogCard key={item.id} post={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
