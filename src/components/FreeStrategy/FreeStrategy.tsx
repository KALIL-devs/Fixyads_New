'use client';

import Image from "next/image";
import styles from "./FreeStrategy.module.css";

export default function FreeStrategy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.grid}>

          {/* TEXT BLOCK */}
          <div className={styles.textBlock}>
            <h2 className={styles.title}>
              Receive a <span>Free Digital Marketing Strategy</span>
            </h2>

            <div className={styles.text}>
              <p className={styles.description}>
                In today’s digital era, countless agencies compete for attention.
                At <strong>FixyAds</strong>, we stand out as true game changers.
              </p>

              <p className={styles.description}>
                We craft a fully customized strategy tailored specifically for your 
                business goals. Speak with our experts today and unlock your 
                complimentary growth roadmap.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className={styles.imageWrapper}>
            <Image
              src="/strategy.png"
              alt="Digital Marketing Strategy"
              fill
              className={styles.image}
              // sizes="(max-width: 768px) 100vw,
              //        (max-width: 1200px) 50vw,
              //        500px"
              priority
            />
          </div>

          {/* BUTTON */}
          <button className={styles.button}>
            Get a Free Strategy
          </button>

        </div>

      </div>
    </section>
  );
}