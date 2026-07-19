'use client'

import { DayPnl } from '@/lib/types'
import { PnlHeatmapProps } from './types'

// Buckets a day's P&L into a color tier. Adjust the thresholds to taste
// once you have real P&L ranges to calibrate against.
function cellColor(day: DayPnl): string {
  if (day.tradeCount === 0) return 'bg-border'
  if (day.pnl >= 2000) return 'bg-[#16A34A]'
  if (day.pnl > 0) return 'bg-[#86EFAC]'
  if (day.pnl <= -2000) return 'bg-[#DC2626]'
  return 'bg-[#FCA5A5]'
}

const PnlHeatmap = ({ days, today, onSelectDay }: PnlHeatmapProps) => {
  return (
    <div className="mb-5">
      <p className="mb-2 text-xs text-secondary">Last 14 days</p>
      <div className="grid grid-cols-14 gap-1" style={{ gridTemplateColumns: 'repeat(14, 1fr)' }}>
        {days.map((day) => (
          <button
            key={day.date}
            type="button"
            title={`${day.date} · ${day.tradeCount} trade${day.tradeCount === 1 ? '' : 's'}`}
            onClick={() => onSelectDay?.(day.date)}
            className={`h-6.5 rounded ${cellColor(day)} ${
              day.date === today ? 'ring-2 ring-accent ring-offset-1' : ''
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default PnlHeatmap
