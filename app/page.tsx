import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">MonitorPaciente</h1>
          </div>
          <div className="flex space-x-2 md:space-x-4">
            <Link
              href="/medico"
              className="px-2 md:px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm md:text-base"
            >
              Acesso Médico
            </Link>
            <Link
              href="/patient"
              className="px-2 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
            >
              Portal do Paciente
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Sistema de Monitoramento de Pacientes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Uma plataforma completa para monitoramento remoto de pacientes com doenças crônicas, melhorando a
              qualidade de vida e reduzindo hospitalizações.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/medico"
                className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Acesso Médico
              </Link>
              <Link
                href="/patient"
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 border border-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors text-center"
              >
                Portal do Paciente
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Sistema de Monitoramento de Pacientes"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} MonitorPaciente. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

