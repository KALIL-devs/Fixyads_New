import { TOCItem } from "@/lib/toc";

type TableOfContentsProps = {
  toc: TOCItem[];
};

export default function TableOfContents({
  toc,
}: TableOfContentsProps) {
  if (!toc || toc.length === 0) return null;

  return (
    <aside>
      <h3>Table of Contents</h3>

      <ul>
        {toc.map((item, index) => (
          <li
            key={index}
            style={{ marginLeft: (item.level - 2) * 16 }}
          >
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
