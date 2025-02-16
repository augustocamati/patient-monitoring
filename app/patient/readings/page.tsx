import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PatientVitalsChart } from "@/components/patient-vitals-chart"

export default function ReadingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Histórico de Leituras</h1>
      <Card>
        <CardHeader>
          <CardTitle>Tendências dos Sinais Vitais</CardTitle>
        </CardHeader>
        <CardContent>
          <PatientVitalsChart patientId="P001" />
        </CardContent>
      </Card>
      {/* Adicione mais conteúdo conforme necessário */}
    </div>
  )
}

