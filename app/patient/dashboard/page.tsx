import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PatientVitals } from "@/components/patient-vitals"
import { PatientVitalsChart } from "@/components/patient-vitals-chart"
import { PatientAlerts } from "@/components/patient-alerts"
import Link from "next/link"
import { Activity, PillIcon, Calendar, MessageSquare } from "lucide-react"

export default function PatientDashboardPage() {
  // Simular dados do paciente
  const patient = {
    id: "P001",
    name: "João Silva",
    age: 45,
    condition: "Diabetes",
    lastReading: {
      heartRate: 72,
      bloodPressure: "120/80",
      glucose: 110,
      temperature: 36.5,
      oxygenSaturation: 98,
      respiratoryRate: 16,
    },
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bem-vindo, {patient.name}</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leituras Recentes</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Link href="/patient/readings">
              <Button className="w-full">Ver Histórico</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medicações</CardTitle>
            <PillIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Link href="/patient/medications">
              <Button className="w-full">Gerenciar Medicações</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próxima Consulta</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Link href="/patient/appointments">
              <Button className="w-full">Ver Agendamento</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mensagens</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Link href="/patient/messages">
              <Button className="w-full">Ver Mensagens</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Seus Sinais Vitais Atuais</CardTitle>
        </CardHeader>
        <CardContent>
          <PatientVitals data={patient.lastReading} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tendências dos Sinais Vitais</CardTitle>
        </CardHeader>
        <CardContent>
          <PatientVitalsChart patientId={patient.id} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alertas Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <PatientAlerts patientId={patient.id} />
        </CardContent>
      </Card>
    </div>
  )
}

