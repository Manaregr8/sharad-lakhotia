import type { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AdminNav from "@/components/layout/AdminNav";
import { authOptions } from "@/lib/auth";
import styles from "@/styles/admin-layout.module.scss";

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className={styles.wrapper}>
      <AdminNav />
      <main className={styles.main}>
        <div className="container">{children}</div>
      </main>
    </div>
  );
}
