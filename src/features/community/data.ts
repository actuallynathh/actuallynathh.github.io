export type Community = {
  slug: string;
  name: string;
  description: string;
};

/** The groups listed on the "Join a community" screen. */
export const communities: Community[] = [
  {
    slug: "crypto-talk",
    name: "Crypto Talk",
    description: "All about cryptocurrency trends and news",
  },
  {
    slug: "stock-beginners",
    name: "Stock Beginners",
    description: "A friendly place to start your stock journey.",
  },
  {
    slug: "simulator-strategies",
    name: "Simulator Strategies",
    description: "Share your best simulator tips and tricks.",
  },
];

export function getCommunity(slug: string): Community | undefined {
  return communities.find((community) => community.slug === slug);
}

export type ChatMessage = {
  id: string;
  author: string;
  body: string;
  time: string;
  /** Messages written by the signed-in user render on the right. */
  mine?: boolean;
};

/** Opening messages for each group room. */
export const groupThreads: Record<string, ChatMessage[]> = {
  "crypto-talk": [
    {
      id: "c1",
      author: "satoshi",
      body: "BTC is holding above 70k in the simulator — anyone else watching this?",
      time: "09:12",
    },
    {
      id: "c2",
      author: "marketwiz",
      body: "I set a limit order last week and it finally filled today.",
      time: "09:20",
    },
    {
      id: "c3",
      author: "ether_edge",
      body: "Reminder: these prices are simulated, so don't read too much into them.",
      time: "09:31",
    },
    {
      id: "c4",
      author: "quant",
      body: "What's everyone's rule for position sizing? Still figuring mine out.",
      time: "09:44",
    },
  ],
  "stock-beginners": [
    {
      id: "s1",
      author: "finpro",
      body: "New here — just finished 'What is Budgeting?'. The XP reward is a nice touch.",
      time: "08:05",
    },
    {
      id: "s2",
      author: "bullrun",
      body: "Start with the JKSE index if you want something calmer than single stocks.",
      time: "08:18",
    },
    {
      id: "s3",
      author: "trader_ace",
      body: "Don't put everything into one symbol, even in a simulator. Build the habit early.",
      time: "08:40",
    },
    {
      id: "s4",
      author: "satoshi",
      body: "Has anyone tried the weekly leaderboard challenge yet?",
      time: "09:02",
    },
  ],
  "simulator-strategies": [
    {
      id: "t1",
      author: "rbdmedia",
      body: "My best tip: write down why you're buying before you buy.",
      time: "10:15",
    },
    {
      id: "t2",
      author: "ezwinvest",
      body: "I keep a note of every simulated trade. It's humbling.",
      time: "10:28",
    },
    {
      id: "t3",
      author: "xpcurrency",
      body: "Buying and selling on the same day never works out for me.",
      time: "10:51",
    },
    {
      id: "t4",
      author: "quant",
      body: "Decide when you'll sell before you buy, not after.",
      time: "11:07",
    },
  ],
};

export function getGroupThread(slug: string): ChatMessage[] {
  return groupThreads[slug] ?? [];
}

export type Expert = {
  slug: string;
  name: string;
  role: "Investor" | "Trader";
  bio: string;
  online: boolean;
};

/** Expert Chat is a Premium feature — see PremiumGate. */
export const experts: Expert[] = [
  {
    slug: "john-crypto",
    name: "John Crypto",
    role: "Investor",
    bio: "Digital assets and building a long-term portfolio.",
    online: true,
  },
  {
    slug: "maya-stocks",
    name: "Maya Stocks",
    role: "Trader",
    bio: "Swing trading on the JKSE simulator.",
    online: true,
  },
  {
    slug: "arif-value",
    name: "Arif Value",
    role: "Investor",
    bio: "Value investing and reading company fundamentals.",
    online: false,
  },
  {
    slug: "dina-market",
    name: "Dina Market",
    role: "Trader",
    bio: "Risk management and position sizing.",
    online: true,
  },
];

export function getExpert(slug: string): Expert | undefined {
  return experts.find((expert) => expert.slug === slug);
}

/** Opening message from each expert, keyed by slug. */
export const expertThreads: Record<string, ChatMessage[]> = {
  "john-crypto": [
    {
      id: "j1",
      author: "John Crypto",
      body: "Hi! I'm John. Ask me anything about building a long-term crypto position.",
      time: "09:00",
    },
  ],
  "maya-stocks": [
    {
      id: "m1",
      author: "Maya Stocks",
      body: "Hey! I trade the JKSE simulator most weeks. What would you like to look at?",
      time: "09:00",
    },
  ],
  "arif-value": [
    {
      id: "a1",
      author: "Arif Value",
      body: "Hello. If you're learning to read fundamentals, send me a company and we'll go through it.",
      time: "09:00",
    },
  ],
  "dina-market": [
    {
      id: "d1",
      author: "Dina Market",
      body: "Hi! Risk first, returns second. Ask me about sizing a position.",
      time: "09:00",
    },
  ],
};

export function getExpertThread(slug: string): ChatMessage[] {
  return expertThreads[slug] ?? [];
}
