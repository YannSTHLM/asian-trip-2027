import type { DayData } from "./helpers";

export const vietnamDays: DayData[] = [
  {
    date: "2027-03-06", title: "Arrive in Hanoi",
    activities: [
      { time: "09:00", title: "Flight Guangzhou to Hanoi", location: "Hanoi", lat: 21.0278, lng: 105.8342 },
      { time: "14:00", title: "Explore Old Quarter", location: "Hanoi", lat: 21.0342, lng: 105.8538 },
      { time: "19:00", title: "Pho for dinner", category: "food", location: "Hanoi", lat: 21.0278, lng: 105.8342 },
    ],
  },
  {
    date: "2027-03-07", title: "Hanoi - Old Quarter & Lake",
    activities: [
      { time: "08:00", title: "Hoan Kiem Lake & Ngoc Son Temple", location: "Hanoi", lat: 21.0285, lng: 105.8543 },
      { time: "10:00", title: "Old Quarter walking tour", location: "Hanoi", lat: 21.0342, lng: 105.8538 },
      { time: "14:00", title: "Temple of Literature", location: "Hanoi", lat: 21.0275, lng: 105.8359 },
    ],
  },
  {
    date: "2027-03-08", title: "Hanoi - Ho Chi Minh Mausoleum",
    activities: [
      { time: "07:00", title: "Ho Chi Minh Mausoleum", location: "Hanoi", lat: 21.0369, lng: 105.8347 },
      { time: "09:00", title: "One Pillar Pagoda", location: "Hanoi", lat: 21.0356, lng: 105.8363 },
      { time: "13:00", title: "Vietnamese Women's Museum", location: "Hanoi", lat: 21.0245, lng: 105.8512 },
    ],
  },
  {
    date: "2027-03-09", title: "Halong Bay Cruise - Day 1",
    activities: [
      { time: "07:00", title: "Bus to Halong Bay", location: "Halong Bay", lat: 20.9101, lng: 107.1839 },
      { time: "12:00", title: "Board cruise", description: "2-day/1-night.", location: "Halong Bay", lat: 20.9101, lng: 107.1839 },
      { time: "14:00", title: "Kayaking & swimming", location: "Halong Bay", lat: 20.9101, lng: 107.1839 },
    ],
  },
  {
    date: "2027-03-10", title: "Halong Bay - Return to Hanoi",
    activities: [
      { time: "06:00", title: "Sunrise on deck", location: "Halong Bay", lat: 20.9101, lng: 107.1839 },
      { time: "09:00", title: "Floating village visit", location: "Halong Bay", lat: 20.9101, lng: 107.1839 },
      { time: "16:00", title: "Return to Hanoi", location: "Hanoi", lat: 21.0278, lng: 105.8342 },
      { time: "20:00", title: "Night train to Dong Hoi", location: "Hanoi", lat: 21.0278, lng: 105.8342 },
    ],
  },
  {
    date: "2027-03-11", title: "Phong Nha - Paradise Cave",
    activities: [
      { time: "06:00", title: "Arrive Dong Hoi, bus to Phong Nha", location: "Phong Nha", lat: 17.5636, lng: 106.2946 },
      { time: "10:00", title: "Paradise Cave", description: "Spectacular stalactites.", location: "Phong Nha", lat: 17.5385, lng: 106.2187 },
    ],
  },
  {
    date: "2027-03-12", title: "Phong Nha - Dark Cave",
    activities: [
      { time: "08:00", title: "Dark Cave zip-lining & mud bath", location: "Phong Nha", lat: 17.5385, lng: 106.2187 },
      { time: "14:00", title: "Phong Nha Cave boat trip", location: "Phong Nha", lat: 17.5636, lng: 106.2946 },
    ],
  },
  {
    date: "2027-03-13", title: "Travel to Hue",
    activities: [
      { time: "08:00", title: "Bus to Hue", location: "Hue", lat: 16.4637, lng: 107.5909 },
      { time: "14:00", title: "Explore Hue", location: "Hue", lat: 16.4637, lng: 107.5909 },
    ],
  },
  {
    date: "2027-03-14", title: "Hue - Imperial City",
    activities: [
      { time: "08:00", title: "Hue Imperial Citadel", location: "Hue", lat: 16.4711, lng: 107.5772 },
      { time: "13:00", title: "Tombs of the Emperors", location: "Hue", lat: 16.3992, lng: 107.5654 },
      { time: "18:00", title: "Royal cuisine", category: "food", location: "Hue", lat: 16.4637, lng: 107.5909 },
    ],
  },
  {
    date: "2027-03-15", title: "Hai Van Pass to Hoi An",
    activities: [
      { time: "08:00", title: "Hai Van Pass motorbike ride", location: "Hai Van Pass", lat: 16.1000, lng: 108.1500 },
      { time: "13:00", title: "Arrive Hoi An", location: "Hoi An", lat: 15.8801, lng: 108.3380 },
      { time: "17:00", title: "Hoi An Ancient Town", location: "Hoi An", lat: 15.8801, lng: 108.3380 },
    ],
  },
  {
    date: "2027-03-16", title: "Hoi An - Tailor & Lanterns",
    activities: [
      { time: "09:00", title: "Tailor shop - custom clothing", location: "Hoi An", lat: 15.8801, lng: 108.3380 },
      { time: "13:00", title: "Japanese Covered Bridge", location: "Hoi An", lat: 15.8801, lng: 108.3380 },
    ],
  },
  {
    date: "2027-03-17", title: "Hoi An - Beach & Cooking",
    activities: [
      { time: "09:00", title: "An Bang Beach", location: "Hoi An", lat: 15.8965, lng: 108.3543 },
      { time: "14:00", title: "Vietnamese cooking class", category: "food", location: "Hoi An", lat: 15.8801, lng: 108.3380 },
    ],
  },
  {
    date: "2027-03-18", title: "Da Nang",
    activities: [
      { time: "09:00", title: "Transfer to Da Nang", location: "Da Nang", lat: 16.0544, lng: 108.2022 },
      { time: "13:00", title: "Marble Mountains", location: "Da Nang", lat: 16.0154, lng: 108.2625 },
      { time: "17:00", title: "My Khe Beach", location: "Da Nang", lat: 16.0603, lng: 108.2477 },
    ],
  },
  {
    date: "2027-03-19", title: "Da Nang - Ba Na Hills",
    activities: [
      { time: "08:00", title: "Ba Na Hills & Golden Bridge", location: "Da Nang", lat: 15.9950, lng: 108.0350 },
      { time: "15:00", title: "Return to Da Nang", location: "Da Nang", lat: 16.0544, lng: 108.2022 },
    ],
  },
  {
    date: "2027-03-20", title: "Flight to Ho Chi Minh City",
    activities: [
      { time: "10:00", title: "Flight to Saigon", location: "Ho Chi Minh City", lat: 10.7769, lng: 106.7009 },
      { time: "14:00", title: "Explore District 1", location: "Ho Chi Minh City", lat: 10.7769, lng: 106.7009 },
      { time: "19:00", title: "Banh Mi dinner", category: "food", location: "Ho Chi Minh City", lat: 10.7769, lng: 106.7009 },
    ],
  },
  {
    date: "2027-03-21", title: "Cu Chi Tunnels",
    activities: [
      { time: "07:00", title: "Cu Chi Tunnels tour", location: "Cu Chi", lat: 11.0441, lng: 106.5207 },
      { time: "13:00", title: "War Remnants Museum", location: "Ho Chi Minh City", lat: 10.7796, lng: 106.6921 },
    ],
  },
  {
    date: "2027-03-22", title: "Saigon Exploration",
    activities: [
      { time: "09:00", title: "Ben Thanh Market", location: "Ho Chi Minh City", lat: 10.7725, lng: 106.6982 },
      { time: "13:00", title: "Notre-Dame Cathedral & Post Office", location: "Ho Chi Minh City", lat: 10.7798, lng: 106.6990 },
      { time: "18:00", title: "Bui Vien Walking Street", location: "Ho Chi Minh City", lat: 10.7686, lng: 106.6938 },
    ],
  },
  {
    date: "2027-03-23", title: "Buffer / Rest Day",
    activities: [
      { time: "10:00", title: "Free day", location: "Ho Chi Minh City", lat: 10.7769, lng: 106.7009 },
    ],
  },
  {
    date: "2027-03-24", title: "Buffer / Rest Day",
    activities: [
      { time: "10:00", title: "Free day", location: "Ho Chi Minh City", lat: 10.7769, lng: 106.7009 },
    ],
  },
  {
    date: "2027-03-25", title: "Flight to Next Country",
    activities: [
      { time: "09:00", title: "Flight to next destination", location: "Ho Chi Minh City", lat: 10.7769, lng: 106.7009 },
    ],
  },
];
