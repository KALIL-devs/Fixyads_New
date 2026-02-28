import type { Metadata } from "next";
// import styles from "../Services.module.css";
import Link from "next/link";
import Image from "next/image";
import Styles from "./SeoPage.module.css";

export const metadata: Metadata = {
  title: "SEO Services | Rank Higher & Grow Organic Traffic",
  description:
    "Professional SEO services to boost your website rankings, increase organic traffic, and drive quality leads. On-page, off-page & technical SEO.",
  keywords: [
    "SEO services",
    "search engine optimization",
    "on page seo",
    "off page seo",
    "technical seo",
    "local seo",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section with Image */}
      <section className={Styles.seoHero}>
        <div className={Styles.seoHeroGrid}>
          <div className={Styles.seoHeroContent}>
            <p>Turn Website Visitors Into Paying Clients</p>
            <h1>Leading Search Engine Optimization Company</h1>
            <p>
              We help businesses attract the right audience and convert traffic into real customer inquiries. 
              Our SEO services strengthen your search visibility, improve rankings, and drive consistent, high-intent 
              visitors to your website. With a focused strategy and continuous optimization, we support steady growth 
              and measurable results for your brand.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get Free SEO Audit
            </Link>
          </div>

          {/* Image */}
          <div className={Styles.seoHeroImage}>
            <Image
              src="/services/seo.png"
              alt="SEO analytics and growth dashboard"
              fill
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={Styles.section}>
        <div className={Styles.container}>
          <h2 className={Styles.sectionTitle}>Our End to End SEO Services to Meet Your Business Needs</h2>

          <div className={Styles.grid}>
            <div className={Styles.card}>
              <div className={Styles.cardImage}>
                <Image
                  src="/services/seopage/webseoaudit.png"
                  alt="Website SEO Audit"
                  fill
                />
              </div>
              <h3>Website SEO Audit</h3>
              <p>
                Your growth starts with clarity. Our Website SEO Audit identifies exactly what is limiting your search 
                visibility and conversions. We analyze your website structure, competitor landscape, keyword positioning, 
                technical performance, and content gaps to uncover missed revenue opportunities. Instead of guesswork, 
                you receive a clear, prioritized action plan designed to increase rankings, attract qualified traffic, 
                and turn visitors into customers.
              </p>
            </div>

            <div className={Styles.card}>
              <div className={Styles.cardImage}>
                <Image
                  src="/services/seopage/onpageseo.png"
                  alt="On-page SEO"
                  fill
                />
              </div>
              <h3>On-Page SEO</h3>
              <p>
                Traffic alone isn’t enough, it needs to convert. Our On-Page SEO strategy aligns your content with real search 
                intent and buyer behavior. We optimize target keywords, enhance content quality, refine meta tags, strengthen 
                internal linking, and improve user experience across every important page. The result is a website that ranks 
                higher, engages visitors longer, and drives consistent inquiries and sales.
              </p>
            </div>

            <div className={Styles.card}>
              <div className={Styles.cardImage}>
                <Image
                  src="/services/seopage/technicalseo.png"
                  alt="Technical SEO"
                  fill
                />
              </div>
              <h3>Technical SEO</h3>
              <p>
                Search engines reward fast, structured, and accessible websites. We optimize page speed, mobile responsiveness, 
                crawlability, indexing, and structured data implementation to ensure your website performs flawlessly. By removing 
                technical barriers, we help search engines understand your content clearly and rank it confidently leading to 
                stronger visibility and sustainable growth.
              </p>
            </div>

            <div className={Styles.card}>
              <div className={Styles.cardImage}>
                <Image
                  src="/services/seopage/offpageseo.png"
                  alt="Off-page SEO"
                  fill
                />
              </div>
              <h3>Off-Page SEO</h3>
              <p>
                Authority builds trust, and trust drives conversions. Our Off-Page SEO approach focuses on acquiring high-quality backlinks, 
                strengthening brand mentions, and building digital credibility within your industry. By improving your domain authority and 
                online reputation, we position your business as a reliable choice helping you outrank competitors and win more customers.
              </p>
            </div>

            <div className={Styles.card}>
              <div className={Styles.cardImage}>
                <Image
                  src="/services/seopage/localseo.png"
                  alt="Local SEO"
                  fill
                />
              </div>
              <h3>Local SEO</h3>
              <p>
                If your customers are searching locally, you need to dominate local results. We optimize your Google Business Profile, 
                enhance local citations, manage reviews, and improve location-based keyword targeting. This ensures your business appears 
                in map listings and local searches driving calls, walk-ins, and high-intent leads from nearby customers ready to take action.
              </p>
            </div>

            <div className={Styles.card}>
              <div className={Styles.cardImage}>
                <Image
                  src="/services/seopage/report.png"
                  alt="SEO Reporting & Analytics"
                  fill
                />
              </div>
              <h3>SEO Reporting & Analytics</h3>
              <p>
                Marketing should be measurable. Our detailed SEO reports provide transparent insights into keyword rankings, 
                organic traffic growth, user behavior, and conversion performance. We track progress, identify new opportunities, 
                and continuously refine strategies to maximize your return on investment ensuring your SEO delivers real business 
                impact.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section className={styles.altSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our SEO Process</h2>

          <ol className={styles.processList}>
            <li>Website & Competitor Audit</li>
            <li>Keyword Research & Strategy</li>
            <li>On-Page & Technical Optimization</li>
            <li>Link Building & Content Growth</li>
            <li>Tracking, Reporting & Scaling</li>
          </ol>
        </div>
      </section>
      <section className={styles.curriculum}>
        <h2 style={{color:'#119c90'}}>What You’ll Learn</h2>

        <div className={styles.curriculumGrid}>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>SEO & Content Marketing</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Google Ads & Meta Ads</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Social Media Marketing</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Email Marketing & Automation</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Analytics & Conversion Optimization</p>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '3rem',}}>
          <Link href="/contact" className="btn btn-primary">Contact us</Link>
        </div>
      </section> */}

      {/* Business Value Section - Alternate Layout */}
      <section className={Styles.valueSection}>
        <div className={Styles.container}>

          <div className={Styles.valueHeader}>
            <h2>
              Boost Your Business Potential with a Search Engine Optimization Company
            </h2>
            <p>
              We follow a structured, data-backed SEO process focused on growing your business. 
              Our step-by-step approach increases online visibility, attracts the right customers, 
              and converts search traffic into real revenue.From market analysis and competitor research 
              to website optimization and local search improvements, every action supports your business 
              goals. Fixyads focus on stronger rankings, steady growth, and measurable results that help 
              your business stand out and win more customers.
            </p>
          </div>

          <div className={Styles.valueList}>

            <div className={Styles.valueItem}>
              <h3>Increase Visibility & Attract Ready-to-Buy Customers</h3>
              <p>
                SEO places your business at the top of search results, connecting you with customers 
                actively looking for your products or services. This leads to higher visibility, consistent 
                inquiries, and steady lead generation.
              </p>
            </div>

            <div className={Styles.valueItem}>
              <h3>Turn Traffic into Revenue</h3>
              <p>
                SEO brings qualified visitors who are more likely to convert. 
                By targeting high-intent keywords and optimizing your website experience, 
                it helps transform search traffic into real revenue.
              </p>
            </div>

            <div className={Styles.valueItem}>
              <h3>Build Trust & Brand Authority</h3>
              <p>
                Websites that rank higher are often viewed as more credible. 
                A strong SEO presence strengthens your brand reputation and builds long-term customer confidence.
              </p>
            </div>

            <div className={Styles.valueItem}>
              <h3>Achieve Long-Term Marketing ROI</h3>
              <p>
                SEO delivers sustainable growth. Once your rankings improve, your website continues 
                generating organic traffic and sales without constant advertising costs.
              </p>
            </div>

            <div className={Styles.valueItem}>
              <h3>Stay Ahead of Competitors</h3>
              <p>
                If competitors rank above you, they capture your potential customers. A strategic SEO 
                approach strengthens your position and helps your business lead the market.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* AI SEO Features Section */}
      <section className={Styles.aiFeatures}>
        <div className={Styles.container}>

          <div className={Styles.centerHeader}>
            <h2>Dominate AI Search with Our Smart AI SEO Solutions</h2>
            <p>
              Search is changing with AI-powered algorithms from platforms like Google. Businesses must focus on 
              user intent and smart optimization to stay competitive. Fixyads deliver AI SEO strategies that improve 
              visibility, drive targeted traffic, and boost rankings with data-driven precision.
            </p>
          </div>

          <div className={Styles.featureGrid}>

            <div>
              <h3>AI Search Optimization</h3>
              <p>
                We optimize your website for AI-powered search engines by aligning content with user intent, 
                structured data, and conversational queries.
              </p>
            </div>

            <div>
              <h3>Semantic SEO</h3>
              <p>
                We improve rankings by focusing on topic depth, search intent, and meaningful keyword relationships 
                rather than simple keyword repetition.
              </p>
            </div>

            <div>
              <h3>Entity & Context SEO</h3>
              <p>
                Fixyads strengthen content relevance by optimizing around entities (people, brands, places, concepts) 
                and contextual signals recognized by search engines.
              </p>
            </div>

            <div>
              <h3>AI Algorithm-Based SEO</h3>
              <p>
                We adapt strategies according to AI ranking systems such as Google RankBrain and Google BERT to improve 
                visibility and organic performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* AI SEO Services Section */}
      <section className={Styles.aiSection}>
        <div className={Styles.container}>
          <div className={Styles.aititle}>
            <h2>AI SEO Services</h2>
          </div>

          <div className={Styles.aiGrid}>
            <div className={Styles.aiImage}>
                <Image
                  src="/services/ai-seo.png"
                  alt="AI SEO services"
                  fill
                />
            </div>
            <div className={Styles.aiContent}>
              <p>
                AI SEO Services help businesses improve their search engine rankings using intelligent automation, 
                advanced data analysis, and smart content strategies. By using AI-driven tools, brands can achieve 
                better visibility on any search engine and attract highly targeted organic traffic. Fixyads deliver 
                result-focused AI SEO solutions that combine technical expertise with data-driven insights to maximize 
                search performance. Our team focuses on smarter keyword targeting, optimized content structure, and 
                continuous performance monitoring to help businesses grow faster in competitive digital markets.
              </p>

              <a href="/contact" className="btn btn-primary" style={{ marginTop: "20px" }}>
                Talk To Our Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={Styles.faqSection}>
        <div className={Styles.container}>

          <h2 className={Styles.faqTitle}>Frequently Asked Questions</h2>

          <div className={Styles.faqList}>

            <div className={Styles.faqItem}>
              <h3>Why should I choose Fixyads for SEO services?</h3>
              <p>
                Fixyads is more than an SEO agency; we act as your long-term digital growth partner. 
                Our team builds customized strategies based on real data, competitor insights, and your 
                business goals. We focus on improving your visibility on platforms like Google and turning search traffic 
                into measurable leads, sales, and brand authority.
              </p>
            </div>

            <div className={Styles.faqItem}>
              <h3>How much do SEO services cost at Fixyads?</h3>
              <p>
                Every business is different, and so is every SEO strategy. Our pricing depends on your industry competition, 
                website condition, and growth targets. After a detailed website audit, we provide a clear action plan with 
                transparent pricing, no hidden costs, only result-focused execution.
              </p>
            </div>

            <div className={Styles.faqItem}>
              <h3>How long does it take to see real SEO results?</h3>
              <p>
                SEO is a strategic investment, not a quick fix. While early improvements can appear within a few months, 
                strong and stable growth typically develops over 6–12 months. Consistent optimization and quality content 
                are the keys to sustainable rankings.
              </p>
            </div>

            <div className={Styles.faqItem}>
              <h3>Can SEO genuinely increase leads and revenue?</h3>
              <p>
                Absolutely. SEO attracts users who are already searching for what you offer. 
                By optimizing your website for the right keywords and search intent, we help convert organic 
                visitors into qualified leads and long-term customers.
              </p>
            </div>

            <div className={Styles.faqItem}>
              <h3>How do I know which SEO strategy fits my business?</h3>
              <p>
                There is no one-size-fits-all solution in SEO. After understanding your business model, audience, and objectives, 
                our specialists recommend the right combination of technical SEO, content optimization, local SEO, or full-scale 
                search strategy to deliver maximum impact.
              </p>
            </div>

            <div className={Styles.faqItem}>
              <h3>Why continue SEO after reaching top rankings?</h3>
              <p>
                Search rankings are competitive and constantly shifting. Competitors improve, algorithms update, 
                and user behavior changes. Ongoing SEO keeps your brand visible, protects your rankings, and maintains 
                a steady flow of leads and revenue over time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* AI CTA Banner */}
      <section className={Styles.aiCta}>
        <div className={Styles.container}>
          <h2>Turn Searches into Sales</h2>
          <p>Professional SEO services that deliver measurable results.</p>

          <a href="/contact" className="btn btn-primary" style={{ marginTop: "20px" }}>
            Request a Strategy Call
          </a>
        </div>
      </section>

      {/* CTA */}
      {/* <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Dominate Search Results?</h2>
          <p>
            Let our SEO experts help you grow organic traffic and increase sales.
          </p>
          <Link href="/contact" className='btn btn-secondary' style={{marginTop: '30px'}}>
            Talk to an Expert
          </Link>
        </div>
      </section> */}
    </>
  );
}
