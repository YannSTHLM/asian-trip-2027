"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ROUTE_COMPARISONS, getOptimalDates, getLegSchedule, type TripRoute } from "../../../trip-config";
import toast from "react-hot-toast";

export default function SettingsPage() {
  const [route, setRoute] = useState<TripRoute>("taiwan-philippines");
  const [travelers, setTravelers] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("activeRoute") as TripRoute | null;
    if (stored) setRoute(stored);
    setLoading(false);
  }, []);

  const handleSave = () => {
    localStorage.setItem("activeRoute", route);
    toast.success("Route saved! Switch pages to see the updated trip.");
  };

  const selectedRoute = ROUTE_COMPARISONS.find((r) => r.id === route);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold">Trip Settings</h1>
        <p className="text-muted text-sm mt-1">
          Configure your trip route and traveler count
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Route</CardTitle>
        </CardHeader>
        <div className="space-y-3">
          {ROUTE_COMPARISONS.map((r) => (
            <button
              key={r.id}
              onClick={() => setRoute(r.id)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                route === r.id
                  ? "border-primary bg-primary/5"
                  : "border-card-border hover:border-foreground/20"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg mb-1">{r.flagEmojis}</div>
                  <h3 className="font-semibold">{r.label}</h3>
                  <p className="text-sm text-muted mt-1">{r.description}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {r.countries.map((c) => (
                      <Badge key={c} variant="default">{c}</Badge>
                    ))}
                  </div>
                </div>
                {route === r.id && (
                  <Badge variant="success">Selected</Badge>
                )}
              </div>
            </button>
          ))}
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Travelers</CardTitle>
        </CardHeader>
        <div className="flex items-center gap-4">
          {[1, 2].map((n) => (
            <button
              key={n}
              onClick={() => setTravelers(n)}
              className={`flex-1 p-4 rounded-xl border-2 text-center transition-all ${
                travelers === n
                  ? "border-primary bg-primary/5"
                  : "border-card-border hover:border-foreground/20"
              }`}
            >
              <span className="text-2xl font-bold">{n}</span>
              <p className="text-sm text-muted mt-1">
                {n === 1 ? "Traveler" : "Travelers"}
              </p>
            </button>
          ))}
        </div>
      </Card>

      {selectedRoute && (() => {
        const dates = getOptimalDates(selectedRoute.id);
        const schedule = getLegSchedule(selectedRoute.id);
        const fmt = (d: string) => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short" });
        return (
          <Card variant="compact">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted">Estimated budget</p>
                <p className="text-lg font-bold">
                  {new Intl.NumberFormat("sv-SE", {
                    style: "currency",
                    currency: "SEK",
                    maximumFractionDigits: 0,
                  }).format(selectedRoute.budgetSEK * (travelers / 2))}
                </p>
                <p className="text-xs text-muted">
                  Based on {travelers} travelers &times; {selectedRoute.totalDays} days
                </p>
              </div>
              <Button onClick={handleSave}>Save Settings</Button>
            </div>
            <div className="mt-3 pt-3 border-t border-card-border">
              <p className="text-xs text-muted mb-2">Optimized timing for this route:</p>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="info">{fmt(dates.startDate)}</Badge>
                <span className="text-xs text-muted">→</span>
                <Badge variant="info">{fmt(dates.endDate)}</Badge>
                <span className="text-xs text-muted ml-2">{selectedRoute.totalDays} days</span>
              </div>
              {schedule.length > 0 && (
                <div className="flex h-4 mt-2 rounded-sm overflow-hidden">
                  {schedule.map((leg) => {
                    const s = new Date(leg.startDate + "T00:00:00");
                    const e = new Date(leg.endDate + "T00:00:00");
                    const days = Math.round((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24)) + 1;
                    return (
                      <div
                        key={leg.name}
                        className="h-full"
                        style={{ backgroundColor: LEG_COLORS_MAP[leg.name] || "#6b7280", flex: days }}
                        title={`${leg.name}: ${fmt(leg.startDate)}–${fmt(leg.endDate)} (${days}d)`}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </Card>
        );
      })()}

      <div className="p-4 rounded-xl bg-info/10 border border-info/20">
        <p className="text-sm font-medium text-info">Static Site</p>
        <p className="text-sm text-muted mt-1">
          This is a static site. Route switching is stored in your browser and persists
          until you clear localStorage or switch routes.
        </p>
      </div>
    </div>
  );
}

const LEG_COLORS_MAP: Record<string, string> = {
  "China #1": "#3b82f6",
  Vietnam: "#22c55e",
  Japan: "#ef4444",
  "China #2": "#f97316",
  Taiwan: "#8b5cf6",
  "Taiwan + Philadelphia": "#8b5cf6",
  Philippines: "#ec4899",
  Uzbekistan: "#14b8a6",
  Kazakhstan: "#f97316",
  "Central Asia": "#14b8a6",
};
