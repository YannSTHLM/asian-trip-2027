"use client";

import {
  CalendarDays,
  MapPin,
  Wallet,
  Plane,
  ArrowRight,
  Users,
  Route,
  Sun,
  CloudRain,
} from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  formatDate,
  formatDateShort,
  formatSEK,
  daysBetween,
  daysRemaining,
} from "@/lib/utils";
import { ROUTE_COMPARISONS, getLegSchedule, type LegScheduleEntry } from "../../trip-config";
import Link from "next/link";

interface DashboardContentProps {
  trip: any;
}

export default function DashboardContent({ trip }: DashboardContentProps) {
  const routeConfig = trip.routeConfig ? JSON.parse(trip.routeConfig) : null;
  const routeName =
    routeConfig?.route === "taiwan-philippines"
      ? "China's Natural Wonders"
      : routeConfig?.route === "central-asia"
      ? "Central Asia (Silk Road)"
      : routeConfig?.route === "original"
      ? "Original (Japan)"
      : null;
  const travelerCount = routeConfig?.travelers || 1;

  const now = new Date();
  const totalDays = daysBetween(trip.startDate, trip.endDate);
  const remaining = daysRemaining(trip.startDate, trip.endDate);
  const elapsed = totalDays - remaining;

  const totalActivities = trip.legs.reduce(
    (acc: number, leg: any) =>
      acc + leg.days.reduce((a: number, d: any) => a + d.activities.length, 0),
    0
  );
  const totalSpent = trip.expenses.reduce(
    (acc: number, e: any) => acc + e.sekAmount,
    0
  );
  const countries = JSON.parse(trip.countries) as string[];

  const upcomingDays = trip.legs
    .flatMap((leg: any) =>
      leg.days
        .filter((d: any) => new Date(d.date) >= now)
        .map((d: any) => ({ ...d, tripLegName: leg.name, tripLegColor: leg.color }))
    )
    .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  const expensesByCategory = trip.expenses.reduce((acc: any, e: any) => {
    acc[e.category] = (acc[e.category] || 0) + e.sekAmount;
    return acc;
  }, {} as Record<string, number>);

  const values = Object.values(expensesByCategory) as number[];
  const maxCategory = Math.max(1, ...values);

  const stats = [
    {
      label: "Duration",
      value: `${elapsed} / ${totalDays} days`,
      sub: `${remaining} remaining`,
      icon: CalendarDays,
      color: "text-primary",
    },
    {
      label: "Countries",
      value: countries.join(", "),
      sub: `${trip.legs.length} trip legs`,
      icon: Plane,
      color: "text-accent",
    },
    {
      label: "Activities",
      value: totalActivities,
      sub: "planned",
      icon: MapPin,
      color: "text-success",
    },
    {
      label: "Budget",
      value: formatSEK(totalSpent),
      sub: `${trip.expenses.length} expenses`,
      icon: Wallet,
      color: "text-warning",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted text-sm mt-1">
          {trip.title} &middot; {formatDate(trip.startDate)} &ndash;{" "}
          {formatDate(trip.endDate)}
        </p>
      </div>

      {routeName && <OptimizedTimeline routeId={routeConfig?.route} routeName={routeName} travelerCount={travelerCount} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} variant="compact">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted font-medium">{stat.label}</p>
                <p className="text-xl font-bold mt-1">{stat.value}</p>
                <p className="text-xs text-muted mt-0.5">{stat.sub}</p>
              </div>
              <stat.icon className={`h-5 w-5 ${stat.color} mt-0.5`} />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Days</CardTitle>
            <Link
              href="/itinerary"
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </CardHeader>
          <div className="space-y-3">
            {upcomingDays.length === 0 && (
              <p className="text-sm text-muted">Trip completed!</p>
            )}
            {upcomingDays.map((day: any) => (
              <Link
                key={day.id}
                href={`/itinerary/${day.id}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-colors -mx-3"
              >
                <div
                  className="w-1 h-10 rounded-full shrink-0"
                  style={{ backgroundColor: day.tripLegColor }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{day.title}</p>
                  <p className="text-xs text-muted">
                    {formatDateShort(day.date)} &middot; {day.tripLegName}
                    {day.activities.length > 0 &&
                      ` &middot; ${day.activities.length} activities`}
                  </p>
                </div>
                <Badge
                  variant={
                    day.tripLegName === "Japan" ? "warning" : "info"
                  }
                >
                  {day.tripLegName}
                </Badge>
              </Link>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Budget by Category</CardTitle>
            <Link
              href="/budget"
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </CardHeader>
          <div className="space-y-3">
            {Object.entries(expensesByCategory).length === 0 && (
              <p className="text-sm text-muted">No expenses yet</p>
            )}
            {Object.entries(expensesByCategory).map(([category, amount]) => (
              <div key={category}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="capitalize">{category}</span>
                  <span className="font-medium">{formatSEK(amount as number)}</span>
                </div>
                <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{
                      width: `${((amount as number) / maxCategory) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-card-border">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>Total</span>
                <span>{formatSEK(totalSpent)}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}

function OptimizedTimeline({ routeId, routeName, travelerCount }: { routeId: string; routeName: string; travelerCount: number }) {
  const schedule = getLegSchedule(routeId as any);

  return (
    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-3">
      <div className="flex items-center gap-3">
        <Route className="h-5 w-5 text-primary shrink-0" />
        <div className="flex-1 text-sm">
          <span className="font-medium">{routeName}</span>
          <span className="text-muted"> &middot; </span>
          <span className="text-muted">
            <Users className="h-3.5 w-3.5 inline mr-0.5" />
            {travelerCount} {travelerCount === 1 ? "traveler" : "travelers"}
          </span>
        </div>
      </div>

      {/* Timeline bar */}
      {schedule.length > 0 && (
        <div className="flex h-6 rounded-md overflow-hidden">
          {schedule.map((leg) => {
            const start = new Date(leg.startDate + "T00:00:00");
            const end = new Date(leg.endDate + "T00:00:00");
            const days = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
            return (
              <div
                key={leg.name}
                className="flex items-center justify-center text-[10px] font-medium text-white truncate px-1"
                style={{
                  backgroundColor: LEG_COLORS_MAP[leg.name] || "#6b7280",
                  flex: days,
                }}
                title={`${leg.name}: ${days} days — ${leg.weatherNotes}`}
              >
                {(days > 20 || schedule.length <= 3) ? leg.name : ""}
              </div>
            );
          })}
        </div>
      )}

      {/* Weather notes */}
      {schedule.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {schedule.map((leg) => {
            const isWarm = leg.weatherNotes.includes("25-") || leg.weatherNotes.includes("30-");
            return (
              <div key={leg.name} className="text-xs text-muted flex items-center gap-1">
                {isWarm ? <Sun className="h-3 w-3 text-amber-500 shrink-0" /> : <CloudRain className="h-3 w-3 text-blue-400 shrink-0" />}
                <span className="truncate">{leg.name}:</span>
                <span className="truncate">{leg.weatherNotes}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const LEG_COLORS_MAP: Record<string, string> = {
  "China #1": "#3b82f6",
  Vietnam: "#22c55e",
  Japan: "#ef4444",
  "China #2": "#f97316",
  Taiwan: "#8b5cf6",
  "Taiwan + Philippines": "#8b5cf6",
  Philippines: "#ec4899",
  Uzbekistan: "#14b8a6",
  Kazakhstan: "#f97316",
  "Central Asia": "#14b8a6",
};
