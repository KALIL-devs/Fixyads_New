'use client';

import styles from './HowWeWork.module.css';

export default function HowWeWork() {
  return (
    <section className={styles.wrapper}>

      <div className={styles.container}>
        {/* Left Image */}
        <div>
          <h2 className={styles.title}><span style={{color: 'white'}}>How We Work</span></h2>
          <div className={styles.imageWrapper}>
            <img
              src="/Banner/banner.png"
              alt="How FixyAds works"
              className={styles.image}
            />
          </div>
        </div>


        {/* Steps */}
        <div className={styles.timeline}>
          <div className={styles.step}>
            <div className={styles.circle}>01</div>
            <div className={styles.content}>
              {/* <span className={styles.stepNo}>01</span> */}
              <h3>Understand</h3>
              <p>We begin with a deep exploration of your business objectives, audience behavior, market dynamics, and existing digital gaps. This research-led approach gives us a strategic understanding of your opportunities and challenges.</p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.circle}>02</div>
            <div className={styles.content}>
              {/* <span className={styles.stepNo}>02</span> */}
              <h3>Strategize</h3>
              <p>Our focus is to craft a clear and purposeful roadmap for sustainable digital growth. Based on these insights, we design a digital marketing plan aligned with your brand vision and commercial goals.</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.circle}>03</div>
            <div className={styles.content}>
              {/* <span className={styles.stepNo}>03</span> */}
              <h3>Deliver Results</h3>
              <p>We bring the strategy to life through precise execution and continuous performance tracking. Every action is refined to maximize impact and deliver measurable, long-term results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
