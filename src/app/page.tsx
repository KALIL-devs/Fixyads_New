import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import WhyChooseFixyAds from "@/components/WhyChooseFixyAds/WhyChooseFixyAds";
import CoursesTraining from "@/components/CoursesTraining/CoursesTraining";
import ClientsSection from "@/components/ClientsSection/ClientsSection";

import styles from "./page.module.css";

/* ================================
   DATA
================================ */
const services = [
  {
    title: "Branding",
    description: "We craft a brand that commands recognition and trust. Every detail is designed to tell your story with clarity and impact.",
    icon: "🔍",
    link: "/search-engine-optimization",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "We improve your visibility with strong keyword strategy, technical SEO, and high-quality content.",
    icon: "🔍",
    link: "/search-engine-optimization",
  },
  {
    title: "Search Engine Marketing (SEM)",
    description: "Target the right audience at the right time with optimized ad campaigns that maximize ROI.",
    icon: "📱",
    link: "/social-media-marketing",
  },
  {
    title: "Content Marketing",
    description: "We create meaningful content that builds trust, improves SEO, and drives engagement.",
    icon: "🎨",
    link: "/content-branding",
  },
  {
    title: "PPC Marketing",
    description: "Drive fast results with optimized ads, smart bidding, and reduced wasted spend.",
    icon: "🌐",
    link: "/web-development",
  },
  {
    title: "Video Marketing",
    description: "Engaging video content that explains, connects, and converts your audience.",
    icon: "💬",
    link: "/search-engine-optimization",
  },
  {
    title: "Email Marketing",
    description: "Personalized campaigns that improve engagement and drive repeat business.",
    icon: "📊",
    link: "/search-engine-optimization",
  },
  {
    title: "Influencer Marketing",
    description: "Collaborate with the right influencers to build trust and expand your reach.",
    icon: "🤝",
    link: "/influencer-marketing",
  },
  {
    title: "Affiliate Marketing",
    description: "Performance-based partnerships that scale your growth efficiently.",
    icon: "⭐",
    link: "/search-engine-optimization",
  },
  {
    title: "Website Development",
    description: "Fast, user-friendly websites built for conversions and SEO.",
    icon: "⭐",
    link: "/content-marketing",
  },
];

export default function Home() {
  return (
    <>
      <Hero />


      <div className="wave"></div>


      {/* ================= SERVICES ================= */}
      <section className={styles.serviceBg} id="services">
        <div className="container">
            
            <h2 className={`${styles.sectionTitle} ${styles.dark}`}>
              <span className={styles.highlight}>
                Scale Your Online Presence with Proven Digital Marketing
              </span>
            </h2>

            <p className={`${styles.sectionSubtitle} ${styles.dark}`}>
              We deliver end-to-end digital marketing solutions to improve conversions,
              generate quality leads, and drive consistent revenue growth.
            </p>

            <div className={styles.grid}>
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

        </div>
      </section>

      <ClientsSection />
      <HowWeWork />
      <CoursesTraining />
      <WhyChooseFixyAds />

      {/* ================= CTA ================= */}
      <section className="container">
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Grow?</h2>

          <p className={styles.ctaText}>
            Grow your business with strategies that attract the right audience,
            generate quality leads, and maximize ROI.
          </p>

          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn btn-primary">
              Get Audit
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              View Quotation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}