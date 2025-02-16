import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const alerts = [
  { id: 1, patient: "João Silva", type: "Crítico", description: "Frequência cardíaca elevada", time: "10:30" },
  { id: 2, patient: "Maria Santos", type: "Moderado", description: "Pressão arterial acima do normal", time: "11:15" },
  { id: 3, patient: "Carlos Oliveira", type: "Leve", description: "Nível de glicose ligeiramente alto", time: "12:00" },
  { id: 4, patient: "Ana Rodrigues", type: "Crítico", description: "Saturação de oxigênio baixa", time: "12:45" },
  { id: 5, patient: "Pedro Costa", type: "Moderado", description: "Temperatura corporal elevada", time: "13:30" },
]

export function AlertsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Paciente</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Hora</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {alerts.map((alert) => (
          <TableRow key={alert.id}>
            <TableCell>{alert.patient}</TableCell>
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

