import styles from "./AboutClinic.module.scss";

export default function AboutClinic() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.tag}>About Dr. Sharad Lakhotia</span>
            <h2 className={styles.heading}>Pioneer in eye care excellence since 1986.</h2>
            <p className={styles.intro}>
              Dr. Sharad Lakhotia established Lakhotia Eye Centre & Laser Institute in 1986 after specialized training abroad. 
              A university topper in both graduation and post-graduation, he has been shaping the future of ophthalmology for over 36 years.
            </p>
          </div>
          <div className={styles.points}>
            <article>
              <h3>Advanced Specializations</h3>
              <p>
                Pioneer of intraocular implant surgery since 1985. Specializes in phaco & microphaco for cataract with foldable, 
                accommodating & multifocal IOL implantation. Expert in LASIK & Bladeless LASIK (Femtosecond Laser).
              </p>
            </article>
            <article>
              <h3>International Recognition</h3>
              <p>
                Faculty member at national & international conferences for 36+ years. Joint author of world's finest book on 
                Femtosecond laser with international faculty. Editor of Ophthalmology Today from Asia's largest medical publication house.
              </p>
            </article>
            <article>
              <h3>Leadership & Service</h3>
              <p>
                President of Delhi Ophthalmological Society (2009-2010), Vice President of Delhi Medical Association (2001-2002), 
                and Chairman International Relations of SAARC Academy of Ophthalmology. Currently President of Eye Care Awareness Foundation.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
