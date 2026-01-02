import { formatBlogDate } from "@/lib/utils";
import styles from "@/styles/youtube.module.scss";

type YouTubeVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
};

async function fetchLatestVideos(): Promise<{ videos: YouTubeVideo[]; errored: boolean }> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    console.error("[YouTubeSection] Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID env vars");
    return { videos: [], errored: true };
  }

  try {
    const params = new URLSearchParams({
      key: apiKey,
      channelId,
      part: "snippet",
      order: "date",
      maxResults: "4",
      type: "video"
    });

    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params.toString()}`, {
      // cache softly to reduce API calls; still updates regularly
      next: { revalidate: 900 }
    });

    if (!response.ok) {
      console.error("[YouTubeSection] Unexpected response when loading videos", response.statusText);
      return { videos: [], errored: true };
    }

    const data = (await response.json()) as {
      items?: Array<{
        id?: { videoId?: string };
        snippet?: {
          title?: string;
          publishedAt?: string;
          thumbnails?: {
            high?: { url?: string };
            medium?: { url?: string };
          };
        };
      }>;
    };

    const videos = (data.items ?? [])
      .map((item) => {
        const id = item.id?.videoId;
        const snippet = item.snippet;

        if (!id || !snippet?.title || !snippet?.publishedAt) {
          return null;
        }

        const thumbnail =
          snippet.thumbnails?.high?.url ??
          snippet.thumbnails?.medium?.url ??
          "https://i.ytimg.com/img/no_thumbnail.jpg";

        return {
          id,
          title: snippet.title,
          publishedAt: snippet.publishedAt,
          thumbnail,
          url: `https://www.youtube.com/watch?v=${id}`
        } satisfies YouTubeVideo;
      })
      .filter(Boolean) as YouTubeVideo[];

    const sorted = videos.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return { videos: sorted.slice(0, 4), errored: false };
  } catch (error) {
    console.error("[YouTubeSection] Failed to load videos", error);
    return { videos: [], errored: true };
  }
}

export default async function YouTubeSection() {
  const { videos, errored } = await fetchLatestVideos();

  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <div>
            <span>Video highlights</span>
            <h2>Latest from our YouTube channel.</h2>
            <p>Quick takes on treatments, recovery timelines, and eye-care tips delivered in under a few minutes.</p>
          </div>
          <a
            className={styles.channelLink}
            href="https://www.youtube.com/@sharadlakhotia73"
            target="_blank"
            rel="noreferrer"
          >
            View channel
          </a>
        </header>

        {videos.length > 0 ? (
          <div className={styles.grid}>
            {videos.map((video) => (
              <a key={video.id} className={styles.card} href={video.url} target="_blank" rel="noreferrer">
                <div
                  className={styles.thumb}
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.6)), url(${video.thumbnail})` }}
                  aria-hidden="true"
                >
                  <span className={styles.badge}>Watch now</span>
                </div>
                <div className={styles.body}>
                  <p className={styles.date}>{formatBlogDate(video.publishedAt)}</p>
                  <h3>{video.title}</h3>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>
            {errored
              ? "We couldn’t load YouTube right now. Check your API key and channel ID."
              : "Videos coming soon—stay tuned."}
          </p>
        )}
      </div>
    </section>
  );
}
