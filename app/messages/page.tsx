import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

const messages = [
  { id: 1, patient: "João Silva", subject: "Dúvida sobre medicação", date: "2023-06-10" },
  { id: 2, patient: "Maria Santos", subject: "Solicitação de consulta", date: "2023-06-09" },
  { id: 3, patient: "Carlos Oliveira", subject: "Resultado de exame", date: "2023-06-08" },
]

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Mensagens</h1>
        <Button asChild>
          <Link href="/new-message">Nova Mensagem</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Caixa de Entrada</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Paciente</TableHead>
                <TableHead>Assunto</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>{message.patient}</TableCell>
                  <TableCell>{message.subject}</TableCell>
                  <TableCell>{message.date}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Ver Mensagem
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

