import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const messages = [
  { date: "2023-06-10", sender: "Dr. Maria Santos", subject: "Resultados de exames" },
  { date: "2023-06-05", sender: "Enfermeira Ana", subject: "Lembrete de consulta" },
]

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Mensagens</h1>
      <Card>
        <CardHeader>
          <CardTitle>Caixa de Entrada</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Remetente</TableHead>
                <TableHead>Assunto</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message, index) => (
                <TableRow key={index}>
                  <TableCell>{message.date}</TableCell>
                  <TableCell>{message.sender}</TableCell>
                  <TableCell>{message.subject}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

