import Link from "next/link";
import styles from "./CoursesTraining.module.css";
import { FaBullhorn, FaCode, FaBriefcase } from "react-icons/fa";

const courses = [
  {
    title: "Digital Marketing",
    description:
      "Hands-on digital marketing covering SEO, social media, Google Ads, analytics, live projects, and real-world strategies.",
    icon: <FaBullhorn />,
    href: "/courses/digital-marketing",
  },
  {
    title: "Web Development",
    description:
      "Practical training in HTML, CSS, JavaScript, React, Next.js, APIs, and deployment—with portfolio-ready projects.",
    icon: <FaCode />,
    href: "/courses/web-development",
  },
  {
    title: "Web Design",
    description:
      "UI fundamentals, responsive layout, and design-to-code workflows. Complements our web development track for creative-focused learners.",
    icon: <FaBriefcase />,
    href: "/courses/web-development",
  },
];

export default function CoursesTraining() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills That Shape Your Career</h2>
        <p className={styles.subheading}>
          Real-time, practical learning crafted for individual growth and career success.
        </p>

        <div className={styles.cards}>
          {courses.map((course, index) => (
            <div key={index} className={styles.card}>
              <div>
                <div className={styles.icon}>{course.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{course.title}</h3>
                  <p className={styles.cardText}>{course.description}</p>
                </div>
              </div>
              <Link href={course.href} className={styles.cardBtn}>
                View details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
