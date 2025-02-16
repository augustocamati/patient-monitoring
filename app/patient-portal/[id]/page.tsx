import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PatientVitals } from "@/components/patient-vitals"
import { VitalsChart } from "@/components/vitals-chart"

export default function PatientPortalPage({ params }: { params: { id: string } }) {
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
      <h1 className="text-3xl font-bold">Meus Dados de Saúde</h1>
      <Card>
        <CardHeader>
          <CardTitle>Informações Pessoais</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Nome: {patient.name}</p>
          <p>Idade: {patient.age}</p>
          <p>Condição: {patient.condition}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sinais Vitais Atuais</CardTitle>
        </CardHeader>
        <CardContent>
          <PatientVitals data={patient.lastReading} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Sinais Vitais</CardTitle>
        </CardHeader>
        <CardContent>
          <VitalsChart patientId={patient.id} />
        </CardContent>
      </Card>
    </div>
  )
}

