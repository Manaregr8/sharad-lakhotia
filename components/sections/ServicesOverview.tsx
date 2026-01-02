import Link from "next/link";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/lib/services";
import styles from "./ServicesOverview.module.scss";

export default function ServicesOverview() {
  const featuredServices = [
    services.find((service) => service.slug === "dry-eye-vision-care"),
    services.find((service) => service.slug === "lasik-surgery"),
    services.find((service) => service.slug === "cataract-surgery"),
    
  ].filter(Boolean);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.tag}>Our Specialties</span>
            <h2 className={styles.title}>Advanced eye care solutions with 20+ different services, backed by 40+ years of expertise.</h2>
          </div>
          <Link href="/services" className={styles.viewAll}>
            View all services
          </Link>
        </div>
        <div className={styles.grid}>
          {featuredServices.map((service) =>
            service ? <ServiceCard key={service.slug} service={service} /> : null
          )}
        </div>
      </div>
    </section>
  );
}
