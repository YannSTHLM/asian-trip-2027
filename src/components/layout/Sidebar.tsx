"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  MapPin,
  Wallet,
  BookOpen,
  Plane,
  Sun,
  Moon,
  GitCompare,
  Settings,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import type { TripRoute } from "../../../trip-config";

const navItems: { href: string; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/itinerary", label: "Itinerary", icon: MapPin },
  { href: "/budget", label: "Budget", icon: Wallet },
  { href: "/notes", label: "Notes", icon: BookOpen },
];

const ROUTE_OPTIONS: { id: TripRoute; label: string; flags: string }[] = [
  { id: "taiwan-philippines", label: "China's Wonders", flags: "🇨🇳🇻🇳🇹🇼" },
  { id: "central-asia", label: "Central Asia", flags: "🇨🇳🇺🇿🇰🇿🇹🇼" },
  { id: "original", label: "Japan", flags: "🇨🇳🇻🇳🇯🇵" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium w-full">
        <div className="h-4 w-4" />
        <span className="text-foreground/70">Toggle theme</span>
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium w-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState<TripRoute | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("activeRoute") as TripRoute | null;
    if (stored) setActiveRoute(stored);
    else setActiveRoute("taiwan-philippines");
  }, []);

  const handleRouteSwitch = (route: TripRoute) => {
    if (route === activeRoute) return;
    localStorage.setItem("activeRoute", route);
    setActiveRoute(route);
    window.location.reload();
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar flex flex-col">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-sidebar-border">
        <Plane className="h-6 w-6 text-accent" />
        <div>
          <h1 className="font-bold text-sm">Karin and Yann Asian Trip</h1>
          <p className="text-xs text-muted">2027</p>
        </div>
      </div>

      {/* Route Switcher — top of nav */}
      <div className="px-3 pt-3 pb-1">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-2 px-1">
          Active Route
        </p>
        <div className="space-y-1">
          {ROUTE_OPTIONS.map((opt) => {
            const isActive = activeRoute === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleRouteSwitch(opt.id)}
                className={cn(
                  "flex items-center gap-3 w-full rounded-xl px-3 py-3 text-sm font-semibold transition-all text-left",
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/30 scale-[1.02] border border-primary"
                    : "text-foreground/60 hover:bg-foreground/10 hover:text-foreground border border-transparent hover:border-foreground/10"
                )}
              >
                <span className="text-xl leading-none">{opt.flags}</span>
                <span className="flex-1 truncate">{opt.label}</span>
                {isActive && <Check className="h-4 w-4 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Compare Routes — top nav item */}
      <div className="px-3 pt-3 pb-1">
        <Link
          href="/compare"
          className={cn(
            "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all border w-full",
            pathname === "/compare"
              ? "bg-accent text-white border-accent shadow-md shadow-accent/30"
              : "bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 hover:border-accent/50 hover:shadow-sm hover:shadow-accent/20"
          )}
        >
          <GitCompare className="h-5 w-5 shrink-0" />
          <span>Compare Routes</span>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-1">
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

      <div className="border-t border-sidebar-border px-3 py-2 space-y-1">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
            pathname === "/settings"
              ? "bg-primary text-white"
              : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
          )}
        >
          <Settings className="h-4 w-4" />
          Trip Settings
        </Link>
        <ThemeToggle />
      </div>
    </aside>
  );
}
