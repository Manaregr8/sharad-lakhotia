import styles from "@/styles/home.module.scss";

export default function BlogSectionSkeleton() {
  return (
    <section className={styles.blogSection}>
      <div className="container">
        <header className={styles.blogHeader}>
          <div>
            <span>Insights</span>
            <h2>Latest guidance from our specialists.</h2>
          </div>
        </header>
        <div className={styles.blogGrid}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                background: "#f0f0f0",
                borderRadius: "8px",
                height: "300px",
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
              }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
