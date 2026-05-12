import ds from "@/styles/pageDesignSystem.module.css";
import PageTemplate from "@/components/layout/PageTemplate";
import { siteContent, generateSiteMetadata } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = generateSiteMetadata("influencer-marketing");

export default function InfluencerMarketingPage() {
  const data = siteContent["influencer-marketing"];

  return (
    <PageTemplate data={data}>
      <section className={ds.section}>
        <div className={ds.container}>
          <h2 className={ds.sectionTitle}>
            Our Influencer Marketing Services
          </h2>

          <div className={ds.grid}>
            <div className={ds.card}>
              <h3>Influencer Discovery</h3>
              <p>
                Finding the right creators based on niche, audience, reach, and
                authenticity.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Campaign Strategy</h3>
              <p>
                Campaign planning aligned with your brand goals and KPIs.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Creator Collaborations</h3>
              <p>
                Managing influencer partnerships, contracts, and deliverables.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Tracking & Reporting</h3>
              <p>
                Performance analysis, ROI tracking, and detailed reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={ds.altSection}>
        <div className={ds.container}>
          <h2 className={ds.sectionTitle}>
            Our Influencer Marketing Process
          </h2>

          <ol className={ds.processList}>
            <li>Brand Alignment & Goal Setting</li>
            <li>Influencer Shortlisting</li>
            <li>Campaign Execution</li>
            <li>Content Publishing & Engagement</li>
            <li>Analytics & Optimization</li>
          </ol>
        </div>
      </section>
    </PageTemplate>
  );
}
