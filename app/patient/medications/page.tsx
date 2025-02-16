import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const medications = [
  { name: "Metformina", dosage: "500mg", frequency: "2x ao dia" },
  { name: "Insulina", dosage: "10 unidades", frequency: "Antes das refeições" },
  { name: "Atorvastatina", dosage: "20mg", frequency: "1x ao dia" },
]

export default function MedicationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Medicações</h1>
      <Card>
        <CardHeader>
          <CardTitle>Suas Medicações Atuais</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medicação</TableHead>
                <TableHead>Dosagem</TableHead>
                <TableHead>Frequência</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medications.map((med, index) => (
                <TableRow key={index}>
                  <TableCell>{med.name}</TableCell>
                  <TableCell>{med.dosage}</TableCell>
                  <TableCell>{med.frequency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

