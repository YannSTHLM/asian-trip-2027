import type { TripRoute } from "../../trip-config";
import { getLegSchedule } from "../../trip-config";

export interface ExpenseSeed {
  category: string;
  amount: number;
  currency: string;
  sekAmount: number;
  description: string;
  date: string;
}

function midDate(start: string, offsetDays: number): string {
  const d = new Date(start + "T00:00:00");
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split("T")[0];
}

export function getExpenses(route: TripRoute, travelers: number): ExpenseSeed[] {
  const t = travelers;

  const schedule = getLegSchedule(route);
  const leg = (name: string) => schedule.find((l) => l.name === name)!;
  const inLeg = (name: string, offset: number) => midDate(leg(name).startDate, offset);

  const base: ExpenseSeed[] = [
    { category: "visa", amount: 1800 * t, currency: "SEK", sekAmount: 1800 * t, description: "China double-entry visa", date: "2027-01-15" },
    { category: "flights", amount: 23000 * t, currency: "SEK", sekAmount: 23000 * t, description: "Stockholm → Beijing business class", date: "2027-01-20" },
  ];

  const specific: ExpenseSeed[] = [];

  if (route === "taiwan-philippines") {
    specific.push(
      { category: "accommodation", amount: 3000 * t, currency: "SEK", sekAmount: 3000 * t, description: "Beijing (5 nights)", date: inLeg("China #1", 0) },
      { category: "accommodation", amount: 2500 * t, currency: "SEK", sekAmount: 2500 * t, description: "Xi'an (4 nights)", date: inLeg("China #1", 5) },
      { category: "accommodation", amount: 2500 * t, currency: "SEK", sekAmount: 2500 * t, description: "Chengdu (4 nights)", date: inLeg("China #1", 9) },
      { category: "accommodation", amount: 2000 * t, currency: "SEK", sekAmount: 2000 * t, description: "Zhangjiajie (3 nights)", date: inLeg("China #1", 13) },
      { category: "accommodation", amount: 3000 * t, currency: "SEK", sekAmount: 3000 * t, description: "Yunnan — Tiger Leaping Gorge (5 nights)", date: inLeg("China #1", 16) },
      { category: "flights", amount: 2000 * t, currency: "SEK", sekAmount: 2000 * t, description: "Xi'an → Chengdu flight", date: inLeg("China #1", 8) },
      { category: "flights", amount: 2000 * t, currency: "SEK", sekAmount: 2000 * t, description: "Zhangjiajie → Kunming flight", date: inLeg("China #1", 16) },
      { category: "food", amount: 400 * t, currency: "CNY", sekAmount: 560 * t, description: "Peking Duck dinner — Beijing", date: inLeg("China #1", 1) },
      { category: "food", amount: 150 * t, currency: "CNY", sekAmount: 210 * t, description: "Xi'an street food", date: inLeg("China #1", 6) },
      { category: "food", amount: 300 * t, currency: "CNY", sekAmount: 420 * t, description: "Sichuan hotpot — Chengdu", date: inLeg("China #1", 10) },
      { category: "transport", amount: 1800 * t, currency: "CNY", sekAmount: 2520 * t, description: "Beijing → Xi'an high-speed train", date: inLeg("China #1", 4) },
      { category: "activities", amount: 600 * t, currency: "CNY", sekAmount: 840 * t, description: "Forbidden City + Great Wall", date: inLeg("China #1", 2) },
      { category: "activities", amount: 800 * t, currency: "CNY", sekAmount: 1120 * t, description: "Terracotta Warriors + Huashan", date: inLeg("China #1", 7) },
      { category: "activities", amount: 500 * t, currency: "CNY", sekAmount: 700 * t, description: "Panda base — Chengdu", date: inLeg("China #1", 11) },
      { category: "activities", amount: 1200 * t, currency: "CNY", sekAmount: 1680 * t, description: "Zhangjiajie National Park (Avatar mountains)", date: inLeg("China #1", 14) },
      { category: "activities", amount: 800 * t, currency: "CNY", sekAmount: 1120 * t, description: "Tiger Leaping Gorge trek", date: inLeg("China #1", 18) },
      { category: "accommodation", amount: 2500 * t, currency: "SEK", sekAmount: 2500 * t, description: "Guilin & Yangshuo (4 nights)", date: inLeg("China #2", 0) },
      { category: "food", amount: 200 * t, currency: "CNY", sekAmount: 280 * t, description: "Yunnan crossing-bridge noodles", date: inLeg("China #2", 1) },
      { category: "activities", amount: 600 * t, currency: "CNY", sekAmount: 840 * t, description: "Li River cruise + Yangshuo", date: inLeg("China #2", 2) },
      { category: "flights", amount: 2000 * t, currency: "SEK", sekAmount: 2000 * t, description: "Guilin → Hanoi flight", date: inLeg("Vietnam", 0) },
      { category: "accommodation", amount: 3500 * t, currency: "SEK", sekAmount: 3500 * t, description: "Vietnam (10 nights)", date: inLeg("Vietnam", 1) },
      { category: "food", amount: 200 * t, currency: "VND", sekAmount: 84 * t, description: "Hanoi street food", date: inLeg("Vietnam", 1) },
      { category: "food", amount: 300 * t, currency: "VND", sekAmount: 126 * t, description: "Hoi An dinner", date: inLeg("Vietnam", 7) },
      { category: "transport", amount: 800 * t, currency: "SEK", sekAmount: 800 * t, description: "Vietnam trains + buses", date: inLeg("Vietnam", 2) },
      { category: "activities", amount: 2000 * t, currency: "VND", sekAmount: 840 * t, description: "Halong Bay cruise (2D/1N)", date: inLeg("Vietnam", 3) },
      { category: "flights", amount: 3000 * t, currency: "SEK", sekAmount: 3000 * t, description: "Hanoi → Taipei flight", date: inLeg("Taiwan", 0) },
      { category: "accommodation", amount: 6000 * t, currency: "SEK", sekAmount: 6000 * t, description: "Taiwan (18 nights)", date: inLeg("Taiwan", 1) },
      { category: "food", amount: 500 * t, currency: "TWD", sekAmount: 165 * t, description: "Taipei night market", date: inLeg("Taiwan", 2) },
      { category: "food", amount: 400 * t, currency: "TWD", sekAmount: 132 * t, description: "Tainan street food", date: inLeg("Taiwan", 9) },
      { category: "transport", amount: 1500 * t, currency: "TWD", sekAmount: 495 * t, description: "Taiwan HSR + local transit", date: inLeg("Taiwan", 3) },
      { category: "activities", amount: 300 * t, currency: "TWD", sekAmount: 99 * t, description: "Taipei 101 + Elephant Mountain", date: inLeg("Taiwan", 3) },
      { category: "activities", amount: 500 * t, currency: "TWD", sekAmount: 165 * t, description: "Taroko Gorge park entry", date: inLeg("Taiwan", 7) },
    );
  } else if (route === "central-asia") {
    specific.push(
      { category: "accommodation", amount: 3000 * t, currency: "SEK", sekAmount: 3000 * t, description: "Beijing (5 nights)", date: inLeg("China #1", 0) },
      { category: "accommodation", amount: 2500 * t, currency: "SEK", sekAmount: 2500 * t, description: "Xi'an (4 nights)", date: inLeg("China #1", 5) },
      { category: "accommodation", amount: 3500 * t, currency: "SEK", sekAmount: 3500 * t, description: "Urumqi (7 nights)", date: inLeg("China #1", 9) },
      { category: "food", amount: 400 * t, currency: "CNY", sekAmount: 560 * t, description: "Peking Duck — Beijing", date: inLeg("China #1", 1) },
      { category: "food", amount: 200 * t, currency: "CNY", sekAmount: 280 * t, description: "Urumqi market food", date: inLeg("China #1", 12) },
      { category: "transport", amount: 1800 * t, currency: "CNY", sekAmount: 2520 * t, description: "Beijing → Xi'an high-speed train", date: inLeg("China #1", 4) },
      { category: "activities", amount: 600 * t, currency: "CNY", sekAmount: 840 * t, description: "Forbidden City + Great Wall", date: inLeg("China #1", 2) },
      { category: "activities", amount: 800 * t, currency: "CNY", sekAmount: 1120 * t, description: "Terracotta Warriors", date: inLeg("China #1", 6) },
      { category: "activities", amount: 400 * t, currency: "CNY", sekAmount: 560 * t, description: "Silk Road market — Urumqi", date: inLeg("China #1", 13) },
      { category: "flights", amount: 3000 * t, currency: "SEK", sekAmount: 3000 * t, description: "Urumqi → Tashkent flight", date: inLeg("Central Asia", 0) },
      { category: "accommodation", amount: 2500 * t, currency: "SEK", sekAmount: 2500 * t, description: "Uzbekistan (16 nights)", date: inLeg("Central Asia", 1) },
      { category: "accommodation", amount: 2000 * t, currency: "SEK", sekAmount: 2000 * t, description: "Kazakhstan (6 nights)", date: inLeg("Central Asia", 17) },
      { category: "food", amount: 200 * t, currency: "USD", sekAmount: 2100 * t, description: "Central Asia meals", date: inLeg("Central Asia", 2) },
      { category: "food", amount: 100 * t, currency: "USD", sekAmount: 1050 * t, description: "Almaty meals", date: inLeg("Central Asia", 18) },
      { category: "transport", amount: 500 * t, currency: "USD", sekAmount: 5250 * t, description: "Trains + taxis Central Asia", date: inLeg("Central Asia", 3) },
      { category: "activities", amount: 100 * t, currency: "USD", sekAmount: 1050 * t, description: "Silk Road UNESCO sites", date: inLeg("Central Asia", 4) },
      { category: "activities", amount: 50 * t, currency: "USD", sekAmount: 525 * t, description: "Savitsky Museum — Nukus", date: inLeg("Central Asia", 20) },
      { category: "visa", amount: 500 * t, currency: "SEK", sekAmount: 500 * t, description: "Uzbekistan e-visa", date: "2027-02-01" },
      { category: "flights", amount: 4000 * t, currency: "SEK", sekAmount: 4000 * t, description: "Almaty → Taipei flight", date: inLeg("Taiwan", 0) },
      { category: "accommodation", amount: 3500 * t, currency: "SEK", sekAmount: 3500 * t, description: "Taiwan (15 nights)", date: inLeg("Taiwan", 1) },
      { category: "food", amount: 500 * t, currency: "TWD", sekAmount: 165 * t, description: "Taipei night market", date: inLeg("Taiwan", 2) },
      { category: "activities", amount: 200 * t, currency: "TWD", sekAmount: 48 * t, description: "Taroko Gorge", date: inLeg("Taiwan", 4) },
      { category: "flights", amount: 3000 * t, currency: "SEK", sekAmount: 3000 * t, description: "Taipei → flight to China", date: inLeg("China #2", 0) },
      { category: "accommodation", amount: 4000 * t, currency: "SEK", sekAmount: 4000 * t, description: "China return (15 nights)", date: inLeg("China #2", 1) },
    );
  } else {
    specific.push(
      { category: "accommodation", amount: 3000 * t, currency: "SEK", sekAmount: 3000 * t, description: "Beijing (5 nights)", date: inLeg("China #1", 0) },
      { category: "accommodation", amount: 2500 * t, currency: "SEK", sekAmount: 2500 * t, description: "Xi'an (4 nights)", date: inLeg("China #1", 5) },
      { category: "accommodation", amount: 3500 * t, currency: "SEK", sekAmount: 3500 * t, description: "Shanghai area (7 nights)", date: inLeg("China #1", 9) },
      { category: "food", amount: 400 * t, currency: "CNY", sekAmount: 560 * t, description: "Peking Duck — Beijing", date: inLeg("China #1", 1) },
      { category: "food", amount: 150 * t, currency: "CNY", sekAmount: 210 * t, description: "Xi'an street food", date: inLeg("China #1", 6) },
      { category: "transport", amount: 1800 * t, currency: "CNY", sekAmount: 2520 * t, description: "Beijing → Xi'an high-speed train", date: inLeg("China #1", 4) },
      { category: "activities", amount: 600 * t, currency: "CNY", sekAmount: 840 * t, description: "Forbidden City + Great Wall", date: inLeg("China #1", 2) },
      { category: "activities", amount: 800 * t, currency: "CNY", sekAmount: 1120 * t, description: "Terracotta Warriors", date: inLeg("China #1", 7) },
      { category: "flights", amount: 2500 * t, currency: "SEK", sekAmount: 2500 * t, description: "Xi'an → Vietnam flight", date: inLeg("China #1", 14) },
      { category: "accommodation", amount: 3500 * t, currency: "SEK", sekAmount: 3500 * t, description: "Vietnam (10 nights)", date: inLeg("Vietnam", 1) },
      { category: "food", amount: 200 * t, currency: "VND", sekAmount: 84 * t, description: "Hanoi street food", date: inLeg("Vietnam", 1) },
      { category: "food", amount: 300 * t, currency: "VND", sekAmount: 126 * t, description: "Hoi An dinner", date: inLeg("Vietnam", 6) },
      { category: "transport", amount: 300 * t, currency: "VND", sekAmount: 126 * t, description: "Vietnam local transport", date: inLeg("Vietnam", 2) },
      { category: "activities", amount: 2000000 * t, currency: "VND", sekAmount: 840 * t, description: "Halong Bay cruise (2D/1N)", date: inLeg("Vietnam", 3) },
      { category: "flights", amount: 3500 * t, currency: "SEK", sekAmount: 3500 * t, description: "Hanoi → Tokyo flight", date: inLeg("Japan", 0) },
      { category: "accommodation", amount: 7000 * t, currency: "SEK", sekAmount: 7000 * t, description: "Japan (20 nights)", date: inLeg("Japan", 1) },
      { category: "food", amount: 3000 * t, currency: "JPY", sekAmount: 216 * t, description: "Ramen + sushi — Tokyo", date: inLeg("Japan", 2) },
      { category: "food", amount: 5000 * t, currency: "JPY", sekAmount: 360 * t, description: "Osaka street food tour", date: inLeg("Japan", 10) },
      { category: "transport", amount: 35000 * t, currency: "JPY", sekAmount: 2520 * t, description: "JR Pass (14 days)", date: inLeg("Japan", 1) },
      { category: "transport", amount: 5000 * t, currency: "JPY", sekAmount: 360 * t, description: "IC card + local transit", date: inLeg("Japan", 3) },
      { category: "activities", amount: 5000 * t, currency: "JPY", sekAmount: 360 * t, description: "teamLab Planets — Tokyo", date: inLeg("Japan", 3) },
      { category: "activities", amount: 10000 * t, currency: "JPY", sekAmount: 720 * t, description: "Fushimi Inari + Kinkaku-ji — Kyoto", date: inLeg("Japan", 8) },
      { category: "activities", amount: 8000 * t, currency: "JPY", sekAmount: 576 * t, description: "Miyajima + Itsukushima shrine", date: inLeg("Japan", 15) },
      { category: "flights", amount: 3500 * t, currency: "SEK", sekAmount: 3500 * t, description: "Tokyo → Beijing flight", date: inLeg("China #2", 0) },
      { category: "accommodation", amount: 4000 * t, currency: "SEK", sekAmount: 4000 * t, description: "China final leg (20 nights)", date: inLeg("China #2", 1) },
    );
  }

  return [...base, ...specific];
}
