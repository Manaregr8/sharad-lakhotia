"use client";

import Link from "next/link";
import styles from "./FeaturedFAQ.module.scss";
import { faqs } from "@/lib/faqs";
import ContactFormModal from "@/components/forms/ContactFormModal";

export default function FeaturedFAQ() {
  // Select 6 most common FAQs - 2 per category
  const featuredFaqs = [
    faqs[0], // LASIK candidacy
    faqs[2], // LASIK vs blade-free
    faqs[1], // Cataract what is it
    faqs[3], // Cataract recovery
    faqs[8], // Glaucoma what is it
    faqs[12] // Retina diabetic retinopathy
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <span>Common Questions</span>
          <h2>Answers to questions you might have.</h2>
          <p>
            Get quick answers to the most common questions about LASIK, cataract surgery, glaucoma, and eye health.
          </p>
        </header>

        <div className={styles.faqGrid}>
          {featuredFaqs.map((faq) => (
            <div key={faq.id} className={styles.faqCard}>
              <h3>{faq.question}</h3>
              <p>{faq.answer.substring(0, 120)}...</p>
              <span className={styles.category}>{faq.category}</span>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://wa.me/+919312255311?text=Hi,%20I%20have%20a%20question%20about%20eye%20care%20at%20Lakhotia%20Eye%20Centre."
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask on WhatsApp
          </a>
          <a
            href="/faq"
            className={styles.ctaButton}

            rel="noopener noreferrer"
          >
            View all FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
