"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function MedicoSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/medico", label: "Dashboard", icon: "dashboard" },
    { href: "/medico/pacientes", label: "Pacientes", icon: "people" },
    { href: "/medico/monitoramento", label: "Monitoramento", icon: "monitoring" },
    { href: "/medico/medicacoes", label: "Medicações", icon: "medication" },
    { href: "/medico/mensagens", label: "Mensagens", icon: "chat", badge: 3 },
    { href: "/medico/consultas", label: "Consultas", icon: "calendar_today" },
    { href: "/medico/analises", label: "Análises", icon: "analytics" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-20 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
      </button>

      {/* Sidebar */}
      <aside
        className={`
        bg-white shadow-lg p-4 
        md:w-64 md:sticky md:top-[72px] md:h-[calc(100vh-72px)] md:overflow-y-auto
        fixed inset-y-0 left-0 z-10 w-64 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
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
                  onClick={() => setIsOpen(false)}
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
    </>
  )
}

