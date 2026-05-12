import ds from "@/styles/pageDesignSystem.module.css";
import PageTemplate from "@/components/layout/PageTemplate";
import { siteContent, generateSiteMetadata } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = generateSiteMetadata("web-development");

export default function WebDevelopmentPage() {
  const data = siteContent["web-development"];

  return (
    <PageTemplate data={data}>
      <section className={ds.section}>
        <div className={ds.container}>
          <h2 className={ds.sectionTitle}>Our Web Development Services</h2>

          <div className={ds.grid}>
            <div className={ds.card}>
              <h3>Frontend Development</h3>
              <p>
                Responsive, interactive interfaces using React, Next.js, and
                modern UI frameworks.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Backend Development</h3>
              <p>
                Secure APIs, databases, authentication, and server-side logic
                built to scale.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Full Stack Solutions</h3>
              <p>
                End-to-end development covering design, development, testing,
                and deployment.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Performance & SEO</h3>
              <p>
                Fast load times, Core Web Vitals optimization, and SEO-friendly
                architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={ds.altSection}>
        <div className={ds.container}>
          <h2 className={ds.sectionTitle}>Our Development Process</h2>

          <ol className={ds.processList}>
            <li>Requirement Analysis & Planning</li>
            <li>UI/UX Design & Prototyping</li>
            <li>Development & Integration</li>
            <li>Testing & Optimization</li>
            <li>Launch, Support & Scaling</li>
          </ol>
        </div>
      </section>
    </PageTemplate>
  );
}
