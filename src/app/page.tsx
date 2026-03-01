import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import WhyChooseFixyAds from "@/components/WhyChooseFixyAds/WhyChooseFixyAds";
import CoursesTraining from "@/components/CoursesTraining/CoursesTraining";
import ClientsSection from "@/components/ClientsSection/ClientsSection";

import type { IconName } from "@/components/ServiceCard/ServiceCard";

import styles from "./page.module.css";

/* ================================
   DATA
================================ */
const services: {
  title: string;
  description: string;
  icon: IconName;
  link: string;
}[] = [
  {
    title: "Branding",
    description: "We craft a brand that commands recognition and trust.Every detail, from visuals to messaging, is designed to tell your story with clarity and impact.A compelling brand instills confidence in your business,turning that trust into lasting customer loyalty.",
    icon: "Palette",
    link: "/search-engine-optimization",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Your business appears prominently when customers search for your services. We use precise keyword strategies, technical expertise, and high-quality content to support your visibility.This brings steady, relevant organic traffic to your website.",
    icon: "Search",
    link: "/search-engine-optimization",
  },
  {
    title: "Search Engine Marketing (SEM)",
    description: "We position your brand in front of the right audience at the right time. Our campaigns target high-intent users, driving meaningful engagement and conversions.Every ad is meticulously optimized to maximize ROI and efficiency.",
    icon: "Megaphone",
    link: "/social-media-marketing",
  },
  {
    title: "Content Marketing",
    description: "Strong content helps your audience understand your brand and trust your expertise. We create content that answers real questions and addresses real needs of business.It strengthens your SEO while keeping visitors engaged turning attention into lasting brand connections.",
    icon: "MessageCircle",
    link: "/content-branding",
  },
  // {
  //   title: "PPC Marketing",
  //   description: "Our PPC campaigns focus on delivering fast, measurable outcomes.We refine targeting, ad copy, and bidding strategies to improve performance.This minimizes wasted spend while increasing conversions giving you clear insight into what performs and where to scale.",
  //   icon: "BarChart",
  //   link: "/web-development",
  // },
  // {
  //   title: "Video Marketing",
  //   description: "Video allows messages to connect quickly and effectively.We create videos that explain concepts, engage viewers, and encourage action. Ideal for websites, social platforms, and paid campaigns helping your brand stand out in competitive digital spaces.",
  //   icon: "Globe",
  //   link: "/search-engine-optimization",
  // },
  // {
  //   title: "Email Marketing",
  //   description: "Email marketing keeps your brand present and relevant to your audience. We design personalized campaigns that feel timely and meaningful rather than intrusive. Automation ensures the right message reaches the right user at the right moment, encouraging stronger engagement and repeat business.",
  //   icon: "MessageCircle",
  //   link: "/search-engine-optimization",
  // },
  {
    title: "Influencer Marketing",
    description: "We connect your brand with influencers who align naturally with your values and audience. Authentic collaborations help build credibility and introduce your business to new communities. The focus remains on meaningful engagement rather than surface-level reach, so your brand feels trusted, relevant, and real.",
    icon: "Handshake",
    link: "/influencer-marketing",
  },
  // {
  //   title: "Affiliate Marketing",
  //   description: "Affiliate marketing extends your reach through performance-based partnerships that deliver real outcomes. We help structure and manage affiliate programs designed for measurable growth. You pay only when results are achieved, making it a scalable and cost-efficient channel for expanding your business.",
  //   icon: "Star",
  //   link: "/search-engine-optimization",
  // },
  {
    title: "Website Development",
    description: "Your website often creates the first impression of your business. We design fast, intuitive, and user-friendly websites that are easy to navigate. Built with SEO, usability, and conversions in mind, your website becomes a powerful asset that supports marketing and business growth.",
    icon: "Code",
    link: "/content-marketing",
  },
];

export default function Home() {
  return (
    <>
    {/* <div className={styles.floatingBg}> */}
      <Hero />

      {/* ================= SERVICES ================= */}
      <section className={styles.serviceBg} id="services">
        <div className="container">
          <div className="color">
            <h2 className={`${styles.sectionTitle} ${styles.dark}`}>
              <span className={styles.highlight}>
                Scale Your Online Presence with Military Grade<span className={styles.orangehighlight}> Digital Marketing Services</span>
              </span>
            </h2>
            <p className={`${styles.sectionSubtitle} ${styles.dark}`}>
              As a results-focused digital marketing company, we deliver end-to-end digital marketing 
              solutions designed to help businesses improve conversion rates, and achieve consistent revenue 
              growth across competitive markets.
            </p>
            <div>
              <div className={styles.grid}>
                {services.map((service, index) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </div>
            <div className={styles.servicebtn}>
                <Link href="/services" className="btn btn-primary">
                  View All services
                </Link>
            </div>
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
              Get a Free Audit 
            </Link>
            {/* <Link href="/contact" className="btn btn-secondary">
              View Quotation
            </Link> */}
          </div>
        </div>
      </section>
    {/* </div> */}
    </>
  );
}