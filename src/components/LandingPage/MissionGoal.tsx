'use client';

import React from 'react';
import Link from 'next/link';
import { BarChart3 } from 'lucide-react';
import styles from './MissionGoal.module.css';

const MissionGoal = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left: Content */}
        <div className={styles.contentCol}>
          <span className={styles.eyebrow}>Our Mission &amp; Goal</span>
          <h2 className={styles.title}>
            Realize Your Business <br />Goals For More Profit
          </h2>
          <p className={styles.body}>
            We design and execute results-oriented digital campaigns that help companies enhance 
            user acquisition, optimize media spend, and build consistent revenue scaling at every stage.
          </p>
          <p className={styles.body}>
            Whether you want to build search dominance through organic SEO, boost engagement through 
            content strategy, or build direct attribution sales through paid social, we supply the 
            technical capabilities to drive your success.
          </p>
          <Link href="/services" className={styles.btn}>
            Learn More
          </Link>
        </div>

        {/* Right: Image with floaters */}
        <div className={styles.imageCol}>
          <div className={styles.bgRing}></div>
          <div className={styles.bgRingInner}></div>

          <div className={styles.modelWrapper}>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
              alt="FixyAds Mission Expert"
              className={styles.modelImage}
            />

            {/* Floater 1: Project Done */}
            <div className={styles.floaterLeft}>
              <div className={styles.floaterLeftIcon}>✓</div>
              <div className={styles.floaterLeftInfo}>
                <span className={styles.floaterLeftLabel}>Project Done</span>
                <span className={styles.floaterLeftValue}>4,875+</span>
              </div>
            </div>

            {/* Floater 2: Analytics Chart */}
            <div className={styles.floaterChart}>
              <div className={styles.chartHeader}>
                <div className={styles.chartIconWrap}><BarChart3 size={14} /></div>
                <span className={styles.chartTitle}>ROI Analytics</span>
              </div>
              <div className={styles.chartBars}>
                <div className={styles.bar} style={{ height: '35%' }}></div>
                <div className={styles.bar} style={{ height: '50%' }}></div>
                <div className={`${styles.bar} ${styles.barOrangeLow}`} style={{ height: '75%' }}></div>
                <div className={`${styles.bar} ${styles.barOrange}`} style={{ height: '95%' }}></div>
              </div>
            </div>

            {/* Floater 3: Support Team */}
            <div className={styles.floaterTeam}>
              <div className={styles.miniAvatars}>
                {['aruna', 'selva'].map((img, i) => (
                  <div key={i} className={styles.miniAvatar}>
                    <img
                      src={`/Team/${img}.png`}
                      alt="Expert"
                      className={styles.miniAvatarImg}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://i.pravatar.cc/100?img=${i + 15}`;
                      }}
                    />
                  </div>
                ))}
              </div>
              <span className={styles.teamLabel}>24/7 Support</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionGoal;
