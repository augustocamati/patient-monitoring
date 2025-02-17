"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, Activity, PillIcon, Calendar, MessageSquare, Settings } from "lucide-react"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/patient",
    icon: LayoutDashboard,
  },
  {
    title: "Histórico de Leituras",
    href: "/patient/readings",
    icon: Activity,
  },
  {
    title: "Medicações",
    href: "/patient/medications",
    icon: PillIcon,
  },
  {
    title: "Agendamento",
    href: "/patient/appointments",
    icon: Calendar,
  },
  {
    title: "Mensagens",
    href: "/patient/messages",
    icon: MessageSquare,
  },
  {
    title: "Configurações",
    href: "/patient/settings",
    icon: Settings,
  },
]

export function PatientSidebar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col w-64 bg-muted border-r h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Área do Paciente</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          {sidebarNavItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </nav>
  )
}

