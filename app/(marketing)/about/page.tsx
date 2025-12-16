import type { Metadata } from "next";
import styles from "@/styles/about.module.scss";

export const metadata: Metadata = {
  title: "About Dr. Sharad Lakhotia",
  description:
    "Meet Dr. Sharad Lakhotia - a pioneer in eye surgery with 36+ years of experience, former DOS President, and leader in advanced cataract and LASIK procedures."
};

export default function AboutPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heroBlock}>
          <div>
            <span>Excellence since 1986</span>
            <h1>Pioneering eye care with precision, compassion, and innovation.</h1>
            <p>
              Lakhotia Eye Centre & Laser Institute, established in 1986 by Dr. Sharad Lakhotia, combines decades of surgical expertise with 
              cutting-edge technology to deliver world-class ophthalmic care. Located in New Delhi with a branch in Faridabad, our commitment to excellence has made us a 
              trusted name in advanced eye surgery across India.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Dr. Sharad Lakhotia</h2>
            <p className={styles.subtitle}>Founder & Chief Ophthalmologist</p>
            <p>
              A pioneer in intraocular implant surgery since 1985, Dr. Lakhotia is a university topper with 36+ years of 
              surgical excellence. Renowned for his expertise in bladeless LASIK, phaco cataract surgery, and premium IOL 
              implantation, he has trained countless surgeons and served as President of DOS 2009-2010.
            </p>
            <ul>
              <li>MBBS, MS Ophthalmology – University Topper</li>
              <li>Pioneer in IOL Implant Surgery (Since 1985)</li>
              <li>President – Duet Ophthalmic Society (2009-2010)</li>
              <li>Vice President – Duet Medical Association</li>
              <li>Chairman – SAARC Ophthalmological Society</li>
            </ul>
          </div>
        </div>

        <div className={styles.grid}>
          <article>
            <h3>Advanced Surgical Expertise</h3>
            <p>
              Specializing in phaco & microphaco cataract surgery with foldable, accommodating, and multifocal IOL options. 
              Our bladeless LASIK procedures use femtosecond laser technology for precision and safety.
            </p>
          </article>
          <article>
            <h3>International Recognition</h3>
            <p>
              Listed among India's Top 10 Best Doctors, recipient of numerous awards including Best Ophthalmologist Award 
              and Eminent Doctors of India Award. Co-author of the Femtosecond Laser textbook.
            </p>
          </article>
          <article>
            <h3>Commitment to Community</h3>
            <p>
              Beyond surgical excellence, Dr. Lakhotia has donated blood 388 times, demonstrating his dedication to saving 
              lives and serving the community with compassion.
            </p>
          </article>
        </div>

        <div className={styles.certifications}>
          <h2>Awards & Honors</h2>
          <ul>
            <li>Top 10 Best Doctors in India (IBC Cambridge, England)</li>
            <li>Best Ophthalmologist Award (2012)</li>
            <li>Gold Medal in Post Graduate Degree</li>
            <li>Eminent Doctors of India Award (2015)</li>
            <li>Co-author – Femtosecond Laser Textbook</li>
            <li>President – Duet Ophthalmic Society (2009-2010)</li>
            <li>Chairman – SAARC Ophthalmological Society</li>
            <li>388 Blood Donations – Life-Saving Commitment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
