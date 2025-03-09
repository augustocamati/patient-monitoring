"use client"

import Link from "next/link"
import { useState } from "react"

export function MedicoHeader() {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        <h1 className="text-2xl font-bold">MonitorPaciente</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-blue-500 transition-all"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute -top-1 -right-1 bg-gray-100 text-blue-600 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
              5
            </span>
          </button>
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-lg z-10 p-2 transform scale-100 opacity-100 transition-all duration-300">
              <div className="p-2 border-b hover:bg-blue-50 transition-colors rounded-t-xl">
                <p className="font-semibold text-gray-800">Alerta de Glicose - Paciente ID 4578</p>
                <p className="text-sm text-gray-600">Há 5 minutos</p>
              </div>
              <div className="p-2 border-b hover:bg-blue-50 transition-colors">
                <p className="font-semibold text-gray-800">Medicação não registrada - Paciente ID 3421</p>
                <p className="text-sm text-gray-600">Há 30 minutos</p>
              </div>
              <div className="p-2 border-b hover:bg-blue-50 transition-colors">
                <p className="font-semibold text-gray-800">Pressão Arterial Elevada - Paciente ID 2198</p>
                <p className="text-sm text-gray-600">Há 45 minutos</p>
              </div>
              <div className="p-2 border-b hover:bg-blue-50 transition-colors">
                <p className="font-semibold text-gray-800">Nova mensagem do paciente - Maria Silva</p>
                <p className="text-sm text-gray-600">Há 1 hora</p>
              </div>
              <div className="p-2 hover:bg-blue-50 transition-colors rounded-b-xl">
                <p className="font-semibold text-gray-800">Solicitação de consulta - João Oliveira</p>
                <p className="text-sm text-gray-600">Há 2 horas</p>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center space-x-2 cursor-pointer">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Usuário"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></span>
            </div>
            <span className="font-medium">Dra. Carla Silva</span>
            <span className="material-symbols-outlined transition-transform">expand_more</span>
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg z-10 transform scale-100 opacity-100 transition-all duration-300">
              <Link
                href="/perfil"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 rounded-t-xl transition-colors"
              >
                <span className="material-symbols-outlined align-middle mr-2">person</span>
                Perfil
              </Link>
              <Link href="/configuracoes" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors">
                <span className="material-symbols-outlined align-middle mr-2">settings</span>
                Configurações
              </Link>
              <Link
                href="/logout"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 rounded-b-xl transition-colors"
              >
                <span className="material-symbols-outlined align-middle mr-2">logout</span>
                Sair
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

