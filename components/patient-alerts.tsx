import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const mockAlerts = [
  { id: 1, type: "Crítico", description: "Frequência cardíaca elevada", time: "2023-06-05 10:30" },
  { id: 2, type: "Moderado", description: "Pressão arterial acima do normal", time: "2023-06-04 15:45" },
  { id: 3, type: "Leve", description: "Nível de glicose ligeiramente alto", time: "2023-06-03 08:20" },
]

export function PatientAlerts({ patientId }: { patientId: string }) {
  // Aqui você buscaria os alertas do paciente com base no ID

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tipo</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Data/Hora</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockAlerts.map((alert) => (
          <TableRow key={alert.id}>
            <TableCell>
              <Badge
                variant={alert.type === "Crítico" ? "destructive" : alert.type === "Moderado" ? "warning" : "default"}
              >
                {alert.type}
              </Badge>
            </TableCell>
            <TableCell>{alert.description}</TableCell>
            <TableCell>{alert.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

