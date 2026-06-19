import { ROUTE_COMPARISONS, getLegSchedule, type TripRoute as TripRouteType } from "../../trip-config";

export type TripRoute = TripRouteType;
import { getExpenses } from "../../prisma/seeds/expenses";
import { sampleNotes } from "../../prisma/seeds/notes";
import { chinaLeg1Days } from "../../prisma/seeds/china-leg1";
import { chinaLeg2Days } from "../../prisma/seeds/china-leg2";
import { vietnamDays } from "../../prisma/seeds/vietnam";
import { taiwanPhilippinesDays } from "../../prisma/seeds/taiwan-philippines";
import { centralAsiaDays } from "../../prisma/seeds/central-asia";
import { taiwanDays } from "../../prisma/seeds/new-taiwan";
import { originalJapanDays } from "../../prisma/seeds/original-japan";
import type { DayData } from "../../prisma/seeds/helpers";

const LEG_COLORS: Record<string, string> = {
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

const SEED_DAYS: Record<string, DayData[]> = {
  "China #1": chinaLeg1Days,
  "China #2": chinaLeg2Days,
  Vietnam: vietnamDays,
  "Taiwan + Philippines": taiwanPhilippinesDays,
  "Central Asia": centralAsiaDays,
  Taiwan: taiwanDays,
  Japan: originalJapanDays,
};

let idCounter = 0;
function uid(prefix: string): string {
  return `${prefix}_${++idCounter}`;
}

export interface StaticTrip {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string;
  coverPhoto: string | null;
  countries: string;
  routeConfig: string | null;
  createdAt: string;
  legs: StaticLeg[];
  expenses: StaticExpense[];
  notes: StaticNote[];
}

export interface StaticLeg {
  id: string;
  tripId: string;
  name: string;
  startDate: string;
  endDate: string;
  color: string;
  days: StaticDay[];
}

export interface StaticDay {
  id: string;
  tripLegId: string;
  date: string;
  title: string;
  notes: string | null;
  activities: StaticActivity[];
}

export interface StaticActivity {
  id: string;
  dayId: string;
  time: string | null;
  title: string;
  description: string | null;
  location: string | null;
  lat: number | null;
  lng: number | null;
  category: string | null;
  order: number;
}

export interface StaticExpense {
  id: string;
  tripId: string;
  dayId: string | null;
  category: string;
  amount: number;
  currency: string;
  sekAmount: number;
  description: string;
  date: string;
}

export interface StaticNote {
  id: string;
  tripId: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
}

interface BuildResult {
  trips: Record<string, StaticTrip>;
  daysById: Record<string, StaticDay & { tripLeg: StaticLeg }>;
}

let cached: BuildResult | null = null;

function buildAll(): BuildResult {
  if (cached) return cached;

  const trips: Record<string, StaticTrip> = {};
  const daysById: Record<string, StaticDay & { tripLeg: StaticLeg }> = {};

  for (const route of ROUTE_COMPARISONS) {
    const tripId = uid("trip");
    const schedule = getLegSchedule(route.id);

    const legs: StaticLeg[] = [];

    for (const leg of schedule) {
      const legId = uid("leg");
      const seedDays = SEED_DAYS[leg.name] || [];
      const days: StaticDay[] = [];

      for (const dayData of seedDays) {
        const dayId = uid("day");
        const activities: StaticActivity[] = dayData.activities.map((a, i) => ({
          id: uid("act"),
          dayId,
          time: a.time || null,
          title: a.title,
          description: a.description || null,
          location: a.location || null,
          lat: a.lat || null,
          lng: a.lng || null,
          category: a.category || "sightseeing",
          order: i,
        }));

        const day: StaticDay = {
          id: dayId,
          tripLegId: legId,
          date: dayData.date,
          title: dayData.title,
          notes: dayData.notes || null,
          activities,
        };

        days.push(day);
        daysById[dayId] = { ...day, tripLeg: { id: legId, tripId, name: leg.name, startDate: leg.startDate, endDate: leg.endDate, color: LEG_COLORS[leg.name] || "#6b7280", days: [] } };
      }

      legs.push({
        id: legId,
        tripId,
        name: leg.name,
        startDate: leg.startDate,
        endDate: leg.endDate,
        color: LEG_COLORS[leg.name] || "#6b7280",
        days,
      });
    }

    const expensesData = getExpenses(route.id, 2);
    const expenses: StaticExpense[] = expensesData.map((e) => ({
      id: uid("exp"),
      tripId,
      dayId: null,
      category: e.category,
      amount: e.amount,
      currency: e.currency,
      sekAmount: e.sekAmount,
      description: e.description,
      date: e.date,
    }));

    const notes: StaticNote[] = sampleNotes.map((n) => ({
      id: uid("note"),
      tripId,
      title: n.title,
      content: n.content,
      tags: n.tags.split(",").map((t) => t.trim()),
      date: n.date,
    }));

    trips[route.id] = {
      id: tripId,
      title: route.label,
      description: route.description,
      startDate: route.optimalStartDate,
      endDate: route.optimalEndDate,
      coverPhoto: null,
      countries: JSON.stringify(route.countries),
      routeConfig: JSON.stringify({ route: route.id, travelers: 2, startDate: route.optimalStartDate, endDate: route.optimalEndDate }),
      createdAt: new Date().toISOString(),
      legs,
      expenses,
      notes,
    };
  }

  cached = { trips, daysById };
  return cached;
}

export function getActiveTripFromRoute(route: TripRoute) {
  const { trips } = buildAll();
  return trips[route] || null;
}

export function getDayById(id: string) {
  const { daysById } = buildAll();
  return daysById[id] || null;
}

export function getAllDayIds(): string[] {
  const { daysById } = buildAll();
  return Object.keys(daysById);
}

export function getRouteLabel(route: TripRoute): string {
  const r = ROUTE_COMPARISONS.find((c) => c.id === route);
  return r?.label ?? route;
}
