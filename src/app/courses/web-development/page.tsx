import ds from "@/styles/pageDesignSystem.module.css";
import PageTemplate from "@/components/layout/PageTemplate";
import { siteContent, generateSiteMetadata } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = generateSiteMetadata("web-development-course");

export default function WebDevelopmentCourse() {
  const data = siteContent["web-development-course"];

  return (
    <PageTemplate data={data}>
      <div className={ds.courseHighlights}>
        <div className={ds.courseHighlight}>
          <h3>HTML → React</h3>
          <p>Frontend</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>Node</h3>
          <p>Backend</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>5+</h3>
          <p>Projects</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>Job</h3>
          <p>Focused</p>
        </div>
      </div>
    </PageTemplate>
  );
}
