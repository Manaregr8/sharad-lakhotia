import styles from "@/styles/instagram.module.scss";

export default function InstagramSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <div>
            <span>Instagram</span>
            <h2>Latest moments from the clinic.</h2>
            <p>Behind-the-scenes, patient journeys, and everyday eye-care reminders.</p>
          </div>
          <a
            className={styles.profileLink}
            href="https://www.instagram.com/sharadlakhotia/"
            target="_blank"
            rel="noreferrer"
          >
            View profile
          </a>
        </header>

        <div className={styles.embedWrapper}>
          <iframe
            src="https://widgets.sociablekit.com/instagram-feed/iframe/25634346"
            title="Instagram feed"
            frameBorder="0"
            loading="lazy"
            allow="clipboard-write"
            className={styles.embed}
          />
        </div>
      </div>
    </section>
  );
}
