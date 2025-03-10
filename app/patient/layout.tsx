import type React from "react"
import { PatientHeader } from "@/components/patient/header"
import { PatientSidebar } from "@/components/patient/sidebar"

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PatientHeader />
      <div className="flex flex-1 flex-col md:flex-row">
        <PatientSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

