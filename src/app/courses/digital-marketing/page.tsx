import ds from "@/styles/pageDesignSystem.module.css";
import PageTemplate from "@/components/layout/PageTemplate";
import { siteContent, generateSiteMetadata } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = generateSiteMetadata("digital-marketing-course");

export default function DigitalMarketingCourse() {
  const data = siteContent["digital-marketing-course"];

  return (
    <PageTemplate data={data}>
      <div className={ds.courseHighlights}>
        <div className={ds.courseHighlight}>
          <h3>12+</h3>
          <p>Modules</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>6+</h3>
          <p>Live Projects</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>3</h3>
          <p>Certifications</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>100%</h3>
          <p>Practical Training</p>
        </div>
      </div>
    </PageTemplate>
  );
}
