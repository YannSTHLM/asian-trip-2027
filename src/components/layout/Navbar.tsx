"use client";

import { usePathname } from "next/navigation";
import { Menu, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/itinerary": "Itinerary",
  "/budget": "Budget",
  "/photos": "Photos",
  "/map": "Map",
  "/notes": "Notes",
  "/compare": "Route Comparison",
  "/settings": "Trip Settings",
};

export default function Navbar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  const pathname = usePathname();

  const title =
    pageTitles[pathname] ||
    (pathname.startsWith("/itinerary/")
      ? "Day Details"
      : pathname.startsWith("/notes/")
      ? "Note"
      : pathname.startsWith("/budget/")
      ? "Budget"
      : "Asian Trip 2027");

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-card-border bg-background px-6 lg:px-8">
      <button
        onClick={onMenuClick}
        className="lg:hidden -ml-2 p-2 rounded-lg hover:bg-foreground/5"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="flex items-center gap-2 lg:hidden">
        <Plane className="h-5 w-5 text-accent" />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
    </header>
  );
}
