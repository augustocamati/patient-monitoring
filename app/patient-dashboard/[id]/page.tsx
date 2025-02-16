import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PatientVitals } from "@/components/patient-vitals"
import { PatientVitalsChart } from "@/components/patient-vitals-chart"
import { PatientAlerts } from "@/components/patient-alerts"

export default function PatientDashboardPage({ params }: { params: { id: string } }) {
  // Aqui você buscaria os dados do paciente com base no ID
  const patient = {
    id: params.id,
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
      <h1 className="text-3xl font-bold">Dashboard do Paciente: {patient.name}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Sinais Vitais Atuais</CardTitle>
          </CardHeader>
          <CardContent>
            <PatientVitals data={patient.lastReading} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Informações do Paciente</CardTitle>
          </CardHeader>
          <CardContent>
            <p>ID: {patient.id}</p>
            <p>Idade: {patient.age}</p>
            <p>Condição: {patient.condition}</p>
          </CardContent>
        </Card>
      </div>
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

