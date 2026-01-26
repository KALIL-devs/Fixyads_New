import Link from "next/link";
import { getAllPosts } from "@/lib/wp-rest";
import styles from "./blog.module.css";

/* Utility: limit words */
function limitWords(text: string, limit = 18) {
  const cleanText = text.replace(/<[^>]+>/g, "");
  const words = cleanText.split(" ");
  return words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "");
}


export default async function BlogPage() {
  const posts = await getAllPosts();

  console.log(posts[0]._embedded?.["wp:featuredmedia"]);


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