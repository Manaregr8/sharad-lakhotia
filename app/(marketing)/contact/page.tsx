import type { Metadata } from "next";
import styles from "@/styles/contact.module.scss";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Lakhotia Eye Centre for appointments, consultations with Dr. Sharad Lakhotia, or questions about your eye health."
};

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <span>Get in touch</span>
          <h1>Schedule your consultation with Dr. Sharad Lakhotia.</h1>
          <p>
            Book an appointment for comprehensive eye evaluation, LASIK consultation, or advanced cataract surgery. 
            Our team will respond promptly to discuss your vision needs.
          </p>
        </header>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2>Visit us</h2>
            <p>
              <strong>Lakhotia Eye Centre & Laser Institute</strong>
              <br />
              E-342, Greater Kailash, Part-2
              <br />
              New Delhi - 110048
              <br />
              India
            </p>
            <div className={styles.contactDetails}>
              <dl>
                <dt>Mobile</dt>
                <dd>
                  <a href="tel:+919312255311">+91-9312255311</a>
                  <br />
                  <a href="tel:+919810236265">+91-9810236265</a>
                  <br />
                  <a href="tel:+919667630845">+91-9667630845</a>
                </dd>
              </dl>
              <dl>
                <dt>Phone</dt>
                <dd><a href="tel:+911143068079">011-43068079</a></dd>
              </dl>
              <dl>
                <dt>Email</dt>
                <dd><a href="mailto:drlakhotia@gmail.com">drlakhotia@gmail.com</a></dd>
              </dl>
              <dl>
                <dt>Website</dt>
                <dd>
                  <a href="https://www.drsharadlakhotia.com" target="_blank" rel="noopener noreferrer">www.drsharadlakhotia.com</a>
                  <br />
                  <a href="https://www.ecaf.in" target="_blank" rel="noopener noreferrer">www.ecaf.in</a>
                </dd>
              </dl>
            </div>
            <div className={styles.branch}>
              <h3>Branch</h3>
              <p>
                C-4, Main Market, Sector-37
                <br />
                Faridabad
              </p>
            </div>
            <div className={styles.hours}>
              <h3>Clinic hours</h3>
              <p>
                Monday – Saturday: 9:00 AM – 6:00 PM
                <br />
                Sunday: By appointment only
              </p>
            </div>
            <div className={styles.mapWrapper}>
              <iframe
                title="Lakhotia Eye Centre location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.2!3d28.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzEyLjAiTiA3N8KwMTInMDAwIkU!5e0!3m2!1sen!2sin!4v1704986400000"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
