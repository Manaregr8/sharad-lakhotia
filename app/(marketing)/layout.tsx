import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="marketing-shell">
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
