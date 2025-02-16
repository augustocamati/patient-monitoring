import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PatientVitals } from "@/components/patient-vitals"

export default function PatientDetailsPage({ params }: { params: { id: string } }) {
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
      <h1 className="text-3xl font-bold">Detalhes do Paciente</h1>
      <Card>
        <CardHeader>
          <CardTitle>{patient.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>ID: {patient.id}</p>
          <p>Idade: {patient.age}</p>
          <p>Condição: {patient.condition}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sinais Vitais</CardTitle>
        </CardHeader>
        <CardContent>
          <PatientVitals data={patient.lastReading} />
        </CardContent>
      </Card>
    </div>
  )
}

