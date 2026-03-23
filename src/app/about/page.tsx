import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us | Digital Marketing Agency',
  description:
    'Learn about our journey, mission, and the team behind our success. We help businesses grow and students build careers.',
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>About Our Agency</h1>
          <p className={styles.heroText}>
            We are a team of digital marketers, developers, and educators helping
            businesses grow and students succeed.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
          <div className={styles.courseHeroImage}>
            <img
              src="/aboutus/aboutus.png"
              alt="Digital Marketing Course"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

            <div className={styles.content}>
              <h2>Our Story</h2>
              <p>
                Founded in 2020, we started with a simple mission: to bridge the
                gap between industry requirements and real-world skills.
              </p>
              <p>
                We’ve helped <strong>100+ businesses</strong> scale revenue and
                trained <strong>500+ students</strong> now working in top MNCs.
              </p>

              <h3>Our Mission</h3>
              <p>
                To empower businesses with data-driven strategies and individuals
                with career-defining skills.
              </p>

              <h3>Our Vision</h3>
              <p>
                To become the most trusted digital partner and training institute
                globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Clients Served</div>
            </div>
            <div>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Students Trained</div>
            </div>
            <div>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>Success Rate</div>
            </div>
            <div>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={`${styles.section} ${styles.teamSection}`}>
        <div className="container">
          <h2 className={styles.teamTitle}>Meet Our Team</h2>

          <div className={styles.teamGrid}>
            {[
              { name: 'Praveenkumar', role: 'Digital Marketing Specialist', img: '/Team/praveen.png' },
              { name: 'Raja Slega', role: 'Digital Marketing Specialist', img: '/Team/slega.png' },
              { name: 'Kalil Rahman', role: 'Web Developer', img: '/Team/Kalil.png' },
            ].map((member) => (
              <div key={member.name} className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <img
                    src={member.img}
                    alt={`${member.name} - ${member.role}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.memberName}>{member.name}</div>
                <div className={styles.memberRole}>{member.role}</div>
              </div>
            ))}
          </div>

          <div className={styles.teamGrid_1}>
            {[
              { name: 'Gowtham', role: 'Social Media Expert', img: '/Team/gowtham.png' },
              { name: 'Yoga', role: 'Social Media Expert', img: '/Team/yoga.png' },
              { name: 'Yoga', role: 'Social Media Expert', img: '/Team/yoga.png' },
              { name: 'Aruna', role: 'Digital Marketing Specialist', img: '/Team/aruna.png' },
            ].map((member) => (
              <div key={member.name} className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <img
                    src={member.img}
                    alt={`${member.name} - ${member.role}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.memberName}>{member.name}</div>
                <div className={styles.memberRole}>{member.role}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
