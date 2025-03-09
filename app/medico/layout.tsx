import type React from "react"
import { MedicoHeader } from "@/components/medico/header"
import { MedicoSidebar } from "@/components/medico/sidebar"

export default function MedicoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <MedicoHeader />
      <div className="flex flex-1 flex-col md:flex-row">
        <MedicoSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

