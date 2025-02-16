import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertsSummary } from "@/components/alerts-summary"
import { AlertsList } from "@/components/alerts-list"
import { AlertsTimeline } from "@/components/alerts-timeline"

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Alertas</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-vibrant-1 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alertas Críticos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
          </CardContent>
        </Card>
        <Card className="bg-vibrant-2 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alertas Moderados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
          </CardContent>
        </Card>
        <Card className="bg-vibrant-3 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alertas Leves</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
          </CardContent>
        </Card>
        <Card className="bg-vibrant-4 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alertas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resumo de Alertas</CardTitle>
          </CardHeader>
          <CardContent>
            <AlertsSummary />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Linha do Tempo de Alertas</CardTitle>
          </CardHeader>
          <CardContent>
            <AlertsTimeline />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Lista de Alertas Ativos</CardTitle>
        </CardHeader>
        <CardContent>
          <AlertsList />
        </CardContent>
      </Card>
    </div>
  )
}

