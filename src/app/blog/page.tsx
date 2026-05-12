import Link from "next/link";
import { getAllPosts } from "@/lib/wp-rest";
import styles from "./blog.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Fixyads — Digital Marketing, SEO & Growth",
  description:
    "Articles and guides from Fixyads on digital marketing strategy, SEO, social media, branding, web development, and training.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Fixyads",
    description:
      "Insights on digital marketing, SEO, social media, and growing your business online.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Fixyads",
    description:
      "Digital marketing articles, SEO tips, and growth strategies from the Fixyads team.",
  },
};

/* Utility: limit words */
function limitWords(text: string, limit = 18) {
  const cleanText = text.replace(/<[^>]+>/g, "");
  const words = cleanText.split(" ");
  return words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "");
}


export default async function BlogPage() {
  const posts = await getAllPosts();



  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Blog</h1>

      <div className={styles.grid}>
        {posts.map((post: any) => {
          const image =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          return (
            <article key={post.id} className={styles.blogCard}>
              {/* Image */}
              {image && (
                <Link href={`/blog/${post.slug}`}>
                  <img
                    src={image}
                    alt={post.title.rendered}
                    className={styles.cardImage}
                  />
                </Link>
              )}

              {/* Content */}
              <Link href={`/blog/${post.slug}`}>
                <div className={styles.cardBody}>
                  <h2
                    className={styles.cardTitle}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  <p className={styles.cardExcerpt}>
                    {limitWords(post.excerpt.rendered)}
                  </p>

                  {/* <Link
                    href={`/blog/${post.slug}`}
                    className={styles.readMore}
                    style={{color: "var(--primary)"}}
                  >
                    Read article →
                  </Link> */}
                </div>
              </Link>

            </article>
          );
        })}
      </div>
    </section>
  );
}