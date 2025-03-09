import Link from "next/link"

export default function MedicoDashboardPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar paciente..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-72 transition-all hover:shadow"
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">search</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total de Pacientes</p>
              <h3 className="text-3xl font-bold">156</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">people</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-500 flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
              +5
            </span>
            <span className="ml-2 text-gray-500">desde o último mês</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Leituras Hoje</p>
              <h3 className="text-3xl font-bold">432</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">monitoring</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-500 flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
              +12%
            </span>
            <span className="ml-2 text-gray-500">desde ontem</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Consultas Agendadas</p>
              <h3 className="text-3xl font-bold">28</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">calendar_today</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-600 flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
              -3
            </span>
            <span className="ml-2 text-gray-500">desde a semana passada</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Alertas Críticos</p>
              <h3 className="text-3xl font-bold">12</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">warning</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-500 flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
              -8%
            </span>
            <span className="ml-2 text-gray-500">desde ontem</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-6 hover:shadow-xl transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="font-bold text-xl">Pacientes em Monitoramento</h3>
          <Link
            href="/medico/pacientes/adicionar"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center transform hover:scale-105 whitespace-nowrap"
          >
            <span className="material-symbols-outlined mr-1">add</span>
            Adicionar Paciente
          </Link>
        </div>

        <div className="overflow-x-auto -mx-4 md:-mx-6">
          <div className="inline-block min-w-full align-middle px-4 md:px-6">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-50 text-gray-700">
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-l-xl">
                    Paciente
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Condição</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Última Leitura
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-r-xl">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt=""
                        />
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-gray-500 rounded-full border-2 border-white"></span>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">João Pereira</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-800">P001</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">Diabetes Tipo 2</span>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-800">Glicemia: 250 mg/dL</div>
                    <div className="text-xs text-gray-500">Há 15 minutos</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                      Crítico
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">visibility</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">chat</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">medication</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://randomuser.me/api/portraits/women/68.jpg"
                          alt=""
                        />
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">Maria Silva</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-800">P002</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">Hipertensão</span>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-800">P.A.: 150/95 mmHg</div>
                    <div className="text-xs text-gray-500">Há 30 minutos</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                      Atenção
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">visibility</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">chat</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">medication</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

