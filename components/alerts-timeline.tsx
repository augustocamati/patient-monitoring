"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", criticos: 4, moderados: 7, leves: 10 },
  { name: "Fev", criticos: 3, moderados: 8, leves: 12 },
  { name: "Mar", criticos: 5, moderados: 9, leves: 15 },
  { name: "Abr", criticos: 7, moderados: 15, leves: 23 },
  { name: "Mai", criticos: 6, moderados: 11, leves: 18 },
  { name: "Jun", criticos: 4, moderados: 10, leves: 17 },
]

export function AlertsTimeline() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="criticos" stackId="1" stroke="#FF6B6B" fill="#FF6B6B" />
        <Area type="monotone" dataKey="moderados" stackId="1" stroke="#4ECDC4" fill="#4ECDC4" />
        <Area type="monotone" dataKey="leves" stackId="1" stroke="#45B7D1" fill="#45B7D1" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

