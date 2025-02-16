"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart } from "@/components/ui/chart"

export function VitalSignsHistory({ patientId }: { patientId: string }) {
  const [vitalSignsHistory, setVitalSignsHistory] = useState<any[]>([])

  useEffect(() => {
    // In a real app, you would fetch this data from your backend
    setVitalSignsHistory([
      { id: "1", date: "2023-05-15", heartRate: 72, bloodPressure: "120/80", glucoseLevel: 95 },
      { id: "2", date: "2023-05-10", heartRate: 75, bloodPressure: "118/78", glucoseLevel: 100 },
      { id: "3", date: "2023-05-05", heartRate: 70, bloodPressure: "122/82", glucoseLevel: 98 },
      { id: "4", date: "2023-04-30", heartRate: 73, bloodPressure: "121/79", glucoseLevel: 97 },
      { id: "5", date: "2023-04-25", heartRate: 71, bloodPressure: "119/81", glucoseLevel: 99 },
    ])
  }, [])

  const chartData = vitalSignsHistory.map((item) => ({
    name: item.date,
    "Heart Rate": item.heartRate,
    "Systolic BP": Number.parseInt(item.bloodPressure.split("/")[0]),
    "Glucose Level": item.glucoseLevel,
  }))

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Vital Signs History</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart data={chartData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Detailed History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Heart Rate</TableHead>
                <TableHead>Blood Pressure</TableHead>
                <TableHead>Glucose Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vitalSignsHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.heartRate} bpm</TableCell>
                  <TableCell>{item.bloodPressure} mmHg</TableCell>
                  <TableCell>{item.glucoseLevel} mg/dL</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

