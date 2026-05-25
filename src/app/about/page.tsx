import type { Metadata } from 'next';
import styles from './page.module.css';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'About Us | Digital Marketing Agency & Training Institute',
  description:
    'Learn about our journey, mission, and the team behind our success. We help businesses grow and students build careers.',
};

export default function AboutPage() {
  return (
    <>
      {/* ── Glowing Hero Header ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroGrid} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>// Who We Are</span>
          <h1 className={styles.heroTitle}>
            Bridging the Gap Between <span>Skills &amp; Scale</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We are a dedicated team of digital marketing specialists, software engineers, and professional mentors helping brands grow online and students launch meaningful careers.
          </p>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.visualColumn}>
              <div className={styles.visualFrame}>
                <img
                  src="/aboutus/aboutus.png"
                  alt="Fixyads office workspace"
                  className={styles.visualImg}
                />
                <div className={styles.visualOverlay} />
              </div>
            </div>

            <div className={styles.contentColumn}>
              <span className={styles.sectionEyebrow}>// Our Journey</span>
              <h2 className={styles.sectionTitle}>Crafting Real-World Success Stories Since 2020</h2>
              <p className={styles.textLead}>
                Founded with a simple mission: to bridge the gap between academic theory and active industry requirements.
              </p>
              <p className={styles.textBody}>
                Over the past years, we’ve successfully partnered with **100+ global brands** to scale their monthly revenue and trained **500+ students** now working as specialized marketers and developers in top MNCs.
              </p>

              <div className={styles.pillars}>
                <div className={styles.pillar}>
                  <h3>Our Mission</h3>
                  <p>To empower local and global businesses with custom, data-driven strategy and individuals with career-defining, practical technical skills.</p>
                </div>
                <div className={styles.pillar}>
                  <h3>Our Vision</h3>
                  <p>To become the most trusted digital performance partner and career training academy globally, built around transparency and results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip (Curated Navy Card) ── */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsCard}>
            <div className={styles.statsOrb} />
            <div className={styles.statsGridPattern} />
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Brands Scaled</div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Graduates Trained</div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <div className={styles.statNumber}>5x</div>
                <div className={styles.statLabel}>Average Growth ROI</div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <div className={styles.statNumber}>95%</div>
                <div className={styles.statLabel}>Success Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="container mb-8">
        <div className={styles.ctaBlock}>
          <div className={styles.ctaOrb} />
          <div className={styles.ctaInner}>
            <span className={styles.ctaEyebrow}>// Work With Us</span>
            <h2 className={styles.ctaTitle}>Ready to Write Your Success Story?</h2>
            <p className={styles.ctaText}>
              Whether you are a growing business looking to double your leads or a passionate student ready to build active, marketable expertise — we are here to guide you.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              <span>Get in Touch Today</span>
              <ArrowRight size={16} className={styles.ctaArrow} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
