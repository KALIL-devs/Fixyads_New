import Link from "next/link";
import type { Metadata } from "next";
import styles from "./CoursesLanding.module.css";

export const metadata: Metadata = {
  title: "Professional Training Courses | Digital Marketing & Web Development",
  description:
    "Hands-on courses in digital marketing, full-stack web development, and placement support. Live projects, mentorship, and career-focused training at Fixyads.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Professional Training Courses | Fixyads",
    description:
      "Practical digital marketing and web development programs with real projects and placement guidance.",
    url: "/courses",
    type: "website",
  },
};

const courses = [
  {
    title: "Digital Marketing",
    href: "/courses/digital-marketing",
    body: "SEO, paid media, social, analytics, and conversion optimization with live campaigns and certifications.",
  },
  {
    title: "Web Development",
    href: "/courses/web-development",
    body: "HTML, CSS, JavaScript, React, Next.js, APIs, databases, and deployment—built around portfolio-ready projects.",
  },
  {
    title: "Placement Support",
    href: "/courses/placement-support",
    body: "Resume and portfolio reviews, mock interviews, referrals, and structured guidance toward your first role.",
  },
];

export default function CoursesIndexPage() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Courses & career programs</h1>
        <p className={styles.lead}>
          Choose a track that matches your goals. Every program blends instructor-led sessions, practical
          assignments, and feedback so you graduate with skills employers recognize.
        </p>
        <div className={styles.grid}>
          {courses.map((c) => (
            <article key={c.href} className={styles.card}>
              <h2>{c.title}</h2>
              <p>{c.body}</p>
              <div className={styles.cta}>
                <Link href={c.href} className="btn btn-primary">
                  View program
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
