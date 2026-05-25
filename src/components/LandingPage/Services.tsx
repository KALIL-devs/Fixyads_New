'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Mail, Share2, Palette, TrendingUp, Code, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

const serviceData = [
  {
    title: 'Search Engine Optimization',
    description: 'Optimize your site for high-intent keywords to capture organic traffic, improve search rankings, and drive consistent organic conversions.',
    IconEl: Search,
    bgClass: styles.iconBlueBg,
    iconClass: styles.iconBlue,
    link: '/services/search-engine-optimization',
  },
  {
    title: 'Social Media Marketing',
    description: 'Grow a highly engaged community around your brand, utilizing platform-native formats, viral content strategies, and paid social campaigns.',
    IconEl: Share2,
    bgClass: styles.iconTealBg,
    iconClass: styles.iconTeal,
    link: '/services/social-media-marketing',
  },
  {
    title: 'Content & Branding',
    description: 'Strong content helps your audience understand your brand and trust your expertise. We create content that answers real questions and drives engagement.',
    IconEl: Palette,
    bgClass: styles.iconAmberBg,
    iconClass: styles.iconAmber,
    link: '/services/content-branding',
  },
  {
    title: 'Influencer Marketing',
    description: 'We connect your brand with influencers who align naturally with your values and audience, creating authentic collaborations that build credibility.',
    IconEl: TrendingUp,
    bgClass: styles.iconPurpleBg,
    iconClass: styles.iconPurple,
    link: '/services/influencer-marketing',
  },
  {
    title: 'Email Marketing',
    description: 'Direct campaigns targeted to segmented audiences, nurturing leads into high-lifetime-value loyal clients with personalized communication.',
    IconEl: Mail,
    bgClass: styles.iconOrangeBg,
    iconClass: styles.iconOrange,
    link: '/services/content-branding',
  },
  {
    title: 'Website Development',
    description: 'We design fast, intuitive, and user-friendly websites that are easy to navigate, built with SEO, usability, and conversions in mind.',
    IconEl: Code,
    bgClass: styles.iconGreenBg,
    iconClass: styles.iconGreen,
    link: '/services/web-development',
  },
];

const Services = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Restructured Template Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>// What We Do</span>
            <h2 className={styles.title}>
              Grow Your Business <br />With FixyAds
            </h2>
            <p className={styles.subtitle}>
              We leverage data-backed digital marketing strategies and state-of-the-art implementations 
              to scale your customer base, enhance visibility, and accelerate recurring revenue.
            </p>
          </div>
          <div className={styles.headerRight}>
            <Link href="/services" className={styles.viewAllBtn}>
              <span>View All Services</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </Link>
          </div>
        </div>

        {/* Restructured Template Services Cards Grid */}
        <div className={styles.grid}>
          {serviceData.slice(0, 3).map((service, index) => {
            const Icon = service.IconEl;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon size={22} className={styles.iconIcon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <Link href={service.link} className={styles.readMoreWrap}>
                    <div className={styles.arrowCircle}>
                      <ArrowRight size={16} className={styles.arrowIcon} />
                    </div>
                    <span className={styles.readMoreText}>Learn more</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
