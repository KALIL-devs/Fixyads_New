import Link from "next/link";
import { getAllPosts } from "@/lib/wp-rest";
import styles from "./blog.module.css";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className={`${styles.container} ${styles.section}`}>
      <h1 className={styles.title}>Blog</h1>

      <div className={styles.grid}>
        {posts.map((post: any) => (
          <article key={post.id} className={styles.blogCard}>
            <h2
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered,
              }}
            />

            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
              Read full article
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
