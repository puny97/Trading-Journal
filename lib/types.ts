export type TradeSide = "LONG" | "SHORT";
export type TradeStatus = "OPEN" | "CLOSED";

export type Trade = {
  id: string;
  symbol: string;
  side: TradeSide;
  entryTime: string; // ISO string
  exitTime: string | null; // null while position is open
  entryPrice: number;
  exitPrice: number | null;
  qty: number;
  status: TradeStatus;
  pnl: number | null; // null while position is open
  notes: string;
  tags: string[];
}

// One aggregated cell for the P&L heatmap strip on the dashboard
export type DayPnl = {
  date: string; // "YYYY-MM-DD"
  label: string; // short day label e.g. "14"
  pnl: number;
  tradeCount: number;
}