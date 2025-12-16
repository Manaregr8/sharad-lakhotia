import type { Metadata } from "next";
import ImageGrid from "@/components/gallery/ImageGrid";
import AchievementPhotoGrid from "@/components/gallery/AchievementPhotoGrid";
import styles from "@/styles/gallery.module.scss";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Before and after results from bladeless LASIK, phaco cataract surgery, and premium IOL implants at Lakhotia Eye Centre."
};

export default function GalleryPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <span>Success stories</span>
          <h1>36+ years of life-changing surgical outcomes.</h1>
          <p>
            Witness the remarkable results achieved through Dr. Lakhotia's expertise in bladeless LASIK, advanced phaco 
            cataract surgery, and premium IOL implantation. Every transformation tells a story of restored vision.
          </p>
        </header>
        {/* <ImageGrid /> */}

        <section className={styles.achievementSection} aria-label="Our achievements">
          <header className={styles.achievementHeader}>
            <span>Our achievements</span>
            <h2>Our Achievements</h2>
            <p>A glimpse of recognitions, moments, and milestones from Lakhotia Eye Centre.</p>
          </header>
          <AchievementPhotoGrid />
        </section>
      </div>
    </section>
  );
}
