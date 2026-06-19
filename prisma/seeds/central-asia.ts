import type { DayData } from "./helpers";

export const centralAsiaDays: DayData[] = [
  {
    date: "2027-03-06", title: "Arrive Tashkent",
    activities: [
      { time: "06:00", title: "Flight from Guangzhou to Tashkent", location: "Guangzhou Baiyun International Airport", lat: 23.3925, lng: 113.2990, category: "transport" },
      { time: "14:00", title: "Arrive Tashkent, check in", description: "Visa on arrival or e-visa ready.", location: "Tashkent International Airport", lat: 41.2578, lng: 69.2812, category: "accommodation" },
      { time: "17:00", title: "Evening walk around Amir Timur Square", location: "Tashkent", lat: 41.3117, lng: 69.2785 },
    ],
  },
  {
    date: "2027-03-07", title: "Tashkent - Metro & Bazaar",
    activities: [
      { time: "09:00", title: "Tashkent Metro tour", description: "Cosmonauts, Alisher Navoi, Pakhtakor stations.", location: "Tashkent", lat: 41.3117, lng: 69.2663 },
      { time: "12:00", title: "Chorsu Bazaar", description: "Huge domed market with spices, bread, and crafts.", location: "Chorsu Bazaar", lat: 41.3270, lng: 69.2330, category: "food" },
      { time: "15:00", title: "Minor Mosque", location: "Tashkent", lat: 41.3289, lng: 69.2391 },
      { time: "19:00", title: "Traditional plov dinner", category: "food", location: "Tashkent", lat: 41.2995, lng: 69.2401 },
    ],
  },
  {
    date: "2027-03-08", title: "Tashkent - Independence & Museums",
    activities: [
      { time: "09:00", title: "Independence Square (Mustaqillik Maydoni)", location: "Tashkent", lat: 41.3117, lng: 69.2663 },
      { time: "11:00", title: "Amir Timur Museum", location: "Tashkent", lat: 41.3135, lng: 69.2785 },
      { time: "14:00", title: "Applied Arts Museum", location: "Tashkent", lat: 41.3014, lng: 69.2620 },
      { time: "18:00", title: "Evening walk on Broadway Street", location: "Tashkent", lat: 41.3057, lng: 69.2783 },
    ],
  },
  {
    date: "2027-03-09", title: "Travel to Samarkand",
    activities: [
      { time: "07:00", title: "High-speed Afrosiyob train to Samarkand", description: "~2 hours.", location: "Tashkent", lat: 41.2722, lng: 69.2181, category: "transport" },
      { time: "10:00", title: "Arrive Samarkand, check in", location: "Samarkand", lat: 39.6542, lng: 66.9597, category: "accommodation" },
      { time: "15:00", title: "First glimpse of Registan Square", location: "Samarkand", lat: 39.6542, lng: 66.9757 },
      { time: "17:00", title: "Registan Square at sunset", description: "Three madrassas glowing golden.", location: "Samarkand", lat: 39.6542, lng: 66.9757 },
    ],
  },
  {
    date: "2027-03-10", title: "Samarkand - Shah-i-Zinda & Bibi-Khanym",
    activities: [
      { time: "08:00", title: "Shah-i-Zinda Necropolis", description: "Stunning avenue of turquoise mausoleums.", location: "Samarkand", lat: 39.6620, lng: 66.9878 },
      { time: "11:00", title: "Bibi-Khanym Mosque", description: "Once one of the largest mosques in the Islamic world.", location: "Samarkand", lat: 39.6605, lng: 66.9789 },
      { time: "13:00", title: "Lunch at Siab Bazaar", category: "food", location: "Samarkand", lat: 39.6598, lng: 66.9815 },
      { time: "15:00", title: "Registan detailed visit", description: "Ulugh Beg, Sher-Dor, and Tilya-Kori madrassas.", location: "Samarkand", lat: 39.6542, lng: 66.9757 },
    ],
  },
  {
    date: "2027-03-11", title: "Samarkand - Gur-e-Amir & Observatory",
    activities: [
      { time: "09:00", title: "Gur-e-Amir Mausoleum", description: "Tomb of Timur the Great.", location: "Samarkand", lat: 39.6490, lng: 66.9691 },
      { time: "11:00", title: "Ulugh Beg Observatory", location: "Samarkand", lat: 39.6744, lng: 66.9948 },
      { time: "14:00", title: "Siab Bazaar for souvenirs", category: "food", location: "Samarkand", lat: 39.6598, lng: 66.9815 },
      { time: "17:00", title: "Registan light show", location: "Samarkand", lat: 39.6542, lng: 66.9757 },
    ],
  },
  {
    date: "2027-03-12", title: "Day Trip to Shakhrisabz",
    activities: [
      { time: "07:00", title: "Shared taxi to Shakhrisabz", description: "~1.5 hours through the mountains.", location: "Samarkand", lat: 39.6542, lng: 66.9597, category: "transport" },
      { time: "09:00", title: "Ak-Saray Palace ruins", description: "Once Timur's grand summer palace.", location: "Shakhrisabz", lat: 39.0565, lng: 66.8324 },
      { time: "11:00", title: "Dorus-Saodat Complex & Jahangir Mausoleum", location: "Shakhrisabz", lat: 39.0550, lng: 66.8340 },
      { time: "15:00", title: "Return to Samarkand", location: "Samarkand", lat: 39.6542, lng: 66.9597, category: "transport" },
    ],
  },
  {
    date: "2027-03-13", title: "Samarkand - Free Day",
    activities: [
      { time: "09:00", title: "Konigil village", description: "Traditional pottery and paper making workshop.", location: "Samarkand", lat: 39.6350, lng: 66.9500 },
      { time: "13:00", title: "Hazrat Khizr Mosque", location: "Samarkand", lat: 39.6600, lng: 66.9750 },
      { time: "17:00", title: "Sunset at Shah-i-Zinda", location: "Samarkand", lat: 39.6620, lng: 66.9878 },
    ],
  },
  {
    date: "2027-03-14", title: "Travel to Bukhara",
    activities: [
      { time: "08:00", title: "Train to Bukhara", description: "~2.5 hours by high-speed rail.", location: "Samarkand", lat: 39.6542, lng: 66.9597, category: "transport" },
      { time: "11:00", title: "Arrive Bukhara, check in", location: "Bukhara", lat: 39.7675, lng: 64.4218, category: "accommodation" },
      { time: "15:00", title: "Lyab-i Hauz ensemble", description: "Poolside plaza with centuries-old mulberry trees.", location: "Bukhara", lat: 39.7717, lng: 64.4202 },
      { time: "18:00", title: "Dinner at Lyab-i Hauz terrace", category: "food", location: "Bukhara", lat: 39.7717, lng: 64.4202 },
    ],
  },
  {
    date: "2027-03-15", title: "Bukhara - Kalon & Ark",
    activities: [
      { time: "08:00", title: "Kalon Minaret & Mosque", description: "Iconic 47m minaret, Genghis Khan bowed before it.", location: "Bukhara", lat: 39.7746, lng: 64.4147 },
      { time: "10:00", title: "Mir-i-Arab Madrasah", location: "Bukhara", lat: 39.7749, lng: 64.4157 },
      { time: "13:00", title: "Ark of Bukhara", description: "Massive fortress, former royal palace complex.", location: "Bukhara", lat: 39.7769, lng: 64.4102 },
      { time: "16:00", title: "Bolo Haouz Mosque & Registan square", location: "Bukhara", lat: 39.7756, lng: 64.4086 },
    ],
  },
  {
    date: "2027-03-16", title: "Bukhara - Trading Domes & Chor Minor",
    activities: [
      { time: "09:00", title: "Trading Domes (Timche)", description: "Silk, carpet, and jewelry shops under brick domes.", location: "Bukhara", lat: 39.7735, lng: 64.4179 },
      { time: "11:00", title: "Maghok-i-Attari Mosque", description: "Oldest surviving mosque in Bukhara.", location: "Bukhara", lat: 39.7725, lng: 64.4188 },
      { time: "14:00", title: "Samanid Mausoleum", description: "Masterpiece of early Islamic architecture.", location: "Bukhara", lat: 39.7776, lng: 64.4116 },
      { time: "16:00", title: "Chor Minor", description: "Quirky four-tower gatehouse.", location: "Bukhara", lat: 39.7710, lng: 64.4277 },
    ],
  },
  {
    date: "2027-03-17", title: "Travel to Khiva",
    activities: [
      { time: "07:00", title: "Shared taxi to Khiva", description: "Long drive through Kyzylkum Desert ~6 hours.", location: "Bukhara", lat: 39.7675, lng: 64.4218, category: "transport" },
      { time: "14:00", title: "Arrive Khiva, check in near Itchan Kala", location: "Khiva", lat: 41.3787, lng: 60.3630, category: "accommodation" },
      { time: "17:00", title: "First walk through Itchan Kala", description: "Old town walls at sunset.", location: "Khiva", lat: 41.3787, lng: 60.3586 },
    ],
  },
  {
    date: "2027-03-18", title: "Khiva - Kalta Minor & Tash Hauli",
    activities: [
      { time: "08:00", title: "Kalta Minor Minaret", description: "Unfinished blue-tiled minaret, Khiva's icon.", location: "Khiva", lat: 41.3781, lng: 60.3591 },
      { time: "09:00", title: "Kunya-Ark Fortress", location: "Khiva", lat: 41.3778, lng: 60.3568 },
      { time: "11:00", title: "Tash Hauli Palace", description: "Harem quarters and throne room with intricate tiles.", location: "Khiva", lat: 41.3778, lng: 60.3606 },
      { time: "15:00", title: "Juma Mosque", description: "218 wooden columns, each uniquely carved.", location: "Khiva", lat: 41.3776, lng: 60.3580 },
    ],
  },
  {
    date: "2027-03-19", title: "Khiva - Islam Khodja & Sunset Walls",
    activities: [
      { time: "08:00", title: "Islam Khodja Minaret", description: "Tallest in Khiva at 57m, panoramic views.", location: "Khiva", lat: 41.3786, lng: 60.3600 },
      { time: "10:00", title: "Carpet workshop & silk embroidery demo", location: "Khiva", lat: 41.3780, lng: 60.3580 },
      { time: "14:00", title: "City wall walk", description: "Circuit atop the mud-brick ramparts.", location: "Khiva", lat: 41.3790, lng: 60.3590 },
      { time: "17:00", title: "Sunset from the city walls", location: "Khiva", lat: 41.3790, lng: 60.3590 },
    ],
  },
  {
    date: "2027-03-20", title: "Travel to Nukus",
    activities: [
      { time: "07:00", title: "Shared taxi to Nukus", description: "~4 hours through desert.", location: "Khiva", lat: 41.3787, lng: 60.3630, category: "transport" },
      { time: "12:00", title: "Arrive Nukus, check in", location: "Nukus", lat: 42.4628, lng: 59.6110, category: "accommodation" },
      { time: "14:00", title: "Savitsky Karakalpakstan Museum", description: "World-class avant-garde art collection saved from Stalin.", location: "Nukus", lat: 42.4623, lng: 59.6101 },
    ],
  },
  {
    date: "2027-03-21", title: "Nukus - Mizdakhan & Savitsky",
    activities: [
      { time: "09:00", title: "Savitsky Museum - Part 2", description: "Karakalpak folk art & archaeological finds.", location: "Nukus", lat: 42.4623, lng: 59.6101 },
      { time: "13:00", title: "Mizdakhan Necropolis", description: "Ancient cemetery and ruins on a hill outside Nukus.", location: "Nukus", lat: 42.4300, lng: 59.6700 },
    ],
  },
  {
    date: "2027-03-22", title: "Travel Day - Nukus to Almaty",
    activities: [
      { time: "06:00", title: "Train/bus to Almaty", description: "Long cross-border travel day via Tashkent.", location: "Nukus", lat: 42.4628, lng: 59.6110, category: "transport" },
      { time: "12:00", title: "Border crossing Uzbekistan -> Kazakhstan", location: "Uzbekistan-Kazakhstan border", lat: 41.5700, lng: 69.4300, category: "transport" },
      { time: "22:00", title: "Arrive Almaty, check in", location: "Almaty", lat: 43.2220, lng: 76.8512, category: "accommodation" },
    ],
  },
  {
    date: "2027-03-23", title: "Almaty - Cathedral & Bazaar",
    activities: [
      { time: "09:00", title: "Zenkov Cathedral (Ascension Cathedral)", description: "Stunning wooden cathedral in Panfilov Park.", location: "Almaty", lat: 43.2584, lng: 76.9560 },
      { time: "11:00", title: "Panfilov Park & Eternal Flame", location: "Almaty", lat: 43.2583, lng: 76.9537 },
      { time: "14:00", title: "Green Bazaar (Zelyony Bazaar)", category: "food", location: "Almaty", lat: 43.2583, lng: 76.9525 },
      { time: "18:00", title: "Arbat Street (Zhibek Zholy) evening stroll", location: "Almaty", lat: 43.2572, lng: 76.9474 },
    ],
  },
  {
    date: "2027-03-24", title: "Almaty - Kok-Tobe & City Views",
    activities: [
      { time: "10:00", title: "Central State Museum of Kazakhstan", location: "Almaty", lat: 43.2354, lng: 76.9551 },
      { time: "13:00", title: "Cable car up Kok-Tobe Hill", description: "Panoramic city views with the Tian Shan backdrop.", location: "Almaty", lat: 43.2395, lng: 76.9615 },
      { time: "16:00", title: "Kok-Tobe Park & Beatles monument", location: "Almaty", lat: 43.2395, lng: 76.9615 },
    ],
  },
  {
    date: "2027-03-25", title: "Big Almaty Lake Day Trip",
    activities: [
      { time: "08:00", title: "Scenic drive to Big Almaty Lake", description: "~30 km south of the city.", location: "Almaty", lat: 43.2220, lng: 76.8512, category: "transport" },
      { time: "10:00", title: "Hike around the turquoise lake", description: "Alpine lake at 2511m elevation.", location: "Big Almaty Lake", lat: 43.0518, lng: 76.9842 },
      { time: "13:00", title: "Picnic lunch with mountain views", category: "food", location: "Big Almaty Lake", lat: 43.0518, lng: 76.9842 },
      { time: "16:00", title: "Return to Almaty", location: "Almaty", lat: 43.2220, lng: 76.8512, category: "transport" },
    ],
  },
  {
    date: "2027-03-26", title: "Charyn Canyon Day Trip",
    activities: [
      { time: "07:00", title: "Drive to Charyn Canyon", description: "~3 hours east of Almaty.", location: "Almaty", lat: 43.2220, lng: 76.8512, category: "transport" },
      { time: "10:30", title: "Valley of Castles hike", description: "Most scenic section of the canyon.", location: "Charyn Canyon", lat: 43.3500, lng: 79.0800 },
      { time: "13:00", title: "Walk down to Charyn River", location: "Charyn Canyon", lat: 43.3500, lng: 79.0800 },
      { time: "16:00", title: "Drive back to Almaty", location: "Almaty", lat: 43.2220, lng: 76.8512, category: "transport" },
    ],
  },
  {
    date: "2027-03-27", title: "Fly Almaty to Taipei",
    activities: [
      { time: "10:00", title: "Transfer to Almaty International Airport", location: "Almaty", lat: 43.3517, lng: 77.0393, category: "transport" },
      { time: "13:00", title: "Flight Almaty to Taipei", category: "transport", location: "Almaty", lat: 43.3517, lng: 77.0393 },
      { time: "22:00", title: "Arrive Taipei, check in", location: "Taoyuan International Airport", lat: 25.0782, lng: 121.2328, category: "accommodation" },
    ],
  },
];
