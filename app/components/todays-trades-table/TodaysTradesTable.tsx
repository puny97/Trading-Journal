'use client'

import { formatPnl, formatPrice } from '@/lib/format'
import { TodaysTradesTableProps } from './types'

const TodaysTradesTable = ({ trades, onSelectTrade }: TodaysTradesTableProps) => {
  return (
    <div>
      <p className="mb-2 text-xs text-secondary">Today&apos;s trades</p>
      <div className="overflow-hidden rounded-[10px] border border-border bg-surface">
        <div className="grid grid-cols-[1.4fr_0.8fr_1fr_1fr_1fr] border-b border-border px-3.5 py-2.5 text-[11px] text-muted">
          <span>SYMBOL</span>
          <span>SIDE</span>
          <span>ENTRY</span>
          <span>EXIT</span>
          <span>P&amp;L</span>
        </div>

        {trades.length === 0 ? (
          <div className="px-3.5 py-6 text-center text-sm text-secondary">No trades yet today.</div>
        ) : (
          trades.map((trade, i) => (
            <button
              key={trade.id}
              type="button"
              onClick={() => onSelectTrade?.(trade)}
              className={`grid w-full grid-cols-[1.4fr_0.8fr_1fr_1fr_1fr] items-center px-3.5 py-3 text-left text-sm hover:bg-page ${
                i !== trades.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <span className="font-medium">{trade.symbol}</span>
              <span className={trade.side === 'LONG' ? 'text-profit' : 'text-loss'}>
                {trade.side === 'LONG' ? 'Long' : 'Short'}
              </span>
              <span className="font-mono">{formatPrice(trade.entryPrice)}</span>
              <span className="font-mono">
                {trade.exitPrice !== null ? (
                  formatPrice(trade.exitPrice)
                ) : (
                  <span className="text-open">open</span>
                )}
              </span>
              <span
                className={`font-mono ${trade.pnl !== null ? (trade.pnl >= 0 ? 'text-profit' : 'text-loss') : 'text-secondary'}`}
              >
                {trade.pnl !== null ? formatPnl(trade.pnl) : '—'}
              </span>
            </button>
          ))
        )}
      </div>
    </div>
  )
}

export default TodaysTradesTable
