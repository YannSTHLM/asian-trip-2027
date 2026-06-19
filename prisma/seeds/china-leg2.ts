import type { DayData } from "./helpers";

export const chinaLeg2Days: DayData[] = [
  {
    date: "2027-05-05", title: "Arrive / Rest in Beijing",
    activities: [
      { time: "14:00", title: "Check in - relax", location: "Beijing", lat: 39.9042, lng: 116.4074 },
      { time: "18:00", title: "Dinner in the Hutongs", category: "food", location: "Beijing", lat: 39.9375, lng: 116.4043 },
    ],
  },
  {
    date: "2027-05-06", title: "Beijing - Art & Culture",
    activities: [
      { time: "09:00", title: "798 Art District", location: "Beijing", lat: 39.9855, lng: 116.4958 },
      { time: "14:00", title: "National Museum of China", location: "Beijing", lat: 39.9054, lng: 116.3976 },
    ],
  },
  {
    date: "2027-05-07", title: "Beijing - Temples",
    activities: [
      { time: "08:00", title: "Temple of Heaven", location: "Beijing", lat: 39.8822, lng: 116.4066 },
      { time: "11:00", title: "Hutong bike tour", location: "Beijing", lat: 39.9375, lng: 116.4043 },
      { time: "15:00", title: "Confucius Temple", location: "Beijing", lat: 39.9473, lng: 116.4177 },
    ],
  },
  {
    date: "2027-05-08", title: "Rest day / Buffer",
    activities: [
      { time: "10:00", title: "Free day", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-09", title: "Travel to Qingdao",
    activities: [
      { time: "09:00", title: "Train to Qingdao", description: "~3 hours.", location: "Qingdao", lat: 36.0671, lng: 120.3826 },
      { time: "14:00", title: "European quarter exploration", location: "Qingdao", lat: 36.0671, lng: 120.3826 },
      { time: "18:00", title: "Tsingtao Brewery & beer tasting", category: "food", location: "Qingdao", lat: 36.0635, lng: 120.3298 },
    ],
  },
  {
    date: "2027-05-10", title: "Qingdao - Coast",
    activities: [
      { time: "09:00", title: "Zhan Qiao Pier", location: "Qingdao", lat: 36.0625, lng: 120.3167 },
      { time: "14:00", title: "Golden Sand Beach", location: "Qingdao", lat: 35.9585, lng: 120.2132 },
    ],
  },
  {
    date: "2027-05-11", title: "Qingdao - Laoshan",
    activities: [
      { time: "08:00", title: "Laoshan Mountain hike", location: "Qingdao", lat: 36.1089, lng: 120.4589 },
    ],
  },
  {
    date: "2027-05-12", title: "Travel to Shanghai",
    activities: [
      { time: "08:00", title: "Train to Shanghai", description: "~5 hours.", location: "Shanghai", lat: 31.2304, lng: 121.4737 },
      { time: "15:00", title: "Yu Garden area", location: "Shanghai", lat: 31.2272, lng: 121.4921 },
      { time: "19:00", title: "The Bund night walk", location: "Shanghai", lat: 31.2400, lng: 121.4900 },
    ],
  },
  {
    date: "2027-05-13", title: "Shanghai - The Bund & Pudong",
    activities: [
      { time: "09:00", title: "The Bund", location: "Shanghai", lat: 31.2400, lng: 121.4900 },
      { time: "11:00", title: "Shanghai Tower", location: "Shanghai", lat: 31.2355, lng: 121.5016 },
      { time: "14:00", title: "Nanjing Road", location: "Shanghai", lat: 31.2332, lng: 121.4737 },
    ],
  },
  {
    date: "2027-05-14", title: "Shanghai - French Concession",
    activities: [
      { time: "09:00", title: "French Concession walk", location: "Shanghai", lat: 31.2108, lng: 121.4545 },
      { time: "13:00", title: "Xintiandi area", location: "Shanghai", lat: 31.2208, lng: 121.4743 },
    ],
  },
  {
    date: "2027-05-15", title: "Day Trip to Suzhou",
    activities: [
      { time: "08:00", title: "Train to Suzhou (30 min)", location: "Suzhou", lat: 31.2990, lng: 120.5853 },
      { time: "09:00", title: "Humble Administrator's Garden", location: "Suzhou", lat: 31.3239, lng: 120.6247 },
      { time: "13:00", title: "Pingjiang Road & canals", location: "Suzhou", lat: 31.3135, lng: 120.6339 },
      { time: "18:00", title: "Return to Shanghai", location: "Shanghai", lat: 31.2304, lng: 121.4737 },
    ],
  },
  {
    date: "2027-05-16", title: "Shanghai - Museums",
    activities: [
      { time: "09:00", title: "Shanghai Museum", location: "Shanghai", lat: 31.2303, lng: 121.4737 },
      { time: "14:00", title: "Shanghai History Museum", location: "Shanghai", lat: 31.2304, lng: 121.4737 },
      { time: "18:00", title: "Huangpu River cruise", location: "Shanghai", lat: 31.2400, lng: 121.4900 },
    ],
  },
  {
    date: "2027-05-17", title: "Rest day / Buffer",
    activities: [
      { time: "10:00", title: "Free day", location: "Shanghai", lat: 31.2304, lng: 121.4737 },
    ],
  },
  {
    date: "2027-05-18", title: "Rest day / Buffer",
    activities: [
      { time: "10:00", title: "Free day", location: "Shanghai", lat: 31.2304, lng: 121.4737 },
    ],
  },
  {
    date: "2027-05-19", title: "Return to Beijing",
    activities: [
      { time: "08:00", title: "Train to Beijing", description: "~4.5 hours.", location: "Beijing", lat: 39.9042, lng: 116.4074 },
      { time: "15:00", title: "Final evening", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-20", title: "Last Full Day in Beijing",
    activities: [
      { time: "09:00", title: "Last sightseeing & shopping", location: "Beijing", lat: 39.9042, lng: 116.4074 },
      { time: "19:00", title: "Farewell dinner", category: "food", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-21", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Rest or revisit favorites", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-22", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-23", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-24", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-25", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-26", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-27", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-28", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-29", title: "Buffer day",
    activities: [
      { time: "10:00", title: "Free day", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-30", title: "Packing",
    activities: [
      { time: "10:00", title: "Pack bags, rest", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-05-31", title: "Departure",
    activities: [
      { time: "09:00", title: "Check out", location: "Beijing", lat: 39.9042, lng: 116.4074 },
      { time: "12:00", title: "Airport transfer", location: "Beijing", lat: 39.9042, lng: 116.4074 },
      { time: "15:00", title: "Flight home", location: "Beijing", lat: 40.0801, lng: 116.5846 },
    ],
  },
];
