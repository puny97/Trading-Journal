'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs'
import DashboardTab from '../dashboard-tab/DashboardTab'
import TradesTab from '../trades-tab/TradesTab'
import AnalyticsTab from '../analytics-tab/AnalyticsTab'
import { LuChartCandlestick } from 'react-icons/lu'

const tabTriggerClass =
  'rounded-none border-b-2 border-transparent bg-transparent px-1 pb-3 pt-0 text-sm font-medium text-secondary shadow-none data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-accent data-[state=active]:shadow-none'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-page">
      <Tabs defaultValue="dashboard" className="w-full">
        {/* Top navbar: logo, tab nav, and account avatar in one row */}
        <div className="flex h-14 items-center gap-7 border-b border-border px-6">
          <div className="flex items-center gap-2 text-[15px] font-semibold text-text">
            <LuChartCandlestick className="h-5 w-5 text-accent" />
            TradeJournal
          </div>

          <TabsList className="h-full gap-6 bg-transparent p-0">
            <TabsTrigger value="dashboard" className={tabTriggerClass}>
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="trades" className={tabTriggerClass}>
              Trades
            </TabsTrigger>
            <TabsTrigger value="analytics" className={tabTriggerClass}>
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Swap "SK" for the logged-in user's initials once auth/profile data is wired up */}
          <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-border text-[11px] font-medium text-secondary">
            SK
          </div>
        </div>

        <TabsContent value="dashboard" className="mt-0">
          <DashboardTab />
        </TabsContent>
        <TabsContent value="trades" className="mt-0">
          <TradesTab />
        </TabsContent>
        <TabsContent value="analytics" className="mt-0">
          <AnalyticsTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Dashboard
