"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function VitalSignsInput({ patientId }: { patientId: string }) {
  const router = useRouter()
  const [heartRate, setHeartRate] = useState("")
  const [bloodPressure, setBloodPressure] = useState("")
  const [glucoseLevel, setGlucoseLevel] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Submitting vital signs for patient", patientId)
    console.log("Heart Rate:", heartRate)
    console.log("Blood Pressure:", bloodPressure)
    console.log("Glucose Level:", glucoseLevel)

    // Navigate back to patient details
    router.push(`/patients/${patientId}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Vital Signs</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="heartRate">Heart Rate (bpm)</Label>
            <Input
              id="heartRate"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
              type="number"
              placeholder="Enter heart rate"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bloodPressure">Blood Pressure (mmHg)</Label>
            <Input
              id="bloodPressure"
              value={bloodPressure}
              onChange={(e) => setBloodPressure(e.target.value)}
              placeholder="Enter blood pressure (e.g., 120/80)"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="glucoseLevel">Glucose Level (mg/dL)</Label>
            <Input
              id="glucoseLevel"
              value={glucoseLevel}
              onChange={(e) => setGlucoseLevel(e.target.value)}
              type="number"
              placeholder="Enter glucose level"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  )
}

