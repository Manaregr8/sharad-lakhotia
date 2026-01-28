import Link from "next/link";
import styles from "./Footer.module.scss";

const footerLinks = [
  {
    title: "Services",
    items: [
      { label: "Bladeless LASIK", href: "/services/lasik-surgery" },
      { label: "Cataract Surgery", href: "/services/cataract-surgery" },
      { label: "Retina Care", href: "/services/retina-clinic" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Clinic",
    items: [
      { label: "About Dr. Lakhotia", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Book Appointment", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h4 className={styles.logo}>Lakhotia Eye Centre</h4>
            <p className={styles.tagline}>
              Excellence in eye care since 1986. Led by Dr. Sharad Lakhotia, delivering world-class ophthalmic solutions with cutting-edge technology.
            </p>
            <p className={styles.hours}>
              <strong>Clinic Hours:</strong>
              <br />
              Mon - Sat: 9:00 AM – 6:00 PM
              <br />
              Sunday: By appointment
            </p>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h5 className={styles.heading}>{column.title}</h5>
              <ul className={styles.list}>
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h5 className={styles.heading}>Visit Us</h5>
            <address className={styles.address}>
              E-342, Greater Kailash, Part-2
              <br />
              New Delhi - 110048
              <br />
              India
              <br />
              <br />
              <strong>Branch:</strong> Faridabad
            </address>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} Lakhotia Eye Centre. All rights reserved.</span>
          <div>
            <Link href="/">Home</Link>
            <span> • </span>
            <Link href="/about">About</Link>
            <span> • </span>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
