import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

const medications = [
  { id: 1, name: "Metformina", dosage: "500mg", frequency: "2x ao dia" },
  { id: 2, name: "Insulina", dosage: "10 unidades", frequency: "Antes das refeições" },
  { id: 3, name: "Atorvastatina", dosage: "20mg", frequency: "1x ao dia" },
]

export default function MedicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Medicações</h1>
        <Button asChild>
          <Link href="/add-medication">Adicionar Medicação</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Lista de Medicações</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Dosagem</TableHead>
                <TableHead>Frequência</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medications.map((med) => (
                <TableRow key={med.id}>
                  <TableCell>{med.name}</TableCell>
                  <TableCell>{med.dosage}</TableCell>
                  <TableCell>{med.frequency}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

