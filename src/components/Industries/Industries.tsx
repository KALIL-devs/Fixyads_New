'use client';

import styles from './Industries.module.css';
import {
  FaShoppingCart,
  FaIndustry,
  FaHospital,
  FaUtensils,
  FaGraduationCap,
  FaBriefcase,
  FaBoxOpen,
  FaMapMarkedAlt
} from "react-icons/fa";

const industries = [
  { name: "E-Commerce Brands", icon: <FaShoppingCart /> },
  { name: "Manufacturing & Large Enterprises", icon: <FaIndustry /> },
  { name: "Healthcare & Hospitals", icon: <FaHospital /> },
  { name: "Retail, Cafés & Restaurants", icon: <FaUtensils /> },
  { name: "Educational Institutions", icon: <FaGraduationCap /> },
  { name: "Service-Based Businesses", icon: <FaBriefcase /> },
  { name: "FMCG Brands", icon: <FaBoxOpen /> },
  { name: "Multi-Location Businesses", icon: <FaMapMarkedAlt /> }
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
            <div className={styles.icon}>{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}