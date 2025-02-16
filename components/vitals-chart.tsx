"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const mockData = [
  { date: "2023-01-01", heartRate: 72, glucose: 110, systolic: 120, diastolic: 80 },
  { date: "2023-01-02", heartRate: 75, glucose: 115, systolic: 122, diastolic: 82 },
  { date: "2023-01-03", heartRate: 70, glucose: 108, systolic: 118, diastolic: 78 },
  { date: "2023-01-04", heartRate: 73, glucose: 112, systolic: 121, diastolic: 81 },
  { date: "2023-01-05", heartRate: 71, glucose: 109, systolic: 119, diastolic: 79 },
]

export function VitalsChart({ patientId }: { patientId: string }) {
  const [selectedVital, setSelectedVital] = useState("heartRate")

  // Aqui você buscaria os dados históricos do paciente com base no ID

  return (
    <div className="space-y-4">
      <Select onValueChange={setSelectedVital} defaultValue={selectedVital}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Selecione um sinal vital" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="heartRate">Frequência Cardíaca</SelectItem>
          <SelectItem value="glucose">Glicose</SelectItem>
          <SelectItem value="bloodPressure">Pressão Arterial</SelectItem>
        </SelectContent>
      </Select>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {selectedVital === "heartRate" && (
            <Line type="monotone" dataKey="heartRate" stroke="#8884d8" name="Frequência Cardíaca" />
          )}
          {selectedVital === "glucose" && <Line type="monotone" dataKey="glucose" stroke="#82ca9d" name="Glicose" />}
          {selectedVital === "bloodPressure" && (
            <>
              <Line type="monotone" dataKey="systolic" stroke="#8884d8" name="Sistólica" />
              <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" name="Diastólica" />
            </>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

