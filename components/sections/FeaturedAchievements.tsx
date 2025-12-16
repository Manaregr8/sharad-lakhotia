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
            36+ years of life-changing surgical outcomes and recognition from across India. Explore our achievements gallery.
          </p>
        </header>

        <div className={styles.galleryWrapper}>
          <AchievementPhotoGrid limit={10} />
        </div>

        <div className={styles.cta}>
          <Link href="/gallery" className={styles.ctaButton}>
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
