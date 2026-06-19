export type TripRoute = "taiwan-philippines" | "central-asia" | "original";

export interface TripConfig {
  route: TripRoute;
  travelers: number;
  startDate: string;
  endDate: string;
}

export interface LegScheduleEntry {
  name: string;
  startDate: string;
  endDate: string;
  weatherNotes: string;
}

export const tripConfig: TripConfig = {
  route: "taiwan-philippines",
  travelers: 2,
  startDate: "2027-03-01",
  endDate: "2027-05-31",
};

export function getOptimalDates(route: TripRoute) {
  const r = ROUTE_COMPARISONS.find((r) => r.id === route);
  return {
    startDate: r?.optimalStartDate ?? "2027-03-01",
    endDate: r?.optimalEndDate ?? "2027-06-13",
  };
}

export function getLegSchedule(route: TripRoute): LegScheduleEntry[] {
  const r = ROUTE_COMPARISONS.find((r) => r.id === route);
  return r?.legSchedule ?? [];
}

export interface RouteComparison {
  id: TripRoute;
  label: string;
  countries: string[];
  totalDays: number;
  description: string;
  flagEmojis: string;

  // Optimal Timing
  optimalStartDate: string;
  optimalEndDate: string;
  legSchedule: LegScheduleEntry[];

  // Geography
  totalDistanceKm: number;
  flightsNeeded: number;
  longestSingleJourney: string;

  // Weather
  avgTempFeb: number;
  avgTempMar: number;
  avgTempApr: number;
  avgTempMay: number;
  rainDays: number;
  bestMonth: string;
  worstMonth: string;

  // Cost
  budgetSEK: number;
  perDayCostSEK: number;
  flightCostSEK: number;
  accomAvgSEK: number;
  foodCostPerDaySEK: number;
  transportCostSEK: number;
  visaCostSEK: number;

  // Culture
  unescoSites: number;
  cultureScore: number;
  historicalPeriods: string;

  // Food
  foodScore: number;
  signatureDishes: string[];
  streetFoodRating: number;

  // Nature
  beaches: number;
  mountains: number;
  nationalParks: number;
  natureScore: number;

  // Activities
  hikingScore: number;
  snorkelingScore: number;
  cookingClasses: boolean;
  templeScore: number;

  // Logistics
  visaHassle: string;
  safetyRating: number;
  languageBarrier: number;
  bestFor: string;

  // Vibe
  crowds: string;
  instagramScore: number;
  relaxationScore: number;
  highlights: string[];

  // Seasonal
  hasCherryBlossom: boolean;
  hasGoldenWeek: boolean;
  monsoonMonths: string;
  peakSeason: string;
}

