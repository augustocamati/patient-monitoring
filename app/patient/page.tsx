import Link from "next/link"

export default function PatientDashboardPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Meu Dashboard</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center">
            <span className="material-symbols-outlined mr-1">download</span>
            Exportar Dados
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Glicemia Atual</p>
              <h3 className="text-3xl font-bold">110 mg/dL</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">water_drop</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-500 flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
              -5%
            </span>
            <span className="ml-2 text-gray-500">desde ontem</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Pressão Arterial</p>
              <h3 className="text-3xl font-bold">120/80</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">favorite</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-500 flex items-center">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              Normal
            </span>
            <span className="ml-2 text-gray-500">última medição</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Próxima Consulta</p>
              <h3 className="text-2xl font-bold">15/06/2023</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">calendar_today</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-600 flex items-center">
              <span className="material-symbols-outlined text-sm">schedule</span>
              14:00
            </span>
            <span className="ml-2 text-gray-500">Dr. Maria Santos</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Medicações Hoje</p>
              <h3 className="text-3xl font-bold">3/4</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">medication</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-500 flex items-center">
              <span className="material-symbols-outlined text-sm">notifications</span>
              Próxima: 18:00
            </span>
            <span className="ml-2 text-gray-500">Insulina</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="font-bold text-xl">Minhas Leituras Recentes</h3>
            <Link
              href="/patient/readings"
              className="text-sm bg-blue-100 text-blue-700 px-3 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-sm mr-1">monitoring</span>
              Ver Histórico
            </Link>
          </div>

          <div className="space-y-4">
            <div className="flex items-center p-3 bg-white hover:bg-blue-50 rounded-xl transition-all transform hover:scale-[1.02] shadow">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <span className="material-symbols-outlined text-blue-600">water_drop</span>
              </div>
              <div className="flex-1">
                <p className="font-medium">Glicemia</p>
                <p className="text-sm text-gray-500">Hoje, 08:30 - 110 mg/dL</p>
              </div>
              <div className="text-blue-600 font-medium">Normal</div>
            </div>
            <div className="flex items-center p-3 bg-white hover:bg-blue-50 rounded-xl transition-all transform hover:scale-[1.02] shadow">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <span className="material-symbols-outlined text-blue-600">favorite</span>
              </div>
              <div className="flex-1">
                <p className="font-medium">Pressão Arterial</p>
                <p className="text-sm text-gray-500">Hoje, 08:35 - 120/80 mmHg</p>
              </div>
              <div className="text-blue-600 font-medium">Normal</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="font-bold text-xl">Medicações</h3>
            <Link
              href="/patient/medications"
              className="text-sm bg-blue-100 text-blue-700 px-3 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-sm mr-1">medication</span>
              Ver Todas
            </Link>
          </div>

          <div className="space-y-4">
            <div className="flex items-center p-3 bg-white hover:bg-blue-50 rounded-xl transition-all transform hover:scale-[1.02] shadow">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <span className="material-symbols-outlined text-blue-600">medication</span>
              </div>
              <div className="flex-1">
                <p className="font-medium">Metformina</p>
                <p className="text-sm text-gray-500">500mg - 2x ao dia</p>
              </div>
              <div className="text-blue-600 font-medium">✓ Tomado</div>
            </div>
            <div className="flex items-center p-3 bg-white hover:bg-blue-50 rounded-xl transition-all transform hover:scale-[1.02] shadow">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <span className="material-symbols-outlined text-blue-600">medication</span>
              </div>
              <div className="flex-1">
                <p className="font-medium">Insulina</p>
                <p className="text-sm text-gray-500">10 unidades - Antes das refeições</p>
              </div>
              <div className="text-blue-600 font-medium">✓ Tomado</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

