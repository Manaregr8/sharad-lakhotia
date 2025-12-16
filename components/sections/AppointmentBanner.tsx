"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./AppointmentBanner.module.scss";
import ContactFormModal from "@/components/forms/ContactFormModal";

export default function AppointmentBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.shell}>
          <h2>Experience world-class eye care today</h2>
          <p>
            Schedule your consultation with Dr. Sharad Lakhotia and discover personalized vision solutions backed by 36+ years of surgical excellence.
          </p>
          <div className={styles.actions}>
            <ContactFormModal />
            <Link href="/services" className={styles.secondary}>
              Explore our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
