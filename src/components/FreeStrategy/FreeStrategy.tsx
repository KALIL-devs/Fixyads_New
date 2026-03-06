'use client';

import Image from "next/image";
import Link from "next/link";
import Styles from "./FreeStrategy.module.css";

export default function FreeStrategy() {
  return (
      <section className={Styles.seoHero}>
        <div className={Styles.seoHeroGrid}>
          <div className={Styles.seoHeroContent}>
            <h2>Receive a <strong>Free Digital Marketing Strategy</strong></h2>
            <p>
              In today’s digital era, countless agencies compete for attention.
              At <strong>FixyAds</strong>, we stand out as true game changers.
			  We craft a fully customized strategy tailored specifically for your 
              business goals. Speak with our experts today and unlock your 
              complimentary growth roadmap. 
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get Free Strategy
            </Link>
          </div>

          {/* Image */}
          <div className={Styles.seoHeroImage}>
            <Image
              src="/strategy.png"
              alt="Digital Marketing Strategy"
              fill
              priority
            />
          </div>
        </div>
      </section>
  );
}