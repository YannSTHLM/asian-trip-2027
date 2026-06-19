import type { DayData } from "./helpers";

export const chinaLeg1Days: DayData[] = [
  {
    date: "2027-02-15", title: "Arrival in Beijing",
    notes: "Arrive in Beijing. Recovery from jet lag. Settle into accommodation.",
    activities: [
      { time: "14:00", title: "Check into hotel", location: "Beijing", lat: 39.9042, lng: 116.4074 },
      { time: "18:00", title: "Welcome dinner - Peking Duck", description: "Try Dadong for authentic Peking duck.", location: "Beijing", lat: 39.9042, lng: 116.4074, category: "food" },
    ],
  },
  {
    date: "2027-02-16", title: "Beijing - Forbidden City",
    activities: [
      { time: "08:00", title: "Tiananmen Square", location: "Beijing", lat: 39.9054, lng: 116.3976 },
      { time: "09:00", title: "Forbidden City tour", description: "Explore the imperial palace complex.", location: "Beijing", lat: 39.9163, lng: 116.3972 },
      { time: "14:00", title: "Jingshan Park", description: "Panoramic view of the Forbidden City.", location: "Beijing", lat: 39.9255, lng: 116.3975 },
    ],
  },
  {
    date: "2027-02-17", title: "Temple of Heaven & Hutongs",
    activities: [
      { time: "08:00", title: "Temple of Heaven", location: "Beijing", lat: 39.8822, lng: 116.4066 },
      { time: "11:00", title: "Hutong bicycle tour", description: "Explore traditional alleyways.", location: "Beijing", lat: 39.9375, lng: 116.4043 },
      { time: "15:00", title: "Lama Temple", location: "Beijing", lat: 39.9473, lng: 116.4177 },
    ],
  },
  {
    date: "2027-02-18", title: "Great Wall - Mutianyu",
    activities: [
      { time: "06:00", title: "Bus to Mutianyu Great Wall", location: "Mutianyu", lat: 40.4319, lng: 116.5704 },
      { time: "09:00", title: "Hike the Great Wall", description: "Section of Mutianyu, less crowded.", location: "Mutianyu", lat: 40.4319, lng: 116.5704 },
      { time: "15:00", title: "Return to Beijing", location: "Beijing", lat: 39.9042, lng: 116.4074 },
    ],
  },
  {
    date: "2027-02-19", title: "Beijing - Art & Summer Palace",
    activities: [
      { time: "08:00", title: "Summer Palace", location: "Beijing", lat: 39.9998, lng: 116.2755 },
      { time: "13:00", title: "798 Art District", location: "Beijing", lat: 39.9855, lng: 116.4958 },
    ],
  },
  {
    date: "2027-02-20", title: "Travel to Pingyao",
    activities: [
      { time: "08:00", title: "High-speed train to Pingyao", description: "~3 hours.", location: "Pingyao", lat: 37.2036, lng: 112.1762 },
      { time: "14:00", title: "Explore Pingyao Ancient City", location: "Pingyao", lat: 37.2036, lng: 112.1762 },
      { time: "19:00", title: "Stroll lantern-lit streets", location: "Pingyao", lat: 37.2036, lng: 112.1762 },
    ],
  },
  {
    date: "2027-02-21", title: "Pingyao Exploration",
    activities: [
      { time: "08:00", title: "Pingyao City Walls", location: "Pingyao", lat: 37.2036, lng: 112.1762 },
      { time: "10:00", title: "Rishengchang Exchange Shop", description: "Ancient banking house.", location: "Pingyao", lat: 37.2036, lng: 112.1762 },
    ],
  },
  {
    date: "2027-02-22", title: "Travel to Xi'an",
    activities: [
      { time: "09:00", title: "Train to Xi'an", description: "~3 hours.", location: "Xi'an", lat: 34.3416, lng: 108.9398 },
      { time: "15:00", title: "Muslim Quarter exploration", location: "Xi'an", lat: 34.2611, lng: 108.9425 },
      { time: "18:00", title: "Roujiamo & Biang Biang noodles", category: "food", location: "Xi'an", lat: 34.2611, lng: 108.9425 },
    ],
  },
  {
    date: "2027-02-23", title: "Terracotta Warriors",
    activities: [
      { time: "08:00", title: "Terracotta Army Museum", location: "Xi'an", lat: 34.3853, lng: 109.2739 },
      { time: "14:00", title: "Return to city", location: "Xi'an", lat: 34.3416, lng: 108.9398 },
    ],
  },
  {
    date: "2027-02-24", title: "Xi'an - Walls & Pagoda",
    activities: [
      { time: "08:00", title: "Xi'an City Wall bike ride", location: "Xi'an", lat: 34.2654, lng: 108.9427 },
      { time: "11:00", title: "Bell & Drum Towers", location: "Xi'an", lat: 34.2611, lng: 108.9425 },
      { time: "14:00", title: "Big Wild Goose Pagoda", location: "Xi'an", lat: 34.2193, lng: 108.9592 },
    ],
  },
  {
    date: "2027-02-25", title: "Travel to Chengdu",
    activities: [
      { time: "09:00", title: "Flight to Chengdu", location: "Chengdu", lat: 30.5728, lng: 104.0668 },
      { time: "14:00", title: "Explore Chengdu", location: "Chengdu", lat: 30.5728, lng: 104.0668 },
      { time: "19:00", title: "Sichuan hotpot dinner", category: "food", location: "Chengdu", lat: 30.5728, lng: 104.0668 },
    ],
  },
  {
    date: "2027-02-26", title: "Chengdu - Giant Pandas",
    activities: [
      { time: "07:00", title: "Giant Panda Base", description: "Arrive early.", location: "Chengdu", lat: 30.7344, lng: 104.1422 },
      { time: "13:00", title: "Jinli Ancient Street", location: "Chengdu", lat: 30.6483, lng: 104.0472 },
      { time: "16:00", title: "Tea house", location: "Chengdu", lat: 30.6483, lng: 104.0472 },
    ],
  },
  {
    date: "2027-02-27", title: "Chengdu Culture",
    activities: [
      { time: "09:00", title: "Wuhou Shrine", location: "Chengdu", lat: 30.6483, lng: 104.0472 },
      { time: "13:00", title: "Sichuan Opera & face-changing", location: "Chengdu", lat: 30.6483, lng: 104.0472 },
    ],
  },
  {
    date: "2027-02-28", title: "Travel to Zhangjiajie",
    activities: [
      { time: "08:00", title: "Flight to Zhangjiajie", location: "Zhangjiajie", lat: 29.3992, lng: 110.4789 },
      { time: "14:00", title: "Settle in Wulingyuan area", location: "Zhangjiajie", lat: 29.3495, lng: 110.5447 },
    ],
  },
  {
    date: "2027-03-01", title: "Zhangjiajie - Avatar Mountains",
    activities: [
      { time: "07:00", title: "Yuanjiajie - Avatar Hallelujah Mountain", location: "Zhangjiajie", lat: 29.3524, lng: 110.4634 },
      { time: "12:00", title: "Bailong Elevator", location: "Zhangjiajie", lat: 29.3518, lng: 110.4659 },
      { time: "14:00", title: "Park trails", location: "Zhangjiajie", lat: 29.3495, lng: 110.5447 },
    ],
  },
  {
    date: "2027-03-02", title: "Zhangjiajie - Tianzi Mountain",
    activities: [
      { time: "07:00", title: "Tianzi Mountain", location: "Zhangjiajie", lat: 29.3814, lng: 110.4552 },
      { time: "13:00", title: "Ten Mile Gallery", location: "Zhangjiajie", lat: 29.3594, lng: 110.4495 },
    ],
  },
  {
    date: "2027-03-03", title: "Travel to Yangshuo",
    activities: [
      { time: "09:00", title: "Flight to Guilin", location: "Guilin", lat: 25.2736, lng: 110.2901 },
      { time: "13:00", title: "Bus to Yangshuo", location: "Yangshuo", lat: 24.7785, lng: 110.4893 },
      { time: "17:00", title: "Explore Yangshuo town", location: "Yangshuo", lat: 24.7785, lng: 110.4893 },
    ],
  },
  {
    date: "2027-03-04", title: "Yangshuo - Li River & Cycling",
    activities: [
      { time: "08:00", title: "Li River bamboo raft", location: "Yangshuo", lat: 24.7683, lng: 110.4897 },
      { time: "13:00", title: "Bicycle tour", description: "Rice fields and karst scenery.", location: "Yangshuo", lat: 24.7785, lng: 110.4893 },
      { time: "18:00", title: "Sunset at Moon Hill", location: "Yangshuo", lat: 24.7569, lng: 110.5106 },
    ],
  },
  {
    date: "2027-03-05", title: "Guangzhou Transfer",
    activities: [
      { time: "09:00", title: "Bus to Guilin", location: "Guilin", lat: 25.2736, lng: 110.2901 },
      { time: "12:00", title: "Train to Guangzhou", description: "~2.5 hours.", location: "Guangzhou", lat: 23.1291, lng: 113.2644 },
      { time: "18:00", title: "Dim sum farewell dinner", category: "food", location: "Guangzhou", lat: 23.1291, lng: 113.2644 },
    ],
  },
];
