import type { Metadata } from "next";
import styles from "@/styles/privacy.module.scss";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Lakhotia Eye Centre - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heroBlock}>
          <span>Your Privacy Matters</span>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>
            Last Updated: January 28, 2026
          </p>
        </div>

        <div className={styles.content}>
          <article>
            <h2>1. Introduction</h2>
            <p>
              At Lakhotia Eye Centre ("we," "our," or "us"), we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website or use our services.
            </p>
          </article>

          <article>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>
              When you book an appointment, contact us, or use our services, we may collect:
            </p>
            <ul>
              <li>Name, age, and contact details (phone number, email address, postal address)</li>
              <li>Medical history and eye health information</li>
              <li>Insurance and payment information</li>
              <li>Appointment preferences and communication records</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect:
            </p>
            <ul>
              <li>IP address, browser type, and device information</li>
              <li>Pages visited, time spent, and referring URLs</li>
              <li>Cookies and similar tracking technologies (see Cookie Policy below)</li>
            </ul>
          </article>

          <article>
            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide medical services, schedule appointments, and manage patient care</li>
              <li>Communicate appointment reminders, follow-ups, and health updates</li>
              <li>Process payments and maintain billing records</li>
              <li>Improve our website, services, and patient experience</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Send newsletters or promotional content (only with your consent)</li>
            </ul>
          </article>

          <article>
            <h2>4. How We Share Your Information</h2>
            <p>
              We do not sell or rent your personal information. We may share your information with:
            </p>
            <ul>
              <li>
                <strong>Healthcare Providers:</strong> With affiliated hospitals, laboratories, or specialists as necessary for your treatment
              </li>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who assist with appointment scheduling, payment processing, email services, or website analytics
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law, court order, or to protect our rights and safety
              </li>
              <li>
                <strong>Insurance Providers:</strong> For TPA cashless claims and billing purposes (with your consent)
              </li>
            </ul>
          </article>

          <article>
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul>
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure storage and access controls</li>
              <li>Regular security audits and updates</li>
              <li>Staff training on data protection and confidentiality</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </article>

          <article>
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for website functionality (e.g., session management)
              </li>
              <li>
                <strong>Analytics Cookies:</strong> To understand visitor behavior and improve our website
              </li>
              <li>
                <strong>Marketing Cookies:</strong> For personalized content (only with your consent)
              </li>
            </ul>
            <p>
              You can control cookies through your browser settings, but disabling them may affect website functionality.
            </p>
          </article>

          <article>
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of the personal information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements)
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time
              </li>
              <li>
                <strong>Data Portability:</strong> Receive your data in a structured, commonly used format
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at the details provided below.
            </p>
          </article>

          <article>
            <h2>8. Retention of Information</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Medical records are retained in accordance with applicable healthcare regulations.
            </p>
          </article>

          <article>
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (e.g., social media, partner hospitals). We are not responsible for the privacy practices of these external sites. Please review their privacy policies before sharing any information.
            </p>
          </article>

          <article>
            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18 without parental consent. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.
            </p>
          </article>

          <article>
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last Updated" date at the top indicates when the policy was last revised. We encourage you to review this page periodically.
            </p>
          </article>

          <article>
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Lakhotia Eye Centre</strong><br />
                E-342, Greater Kailash, Part-2<br />
                New Delhi - 110048, India
              </p>
              <p>
                <strong>Email:</strong> info@lakhotiaeyecentre.com<br />
                <strong>Phone:</strong> +91 11 2921 1533
              </p>
            </div>
          </article>

          <article>
            <h2>13. Consent</h2>
            <p>
              By using our website or services, you consent to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree, please refrain from using our services.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
