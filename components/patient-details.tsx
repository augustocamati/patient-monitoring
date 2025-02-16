"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart } from "@/components/ui/chart"

export function PatientDetails({ patientId }: { patientId: string }) {
  const [patient, setPatient] = useState<any>(null)

  useEffect(() => {
    // In a real app, you would fetch patient details based on the patientId
    setPatient({
      id: patientId,
      name: "John Doe",
      age: 45,
      condition: "Diabetes",
      lastCheckup: "2023-05-15",
    })
  }, [patientId])

  const heartRateData = [
    { name: "Day 1", value: 65 },
    { name: "Day 2", value: 68 },
    { name: "Day 3", value: 70 },
    { name: "Day 4", value: 72 },
    { name: "Day 5", value: 68 },
    { name: "Day 6", value: 70 },
    { name: "Day 7", value: 72 },
  ]

  if (!patient) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{patient.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Age: {patient.age}</p>
          <p>Condition: {patient.condition}</p>
          <p>Last Checkup: {patient.lastCheckup}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Heart Rate Trend (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart data={heartRateData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          <Button asChild>
            <Link href={`/patients/${patientId}/vital-signs`}>Input Vital Signs</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/patients/${patientId}/history`}>View Vital Signs History</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

