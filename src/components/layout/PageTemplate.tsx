import React from "react";
import Image from "next/image";
import Link from "next/link";
import ds from "@/styles/pageDesignSystem.module.css";
import { PageContent } from "@/data/site-content";

interface PageTemplateProps {
  data: PageContent;
  children?: React.ReactNode;
}

export default function PageTemplate({ data, children }: PageTemplateProps) {
  const singleColumn = !data.hero.imageSrc;

  return (
    <>
      <section className={ds.hero}>
        <div
          className={`${ds.heroGrid} ${singleColumn ? ds.heroGridSingle : ""}`}
        >
          <div
            className={`${ds.heroContent} ${singleColumn ? ds.heroContentCenter : ""}`}
          >
            <h1>{data.hero.title}</h1>
            <p>{data.hero.subtitle}</p>
            <Link href={data.hero.ctaLink} className="btn btn-primary">
              {data.hero.ctaText}
            </Link>
          </div>

          {data.hero.imageSrc && (
            <div className={ds.heroImage}>
              <Image
                src={data.hero.imageSrc}
                alt={data.hero.imageAlt || data.hero.title}
                fill
                priority
              />
            </div>
          )}
        </div>
      </section>

      {children}

      {data.curriculum && (
        <section className={ds.curriculum}>
          <h2 className={ds.curriculumTitle}>{data.curriculum.title}</h2>

          <div className={ds.curriculumGrid}>
            {data.curriculum.items.map((item, index) => (
              <div key={index} className={ds.curriculumItem}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className={`text-center ${ds.curriculumFoot}`}>
            <Link href="/contact" className="btn btn-primary">
              Contact us
            </Link>
          </div>
        </section>
      )}

      <section className={ds.bottomCta}>
        <div className={ds.container}>
          <h2>{data.cta.title}</h2>
          <p>{data.cta.subtitle}</p>
          <div className={ds.bottomCtaLead}>
            <Link href={data.cta.btnLink} className="btn btn-primary">
              {data.cta.btnText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
