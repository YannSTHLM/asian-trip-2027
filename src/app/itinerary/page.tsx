"use client";

import { useEffect, useState } from "react";
import { getActiveTripFromRoute } from "@/lib/static-data";
import type { StaticTrip, StaticLeg, TripRoute } from "@/lib/static-data";
import ItineraryContent from "./content";

export default function ItineraryPage() {
  const [legs, setLegs] = useState<StaticLeg[]>([]);

  useEffect(() => {
    const route = (localStorage.getItem("activeRoute") || "taiwan-philippines") as TripRoute;
    const trip = getActiveTripFromRoute(route);
    if (trip) setLegs(trip.legs);
  }, []);

  if (legs.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-muted">Loading itinerary...</p>
      </div>
    );
  }

  return <ItineraryContent legs={legs} />;
}
