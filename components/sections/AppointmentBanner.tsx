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
            Schedule your consultation with Dr. Sharad Lakhotia and discover personalized vision solutions backed by 40+ years of surgical excellence.
          </p>
          <div className={styles.actions}>
            <a
              href="https://wa.me/+919312255311?text=Hi,%20I'm%20interested%20in%20booking%20an%20appointment%20at%20Lakhotia%20Eye%20Centre."
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on WhatsApp
            </a>
            <a
              href="https://wa.me/+919312255311?text=Hi,%20I'm%20interested%20in%20your%20services%20at%20Lakhotia%20Eye%20Centre."
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore our services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
