"use client";

import Link from "next/link";
import ContactFormModal from "@/components/forms/ContactFormModal";
import type { Service } from "@/lib/services";
import styles from "./ServiceCard.module.scss";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url(${service.image})` }} aria-hidden="true" />
      <div className={styles.content}>
        <h3>{service.name}</h3>
        <p>{service.shortDescription}</p>
        <ul>
          {service.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link href={`/services/${service.slug}`} className={styles.link}>
            Learn more
          </Link>
          <ContactFormModal />
        </div>
      </div>
    </article>
  );
}
