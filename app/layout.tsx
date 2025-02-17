import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"



export const metadata: Metadata = {
  title: "Patient Monitoring System",
  description: "Monitor chronic disease patients efficiently",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="bg-background border-b">
              <div className="container flex h-16 items-center">
                <MainNav />
              </div>
            </header>
            <main className="flex-1 container py-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import { MainNav } from "@/components/main-nav"
