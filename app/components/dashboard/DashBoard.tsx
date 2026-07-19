'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs'
import DashboardTab from '../dashboard-tab/DashboardTab'
import TradesTab from '../trades-tab/TradesTab'
import AnalyticsTab from '../analytics-tab/AnalyticsTab'

const tabTriggerClass =
  'rounded-none border-b-2 border-transparent bg-transparent px-1 pb-3 pt-0 text-sm font-medium text-secondary shadow-none data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-accent data-[state=active]:shadow-none'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-page">
      <Tabs defaultValue="dashboard" className="w-full">
        <div className="border-b border-border px-6">
          <TabsList className="h-auto gap-6 bg-transparent p-0">
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
