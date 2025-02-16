import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type VitalsData = {
  heartRate: number
  bloodPressure: string
  glucose: number
  temperature: number
  oxygenSaturation: number
  respiratoryRate: number
}

export function PatientVitals({ data }: { data: VitalsData }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Frequência Cardíaca</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.heartRate} bpm</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pressão Arterial</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.bloodPressure} mmHg</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Glicose</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.glucose} mg/dL</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Temperatura</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.temperature}°C</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Saturação de Oxigênio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.oxygenSaturation}%</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Frequência Respiratória</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.respiratoryRate} rpm</div>
        </CardContent>
      </Card>
    </div>
  )
}