export const ROUTE_COMPARISONS: RouteComparison[] = [
  {
    id: "taiwan-philippines",
    label: "China → Vietnam → Taiwan",
    countries: ["China", "Vietnam", "Taiwan"],
    totalDays: 92,
    description:
      "China's natural wonders from Zhangjiajie to Yunnan, then Vietnam's vibrant streets, finishing in Taiwan for night markets and Taroko Gorge.",
    flagEmojis: "🇨🇳 🇻🇳 🇹🇼",

    optimalStartDate: "2027-03-01",
    optimalEndDate: "2027-05-31",
    legSchedule: [
      { name: "China #1", startDate: "2027-03-01", endDate: "2027-03-21", weatherNotes: "5→15°C, improving" },
      { name: "China #2", startDate: "2027-03-22", endDate: "2027-04-05", weatherNotes: "15-22°C, spring blossoms" },
      { name: "Vietnam", startDate: "2027-04-06", endDate: "2027-04-25", weatherNotes: "25-30°C, peak dry season" },
      { name: "Taiwan", startDate: "2027-04-26", endDate: "2027-05-31", weatherNotes: "25-30°C, warm and sunny" },
    ],

    totalDistanceKm: 13000,
    flightsNeeded: 6,
    longestSingleJourney: "Stockholm → Beijing (8h, business)",

    avgTempFeb: -2,
    avgTempMar: 10,
    avgTempApr: 20,
    avgTempMay: 28,
    rainDays: 10,
    bestMonth: "April",
    worstMonth: "February (North China cold)",

    budgetSEK: 112000,
    perDayCostSEK: 1217,
    flightCostSEK: 66000,
    accomAvgSEK: 320,
    foodCostPerDaySEK: 130,
    transportCostSEK: 3000,
    visaCostSEK: 1800,

    unescoSites: 13,
    cultureScore: 5,
    historicalPeriods: "Imperial Chinese, Sichuan Kingdom, Yunnan minority kingdoms, Colonial Vietnam, Japanese Taiwan",

    foodScore: 5,
    signatureDishes: ["Mapo Tofu", "Kung Pao Chicken", "Hot Pot", "Pho", "Banh Mi", "Beef noodle soup", "Bubble tea", "Dim sum"],
    streetFoodRating: 5,

    beaches: 2,
    mountains: 4,
    nationalParks: 7,
    natureScore: 5,

    hikingScore: 5,
    snorkelingScore: 1,
    cookingClasses: true,
    templeScore: 4,

    visaHassle: "Very easy — all visa-free 30-90 days",
    safetyRating: 4,
    languageBarrier: 3,
    bestFor: "Culture + nature lovers, foodies, hikers",

    crowds: "Moderate",
    instagramScore: 4,
    relaxationScore: 3,
    highlights: [
      "Zhangjiajie National Park (Avatar mountains)",
      "Tiger Leaping Gorge (Yunnan)",
      "Chengdu pandas + Sichuan food",
      "Guilin/Yangshuo karst landscape",
      "Taroko Gorge (Taiwan)",
      "Taipei night markets",
      "Halong Bay (Vietnam)",
    ],

    hasCherryBlossom: true,
    hasGoldenWeek: false,
    monsoonMonths: "May–September (Taiwan); May–September (Vietnam)",
    peakSeason: "March–May",
  },
  {
    id: "central-asia",
    label: "China → Central Asia → Taiwan",
    countries: ["China", "Uzbekistan", "Kazakhstan", "Taiwan"],
    totalDays: 105,
    description:
      "China's highlights, then the ancient Silk Road through Uzbekistan and Kazakhstan, finishing in Taiwan for night markets and gorges.",
    flagEmojis: "🇨🇳 🇺🇿 🇰🇿 🇹🇼",

    optimalStartDate: "2027-03-26",
    optimalEndDate: "2027-07-08",
    legSchedule: [
      { name: "China #1", startDate: "2027-03-26", endDate: "2027-04-13", weatherNotes: "15-22°C, spring blossoms" },
      { name: "Central Asia", startDate: "2027-04-14", endDate: "2027-05-15", weatherNotes: "15-28°C, ideal sightseeing" },
      { name: "Taiwan", startDate: "2027-05-16", endDate: "2027-06-05", weatherNotes: "25-30°C, some rain" },
      { name: "China #2", startDate: "2027-06-06", endDate: "2027-07-08", weatherNotes: "25-35°C, warm" },
    ],

    totalDistanceKm: 22000,
    flightsNeeded: 6,
    longestSingleJourney: "Stockholm → Beijing (8h, business)",

    avgTempFeb: -2,
    avgTempMar: 10,
    avgTempApr: 20,
    avgTempMay: 28,
    rainDays: 8,
    bestMonth: "April",
    worstMonth: "February (China cold)",

    budgetSEK: 128000,
    perDayCostSEK: 1219,
    flightCostSEK: 73000,
    accomAvgSEK: 300,
    foodCostPerDaySEK: 140,
    transportCostSEK: 5000,
    visaCostSEK: 3600,

    unescoSites: 12,
    cultureScore: 5,
    historicalPeriods: "Imperial Chinese, Timurid Empire, Silk Road khanates, Qing Dynasty Taiwan",

    foodScore: 3,
    signatureDishes: ["Plov", "Shashlik", "Lagman", "Samsa", "Beef noodle soup", "Bubble tea"],
    streetFoodRating: 3,

    beaches: 2,
    mountains: 4,
    nationalParks: 5,
    natureScore: 4,

    hikingScore: 3,
    snorkelingScore: 0,
    cookingClasses: true,
    templeScore: 4,

    visaHassle: "Easy — Uzbekistan e-visa, Kazakhstan 30d visa-free, Taiwan 90d visa-free",
    safetyRating: 4,
    languageBarrier: 4,
    bestFor: "History buffs, adventure seekers, off-the-beaten-path",

    crowds: "Very low — off the beaten path",
    instagramScore: 4,
    relaxationScore: 3,
    highlights: [
      "Registan Square (Samarkand)",
      "Itchan Kala (Khiva)",
      "Charyn Canyon (Kazakhstan)",
      "Savitsky Museum (Nukus)",
      "Big Almaty Lake",
      "Taroko Gorge (Taiwan)",
    ],

    hasCherryBlossom: false,
    hasGoldenWeek: false,
    monsoonMonths: "May–September (Taiwan only)",
    peakSeason: "April–June, September–October",
  },
  {
    id: "original",
    label: "China → Vietnam → Japan",
    countries: ["China", "Vietnam", "Japan"],
    totalDays: 92,
    description:
      "The classic route: China's ancient wonders, Vietnam's vibrant streets, Japan's temples and cherry blossoms.",
    flagEmojis: "🇨🇳 🇻🇳 🇯🇵",

    optimalStartDate: "2027-02-25",
    optimalEndDate: "2027-05-27",
    legSchedule: [
      { name: "China #1", startDate: "2027-02-25", endDate: "2027-03-15", weatherNotes: "0→10°C, cold but improving" },
      { name: "Vietnam", startDate: "2027-03-16", endDate: "2027-04-05", weatherNotes: "25-32°C, peak dry season" },
      { name: "Japan", startDate: "2027-04-06", endDate: "2027-05-01", weatherNotes: "12-22°C, Sakura peak!" },
      { name: "China #2", startDate: "2027-05-02", endDate: "2027-05-27", weatherNotes: "22-30°C, perfect" },
    ],

    totalDistanceKm: 16000,
    flightsNeeded: 5,
    longestSingleJourney: "Stockholm → Beijing (8h, business)",

    avgTempFeb: -2,
    avgTempMar: 12,
    avgTempApr: 16,
    avgTempMay: 22,
    rainDays: 14,
    bestMonth: "April (cherry blossoms)",
    worstMonth: "February (China cold)",

    budgetSEK: 150000,
    perDayCostSEK: 1630,
    flightCostSEK: 65000,
    accomAvgSEK: 600,
    foodCostPerDaySEK: 250,
    transportCostSEK: 5000,
    visaCostSEK: 1800,

    unescoSites: 14,
    cultureScore: 5,
    historicalPeriods: "Imperial Chinese, Feudal Japan, Meiji Restoration, Showa",

    foodScore: 5,
    signatureDishes: ["Sushi", "Ramen", "Pho", "Banh Mi", "Peking Duck", "Okonomiyaki", "Kaiseki"],
    streetFoodRating: 4,

    beaches: 2,
    mountains: 4,
    nationalParks: 7,
    natureScore: 4,

    hikingScore: 4,
    snorkelingScore: 1,
    cookingClasses: true,
    templeScore: 5,

    visaHassle: "Very easy — all visa-free 90 days",
    safetyRating: 5,
    languageBarrier: 3,
    bestFor: "Foodies, pop culture fans, first-time Asia travelers",

    crowds: "High (Golden Week Apr 29–May 5)",
    instagramScore: 4,
    relaxationScore: 3,
    highlights: [
      "Fushimi Inari (Kyoto)",
      "Shibuya Crossing (Tokyo)",
      "Miyajima floating torii",
      "Mt Fuji from Hakone",
      "Osaka street food",
      "Halong Bay (Vietnam)",
    ],

    hasCherryBlossom: true,
    hasGoldenWeek: true,
    monsoonMonths: "June–October (Vietnam)",
    peakSeason: "March–May, October–November",
  },
];
