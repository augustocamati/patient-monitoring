import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/patients"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/patients" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Pacientes
      </Link>
      <Link
        href="/add-patient"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/add-patient" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Adicionar Paciente
      </Link>
      <Link
        href="/parameters"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/parameters" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Parâmetros
      </Link>
      <Link
        href="/alerts"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/alerts" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Alertas
      </Link>
      <Link
        href="/medications"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/medications" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Medicações
      </Link>
      <Link
        href="/messages"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/messages" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Mensagens
      </Link>
      <Link
        href="/appointments"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/appointments" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Agendamentos
      </Link>
    </nav>
  )
}

