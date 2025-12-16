import Link from "next/link";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/lib/services";
import styles from "./ServicesOverview.module.scss";

export default function ServicesOverview() {
  const featuredServices = services.filter(
    (service) =>
      service.slug === "cataract-surgery" ||
      service.slug === "lasik-surgery" ||
      service.slug === "glaucoma-clinic"
  );

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.tag}>Our Specialties</span>
            <h2 className={styles.title}>Advanced eye care solutions backed by 36+ years of expertise.</h2>
          </div>
          <Link href="/services" className={styles.viewAll}>
            View all services
          </Link>
        </div>
        <div className={styles.grid}>
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
