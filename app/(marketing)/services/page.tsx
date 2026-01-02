import type { Metadata } from "next";
import ServiceCard from "@/components/cards/ServiceCard";
import ContactFormModal from "@/components/forms/ContactFormModal";
import { services } from "@/lib/services";
import styles from "@/styles/services.module.scss";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore bladeless LASIK, advanced phaco cataract surgery, retina care, and comprehensive eye services at Lakhotia Eye Centre."
};

export default function ServicesPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <span>Our Specialties</span>
          <h1>Comprehensive eye care backed by 40+ years of surgical excellence.</h1>
          <p>
            From advanced bladeless LASIK to premium IOL cataract surgery, Dr. Sharad Lakhotia and his team deliver 
            personalized solutions using cutting-edge technology and decades of expertise.
          </p>
          <ContactFormModal />
        </header>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
