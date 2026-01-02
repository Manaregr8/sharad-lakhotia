"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Hero.module.scss";
import ContactFormModal from "@/components/forms/ContactFormModal";

export default function Hero() {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className={styles.tag}>Advanced Ophthalmology Center</span>
          <h1>
            Excellence in eye care
            <br />
            since 1986.
          </h1>
          <p>
            Lakhotia Eye Centre & Laser Institute combines 40 years of surgical expertise with cutting-edge technology. 
            Led by Dr. Sharad Lakhotia, we deliver world-class LASIK, SMILE, ICL to premium cataract surgery and comprehensive eye care.
          </p>
          <div className={styles.actions}>
            <ContactFormModal />
            <Link href="/services" className={styles.secondaryCta}>
              Explore services
            </Link>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.visualCard}>
            <Image
              src="/images/siteImages/banner-image-eye.jpg"
              alt="Optometrist examining patient"
              width={640}
              height={760}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
