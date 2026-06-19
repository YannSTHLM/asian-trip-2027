import type { DayData } from "./helpers";

export const taiwanDays: DayData[] = [
  {
    date: "2027-03-28", title: "Arrive Taipei",
    activities: [
      { time: "14:00", title: "Check into hotel", location: "Taipei", lat: 25.0330, lng: 121.5654 },
      { time: "18:00", title: "Shilin Night Market", description: "Famous night market with street food and shopping.", location: "Shilin Night Market", lat: 25.0873, lng: 121.5241, category: "food" },
    ],
  },
  {
    date: "2027-03-29", title: "Taipei - Landmarks",
    activities: [
      { time: "09:00", title: "Chiang Kai-shek Memorial Hall", location: "Chiang Kai-shek Memorial Hall", lat: 25.0347, lng: 121.5219 },
      { time: "11:00", title: "Longshan Temple", description: "Historic Buddhist and Taoist temple.", location: "Longshan Temple", lat: 25.0372, lng: 121.5001 },
      { time: "14:00", title: "Taipei 101 Observatory", description: "Iconic skyscraper with panoramic city views.", location: "Taipei 101", lat: 25.0339, lng: 121.5645 },
    ],
  },
  {
    date: "2027-03-30", title: "Taipei - Museums & Hiking",
    activities: [
      { time: "09:00", title: "National Palace Museum", description: "World-class collection of Chinese imperial artifacts.", location: "National Palace Museum", lat: 25.1011, lng: 121.5486 },
      { time: "15:00", title: "Elephant Mountain hike", description: "Short hike with iconic Taipei skyline views.", location: "Elephant Mountain", lat: 25.0290, lng: 121.5734 },
      { time: "19:00", title: "Raohe Night Market", description: "One of Taipei's oldest night markets.", location: "Raohe Night Market", lat: 25.0510, lng: 121.5771, category: "food" },
    ],
  },
  {
    date: "2027-03-31", title: "Jiufen & Pingxi Day Trip",
    activities: [
      { time: "09:00", title: "Explore Jiufen Old Street", description: "Mountain town that inspired Spirited Away.", location: "Jiufen", lat: 25.1094, lng: 121.8455 },
      { time: "14:00", title: "Pingxi Sky Lanterns", description: "Release a lantern with wishes written on it.", location: "Pingxi", lat: 25.0258, lng: 121.7397 },
    ],
  },
  {
    date: "2027-04-01", title: "Travel to Taroko Gorge",
    activities: [
      { time: "08:00", title: "Train to Hualien", description: "Scenic east coast train ride.", location: "Hualien", lat: 23.9917, lng: 121.6113 },
      { time: "14:00", title: "Shakadang Trail", description: "Gentle hike along crystal-clear river.", location: "Taroko Gorge", lat: 24.1700, lng: 121.6100 },
      { time: "16:00", title: "Qingshui Cliffs", description: "Dramatic coastal cliffs dropping into the Pacific.", location: "Qingshui Cliffs", lat: 24.2333, lng: 121.6833 },
    ],
  },
  {
    date: "2027-04-02", title: "Taroko Gorge - Deep Exploration",
    activities: [
      { time: "07:00", title: "Tunnel of Nine Turns", description: "Iconic winding trail through marble cliffs.", location: "Taroko Gorge", lat: 24.1781, lng: 121.6300 },
      { time: "10:00", title: "Baiyang Trail", description: "Waterfall trail ending in a water curtain tunnel.", location: "Taroko Gorge", lat: 24.1700, lng: 121.6000 },
    ],
  },
  {
    date: "2027-04-03", title: "Taroko to Tainan",
    activities: [
      { time: "08:00", title: "Eternal Spring Shrine", description: "Shrine built into the cliffside.", location: "Taroko Gorge", lat: 24.1742, lng: 121.6189 },
      { time: "11:00", title: "Train to Tainan", description: "Travel to Taiwan's historic capital.", location: "Tainan", lat: 22.9997, lng: 120.2270 },
      { time: "17:00", title: "Explore Tainan city center", location: "Tainan", lat: 22.9997, lng: 120.2270 },
    ],
  },
  {
    date: "2027-04-04", title: "Tainan - History & Food",
    activities: [
      { time: "09:00", title: "Anping Fort", description: "17th-century Dutch fortress.", location: "Anping Fort", lat: 23.0014, lng: 120.1608 },
      { time: "11:00", title: "Chihkan Tower", description: "Former Dutch stronghold turned Chinese-style pavilion.", location: "Chihkan Tower", lat: 22.9976, lng: 120.2025 },
      { time: "13:00", title: "Tainan street food tour", description: "Danzai noodles, coffin bread, milkfish soup.", location: "Tainan", lat: 22.9997, lng: 120.2270, category: "food" },
    ],
  },
  {
    date: "2027-04-05", title: "Tainan - Confucius Temple",
    activities: [
      { time: "09:00", title: "Confucius Temple", description: "First Confucian temple in Taiwan, built in 1665.", location: "Confucius Temple", lat: 22.9900, lng: 120.2044 },
      { time: "12:00", title: "More Tainan street food", description: "Try shrimp rolls and danzai noodles.", location: "Tainan", lat: 22.9997, lng: 120.2270, category: "food" },
    ],
  },
  {
    date: "2027-04-06", title: "Kaohsiung - Culture & Art",
    activities: [
      { time: "09:00", title: "Travel to Kaohsiung", description: "Short train ride from Tainan.", location: "Kaohsiung", lat: 22.6273, lng: 120.3014 },
      { time: "11:00", title: "Lotus Pond", description: "Lake with pagodas and temples including Dragon and Tiger Pagodas.", location: "Lotus Pond", lat: 22.6870, lng: 120.2966 },
      { time: "14:00", title: "Pier-2 Art Center", description: "Creative arts district in converted warehouses.", location: "Pier-2 Art Center", lat: 22.6200, lng: 120.2800 },
      { time: "19:00", title: "Liuhe Night Market", description: "Famous for seafood and papaya milk.", location: "Liuhe Night Market", lat: 22.6320, lng: 120.3010, category: "food" },
    ],
  },
  {
    date: "2027-04-07", title: "Fo Guang Shan Monastery",
    activities: [
      { time: "09:00", title: "Fo Guang Shan Monastery", description: "One of Taiwan's largest Buddhist monasteries.", location: "Fo Guang Shan", lat: 22.7486, lng: 120.4489 },
      { time: "15:00", title: "Explore Kaohsiung Harbour", location: "Kaohsiung", lat: 22.6200, lng: 120.2800 },
    ],
  },
  {
    date: "2027-04-08", title: "Sun Moon Lake",
    activities: [
      { time: "08:00", title: "Travel to Sun Moon Lake", description: "Bus from Kaohsiung.", location: "Sun Moon Lake", lat: 23.8558, lng: 120.9252 },
      { time: "13:00", title: "Cycle around Sun Moon Lake", description: "Scenic 30km bike path around the lake.", location: "Sun Moon Lake", lat: 23.8558, lng: 120.9252 },
      { time: "16:00", title: "Wenwu Temple", description: "Temple dedicated to Confucius and military gods.", location: "Wenwu Temple", lat: 23.8667, lng: 120.9131 },
    ],
  },
  {
    date: "2027-04-09", title: "Sun Moon Lake - Cable Car",
    activities: [
      { time: "09:00", title: "Sun Moon Lake Cable Car", description: "Ride to Formosan Aboriginal Culture Village.", location: "Sun Moon Lake", lat: 23.8558, lng: 120.9252 },
      { time: "11:00", title: "Ci'en Pagoda", description: "Nine-story pagoda with panoramic lake views.", location: "Ci'en Pagoda", lat: 23.8519, lng: 120.9394 },
    ],
  },
  {
    date: "2027-04-10", title: "Alishan - Forest Railway",
    activities: [
      { time: "08:00", title: "Travel to Alishan", description: "Bus from Sun Moon Lake.", location: "Alishan", lat: 23.5296, lng: 120.8083 },
      { time: "14:00", title: "Alishan Forest Railway", description: "Historic narrow-gauge railway through the mountains.", location: "Alishan", lat: 23.5296, lng: 120.8083 },
    ],
  },
  {
    date: "2027-04-11", title: "Alishan - Sunrise & Tea",
    activities: [
      { time: "05:00", title: "Alishan sunrise", description: "Sunrise at Zhushan or Chushan viewing platform.", location: "Alishan", lat: 23.5296, lng: 120.8083 },
      { time: "09:00", title: "Sacred Tree Trail", description: "Walk among ancient red cypress trees.", location: "Alishan", lat: 23.5296, lng: 120.8083 },
      { time: "13:00", title: "Tea plantation visit", description: "Taste Alishan high-mountain oolong tea.", location: "Alishan", lat: 23.5296, lng: 120.8083, category: "food" },
    ],
  },
  {
    date: "2027-04-12", title: "Taichung - Art & Night Market",
    activities: [
      { time: "09:00", title: "Travel to Taichung", description: "Bus from Alishan.", location: "Taichung", lat: 24.1477, lng: 120.6736 },
      { time: "13:00", title: "Rainbow Village", description: "Brightly painted military dependents village.", location: "Rainbow Village", lat: 24.1333, lng: 120.6167 },
      { time: "17:00", title: "Miyahara dessert shop", description: "Iconic ice cream and dessert shop in a historic building.", location: "Miyahara", lat: 24.1433, lng: 120.6800, category: "food" },
      { time: "19:00", title: "Fengjia Night Market", description: "Taiwan's largest night market.", location: "Fengjia Night Market", lat: 24.1794, lng: 120.6461, category: "food" },
    ],
  },
  {
    date: "2027-04-13", title: "Taichung Exploration",
    activities: [
      { time: "09:00", title: "National Taiwan Museum of Fine Arts", location: "Taichung", lat: 24.1424, lng: 120.6696 },
      { time: "13:00", title: "More Taichung street food", location: "Taichung", lat: 24.1477, lng: 120.6736, category: "food" },
    ],
  },
  {
    date: "2027-04-14", title: "Buffer Day - Rest in Taipei",
    activities: [
      { time: "09:00", title: "Return to Taipei", description: "Train from Taichung to Taipei.", location: "Taipei", lat: 25.0330, lng: 121.5654 },
      { time: "14:00", title: "Free time - last-minute shopping & rest", location: "Taipei", lat: 25.0330, lng: 121.5654 },
    ],
  },
  {
    date: "2027-04-15", title: "Fly Taipei to Beijing",
    activities: [
      { time: "09:00", title: "Transfer to Taoyuan Airport", location: "Taoyuan Airport", lat: 25.0764, lng: 121.2238 },
      { time: "12:00", title: "Flight to Beijing", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
];
