'use client';

import styles from './Industries.module.css';

const industries = [
  "E-Commerce Brands",
  "Manufacturing & Large Enterprises",
  "Healthcare & Hospitals",
  "Retail, Cafés & Restaurants",
  "Educational Institutions",
  "Service-Based Businesses",
  "FMCG Brands",
  "Multi-Location Businesses"
];

export default function Industries() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Industries We Help Scale</h2>
        <p>
          From startups to enterprises, we deliver tailored strategies that drive measurable growth across industries.
        </p>
      </div>

      <div className={styles.grid}>
        {industries.map((item, index) => (
          <div key={index} className={styles.card}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}