import { DayPnl } from '@/lib/types'

export type PnlHeatmapProps = {
  days: DayPnl[]
  today: string
  onSelectDay?: (date: string) => void
}
