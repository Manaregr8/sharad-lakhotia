"use client";

import { achievements } from "@/lib/achievements";
import styles from "./Achievements.module.scss";

const categoryIcons = {
  award: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
    </svg>
  ),
  publication: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  certification: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  milestone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M2 7h20M7 2l10 20M17 2L7 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

const categoryLabels = {
  award: "Award",
  publication: "Publication",
  certification: "Certification",
  milestone: "Milestone",
};

export default function Achievements() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            <span>Recognition & Achievements</span>
          </div>
          <h2>Awards, honors & milestones<br />shaping excellence in eye care</h2>
          <p>Dr. Sharad Lakhotiya's dedication to advancing ophthalmology through clinical excellence, research, and community service.</p>
        </div>

        <div className={styles.timeline}>
          {achievements.map((achievement, index) => (
            <article key={achievement.id} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.icon} ${styles[achievement.category]}`}>
                  {categoryIcons[achievement.category]}
                </div>
                <div className={styles.categoryLabel}>
                  {categoryLabels[achievement.category]}
                </div>
              </div>
              
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.year}>{achievement.year}</span>
                  <span className={styles.org}>{achievement.organization}</span>
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>

              <div className={styles.imageWrapper}>
                <img src={achievement.image} alt={achievement.title} loading="lazy" />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.decorLine} />
            </article>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>36+</div>
            <div className={styles.statLabel}>Years of Excellence</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>146</div>
            <div className={styles.statLabel}>Different Services</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>388</div>
            <div className={styles.statLabel}>Blood Donations</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>10000+</div>
            <div className={styles.statLabel}>Satisfied Patients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
