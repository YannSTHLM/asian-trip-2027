"use client";

import { useEffect, useState } from "react";
import { getActiveTripFromRoute, getRouteLabel } from "@/lib/static-data";
import type { StaticTrip, TripRoute } from "@/lib/static-data";
import DashboardContent from "./dashboard-content";

export default function DashboardPage() {
  const [trip, setTrip] = useState<StaticTrip | null>(null);

  useEffect(() => {
    const route = (localStorage.getItem("activeRoute") || "taiwan-philippines") as TripRoute;
    const data = getActiveTripFromRoute(route);
    setTrip(data);
  }, []);

  if (!trip) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-muted">Loading trip data...</p>
      </div>
    );
  }

  return <DashboardContent trip={trip} />;
}
