"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, PieChart } from "@/components/ui/chart"

export function DashboardPage() {
  const patientStatusData = [
    { name: "Critical", value: 12 },
    { name: "Stable", value: 108 },
    { name: "Under Observation", value: 30 },
  ]

  const vitalSignsData = [
    { name: "Heart Rate", value: 75 },
    { name: "Systolic BP", value: 120 },
    { name: "Glucose", value: 98 },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">150</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Critical Patients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Patient Status Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <PieChart data={patientStatusData} />
        </CardContent>
      </Card>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Average Vital Signs</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart data={vitalSignsData} />
        </CardContent>
      </Card>
    </div>
  )
}

