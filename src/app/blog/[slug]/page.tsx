import { getPostBySlug } from "@/lib/wp-rest";
import { notFound } from "next/navigation";
import styles from "../blog.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
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

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={`${styles.container} ${styles.section}`}>
      <h1
        className={styles.postTitle}
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
