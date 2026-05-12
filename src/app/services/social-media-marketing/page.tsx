import ds from "@/styles/pageDesignSystem.module.css";
import PageTemplate from "@/components/layout/PageTemplate";
import { siteContent, generateSiteMetadata } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = generateSiteMetadata("social-media-marketing");

export default function SocialMediaMarketingPage() {
  const data = siteContent["social-media-marketing"];

  return (
    <PageTemplate data={data}>
      <section className={ds.section}>
        <div className={ds.container}>
          <h2 className={ds.sectionTitle}>
            Our Social Media Marketing Services
          </h2>

          <div className={ds.grid}>
            <div className={ds.card}>
              <h3>Social Media Strategy</h3>
              <p>
                Platform-specific strategies aligned with your business goals,
                audience research, and content planning.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Content Creation</h3>
              <p>
                High-quality posts, reels, stories, captions, and creatives
                designed to maximize engagement.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Paid Social Ads</h3>
              <p>
                High-performing ad campaigns on Instagram, Facebook, and
                LinkedIn to generate leads and sales.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Community Management</h3>
              <p>
                Comment moderation, DM handling, audience interaction, and brand
                reputation management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={ds.altSection}>
        <div className={ds.container}>
          <h2 className={ds.sectionTitle}>
            Our Social Media Marketing Process
          </h2>

          <ol className={ds.processList}>
            <li>Brand & Audience Research</li>
            <li>Content & Campaign Planning</li>
            <li>Creative Production & Scheduling</li>
            <li>Ads Optimization & Scaling</li>
            <li>Analytics, Reporting & Growth</li>
          </ol>
        </div>
      </section>
    </PageTemplate>
  );
}
