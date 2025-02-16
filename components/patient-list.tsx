"use client"

import { useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export function PatientList() {
  const [patients] = useState([
    { id: "1", name: "John Doe", age: 45, condition: "Diabetes" },
    { id: "2", name: "Jane Smith", age: 52, condition: "Hypertension" },
    { id: "3", name: "Bob Johnson", age: 60, condition: "Heart Disease" },
  ])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Condition</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {patients.map((patient) => (
          <TableRow key={patient.id}>
            <TableCell>{patient.name}</TableCell>
            <TableCell>{patient.age}</TableCell>
            <TableCell>{patient.condition}</TableCell>
            <TableCell>
              <Button asChild>
                <Link href={`/patients/${patient.id}`}>View Details</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

