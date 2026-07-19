import { DayPnl, Trade } from "./types";


/**
 * All dummy data is pinned to a fixed date instead of `new Date()`.
 * Once the NestJS API is wired up, DASHBOARD_TODAY goes away and
 * "today" comes from the server response / the user's system clock.
 */
export const DASHBOARD_TODAY = "2026-07-14";

export const dummyTrades: Trade[] = [
  {
    id: "t1",
    symbol: "RELIANCE",
    side: "LONG",
    entryTime: "2026-07-14T09:20:00",
    exitTime: "2026-07-14T09:47:00",
    entryPrice: 2845.5,
    exitPrice: 2861.2,
    qty: 50,
    status: "CLOSED",
    pnl: 1570,
    notes:
      "Waited for the opening range breakout above 2,840 with volume confirmation. Booked half at 1.5R, trailed the rest.",
    tags: ["breakout", "followed plan"],
  },
  {
    id: "t2",
    symbol: "HDFCBANK",
    side: "SHORT",
    entryTime: "2026-07-14T10:05:00",
    exitTime: "2026-07-14T10:22:00",
    entryPrice: 1632.1,
    exitPrice: 1624.8,
    qty: 40,
    status: "CLOSED",
    pnl: 2190,
    notes: "Reversal at resistance, confirmed with RSI divergence.",
    tags: ["reversal"],
  },
  {
    id: "t3",
    symbol: "TATASTEEL",
    side: "LONG",
    entryTime: "2026-07-14T10:40:00",
    exitTime: "2026-07-14T10:55:00",
    entryPrice: 168.3,
    exitPrice: 166.9,
    qty: 200,
    status: "CLOSED",
    pnl: -280,
    notes: "Entered without confirmation, chased the move. Revenge trade after the HDFC win.",
    tags: ["revenge trade", "mistake"],
  },
  {
    id: "t4",
    symbol: "NIFTY24700CE",
    side: "LONG",
    entryTime: "2026-07-14T11:15:00",
    exitTime: null,
    entryPrice: 142.3,
    exitPrice: null,
    qty: 75,
    status: "OPEN",
    pnl: null,
    notes: "",
    tags: [],
  },
];

// 14-day strip ending on DASHBOARD_TODAY, for the dashboard heatmap.
// In the real app this comes from a GROUP BY date aggregate on the backend.
export const dummyDailyPnl: DayPnl[] = [
  { date: "2026-07-01", label: "1", pnl: 1200, tradeCount: 4 },
  { date: "2026-07-02", label: "2", pnl: -800, tradeCount: 3 },
  { date: "2026-07-03", label: "3", pnl: 2400, tradeCount: 5 },
  { date: "2026-07-04", label: "4", pnl: 0, tradeCount: 0 },
  { date: "2026-07-07", label: "7", pnl: 3100, tradeCount: 6 },
  { date: "2026-07-08", label: "8", pnl: 1800, tradeCount: 4 },
  { date: "2026-07-09", label: "9", pnl: 0, tradeCount: 0 },
  { date: "2026-07-10", label: "10", pnl: -1500, tradeCount: 2 },
  { date: "2026-07-11", label: "11", pnl: 2200, tradeCount: 5 },
  { date: "2026-07-12", label: "12", pnl: 3400, tradeCount: 7 },
  { date: "2026-07-13", label: "13", pnl: -600, tradeCount: 3 },
  { date: "2026-07-14", label: "14", pnl: 3480, tradeCount: 4 },
];