"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const mockData = [
  {
    date: "01/06",
    heartRate: 72,
    glucose: 110,
    systolic: 120,
    diastolic: 80,
    temperature: 36.5,
    oxygenSaturation: 98,
    respiratoryRate: 16,
  },
  {
    date: "02/06",
    heartRate: 75,
    glucose: 115,
    systolic: 122,
    diastolic: 82,
    temperature: 36.7,
    oxygenSaturation: 97,
    respiratoryRate: 18,
  },
  {
    date: "03/06",
    heartRate: 70,
    glucose: 108,
    systolic: 118,
    diastolic: 78,
    temperature: 36.4,
    oxygenSaturation: 99,
    respiratoryRate: 15,
  },
  {
    date: "04/06",
    heartRate: 73,
    glucose: 112,
    systolic: 121,
    diastolic: 81,
    temperature: 36.6,
    oxygenSaturation: 98,
    respiratoryRate: 17,
  },
  {
    date: "05/06",
    heartRate: 71,
    glucose: 109,
    systolic: 119,
    diastolic: 79,
    temperature: 36.5,
    oxygenSaturation: 98,
    respiratoryRate: 16,
  },
  {
    date: "06/06",
    heartRate: 74,
    glucose: 111,
    systolic: 120,
    diastolic: 80,
    temperature: 36.6,
    oxygenSaturation: 98,
    respiratoryRate: 16,
  },
  {
    date: "07/06",
    heartRate: 72,
    glucose: 110,
    systolic: 120,
    diastolic: 80,
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
            className={`px-3 py-1 rounded-full text-sm transition-all ${
              selectedVitals.includes(vital.key)
                ? "bg-primary-600 text-white"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
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
      <div className="bg-white p-4 rounded-xl">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                border: "none",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            />
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
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              )
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

