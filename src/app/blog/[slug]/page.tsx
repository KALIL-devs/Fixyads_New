import { getPostBySlug } from "@/lib/wp-rest";
import { extractTOC, injectHeadingIds, TOCItem } from "@/lib/toc";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import { notFound } from "next/navigation";
import styles from "./blog.module.css";
import Link from "next/link";

/* ---------------- METADATA ---------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Blog not found" };
  }

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
  };
}

/* ---------------- PAGE ---------------- */

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const rawHtml: string = post.content.rendered;
  const toc: TOCItem[] = extractTOC(rawHtml);
  const contentWithIds: string = injectHeadingIds(rawHtml);

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
        {/* Main Content */}
        <article className={styles.blogContent}>
          <h1
            className={styles.postTitle}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          />
        </article>

        {/* Sidebar */}
        {toc.length > 0 && (
          <aside className={styles.blogSidebar}>
              <TableOfContents toc={toc} />

              {/* CTA Card */}
              <div className={styles.ctaCard}>
                <h4>Need help with Digital Marketing?</h4>
                <p>Let our experts grow your business.</p>
                <Link href="/contact" className="btn btn-primary" style={{color: "white"}}>
                  Get a Free Quote
                </Link>
              </div>
            </aside>
        )}
      </section>
    </div>
  );
}
