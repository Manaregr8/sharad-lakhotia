import styles from './MediaCoverageGrid.module.scss';

const mediaImages = [
  "img5.jpg",
  "img10.jpg",
  "img15.jpg",
  "img20.jpg",
  "img25.jpg",
  "img30.jpg",
  "img45.jpg",
  "img50.jpg",
  "img55.jpg",
  "img60.jpg",
  "img65.jpg",
  "img70.jpg"
];

export default function MediaCoverageGrid() {
  return (
    <section className={styles.mediaSection} aria-label="Media Coverage">
      <header className={styles.mediaHeader}>
        <span>Media Coverage</span>
        <h2>Featured over 200+ times in the media</h2>
        <p>Dr. Sharad Lakhotia's work and achievements have been recognized and featured in leading newspapers, magazines, and TV shows.</p>
      </header>
      <div className={styles.grid}>
        {mediaImages.map((img) => (
          <div key={img} className={styles.item}>
            <img
              src={`/media-1/${img}`}
              alt={img}
              className={styles.image}
              width={320}
              height={220}
            />
            {/* No caption for media images */}
          </div>
        ))}
      </div>
    </section>
  );
}
