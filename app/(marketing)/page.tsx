import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import AboutClinic from "@/components/sections/AboutClinic";
import Achievements from "@/components/sections/Achievements";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Testimonials from "@/components/sections/Testimonials";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FeaturedAchievements from "@/components/sections/FeaturedAchievements";
import FeaturedFAQ from "@/components/sections/FeaturedFAQ";
import AppointmentBanner from "@/components/sections/AppointmentBanner";
import BlogSection from "@/components/sections/BlogSection";
import BlogSectionSkeleton from "../../components/sections/BlogSectionSkeleton";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <AboutClinic />
      <Achievements />
      <ServicesOverview />
      <Testimonials />
      <Suspense fallback={<BlogSectionSkeleton />}>
        <BlogSection />
      </Suspense>
      <GalleryPreview />
      <FeaturedAchievements />
      <FeaturedFAQ />
      <AppointmentBanner />
    </>
  );
}
