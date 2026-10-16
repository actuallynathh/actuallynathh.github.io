export type Player = {
  rank: number;
  name: string;
  handle: string;
  points: number;
};

/** Weekly leaderboard, transcribed from the design. */
export const leaderboard: Player[] = [
  { rank: 1, name: "Xylene", handle: "@ezwinvest", points: 191000 },
  { rank: 2, name: "Reeves", handle: "@xpcurrency", points: 167000 },
  { rank: 3, name: "Jez", handle: "@rbdmedia", points: 155000 },
  { rank: 4, name: "Satoshi", handle: "@satoshi", points: 154000 },
  { rank: 5, name: "Market Wiz", handle: "@marketwiz", points: 150000 },
  { rank: 6, name: "Trader Ace", handle: "@trader_ace", points: 137000 },
  { rank: 7, name: "Bull Run", handle: "@bullrun", points: 136500 },
  { rank: 8, name: "FinPro", handle: "@finpro", points: 129400 },
  { rank: 9, name: "Quant", handle: "@quant", points: 125800 },
  { rank: 10, name: "Ether Edge", handle: "@ether_edge", points: 110600 },
];
