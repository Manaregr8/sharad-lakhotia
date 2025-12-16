import { galleryItems } from "@/lib/gallery";
import styles from "./ImageGrid.module.scss";

interface ImageGridProps {
  limit?: number;
}

export default function ImageGrid({ limit }: ImageGridProps) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.id} className={styles.card}>
          <div className={styles.imageRow}>
            <figure>
              <img src={item.before} alt={`${item.title} before treatment`} loading="lazy" />
              <figcaption>Before</figcaption>
            </figure>
            <figure>
              <img src={item.after} alt={`${item.title} after treatment`} loading="lazy" />
              <figcaption>After</figcaption>
            </figure>
          </div>
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
