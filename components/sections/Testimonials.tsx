"use client";

import { testimonials } from "@/lib/testimonials";
import styles from "./Testimonials.module.scss";
import ContactFormModal from "@/components/forms/ContactFormModal";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Life-changing results,<br />told by real patients</h2>
          <p>Discover how our expert care has transformed vision and lives across our community.</p>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quote}>"{testimonial.quote.substring(0, 140)}..."</div>
              <div className={styles.patientInfo}>
                <div className={styles.name}>{testimonial.patient}</div>
                <div className={styles.treatment}>{testimonial.treatment}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <ContactFormModal />
        </div>
      </div>
    </section>
  );
}
