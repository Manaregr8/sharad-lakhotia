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

      <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <span>Success stories</span>
          <h1>40+ years of life-changing surgical outcomes.</h1>
          <p>
            Witness the remarkable results achieved through Dr. Lakhotia's expertise in bladeless LASIK, advanced phaco 
            cataract surgery, and premium IOL implantation. Every transformation tells a story of restored vision.
          </p>
        </header>
        <SharadSirImageGrid />
      </div>
    </section>

      <FeaturedFAQ />
      <AppointmentBanner />
            <InstagramSection />
    </>
  );
}
