"use client";

import { useState, useCallback, type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import MobileSidebar from "@/components/layout/MobileSidebar";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setMobileMenuOpen(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <Navbar onMenuClick={handleMenuClick} />
      <MobileSidebar open={mobileMenuOpen} onClose={handleMenuClose} />
      <div className="flex-1 p-6 lg:p-8 overflow-auto">{children}</div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "var(--card)",
            color: "var(--foreground)",
            border: "1px solid var(--card-border)",
          },
        }}
      />
    </>
  );
}
