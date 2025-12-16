import { achievementPhotos } from "@/lib/achievementPhotos";
import styles from "./AchievementPhotoGrid.module.scss";

interface AchievementPhotoGridProps {
  limit?: number;
}

export default function AchievementPhotoGrid({ limit }: AchievementPhotoGridProps) {
  const photos = limit ? achievementPhotos.slice(0, limit) : achievementPhotos;

  return (
    <div className={styles.grid}>
      {photos.map((photo) => (
        <div key={photo.src} className={styles.card}>
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" width={500} height={500} />
        </div>
      ))}
    </div>
  );
}
