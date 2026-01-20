import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import AboutClinic from "@/components/sections/AboutClinic";
import Achievements from "@/components/sections/Achievements";
// import MediaCoverage from "@/components/sections/MediaCoverage";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Testimonials from "@/components/sections/Testimonials";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FeaturedAchievements from "@/components/sections/FeaturedAchievements";
import FeaturedFAQ from "@/components/sections/FeaturedFAQ";
import AppointmentBanner from "@/components/sections/AppointmentBanner";
import BlogSection from "@/components/sections/BlogSection";
import YouTubeSection from "@/components/sections/YouTubeSection";
import InstagramSection from "@/components/sections/InstagramSection";
import BlogSectionSkeleton from "../../components/sections/BlogSectionSkeleton";
import ImageGrid from "@/components/gallery/ImageGrid";
import AchievementPhotoGrid from "@/components/gallery/AchievementPhotoGrid";
import SharadSirImageGrid from "@/components/gallery/SharadSirImageGrid";
import MediaCoverageGrid from "@/components/gallery/MediaCoverageGrid";
import styles from "@/styles/gallery.module.scss";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <AboutClinic />
      <Achievements />
      <div style={{
        background: '#f6fafd',
        border: '1px solid #cbe3f6',
        borderRadius: '10px',
        padding: '1.5rem 1.5rem',
        margin: '2rem auto',
        maxWidth: 700,
        color: '#1d6fb8',
        fontWeight: 500,
        fontSize: '1.1rem',
        boxShadow: '0 2px 8px rgba(29,111,184,0.06)',
textAlign:'center'
      }}>
        Cashless TPA facilities available through affiliated centres.<br />
        All surgical procedures done at affiliated top Hospitals.
      </div>
      {/* <MediaCoverage /> */}
      <ServicesOverview />
      <Testimonials />
      <Suspense fallback={<BlogSectionSkeleton />}>
          <GalleryPreview/>
        <BlogSection />
      </Suspense>
      <YouTubeSection />

     <section className={styles.achievementSection} aria-label="Our achievements"
     style={{padding:"10px 10px"}}>
              <header className={styles.achievementHeader}>
                <span>Our achievements</span>
                <h2>Our Achievements</h2>
                <p>A glimpse of recognitions, moments, and milestones from Lakhotia Eye Centre.</p>
              </header>
              <AchievementPhotoGrid limit={10}/>
              <a className={styles.galleryButton} href="/gallery">View More</a>
           </section>

      <FeaturedFAQ />
      <AppointmentBanner />
            <InstagramSection />
    </>
  );
}
