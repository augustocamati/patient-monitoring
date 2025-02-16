import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ParametersList } from "@/components/parameters-list"

export default function ParametersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Parâmetros de Monitoramento</h1>
      <Card>
        <CardHeader>
          <CardTitle>Lista de Parâmetros</CardTitle>
        </CardHeader>
        <CardContent>
          <ParametersList />
        </CardContent>
      </Card>
    </div>
  )
}

