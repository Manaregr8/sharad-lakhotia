"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.scss";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>Lakhotia</span>
            <span className={styles.brandSub}>Eye Centre</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary navigation">
            <button
              className={styles.mobileToggle}
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>

            <ul className={open ? styles.navListOpen : styles.navList}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? styles.activeLink : styles.link}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className={styles.ctaWrapper}>
                <Link href="/contact" className={styles.ctaButton}>
                  Book appointment
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
