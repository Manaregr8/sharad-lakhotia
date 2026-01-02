import styles from "./MediaCoverage.module.scss";

export default function MediaCoverage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.mediaBlock}>
          <span className={styles.tag}>Media Coverage</span>
          <h2 className={styles.heading}>Dr. Sharad Lakhotiya in the Media</h2>
          <p className={styles.intro}>
            Dr. Sharad Lakhotiya has been featured extensively in the media for his contributions to ophthalmology. He appeared over <strong>200 times</strong> on the live show <strong>"Hum Honge Kaamiyaab"</strong> on Zee TV—a show dedicated to his journey, expertise, and impact in the field of eye care. The program highlighted his achievements and inspired countless viewers across India.
          </p>
        </div>
      </div>
    </section>
  );
}
