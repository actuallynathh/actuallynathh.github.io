export const wallet = {
  balance: 67000,
  changePercent: 8.6,
  changeCoins: 900,
};

/** Portfolio value (IDR) over the last 30 days, ending above Rp260k. */
export const growthSeries: number[] = [
  132000, 138000, 135400, 144200, 141000, 150100, 147300, 156000, 152400,
  161200, 158000, 168300, 164100, 173400, 170200, 179500, 176100, 186400,
  182300, 192600, 189100, 199300, 196200, 206400, 203100, 214200, 211300,
  223600, 231200, 242400, 255100, 268300,
];

export const growthLabels = [
  "May 22",
  "May 29",
  "Jun 5",
  "Jun 12",
  "Jun 19",
  "Today",
];

export const referral = {
  title: "Refer a Friend, Get 500 Coins!",
  description:
    "Share your code and you'll both get a bonus when they sign up.",
  code: "XPAL-4G7K-9B1M",
  reward: 500,
};

export type LessonCard = {
  title: string;
  category: string;
  duration: string;
  progress: number;
  reward: number;
};

export const featuredLessons: LessonCard[] = [
  {
    title: "What is Budgeting?",
    category: "Finance Basics",
    duration: "4 min",
    progress: 0,
    reward: 15,
  },
  {
    title: "Intro to Crypto",
    category: "Cryptocurrency",
    duration: "6 min",
    progress: 0,
    reward: 15,
  },
  {
    title: "Finance Basics",
    category: "Foundations",
    duration: "5 min",
    progress: 0,
    reward: 15,
  },
  {
    title: "Modern Finance",
    category: "Trends",
    duration: "7 min",
    progress: 0,
    reward: 15,
  },
];
