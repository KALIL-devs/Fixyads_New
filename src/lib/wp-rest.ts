const WP_BASE =
  // "https://public-api.wordpress.com/wp/v2/sites/devs68.wordpress.com";
  "https://public-api.wordpress.com/wp/v2/sites/fixyadscom.wordpress.com";

/* Get all posts (list page) */
export async function getAllPosts() {
  const res = await fetch(
    `${WP_BASE}/posts?per_page=10&_embed`, 
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

/* Get latest posts */
export async function getPosts() {
  const res = await fetch(
    `${WP_BASE}/posts?per_page=20&orderby=date&order=desc&_embed`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

/* Get single post by slug */
export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${WP_BASE}/posts?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const posts = await res.json();
  return posts?.[0] ?? null;
}
