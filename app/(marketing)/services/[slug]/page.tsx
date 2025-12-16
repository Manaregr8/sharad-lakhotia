import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactFormModal from "@/components/forms/ContactFormModal";
import { services } from "@/lib/services";
import styles from "@/styles/service-detail.module.scss";

interface ServiceDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.name,
    description: service.shortDescription
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.textBlock}>
            <span>Specialty spotlight</span>
            <h1>{service.name}</h1>
            <p>{service.longDescription}</p>
            <ContactFormModal />
          </div>
          <div className={styles.image} style={{ backgroundImage: `url(${service.image})` }} aria-hidden="true" />
        </div>
        <div className={styles.highlights}>
          <h2>What to expect</h2>
          <ul>
            {service.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
