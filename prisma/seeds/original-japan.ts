import type { DayData } from "./helpers";

export const originalJapanDays: DayData[] = [
  {
    date: "2027-03-26", title: "Arrive Tokyo",
    activities: [
      { time: "15:00", title: "Arrive at Narita/Haneda", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
      { time: "19:00", title: "Ramen dinner", category: "food", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-03-27", title: "Tokyo - Shibuya & Shinjuku",
    activities: [
      { time: "09:00", title: "Meiji Shrine", location: "Tokyo", lat: 35.6764, lng: 139.6993 },
      { time: "11:00", title: "Shibuya Crossing", location: "Tokyo", lat: 35.6595, lng: 139.7004 },
      { time: "14:00", title: "Harajuku - Takeshita Street", location: "Tokyo", lat: 35.6702, lng: 139.7026 },
      { time: "18:00", title: "Shinjuku izakaya dinner", category: "food", location: "Tokyo", lat: 35.6896, lng: 139.7006 },
    ],
  },
  {
    date: "2027-03-28", title: "Tokyo - Akihabara & Asakusa",
    activities: [
      { time: "09:00", title: "Senso-ji Temple", location: "Tokyo", lat: 35.7148, lng: 139.7967 },
      { time: "13:00", title: "Akihabara Electric Town", location: "Tokyo", lat: 35.7023, lng: 139.7745 },
      { time: "17:00", title: "Tokyo Skytree", location: "Tokyo", lat: 35.7101, lng: 139.8107 },
    ],
  },
  {
    date: "2027-03-29", title: "Tokyo - Kamakura Day Trip",
    activities: [
      { time: "08:00", title: "Day trip to Kamakura - Great Buddha", location: "Kamakura", lat: 35.3192, lng: 139.5467 },
      { time: "15:00", title: "Return to Tokyo", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-03-30", title: "Tokyo - TeamLab & Odaiba",
    activities: [
      { time: "10:00", title: "teamLab Planets", location: "Tokyo", lat: 35.6485, lng: 139.7841 },
      { time: "14:00", title: "Odaiba", location: "Tokyo", lat: 35.6264, lng: 139.7748 },
    ],
  },
  {
    date: "2027-03-31", title: "Travel to Kanazawa",
    activities: [
      { time: "08:00", title: "Shinkansen to Kanazawa", location: "Kanazawa", lat: 36.5613, lng: 136.6562 },
      { time: "13:00", title: "Kenroku-en Garden", location: "Kanazawa", lat: 36.5613, lng: 136.6627 },
      { time: "16:00", title: "Kanazawa Castle", location: "Kanazawa", lat: 36.5652, lng: 136.6605 },
    ],
  },
  {
    date: "2027-04-01", title: "Shirakawa-go",
    activities: [
      { time: "08:00", title: "Bus to Shirakawa-go", description: "UNESCO farmhouses.", location: "Shirakawa-go", lat: 36.2576, lng: 136.9065 },
      { time: "15:00", title: "Return to Kanazawa", location: "Kanazawa", lat: 36.5613, lng: 136.6562 },
    ],
  },
  {
    date: "2027-04-02", title: "Takayama",
    activities: [
      { time: "09:00", title: "Train to Takayama", location: "Takayama", lat: 36.1455, lng: 137.2509 },
      { time: "13:00", title: "Takayama Old Town", location: "Takayama", lat: 36.1455, lng: 137.2509 },
    ],
  },
  {
    date: "2027-04-03", title: "Travel to Kyoto via Nagoya",
    activities: [
      { time: "08:00", title: "Scenic train to Kyoto", location: "Kyoto", lat: 35.0116, lng: 135.7681 },
      { time: "14:00", title: "Gion district", location: "Kyoto", lat: 35.0036, lng: 135.7758 },
    ],
  },
  {
    date: "2027-04-04", title: "Kyoto - Kinkaku-ji & Ryoan-ji",
    activities: [
      { time: "08:00", title: "Kinkaku-ji (Golden Pavilion)", location: "Kyoto", lat: 35.0394, lng: 135.7292 },
      { time: "10:00", title: "Ryoan-ji Zen Garden", location: "Kyoto", lat: 35.0346, lng: 135.7185 },
      { time: "13:00", title: "Ninna-ji Temple", location: "Kyoto", lat: 35.0301, lng: 135.7136 },
    ],
  },
  {
    date: "2027-04-05", title: "Kyoto - Fushimi Inari",
    activities: [
      { time: "06:00", title: "Fushimi Inari Shrine", description: "Early to avoid crowds.", location: "Kyoto", lat: 34.9671, lng: 135.7727 },
      { time: "10:00", title: "Higashiyama District", location: "Kyoto", lat: 34.9984, lng: 135.7806 },
      { time: "14:00", title: "Nishiki Market", category: "food", location: "Kyoto", lat: 35.0054, lng: 135.7659 },
    ],
  },
  {
    date: "2027-04-06", title: "Kyoto - Arashiyama",
    activities: [
      { time: "07:00", title: "Arashiyama Bamboo Grove", location: "Kyoto", lat: 35.0171, lng: 135.6711 },
      { time: "09:00", title: "Tenryu-ji Temple", location: "Kyoto", lat: 35.0164, lng: 135.6719 },
      { time: "13:00", title: "Monkey Park Iwatayama", location: "Kyoto", lat: 35.0078, lng: 135.6696 },
    ],
  },
  {
    date: "2027-04-07", title: "Day Trip to Osaka",
    activities: [
      { time: "09:00", title: "Osaka Castle", location: "Osaka", lat: 34.6873, lng: 135.5262 },
      { time: "14:00", title: "Dotonbori - Takoyaki & Okonomiyaki", category: "food", location: "Osaka", lat: 34.6687, lng: 135.5012 },
      { time: "19:00", title: "Return to Kyoto", location: "Kyoto", lat: 35.0116, lng: 135.7681 },
    ],
  },
  {
    date: "2027-04-08", title: "Kyoto - Geisha Culture",
    activities: [
      { time: "10:00", title: "Tea ceremony", location: "Kyoto", lat: 35.0036, lng: 135.7758 },
      { time: "14:00", title: "Gion geisha district tour", location: "Kyoto", lat: 35.0036, lng: 135.7758 },
    ],
  },
  {
    date: "2027-04-09", title: "Travel to Hiroshima",
    activities: [
      { time: "08:00", title: "Shinkansen to Hiroshima", location: "Hiroshima", lat: 34.3853, lng: 132.4553 },
      { time: "13:00", title: "Peace Memorial Park & Museum", location: "Hiroshima", lat: 34.3913, lng: 132.4521 },
    ],
  },
  {
    date: "2027-04-10", title: "Miyajima Island",
    activities: [
      { time: "08:00", title: "Ferry to Miyajima", location: "Miyajima", lat: 34.2962, lng: 132.3216 },
      { time: "09:00", title: "Itsukushima Shrine - floating torii", location: "Miyajima", lat: 34.2958, lng: 132.3246 },
      { time: "12:00", title: "Mount Misen hike", location: "Miyajima", lat: 34.2789, lng: 132.3187 },
    ],
  },
  {
    date: "2027-04-11", title: "Travel to Hakone",
    activities: [
      { time: "08:00", title: "Shinkansen to Odawara", location: "Hakone", lat: 35.2325, lng: 139.1067 },
      { time: "14:00", title: "Check into Ryokan", location: "Hakone", lat: 35.2325, lng: 139.1067 },
      { time: "19:00", title: "Kaiseki dinner at ryokan", category: "food", location: "Hakone", lat: 35.2325, lng: 139.1067 },
    ],
  },
  {
    date: "2027-04-12", title: "Hakone - Mt Fuji",
    activities: [
      { time: "08:00", title: "Hakone Ropeway", location: "Hakone", lat: 35.2428, lng: 139.0209 },
      { time: "10:00", title: "Lake Ashi cruise", location: "Hakone", lat: 35.2108, lng: 139.0061 },
      { time: "13:00", title: "Hakone Open-Air Museum", location: "Hakone", lat: 35.2461, lng: 139.0556 },
    ],
  },
  {
    date: "2027-04-13", title: "Return to Tokyo",
    activities: [
      { time: "10:00", title: "Travel back to Tokyo", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
      { time: "19:00", title: "Sushi at Tsukiji outer market", category: "food", location: "Tokyo", lat: 35.6654, lng: 139.7707 },
    ],
  },
  {
    date: "2027-04-14", title: "Tokyo - Last Day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-15", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-16", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-17", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-18", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-19", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-20", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-21", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-22", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-23", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-24", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-25", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Tokyo", lat: 35.6762, lng: 139.6503 },
    ],
  },
  {
    date: "2027-04-26", title: "Flight back to Beijing",
    activities: [
      { time: "09:00", title: "Flight Tokyo to Beijing", location: "Beijing", lat: 39.9042, lng: 116.4074 },
      { time: "15:00", title: "Arrive Beijing", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
];
