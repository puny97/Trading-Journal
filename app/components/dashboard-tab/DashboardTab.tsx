'use client'

import { useMemo } from 'react'
import { dummyTrades, dummyDailyPnl, DASHBOARD_TODAY } from '@/lib/dummy-data'
import { Trade } from '@/lib/types'
import StatCard from '../stat-card/StatCard'
import PnlHeatmap from '../pnl-heat-map/PnlHeatMap'
import TodaysTradesTable from '../todays-trades-table/TodaysTradesTable'
import { formatPnl } from '@/lib/format'

const DashboardTab = () => {
  // Swap this filter for a `GET /trades?date=today` call once the API exists —
  // everything below just consumes `todaysTrades`, so nothing else changes.
  const todaysTrades = useMemo(
    () => dummyTrades.filter((t) => t.entryTime.startsWith(DASHBOARD_TODAY)),
    [],
  )

  const stats = useMemo(() => {
    const closedToday = todaysTrades.filter((t) => t.status === 'CLOSED')
    const pnl = closedToday.reduce((sum, t) => sum + (t.pnl ?? 0), 0)
    const wins = closedToday.filter((t) => (t.pnl ?? 0) > 0).length
    const winRate = closedToday.length > 0 ? Math.round((wins / closedToday.length) * 100) : 0
    const openPositions = todaysTrades.filter((t) => t.status === 'OPEN').length

    return {
      pnl,
      tradeCount: todaysTrades.length,
      winRate,
      openPositions,
    }
  }, [todaysTrades])

  function handleSelectTrade(trade: Trade) {
    // Wire this to open your trade detail sheet/drawer with `trade.id`
    console.log('open trade detail for', trade.id)
  }

  function handleSelectDay(date: string) {
    // Wire this to navigate to /trades with the date filter preset
    console.log('navigate to trades for', date)
  }

  return (
    <div className="p-6">
      <div className="mb-5 grid grid-cols-4 gap-3">
        <StatCard
          label="Today's P&L"
          value={formatPnl(stats.pnl)}
          valueClassName={stats.pnl >= 0 ? 'text-profit' : 'text-loss'}
        />
        <StatCard label="Trades today" value={String(stats.tradeCount)} />
        <StatCard label="Win rate" value={`${stats.winRate}%`} />
        <StatCard
          label="Open positions"
          value={String(stats.openPositions)}
          valueClassName={stats.openPositions > 0 ? 'text-open' : 'text-text'}
        />
      </div>

      <PnlHeatmap days={dummyDailyPnl} today={DASHBOARD_TODAY} onSelectDay={handleSelectDay} />

      <TodaysTradesTable trades={todaysTrades} onSelectTrade={handleSelectTrade} />
    </div>
  )
}

export default DashboardTab
