import { getPostBySlug } from "@/lib/wp-rest";
import { extractTOC, injectHeadingIds, TOCItem } from "@/lib/toc";
import { stripHtml, truncateForMeta } from "@/lib/text";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import { notFound } from "next/navigation";
import styles from "./blog.module.css";
import Link from "next/link";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found | Fixyads" };
  }

  const titlePlain = stripHtml(post.title.rendered);
  const title = `${titlePlain} | Fixyads Blog`;
  const description = truncateForMeta(
    post.excerpt?.rendered || post.content?.rendered || ""
  );

  const imageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url as string | undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: titlePlain,
      description,
      url: `/blog/${slug}`,
      type: "article",
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: titlePlain,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const rawHtml = post.content.rendered;
  const toc: TOCItem[] = extractTOC(rawHtml);
  const contentWithIds = injectHeadingIds(rawHtml);

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/blog" className={styles.breadcrumbLink}>
          Blog
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span
          className={styles.breadcrumbCurrent}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </nav>

      <section className={styles.blogLayout}>
        {/* MAIN CONTENT */}
        <article className={styles.blogContent}>
          <h1
            className={styles.postTitle}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* ✅ MOBILE / TABLET TOC */}
          {toc.length > 0 && (
            <div className={`${styles.tocCard} ${styles.mobileOnly}`}>
              <TableOfContents toc={toc} />
            </div>
          )}

          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          />
        </article>

        {/* DESKTOP SIDEBAR */}
        <aside className={styles.rightSidebar}>
          {toc.length > 0 && (
            <div className={`${styles.tocCard} ${styles.desktopOnly}`}>
              <TableOfContents toc={toc} />
            </div>
          )}

          <div className={styles.ctaCard}>
            <h4>Need help with Digital Marketing?</h4>
            <p>Let our experts grow your business.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Quote
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
