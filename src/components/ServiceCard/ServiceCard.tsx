'use client';

import Link from 'next/link';
import styles from './ServiceCard.module.css';

import {
  Search,
  Megaphone,
  Palette,
  Globe,
  MessageCircle,
  BarChart,
  Handshake,
  Star,
  Code
} from "lucide-react";

/* ✅ ICON MAP */
const iconMap = {
  Search,
  Megaphone,
  Palette,
  Globe,
  MessageCircle,
  BarChart,
  Handshake,
  Star,
  Code,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap; // ✅ strict typing
  link: string;
}

export type IconName = keyof typeof iconMap;

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  const Icon = iconMap[icon]; // ✅ convert string → component

  return (
    <Link href={link} className={styles.card} aria-label={`View ${title}`}>
      
      {/* Icon */}
      <div className={styles.iconWrapper}>
        {Icon && <Icon className={styles.icon} />}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Arrow */}
      <div className={styles.arrowBtn}>↗</div>
    </Link>
  );
};

export default ServiceCard;