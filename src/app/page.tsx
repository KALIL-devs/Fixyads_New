import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import CourseCard from '@/components/CourseCard/CourseCard';
import styles from './page.module.css';
import HowWeWork from '@/components/HowWeWork/HowWeWork';
import WhyChooseFixyAds from "@/components/WhyChooseFixyAds/WhyChooseFixyAds";
import StatsBar from "@/components/StatsBar/StatsBar";
import CoursesTraining from "@/components/CoursesTraining/CoursesTraining";
import ClientsSection from "@/components/ClientsSection/ClientsSection";

export default function Home() {
  return (
    <>
      <Hero />

      <div className={styles.servicebg} id="services">
        <div className={styles.servicebg1}>
        {/* Services Section */}
          <section className="section container" >
            <h2 className={styles.sectionTitleblack}><span style={{color: '#119c90'}}> Scale Your Online Presence with Military Grade Digital Marketing Services </span></h2>
            <p className={styles.sectionSubtitleblack}>
              As a results-focused digital marketing company, we deliver end-to-end digital marketing solutions designed to help businesses improve conversion rates, and achieve consistent revenue growth across competitive markets.
            </p>
            <div className={styles.grid}>

              <ServiceCard
                title="Branding"
                description="We craft a brand that commands recognition and trust.
                Every detail, from visuals to messaging, is designed to tell your story with clarity and impact.
                A compelling brand instills confidence in your business,turning that trust into lasting customer loyalty."
                icon="🔍"
                link="/services/search-engine-optimization"
              />

              <ServiceCard
                title="Search Engine Optimization (SEO)"
                description="Your business appears prominently when customers search for your services. 
                We use precise keyword strategies, technical expertise, and high-quality content to support your visibility.
                This brings steady, relevant organic traffic to your website."
                icon="🔍"
                link="/services/search-engine-optimization"
              />

              <ServiceCard
                title="Search Engine Marketing (SEM)"
                description="We position your brand in front of the right audience at the right time.
                Our campaigns target high-intent users, driving meaningful engagement and conversions.
                Every ad is meticulously optimized to maximize ROI and efficiency."
                icon="📱"
                link="/services/social-media-marketing"
              />

              <ServiceCard
                title="Content Marketing"
                description="Strong content helps your audience understand your brand and trust your expertise. 
                We create content that answers real questions and addresses real needs of business.
                It strengthens your SEO while keeping visitors engaged turning attention into lasting brand connections."
                icon="🎨"
                link="/services/content-branding"
              />

              <ServiceCard
                title="PPC Marketing"
                description="Our PPC campaigns focus on delivering fast, measurable outcomes.We refine targeting, ad copy, 
                and bidding strategies to improve performance.This minimizes wasted spend while increasing conversions giving 
                you clear insight into what performs and where to scale."
                icon="🌐"
                link="/services/web-development"
              />

              <ServiceCard
                title="Video Marketing"
                description="Video allows messages to connect quickly and effectively.
                We create videos that explain concepts, engage viewers, and encourage action. 
                Ideal for websites, social platforms, and paid campaigns helping your brand stand out in competitive digital spaces."
                icon="💬"
                link="/services/automation"
              />

              <ServiceCard
                title="Email Marketing"
                description="Email marketing keeps your brand present and relevant to your audience. 
                We design personalized campaigns that feel timely and meaningful rather than intrusive. 
                Automation ensures the right message reaches the right user at the right moment, encouraging stronger 
                engagement and repeat business."
                icon="📊"
                link="/services/dummy"
              />

              <ServiceCard
                title="Influencer Marketing"
                description="We connect your brand with influencers who align naturally with 
                your values and audience. Authentic collaborations help build credibility and 
                introduce your business to new communities. The focus remains on meaningful engagement 
                rather than surface-level reach, so your brand feels trusted, relevant, and real."
                icon="🤝"
                link="/services/influencer-marketing"
              />

              <ServiceCard
                title="Affiliate Marketing"
                description="Affiliate marketing extends your reach through performance-based partnerships 
                that deliver real outcomes. We help structure and manage affiliate programs designed for measurable growth. 
                You pay only when results are achieved, making it a scalable and cost-efficient channel for expanding your business."
                icon="⭐"
                link="/services/content-marketing"
              />

              <ServiceCard
                title="Website Development Services"
                description="Your website often creates the first impression of your business. 
                We design fast, intuitive, and user-friendly websites that are easy to navigate. 
                Built with SEO, usability, and conversions in mind, your website becomes a powerful asset that 
                supports marketing and business growth."
                icon="⭐"
                link="/services/content-marketing"
              />

            </div>


            {/* <div className="text-center" style={{ marginTop: '3rem',}}>
              <Link href="/contact" className="btn btn-primary">Contact us</Link>
            </div> */}
          </section>
        </div>
      </div>

      <ClientsSection />
      
      <div className={styles.howwework}>
        <HowWeWork />
      </div>

      <CoursesTraining />

      <WhyChooseFixyAds />

      {/* <StatsBar /> */}

      {/* Testimonials Section */}
      {/* <section className="section container" style={{margin: '0px auto' }}>
        <h2 className={styles.sectionTitleblack}>What Our Clients Say</h2>
        <p className={styles.sectionSubtitleblack}>
          Trusted by businesses and students alike.
        </p>

        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"The team transformed our online presence. Our leads increased by 200% in just 3 months!"</p>
            <div className={styles.testimonialAuthor}>Sarah Johnson</div>
            <div className={styles.testimonialRole}>CEO, TechStart</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"The Digital Marketing course was a game-changer for my career. I got placed immediately after completion."</p>
            <div className={styles.testimonialAuthor}>Rahul Verma</div>
            <div className={styles.testimonialRole}>Digital Marketing Executive</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"Professional, timely, and results-driven. Highly recommend their SEO services."</p>
            <div className={styles.testimonialAuthor}>Mike Chen</div>
            <div className={styles.testimonialRole}>Founder, GreenEats</div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="container">
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Grow?</h2>
          <p className={styles.ctaText}>
            Grow your business with digital marketing services designed to attract the right audience, generate quality leads, and maximize ROI.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-primary" >
              Get Audit
            </Link>
            <Link href="/contact" className='btn btn-secondary'>
              View Quotation 
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
