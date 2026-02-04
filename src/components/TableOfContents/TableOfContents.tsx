import { TOCItem } from "@/lib/toc";
import styles from "./blog.module.css";

type TableOfContentsProps = {
  toc: TOCItem[];
};

export default function TableOfContents({ toc }: TableOfContentsProps) {
  if (!toc || toc.length === 0) return null;

  return (
      <nav aria-label="Table of contents" className={styles.toc}>
        <h3>Table of Contents</h3>

        <ul>
          {toc.map((item) => (
            <li
              key={item.id}
              className={`tocItem tocLevel${item.level}`}
            >
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
  );
}
