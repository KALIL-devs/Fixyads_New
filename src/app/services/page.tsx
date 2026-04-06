import Link from "next/link";
import Image from "next/image";
import styles from "./Services.module.css";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/services' },
};

const services = [
  {
    title: "Web Development",
    link: "/services/web-development",
    image: "/services/webdev.png",
    desc: "We build fast, responsive, and scalable websites tailored to your business needs, ensuring seamless user experience, modern design, strong performance, and optimized structure to support growth and conversions.",
  },
  {
    title: "Search Engine Optimization",
    link: "/services/search-engine-optimization",
    image: "/services/seo.png",
    desc: "Our SEO services improve search rankings through keyword research, on-page optimization, technical fixes, and quality backlinks, helping your website attract organic traffic, increase visibility, and generate consistent leads.",
  },
  {
    title: "Social Media Marketing",
    link: "/services/social-media-marketing",
    image: "/services/smm.png",
    desc: "We manage social media platforms to grow your brand, engage audiences, and drive traffic through strategic content, targeted campaigns, consistent posting, and performance tracking for better reach and conversions.",
  },
  {
    title: "Content Branding",
    link: "/services/content-branding",
    image: "/services/contentMarketing.png",
    desc: "We create valuable, engaging content that attracts and retains your audience, improves SEO performance, builds brand authority, and drives conversions through blogs, articles, and strategic content planning.",
  },
  {
    title: "Influencer Marketing",
    link: "/services/influencer-marketing",
    image: "/services/influencer4.png",
    desc: "We connect your brand with relevant influencers to promote products authentically, increase trust, reach targeted audiences, and boost engagement through strategic collaborations, campaigns, and measurable performance results.",
  },
];

export default function ServicesPage() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Services</h1>
        <p className={styles.subheading}>
          We deliver focused digital solutions designed to grow your business.
        </p>

        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.serviceSection} ${index % 2 !== 0 ? styles.reverse : ""
              }`}
          >

            {/* IMAGE */}
            <div className={styles.visual}>
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className={styles.image}
              />
            </div>

            {/* TEXT */}
            <div className={styles.content}>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>

              {/* CTA (separate block) */}
              <div className={styles.ctaWrapper}>
                <Link href={service.link} className="btn btn-primary">
                  Explore Service →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}