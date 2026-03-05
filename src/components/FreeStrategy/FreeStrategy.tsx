import Image from "next/image";
import styles from "./FreeStrategy.module.css";

export default function FreeStrategy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            Receive a <span>Free Digital Marketing Strategy</span>
          </h2>

          <p className={styles.description}>
            In today’s digital era, countless agencies compete for attention.
            At <strong>FixyAds</strong>, we stand out as true game changers.
          </p>

          <p className={styles.description}>
            We craft a fully customized strategy tailored specifically for your 
            business goals. Speak with our experts today and unlock your 
            complimentary growth roadmap.
          </p>

          <button className="btn btn-primary" style={{maxWidth: '200px', padding: '10px'}}>
            Get a Free Strategy
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrapper}>
          <Image
            src="/strategy.png"
            alt="Digital Marketing Strategy"
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            className={styles.image}
            priority
          />
        </div>

      </div>
    </section>
  );
}