import type { Metadata } from "next";
import styles from "@/styles/faq.module.scss";
import { faqs, getFaqCategories } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about LASIK, cataract surgery, dry eyes, glaucoma, retina care, and eye health at Lakhotia Eye Centre."
};

export default function FAQPage() {
  const categories = getFaqCategories();

  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <span>Questions & Answers</span>
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about LASIK surgery, cataract treatment, dry eyes, glaucoma management, and 
            eye health. If you have additional questions, contact us or schedule a consultation with Dr. Sharad Lakhotia.
          </p>
        </header>

        <div className={styles.faqContainer}>
          {categories.map((category) => (
            <div key={category} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.faqList}>
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <div key={faq.id} className={styles.faqItem}>
                      <details className={styles.details}>
                        <summary className={styles.question}>
                          <span>{faq.question}</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </summary>
                        <div className={styles.answer}>{faq.answer}</div>
                      </details>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2>Still have questions?</h2>
          <p>
            Schedule a consultation with Dr. Sharad Lakhotia to discuss your specific eye care needs and get personalized
            answers to your questions.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
