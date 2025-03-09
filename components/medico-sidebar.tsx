"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MedicoSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { href: "/", label: "Dashboard", icon: "dashboard" },
    { href: "/pacientes", label: "Pacientes", icon: "people" },
    { href: "/monitoramento", label: "Monitoramento", icon: "monitoring" },
    { href: "/medicacoes", label: "Medicações", icon: "medication" },
    { href: "/mensagens", label: "Mensagens", icon: "chat", badge: 3 },
    { href: "/consultas", label: "Consultas", icon: "calendar_today" },
    { href: "/analises", label: "Análises", icon: "analytics" },
  ]

  return (
    <aside className="w-64 bg-white shadow-lg p-4 h-[calc(100vh-72px)] sticky top-[72px] overflow-y-auto">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                  pathname === item.href
                    ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs ml-auto">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

