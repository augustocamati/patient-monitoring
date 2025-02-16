import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const patients = [
  { id: "P001", name: "João Silva", age: 45, condition: "Diabetes" },
  { id: "P002", name: "Maria Santos", age: 62, condition: "Hipertensão" },
  { id: "P003", name: "Carlos Oliveira", age: 53, condition: "Asma" },
]

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Lista de Pacientes</h1>
        <Button asChild>
          <Link href="/add-patient">Adicionar Paciente</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead>Condição</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.id}</TableCell>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.condition}</TableCell>
              <TableCell>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/patients/${patient.id}`}>Ver Detalhes</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

