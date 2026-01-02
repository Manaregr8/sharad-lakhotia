import Link from "next/link";
import styles from "@/styles/not-found.module.scss";

export default function NotFound() {
  return (
    <section className={styles.shell}>
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>
          We couldn't find the page you're looking for. It may have been moved or deleted.
          Let's get you back to finding the eye care you need.
        </p>
        <div style={{ width:'100%',display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent:'center',alignItems:'center' }}>
          <Link href="/" className={styles.backLink}>
            Return home
          </Link>
          <Link href="/services" className={styles.backLink}>
            View services
          </Link>
          <Link href="/contact" className={styles.backLink}>
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
