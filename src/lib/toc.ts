export type TOCItem = {
  level: number;
  text: string;
  id: string;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/* ---------- EXTRACT TOC ---------- */
export function extractTOC(html: string): TOCItem[] {
  const regex = /<h([2])[^>]*>(.*?)<\/h\1>/gi;
  const toc: TOCItem[] = [];

  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    const level = Number(match[1]);
    const rawText = match[2];
    const text = rawText.replace(/<[^>]*>/g, "");
    const id = slugify(text);

    toc.push({ level, text, id });
  }

  return toc;
}

/* ---------- INJECT IDS ---------- */
export function injectHeadingIds(html: string): string {
  return html.replace(
    /<h([2-4])([^>]*)>(.*?)<\/h\1>/gi,
    (_match, level: string, attrs: string, content: string) => {
      const text = content.replace(/<[^>]*>/g, "");
      const id = slugify(text);

      return `<h${level}${attrs} id="${id}">${content}</h${level}>`;
    }
  );
}
