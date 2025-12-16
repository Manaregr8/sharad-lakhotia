"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import styles from "./AdminNav.module.scss";

export default function AdminNav() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/admin/blogs" className={styles.logo}>
            Visionary Admin
          </Link>
          <nav className={styles.nav} aria-label="Admin navigation">
            <Link href="/admin/blogs">Blogs</Link>
            <button type="button" onClick={() => signOut({ callbackUrl: "/" })}>
              Sign out
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
