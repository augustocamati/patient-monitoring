import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Configurações</h1>
      <Card>
        <CardHeader>
          <CardTitle>Informações Pessoais</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="seu-email@exemplo.com" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone">Telefone</Label>
              <Input type="tel" id="phone" placeholder="(00) 00000-0000" />
            </div>
            <Button>Salvar Alterações</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

