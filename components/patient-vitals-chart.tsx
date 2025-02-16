"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const mockData = [
  {
    date: "2023-06-01",
    heartRate: 72,
    glucose: 110,
    systolic: 120,
    diastolic: 80,
    temperature: 36.5,
    oxygenSaturation: 98,
    respiratoryRate: 16,
  },
  {
    date: "2023-06-02",
    heartRate: 75,
    glucose: 115,
    systolic: 122,
    diastolic: 82,
    temperature: 36.7,
    oxygenSaturation: 97,
    respiratoryRate: 18,
  },
  {
    date: "2023-06-03",
    heartRate: 70,
    glucose: 108,
    systolic: 118,
    diastolic: 78,
    temperature: 36.4,
    oxygenSaturation: 99,
    respiratoryRate: 15,
  },
  {
    date: "2023-06-04",
    heartRate: 73,
    glucose: 112,
    systolic: 121,
    diastolic: 81,
    temperature: 36.6,
    oxygenSaturation: 98,
    respiratoryRate: 17,
  },
  {
    date: "2023-06-05",
    heartRate: 71,
    glucose: 109,
    systolic: 119,
    diastolic: 79,
    temperature: 36.5,
    oxygenSaturation: 98,
    respiratoryRate: 16,
  },
]

const vitalSigns = [
  { key: "heartRate", name: "Frequência Cardíaca", color: "#FF6B6B", unit: "bpm" },
  { key: "glucose", name: "Glicose", color: "#4ECDC4", unit: "mg/dL" },
  { key: "systolic", name: "Pressão Sistólica", color: "#45B7D1", unit: "mmHg" },
  { key: "diastolic", name: "Pressão Diastólica", color: "#F9DB6D", unit: "mmHg" },
  { key: "temperature", name: "Temperatura", color: "#FF8C42", unit: "°C" },
  { key: "oxygenSaturation", name: "Saturação de Oxigênio", color: "#A3A1FB", unit: "%" },
  { key: "respiratoryRate", name: "Frequência Respiratória", color: "#98D7C2", unit: "rpm" },
]

export function PatientVitalsChart({ patientId }: { patientId: string }) {
  const [selectedVitals, setSelectedVitals] = useState(["heartRate", "glucose"])

  // Aqui você buscaria os dados históricos do paciente com base no ID

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {vitalSigns.map((vital) => (
          <button
            key={vital.key}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedVitals.includes(vital.key)
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
            onClick={() => {
              setSelectedVitals((prev) =>
                prev.includes(vital.key) ? prev.filter((v) => v !== vital.key) : [...prev, vital.key],
              )
            }}
          >
            {vital.name}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {selectedVitals.map((vitalKey) => {
            const vital = vitalSigns.find((v) => v.key === vitalKey)
            return (
              <Line
                key={vitalKey}
                type="monotone"
                dataKey={vitalKey}
                stroke={vital?.color}
                name={`${vital?.name} (${vital?.unit})`}
              />
            )
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

