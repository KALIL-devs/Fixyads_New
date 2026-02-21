import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.description}>
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <div className={styles.actions}>
        <Link href="/" className={styles.primaryBtn}>
          Go Home
        </Link>

        <Link href="/#services" className="btn btn-primary">
          View Services
        </Link>
      </div>
    </div>
  );
}