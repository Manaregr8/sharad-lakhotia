import type { Metadata } from "next";
import styles from "@/styles/about.module.scss";

export const metadata: Metadata = {
  title: "About Dr. Sharad Lakhotia",
  description:
    "Meet Dr. Sharad Lakhotia - a pioneer in eye surgery with 40+ years of experience, former DOS President, and leader in advanced cataract and LASIK procedures."
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
              cutting-edge technology to deliver world-class Ophthalmological care. Located in Greater Kailash 2 with a branch in Faridabad, our commitment to excellence has made us a 
              trusted name in advanced eye surgery across India.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Dr. Sharad Lakhotia</h2>
            <p className={styles.subtitle}>Founder & Chief Ophthalmologist</p>
            <p>
              A pioneer in intraocular implant surgery since 1985, Dr. Lakhotia is a university topper with 40+ years of 
              surgical excellence. Renowned for his expertise in bladeless LASIK, phaco cataract surgery, and premium IOL 
              implantation, he has trained countless surgeons and served as President of DOS 2009-2010.
            </p>
            <ul>
              <li>MBBS, MS Ophthalmology – University Topper</li>
              <li>Pioneer in IOL Implant Surgery (Since 1985)</li>
              <li>President – Delhi Ophthalmological Society (2009-2010)</li>
              <li>Vice President – Delhi Medical Association</li>
              <li>Chairman, International Relations – SAARC Academy of Ophthalmology</li>
            <li>
        Chairman, Judge and Faculty speaker at national and international conferences for 40 years
            </li>
            </ul>
          </div>
        </div>

        <div className={styles.grid}>
          <article>
            <h3>Advanced Surgical Expertise</h3>
            <p>
              Pioneer of intraocular implant surgery since 1985. Specializes in Phaco, Microphaco and Femtosecond Laser assisted cataract surgery with foldable, monocular, toric, accommodating, Edof & multifocal IOL implantation. Expert in LASIK & Bladeless LASIK (Femtosecond Laser).
            </p>
          </article>
          <article>
            <h3>International Recognition</h3>
            <p>
              Faculty member at national & international conferences for 40+ years. Joint Editor of world's finest book on Femtosecond laser with international faculty. Editor of Ophthalmology Today from Asia's largest medical publication house.
            </p>
          </article>
          <article>
            <h3>Leadership & Service</h3>
            <p>
              President of Delhi Ophthalmological Society (2009-2010), Vice President of Delhi Medical Association (2001-2002), and Chairman International Relations of SAARC Academy of Ophthalmology. Currently President of Eye Care Awareness Foundation(regd) and Delhi Medical and Dental Society.
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
            <li>Joint Editor – Femtosecond Laser Textbook</li>
            <li>President – Delhi Ophthalmological Society (2009-2010)</li>
            <li>Chairman, International Relations – SAARC Academy of Ophthalmology</li>
<li>
        Chairman, Judge and Faculty speaker at national and international conferences for 40 years
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
