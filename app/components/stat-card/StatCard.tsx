'use client'

import { StatCardProps } from './types'

const StatCard = ({ label, value, valueClassName }: StatCardProps) => {
  return (
    <div className="rounded-[10px] border border-border bg-surface p-4">
      <p className="mb-2 text-xs text-secondary">{label}</p>
      <p className={`font-mono text-2xl font-semibold ${valueClassName ?? 'text-text'}`}>{value}</p>
    </div>
  )
}

export default StatCard
