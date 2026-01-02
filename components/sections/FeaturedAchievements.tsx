import Link from "next/link";
import styles from "./FeaturedAchievements.module.scss";
import AchievementPhotoGrid from "@/components/gallery/AchievementPhotoGrid";

export default function FeaturedAchievements() {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <span>Our Work</span>
          <h2>Moments of excellence and success.</h2>
          <p>
            40+ years of life-changing surgical outcomes and recognition from across India. Explore our achievements gallery.
          </p>
        </header>

        <div className={styles.galleryWrapper}>
          <AchievementPhotoGrid limit={10} />
        </div>

        <div className={styles.cta}>
          <a
            href="https://wa.me/+919312255311?text=Hi,%20I%20want%20to%20see%20the%20full%20gallery%20of%20achievements%20at%20Lakhotia%20Eye%20Centre."
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Gallery on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
