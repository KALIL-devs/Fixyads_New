const WP_BASE =
  // "https://public-api.wordpress.com/wp/v2/sites/devs68.wordpress.com";
  "https://public-api.wordpress.com/wp/v2/sites/fixyadscom.wordpress.com";

export async function getPosts() {
  const res = await fetch(
    `${WP_BASE}/posts?per_page=20&orderby=date&order=desc`,
    { next: { revalidate: 3600 } }
  );
  return res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${WP_BASE}/posts?slug=${slug}`,
    { next: { revalidate: 3600 } }
  );

  const posts = await res.json();

  if (!posts || posts.length === 0) {
    return null;
  }

  return posts[0];
}

export async function getAllPosts() {
  const res = await fetch(
    `${WP_BASE}/posts?per_page=10`,
    { next: { revalidate: 3600 } }
  );

  return res.json();
}
