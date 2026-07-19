import { Trade } from '@/lib/types'

export type TodaysTradesTableProps = {
  trades: Trade[]
  onSelectTrade?: (trade: Trade) => void
}
