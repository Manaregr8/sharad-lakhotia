"use client";

import { useState } from "react";
import styles from "./ContactFormModal.module.scss";
import ContactForm from "./ContactForm";

export default function ContactFormModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className={styles.ctaButton} onClick={openModal}>
        Schedule Consultation
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal} aria-label="Close form">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className={styles.modalHeader}>
              <h2>Schedule Your Consultation</h2>
            </div>
            <ContactForm onSuccess={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
