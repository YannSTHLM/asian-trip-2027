"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MapPin,
  Wallet,
  Image,
  Map,
  BookOpen,
  Plane,
  GitCompare,
  Settings,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/itinerary", label: "Itinerary", icon: MapPin },
  { href: "/budget", label: "Budget", icon: Wallet },
  { href: "/photos", label: "Photos", icon: Image },
  { href: "/map", label: "Map", icon: Map },
  { href: "/notes", label: "Notes", icon: BookOpen },
  { href: "/compare", label: "Compare Routes", icon: GitCompare },
  { href: "/settings", label: "Trip Settings", icon: Settings },
];

export default function MobileSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <aside className="absolute left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-sidebar-border">
          <span className="font-bold text-sm">Asian Trip 2027</span>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-foreground/5">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
