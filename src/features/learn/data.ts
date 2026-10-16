export type Lesson = {
  slug: string;
  title: string;
  category: string;
  /** Watch time, shown on the lesson card. */
  duration: string;
  /** Percent of the video watched, 0–100. */
  progress: number;
  /** XP granted once the video is finished. */
  reward: number;
  description: string;
};

export const lessons: Lesson[] = [
  {
    slug: "what-is-budgeting",
    title: "What is Budgeting?",
    category: "Finance Basics",
    duration: "4 min",
    progress: 0,
    reward: 15,
    description:
      "Learn how to manage your finances by creating an effective budget. This video will cover the basics of budgeting for beginners.",
  },
  {
    slug: "intro-to-crypto",
    title: "Intro to Crypto",
    category: "Finance Basics",
    duration: "6 min",
    progress: 0,
    reward: 15,
    description:
      "Learn the fundamentals of cryptocurrency and how it works. This video will introduce you to the basics of blockchain, digital assets, and how to get started with crypto safely.",
  },
  {
    slug: "e-wallet-secrets",
    title: "E-wallet secrets",
    category: "Finance Basics",
    duration: "5 min",
    progress: 0,
    reward: 15,
    description:
      "Discover the secrets of using e-wallets to manage your money smarter. This video will cover the basics of digital wallets, from setup to safe transactions.",
  },
  {
    slug: "game-money-vs-real",
    title: "Game money vs real",
    category: "Finance Basics",
    duration: "5 min",
    progress: 0,
    reward: 15,
    description:
      "Explore the difference between virtual game money and real-world currency. This video will explain how in-game economies work and what sets them apart from real money.",
  },
  {
    slug: "stop-online-scams",
    title: "Stop online scams",
    category: "Finance Basics",
    duration: "6 min",
    progress: 0,
    reward: 15,
    description:
      "Learn how to protect yourself from online scams and fraud. This video will cover the common tactics scammers use and how you can stay safe on the internet.",
  },
  {
    slug: "bnpl-trap",
    title: "BNPL Trap",
    category: "Finance Basics",
    duration: "7 min",
    progress: 0,
    reward: 15,
    description:
      "Understand the hidden risks behind Buy Now, Pay Later services. This video will explain how BNPL works, its benefits, and the potential traps to avoid.",
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export const totalLessons = lessons.length;

/** XP already banked across all lessons. */
export const earnedXp = lessons.reduce(
  (total, lesson) => total + (lesson.progress >= 100 ? lesson.reward : 0),
  0,
);

/** XP still up for grabs. */
export const availableXp = lessons.reduce(
  (total, lesson) => total + lesson.reward,
  0,
);

export const completedLessons = lessons.filter(
  (lesson) => lesson.progress >= 100,
).length;
