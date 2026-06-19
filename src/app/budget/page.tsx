"use client";

import { useEffect, useState } from "react";
import { getActiveTripFromRoute } from "@/lib/static-data";
import type { StaticTrip, StaticExpense, StaticLeg, TripRoute } from "@/lib/static-data";
import BudgetContent from "./content";

export default function BudgetPage() {
  const [data, setData] = useState<{ expenses: StaticExpense[]; legs: StaticLeg[]; countries: string[] } | null>(null);

  useEffect(() => {
    const route = (localStorage.getItem("activeRoute") || "taiwan-philippines") as TripRoute;
    const trip = getActiveTripFromRoute(route);
    if (trip) {
      setData({
        expenses: trip.expenses,
        legs: trip.legs,
        countries: JSON.parse(trip.countries),
      });
    }
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-muted">Loading budget data...</p>
      </div>
    );
  }

  return (
    <BudgetContent
      expenses={data.expenses}
      legs={data.legs}
      countries={data.countries}
    />
  );
}
