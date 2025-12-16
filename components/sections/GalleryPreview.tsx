"use client";

import Link from "next/link";
import { useState } from "react";
import { galleryItems } from "@/lib/gallery";
import styles from "./GalleryPreview.module.scss";

export default function GalleryPreview() {
  const [activeSlider, setActiveSlider] = useState<Record<string, number>>({});

  const handleSliderChange = (itemId: string, value: number) => {
    setActiveSlider(prev => ({ ...prev, [itemId]: value }));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.badge}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <span>Transformations</span>
            </div>
          <h2>Witness the transformation<br />Real patients, real results</h2>
          <p>See the life-changing outcomes achieved through Dr. Lakhotia's expertise and cutting-edge surgical techniques.</p>
          </div>
          <Link href="/gallery" className={styles.viewAll}>
            <span>View full gallery</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        <div className={styles.gallery}>
          {galleryItems.slice(0, 3).map((item) => {
            const sliderValue = activeSlider[item.id] ?? 50;
            
            return (
              <article key={item.id} className={styles.card}>
                <div className={styles.comparison}>
                  <div className={styles.imageWrapper}>
                    <img 
                      src={item.before} 
                      alt={`${item.title} before`}
                      className={styles.beforeImage}
                    />
                    <div 
                      className={styles.afterWrapper}
                      style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                    >
                      <img 
                        src={item.after} 
                        alt={`${item.title} after`}
                        className={styles.afterImage}
                      />
                    </div>
                    
                    <div 
                      className={styles.slider}
                      style={{ left: `${sliderValue}%` }}
                    >
                      <div className={styles.sliderLine} />
                      <div className={styles.sliderHandle}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M15 18l-6-6 6-6"/>
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </div>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                      className={styles.rangeInput}
                    />

                    <div className={styles.labels}>
                      <span className={styles.labelBefore}>Before</span>
                      <span className={styles.labelAfter}>After</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
