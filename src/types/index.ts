import type { TripRoute, LegScheduleEntry } from "../../trip-config";

export type { LegScheduleEntry };

export interface Trip {
  id: string;
  title: string;
  description: string | null;
  startDate: Date;
  endDate: Date;
  coverPhoto: string | null;
  countries: string[];
  routeConfig: string | null;
  createdAt: Date;
}

export interface TripRouteConfig {
  route: TripRoute;
  travelers: number;
  startDate: string;
  endDate: string;
}

export interface TripLeg {
  id: string;
  tripId: string;
  name: string;
  startDate: Date;
  endDate: Date;
  color: string;
  days: Day[];
}

export interface Day {
  id: string;
  tripLegId: string;
  date: Date;
  title: string;
  notes: string | null;
  activities: Activity[];
  photos: Photo[];
}

export interface Activity {
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

export interface Expense {
  id: string;
  tripId: string;
  dayId: string | null;
  category: string;
  amount: number;
  currency: string;
  sekAmount: number;
  description: string;
  date: Date;
}

export interface Photo {
  id: string;
  dayId: string | null;
  cloudinaryId: string;
  url: string;
  caption: string | null;
  location: string | null;
  lat: number | null;
  lng: number | null;
  date: Date;
}

export interface Note {
  id: string;
  tripId: string;
  title: string;
  content: string;
  tags: string[];
  date: Date;
}

export interface DayWithRelations extends Day {
  tripLeg: TripLeg;
}

export interface TripLegWithDays extends TripLeg {
  days: DayWithActivities[];
}

export interface DayWithActivities extends Day {
  activities: Activity[];
}

export type ExpenseCategory =
  | "flights"
  | "accommodation"
  | "food"
  | "transport"
  | "activities"
  | "visa"
  | "misc";

export const EXPENSE_CATEGORIES: { value: ExpenseCategory; label: string }[] = [
  { value: "flights", label: "Flights" },
  { value: "accommodation", label: "Accommodation" },
  { value: "food", label: "Food" },
  { value: "transport", label: "Transport" },
  { value: "activities", label: "Activities" },
  { value: "visa", label: "Visa" },
  { value: "misc", label: "Misc" },
];

export const LEG_COLORS: Record<string, string> = {
  "China #1": "#3b82f6",
  Vietnam: "#22c55e",
  Japan: "#ef4444",
  "China #2": "#f97316",
  Taiwan: "#8b5cf6",
  Philippines: "#ec4899",
  Uzbekistan: "#14b8a6",
  Kazakhstan: "#f97316",
};

export const CURRENCY_RATES: Record<string, number> = {
  CNY: 1.4,
  VND: 0.00042,
  JPY: 0.072,
  SEK: 1,
  USD: 10.5,
  PHP: 0.17,
  KZT: 0.0021,
  UZS: 0.00007,
};

export const ROUTE_LABELS: Record<string, string> = {
  "taiwan-philippines": "China's Natural Wonders",
  "central-asia": "Central Asia (Silk Road)",
  original: "Original (Japan)",
};
