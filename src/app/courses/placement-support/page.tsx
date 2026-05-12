import ds from "@/styles/pageDesignSystem.module.css";
import PageTemplate from "@/components/layout/PageTemplate";
import { siteContent, generateSiteMetadata } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = generateSiteMetadata("placement-support");

export default function PlacementSupportCourse() {
  const data = siteContent["placement-support"];

  return (
    <PageTemplate data={data}>
      <div className={ds.courseHighlights}>
        <div className={ds.courseHighlight}>
          <h3>Resume</h3>
          <p>Building</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>Mock</h3>
          <p>Interviews</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>Live</h3>
          <p>Projects</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>Hiring</h3>
          <p>Support</p>
        </div>
      </div>
    </PageTemplate>
  );
}
