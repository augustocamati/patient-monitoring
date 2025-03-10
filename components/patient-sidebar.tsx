"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function PatientSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { href: "/patient", label: "Dashboard", icon: "dashboard" },
    { href: "/patient/readings", label: "Leituras", icon: "monitoring" },
    { href: "/patient/medications", label: "Medicações", icon: "medication" },
    { href: "/patient/appointments", label: "Consultas", icon: "calendar_today" },
    { href: "/patient/messages", label: "Mensagens", icon: "chat", badge: 1 },
    { href: "/patient/settings", label: "Configurações", icon: "settings" },
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

