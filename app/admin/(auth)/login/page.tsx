import type { Metadata } from "next";
import LoginForm from "@/components/forms/LoginForm";
import styles from "@/styles/admin-auth.module.scss";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Sign in securely to manage blogs for the Visionary Eye Clinic website."
};

export default function AdminLoginPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <LoginForm />
      </div>
    </section>
  );
}
