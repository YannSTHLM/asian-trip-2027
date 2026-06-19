export interface NoteSeed {
  title: string;
  content: string;
  tags: string;
  date: string;
}

export const sampleNotes: NoteSeed[] = [
  {
    title: "Packing Tips for Asia",
    content: "# Packing Essentials\n\n- Universal power adapter (China: 2-pin flat, Vietnam: 2-pin round, Japan: 2-pin flat, Taiwan: 2-pin flat, Philippines: 2-pin flat/3-pin, Uzbekistan: 2-pin round)\n- VPN installed before arriving in China\n- Comfortable walking shoes (15k+ steps daily)\n- Portable charger/power bank\n- Reusable water bottle with filter\n- Light layers (spring weather varies)\n- Passport photos (useful for visas)\n- Toilet paper (many public toilets don't have any!)",
    tags: "preparation,tip",
    date: "2027-02-01",
  },
  {
    title: "VPN Setup - Critical for China",
    content: "# VPN is Essential\n\nInstall BEFORE leaving for China.\n\nRecommended:\n- Astrill (most reliable)\n- ExpressVPN\n- NordVPN (hit or miss)\n\nInstall on: phone, laptop, iPad\n\nWithout VPN: Google, WhatsApp, Instagram, Facebook, news sites blocked.",
    tags: "china,technology,tip",
    date: "2027-02-05",
  },
  {
    title: "Food to Try in Each Country",
    content: "# Must-Eat Foods\n\n## China\n- Peking Duck (Beijing)\n- Biang Biang noodles (Xi'an)\n- Sichuan Hotpot (Chengdu)\n- Dim Sum (Guangzhou)\n\n## Vietnam\n- Pho (Hanoi)\n- Bun Cha (Hanoi)\n- Banh Mi (Saigon)\n- Cao Lau (Hoi An)\n\n## Taiwan\n- Beef noodle soup\n- Stinky tofu\n- Bubble tea\n- Gua Bao (pork belly buns)\n\n## Philippines\n- Adobo\n- Lechon\n- Sinigang\n- Halo-halo",
    tags: "food,recommendation",
    date: "2027-02-10",
  },
  {
    title: "Money & Payments Guide",
    content: "# How to Pay in Each Country\n\n## China\n- Alipay / WeChat Pay (link foreign card)\n- Carry some cash for street food\n- ATMs widely available\n\n## Vietnam\n- Cash is king\n- Cards accepted in hotels/restaurants\n- MoMo app for mobile payments\n\n## Taiwan\n- EasyCard for transport + convenience stores\n- Credit cards widely accepted\n\n## Philippines\n- Cash everywhere\n- GCash app\n- Cards in malls/hotels\n\n## Uzbekistan / Kazakhstan\n- Cash primarily (USD or local currency)\n- Cards in nicer restaurants",
    tags: "money,tip",
    date: "2027-02-12",
  },
];
