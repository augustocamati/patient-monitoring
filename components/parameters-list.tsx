"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const initialParameters = [
  { id: 1, name: "Frequência Cardíaca", unit: "bpm", min: 60, max: 100 },
  { id: 2, name: "Pressão Arterial Sistólica", unit: "mmHg", min: 90, max: 120 },
  { id: 3, name: "Pressão Arterial Diastólica", unit: "mmHg", min: 60, max: 80 },
  { id: 4, name: "Glicose", unit: "mg/dL", min: 70, max: 140 },
  { id: 5, name: "Temperatura", unit: "°C", min: 36, max: 37.5 },
  { id: 6, name: "Saturação de Oxigênio", unit: "%", min: 95, max: 100 },
  { id: 7, name: "Frequência Respiratória", unit: "rpm", min: 12, max: 20 },
]

export function ParametersList() {
  const [parameters, setParameters] = useState(initialParameters)
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleEdit = (id: number) => {
    setEditingId(id)
  }

  const handleSave = (id: number) => {
    setEditingId(null)
    // Aqui você enviaria as alterações para o backend
  }

  const handleChange = (id: number, field: "min" | "max", value: string) => {
    setParameters(
      parameters.map((param) => (param.id === id ? { ...param, [field]: Number.parseFloat(value) } : param)),
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Parâmetro</TableHead>
          <TableHead>Unidade</TableHead>
          <TableHead>Mínimo</TableHead>
          <TableHead>Máximo</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {parameters.map((param) => (
          <TableRow key={param.id}>
            <TableCell>{param.name}</TableCell>
            <TableCell>{param.unit}</TableCell>
            <TableCell>
              {editingId === param.id ? (
                <Input
                  type="number"
                  value={param.min}
                  onChange={(e) => handleChange(param.id, "min", e.target.value)}
                  className="w-20"
                />
              ) : (
                param.min
              )}
            </TableCell>
            <TableCell>
              {editingId === param.id ? (
                <Input
                  type="number"
                  value={param.max}
                  onChange={(e) => handleChange(param.id, "max", e.target.value)}
                  className="w-20"
                />
              ) : (
                param.max
              )}
            </TableCell>
            <TableCell>
              {editingId === param.id ? (
                <Button onClick={() => handleSave(param.id)}>Salvar</Button>
              ) : (
                <Button variant="outline" onClick={() => handleEdit(param.id)}>
                  Editar
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

